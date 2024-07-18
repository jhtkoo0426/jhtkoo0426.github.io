// // Fetches the latest update date from the jhtkoo0426.github.io repository.
// import React, { useState, useEffect } from 'react';

// const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;


// const LastUpdateDate = ({ owner, repo, branch }) => {
//   const [lastUpdateDate, setLastUpdateDate] = useState('');

//   useEffect(() => {
//     const fetchLastUpdateDate = async () => {
//       const headers = {
//         'Accept': 'application/vnd.github.v3+json',
//       };

//       if (accessToken) {
//         headers['Authorization'] = `Bearer ${accessToken}`;
//       }

//       try {
//         // Get the branch information
//         const branchResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`, {
//           method: 'GET',
//           headers: headers,
//         });

//         if (!branchResponse.ok) {
//           throw new Error(`Error fetching branch information: ${branchResponse.statusText}`);
//         }

//         const branchData = await branchResponse.json();
//         const commitSha = branchData.commit.sha;

//         // Get the commit information
//         const commitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${commitSha}`, {
//           method: 'GET',
//           headers: headers,
//         });

//         if (!commitResponse.ok) {
//           throw new Error(`Error fetching commit information: ${commitResponse.statusText}`);
//         }

//         const commitData = await commitResponse.json();
//         const lastUpdateDate = new Date(commitData.commit.author.date).toISOString().split('T')[0];

//         setLastUpdateDate(lastUpdateDate);
//       } catch (error) {
//         console.error(`Error: ${error.message}`);
//       }
//     };

//     fetchLastUpdateDate();
//   }, [owner, repo, branch]);

//   return lastUpdateDate ? lastUpdateDate : 'Loading...';
// };


// export default LastUpdateDate;