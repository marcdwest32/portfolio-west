import React, { Fragment } from 'react';
import Header from '../shared/Header';

const BaseLayout = props => (
  <Fragment>
    <Header />
    {props.children}
  </Fragment>
);

export default BaseLayout;
