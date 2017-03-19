import React from 'react';

const SocialIcon = ({link, faName}) => {
  return (
    <li>
      <a href={link}>
        <i className={faName}/>
      </a>
    </li>
  )
};

export default SocialIcon;