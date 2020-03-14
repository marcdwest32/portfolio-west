import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/BasePage';
import { useRouter } from 'next/router';
import axios from 'axios';

const Portfolio = ({ post }) => {
  const router = useRouter();
  console.log(post);

  return (
    <BaseLayout>
      <BasePage>
        <h1>{post.title}</h1>
        <ul>
          <li>
            <h2>{post.body}</h2>
            <h3>{router.query.id}</h3>
          </li>
        </ul>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async context => {
  let post = {};
  const postId = context.query.id;
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    post = response.data;
  } catch (err) {
    console.error(err);
  }
  return { post };
};

export default Portfolio;
