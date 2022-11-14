import * as React from 'react';
import type { PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Here is the page!</h1>
    </main>
  );
};

export default IndexPage;

export { Head } from '../components/Head';
