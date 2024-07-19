// A React context provider component that fetches data from a GitHub repository 
// and provides it to its children components via the RepoContext. The data 
// includes the last update date of the repository and the project's version 
// from the package.json file.
import React, { createContext, useState, useEffect } from 'react';


const RepoContext = createContext();


const RepoProvider = ({ children }) => {
  const [lastUpdateDate, setLastUpdateDate] = useState('');
  const [projectVersion, setProjectVersion] = useState('');

  const fetchRepoData = async (owner, repo, branch) => {
    const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    try {
      const branchResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`, {
        method: 'GET',
        headers: headers,
      });

      if (!branchResponse.ok) {
        throw new Error(`Error fetching branch information: ${branchResponse.statusText}`);
      }

      const branchData = await branchResponse.json();
      const commitSha = branchData.commit.sha;

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

      const contentsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents?ref=${branch}`, {
        method: 'GET',
        headers: headers,
      });      

      if (!contentsResponse.ok) {
        throw new Error(`Error fetching directory contents: ${contentsResponse.statusText}`);
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
    const owner = 'jhtkoo0426';
    const repo = 'jhtkoo0426.github.io';
    const branch = '2024-core-v1';
    fetchRepoData(owner, repo, branch);
  }, []);  

  return (
    <RepoContext.Provider value={{ lastUpdateDate, projectVersion }}>
      {children}
    </RepoContext.Provider>
  );
};


export { RepoProvider, RepoContext };