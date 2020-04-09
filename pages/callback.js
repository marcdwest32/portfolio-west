import React, { useEffect, useContext } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import { useAuth0 } from '../react-auth0-spa';

const Callback = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <BaseLayout>
      <BasePage>
        <img src={user.picture} alt='Profile' />

        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </BasePage>
    </BaseLayout>
  );
};

export default Callback;
