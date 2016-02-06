#!/bin/sh

#
# software deployment script -- run via jenkins or from the command line
#
# usage: sudo /bin/sh deploy/deploy.sh <environment>
#

PWD=`pwd`
STARTDIR=$PWD

##################################################################################
# Get config
##################################################################################

if [ $# -ne 1 ]; then
    echo "usage: $0 environment"
    exit 1
fi
TARGET=$1

if [ ! -f deploy/$TARGET.conf ]; then
    echo "No config file available: deploy/${TARGET}.conf"
    exit 1
fi

cd $STARTDIR
. deploy/${TARGET}.conf
echo "Deploying to $TARGET"

##################################################################################
# Build server infrastructure directories
##################################################################################

#
# Set up deployment directories
#
echo "Setting up target directories $TARGETDIR"
mkdir -p $TARGETDIR
chown -R $WEBUSER $TARGETDIR
chgrp -R $WEBGROUP $TARGETDIR

##################################################################################
# Deploy web site software
##################################################################################

#
# Deploy web software files
#
cd $STARTDIR
echo "Syncing web files to $TARGETDIR"
rsync -vaz --delete . ${TARGETDIR} > /dev/null

#
# Deploy modified config files
#
echo "Deploying config files in ${STARTDIR}/deploy/${TARGET}"
cd ${STARTDIR}/deploy/${TARGET}
for file in *; do
    if [ -f "$file" ]; then
        TARGETFILE=`echo $file | sed -e 's;+;/;g' -e 's/DOT/\./g'`
        echo "Copying $file to ${TARGETDIR}/${TARGETFILE}"
        /bin/cp -rf $file ${TARGETDIR}/${TARGETFILE}
    fi
done

#
# Install root config files.
#
echo "Installing root configuration files"
cd ${STARTDIR}/deploy/${TARGET}/root
for file in *; do
    TARGETFILE=`echo $file | sed 's;+;/;g'`
    echo "Copying $file to /${TARGETFILE}"
    /bin/cp -rf $file /${TARGETFILE}
done

#
# Reset permissions
#
echo "Fixing permissions"
chgrp -R ${WEBGROUP} ${TARGETDIR}
chmod -R g+rwX ${TARGETDIR}
find ${TARGETDIR} -type d -exec chmod g+ws {} \;

#
# Reload nginx and php-fpm
#
echo "Reloading nginx and php-fpm"
service nginx reload > /dev/null 2>&1
service php-fpm reload > /dev/null 2>&1