import React, { Fragment, useEffect, useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

const Index = () => {
  useEffect(() => {
    console.log('used effect');
  });

  const [title, setTitle] = useState('index page title');

  return (
    <BaseLayout>
      <h1>Index Page</h1>
      <h2>{title}</h2>
      <button onClick={() => setTitle('updated index page title')}>
        {' '}
        Change Title{' '}
      </button>
    </BaseLayout>
  );
};

export default Index;
