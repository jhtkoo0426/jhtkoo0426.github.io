import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Styling
import "../css/app.scss";
import "../css/components.scss";
import "../css/layout.scss";
import LastUpdateDate from './PortfolioLastUpdateDetails';


// Get repo status
const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;


const Layout = ({ pageTitle, children }) => {
  const isIndexPage = pageTitle === "index";
  const [lastUpdateDate, setLastUpdateDate] = useState('');
  const [projectVersion, setProjectVersion] = useState('');

  const fetchLastUpdateDate = async (owner, repo, branch) => {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    try {
      // Get the branch information
      const branchResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`, {
        method: 'GET',
        headers: headers,
      });

      if (!branchResponse.ok) {
        throw new Error(`Error fetching branch information: ${branchResponse.statusText}`);
      }

      const branchData = await branchResponse.json();
      const commitSha = branchData.commit.sha;

      // Get the commit information
      const commitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${commitSha}`, {
        method: 'GET',
        headers: headers,
      });

      if (!commitResponse.ok) {
        throw new Error(`Error fetching commit information: ${commitResponse.statusText}`);
      }

      const commitData = await commitResponse.json();
      const lastUpdateDate = new Date(commitData.commit.author.date).toISOString().split('T')[0];

      setLastUpdateDate(lastUpdateDate);

      // Get the project version from package.json
      const contentsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`, {
        method: 'GET',
        headers: headers,
      });

      if (!contentsResponse.ok) {
        throw new Error(`Error fetching project contents: ${contentsResponse.statusText}`);
      }

      const contentsData = await contentsResponse.json();
      const packageJsonFile = contentsData.find(file => file.name === 'package.json');

      if (packageJsonFile) {
        const packageJsonUrl = packageJsonFile.download_url;
        const packageJsonResponse = await fetch(packageJsonUrl, {
          method: 'GET',
          headers: headers,
        });

        if (!packageJsonResponse.ok) {
          throw new Error(`Error fetching package.json: ${packageJsonResponse.statusText}`);
        }

        const packageJsonData = await packageJsonResponse.json();
        const projectVersion = packageJsonData.version;

        setProjectVersion(projectVersion);
      } else {
        setProjectVersion('Version not found');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (pageTitle === "index") {
      const owner = 'jhtkoo0426';
      const repo = 'jhtkoo0426.github.io';
      const branch = '2024-core-v1';
      fetchLastUpdateDate(owner, repo, branch);
    }
  }, [pageTitle]);

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
              {projectVersion ? projectVersion : 'Loading...'}
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
  )
}

export default Layout