import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Footer = ({ lastUpdateDate, projectVersion }) => (
    <nav className="botnav">
      <div className='version-status'>
        <span className='version'>
          v{projectVersion || 'Loading...'}
        </span>
        <span className='last-update'>
          Last Updated {lastUpdateDate || 'Loading...'}
        </span>
      </div>
      <div className='socials'>
        <a href='https://www.linkedin.com/' className='social-link' target='_blank' rel='noreferrer'>
          <span>LinkedIn</span>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
        <a href='https://github.com/' className='social-link' target='_blank' rel='noreferrer'>
          <span>GitHub</span>
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
      <div className='email'>
        <p>Let's build something together.</p>
        <p>gmail</p>
      </div>
    </nav>
);


export default Footer;