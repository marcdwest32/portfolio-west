import React from 'react';
import App from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import { Auth0Provider } from '../react-auth0-spa';
import config from '../auth_config.json';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={'http://localhost:3000/callback'}
      //   onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

MyApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
