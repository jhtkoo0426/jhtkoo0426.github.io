import React from 'react';
import { RepoProvider } from './src/context/RepoProvider';

export const wrapRootElement = ({ element }) => (
  <RepoProvider>
    {element}
  </RepoProvider>
);