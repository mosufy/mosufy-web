#!/bin/sh
#
# This script will build react bundle via webpack
#

ENVGROUP=${1}

# Define the environments to build
if [ -z ${ENVGROUP} ]
then
    echo "Bundling for all environments"
    environments=("production" "dev")
elif [ ${ENVGROUP} = "dev" ]
then
    echo "Bundling only for dev environment for testing"
    environments=("dev")
elif [ ${ENVGROUP} = "prod" ]
then
    echo "Bundling only for production-ready environment"
    environments=("production")
else
    echo "Bundling for all environments"
    environments=("production" "dev")
fi

# Loop through all the environment DOTenv
for i in "${environments[@]}"
do
    echo "Starting build for bundle ${i}"

    # Rename the built bundle to local
    if [ ${i} = "dev" ]
    then
        # Generate temp DOTenv file for build
        cp .env .env.build
    else
        # Generate temp DOTenv file for build
        cp ansible/inventories/${i}/config/DOTenv .env.build
    fi

    # Build the bundle
    node_modules/.bin/webpack --config=webpack.config.js --env.bundleEnv=${i}

    # Remove the temp env.build
    rm .env.build

    echo "Bundle created for ${i}"
done