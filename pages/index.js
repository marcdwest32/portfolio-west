import React, { Fragment, useEffect, useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

const Index = ({ userData }) => {
  useEffect(() => {
    console.log('used effect');
  });

  const [title, setTitle] = useState('index page title');

  return (
    <BaseLayout>
      <h1>Index Page</h1>
      <h2>{title}</h2>
      {/* <h2>{userData.title}</h2> */}
      <button onClick={() => setTitle('updated index page title')}>
        {' '}
        Change Title{' '}
      </button>
    </BaseLayout>
  );
};

Index.getInitialProps = async () => {
  let userData = {};
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    userData = response.data;
  } catch (err) {
    console.error(err);
  }
  return { initialData: [1, 2, 3, 4], userData };
};

export default Index;
