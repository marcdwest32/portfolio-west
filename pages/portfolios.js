import React, { Fragment } from 'react';
import Link from 'next/link';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

const Portfolios = ({ posts }) => {
  console.log(posts);

  const renderPosts = posts => {
    return posts.map((post, i) => {
      return (
        <Fragment>
          <li key={i}>
            <Link as={`/portfolio/${post.id}`} href='/portfolio/[id]'>
              <a style={{ fontSize: '20px' }}>{post.title}</a>
            </Link>
          </li>
        </Fragment>
      );
    });
  };

  return (
    <BaseLayout>
      <h1>Posts</h1>
      <ul>{renderPosts(posts)}</ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    posts = response.data;
  } catch (err) {
    console.error(err);
  }
  return { posts: posts.splice(0, 10) };
};

export default Portfolios;
