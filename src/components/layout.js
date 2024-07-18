import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { RepoContext } from '../context/RepoProvider';

// Styling
import "../css/app.scss";
import "../css/components.scss";
import "../css/layout.scss";

const Layout = ({ pageTitle, children }) => {
  useEffect(() => {
    console.log('GitHub Access Token:', process.env.GITHUB_PERSONAL_ACCESS_TOKEN);
  }, []);
  
  const context = useContext(RepoContext);
  console.log(context)
  const lastUpdateDate = context?.lastUpdateDate || 'Loading...';
  const projectVersion = context?.projectVersion || 'Loading...';
  const isIndexPage = pageTitle === "index";

  return (
    <>
      {!isIndexPage &&
        <nav className='topnav'>
          <Link to='/'>Justin Koo</Link>
          <Link to='/'><div className='close-button'></div></Link>
        </nav>
      }
      <div className='wrapper'>
        <main className='wrapper-content'>
          {children}
        </main>
        <nav className="botnav">
          <div className='version-status'>
            <span className='version'>
              {projectVersion ? "v" + projectVersion : 'Loading...'}
            </span>
            <span className='last-update'>
              Last Updated {lastUpdateDate ? lastUpdateDate : 'Loading...'}
            </span>
          </div>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/koo-justin/' className='social-link' target='_blank' rel='noreferrer'>
              <span>LinkedIn</span>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </a>
            <a href='https://github.com/jhtkoo0426/' className='social-link' target='_blank' rel='noreferrer'>
              <span>GitHub</span>
              <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </a>
          </div>
          <div className='email'>
            <p>Let's build something together.</p>
            <p>justinkoo426@gmail.com</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Layout;
