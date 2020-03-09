import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import axios from 'axios';

const Test = ({ testId }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <h2>Test Page #{testId}</h2>
    </BaseLayout>
  );
};

Test.getInitialProps = async ({ query }) => {
  const testId = query.id;
  return { testId };
};

export default Test;
