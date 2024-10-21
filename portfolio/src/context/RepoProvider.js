// A React context provider component that fetches data from a GitHub repository 
// and provides it to its children components via the RepoContext. The data 
// includes the last update date of the repository and the project's version 
// from the package.json file.
import React, { createContext, useState, useEffect } from 'react';


const RepoContext = createContext();


const RepoProvider = ({ children }) => {
  const [lastUpdateDate, setLastUpdateDate] = useState('');
  const [projectVersion, setProjectVersion] = useState('');
  const [latestTag, setLatestTag] = useState('');

  const fetchRepoData = async (owner, repo, branch) => {
    const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    try {
      // Fetch branch data for commit history
      const branchResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`, {
        method: 'GET',
        headers: headers,
      });

      if (!branchResponse.ok) {
        throw new Error(`Error fetching branch information: ${branchResponse.statusText}`);
      }

      const branchData = await branchResponse.json();
      const commitSha = branchData.commit.sha;

      // Fetch last commit data
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

      // Fetch project tag
      const tagsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/tags`, {
        method: 'GET',
        headers: headers,
      });

      if (!tagsResponse.ok) {
        throw new Error(`Error fetching tags: ${tagsResponse.statusText}`);
      }

      const tagsData = await tagsResponse.json();
      const latestTag = tagsData[0]?.name;
      setLatestTag(latestTag);

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
    <RepoContext.Provider value={{ lastUpdateDate, projectVersion, latestTag }}>
      {children}
    </RepoContext.Provider>
  );
};


export { RepoProvider, RepoContext };