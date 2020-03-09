import React, { Fragment } from 'react';
import Link from 'next/link';
import { Link as NextLink } from '../../routes';
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
    <NextLink route='test' params={{ id: '2' }}>
      Test 2
    </NextLink>
    <NextLink route='/test/5'>Test 5</NextLink>
  </Fragment>
);

export default Header;
