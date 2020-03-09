import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { useRouter } from 'next/router';

const Portfolio = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <h1>Portfolio Page</h1>
      <ul>
        <h2>{router.query.id}</h2>
      </ul>
      {/* <h3>{router.query.body}</h3> */}
    </BaseLayout>
  );
};

export default Portfolio;
