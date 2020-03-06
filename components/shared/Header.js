import React, { Fragment } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

const Header = () => (
  <Fragment>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <Link href='/portfolios'>
      <a>Portfolios</a>
    </Link>
    <Link href='/blogs'>
      <a>Blogs</a>
    </Link>
    <Link href='/cv'>
      <a>CV</a>
    </Link>
  </Fragment>
);

export default Header;
