import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';

const Portfolio = () => {
  const router = useRouter();

  return (
    <BaseLayout>
      <h1>Portfolio Page</h1>
      <h2>{router.query.title}</h2>
    </BaseLayout>
  );
};

export default Portfolio;
