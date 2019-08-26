import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import getApolloClient from './apollo/client';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App/App';
import { createGlobalStyle } from './themes/styled';

run();

async function run() {
  const apolloClient = await getApolloClient();

  const Global = createGlobalStyle`
      body, html {
          border: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
      }
      
      * {
        box-sizing: border-box;
      }

      body {
      // background: rgb(245,246,247);
      overflow-y: scroll;
      overscroll-behavior-y: none;
      .ais-SearchBox {
        height: 40px;
        display: flex;
        flex-grow: 1;
        background: #f9f0e8;
        border-radius: 100px;
        margin: 0 8px;
        text-indent: 8px;
        input {
          height: 100%;
          border: none;
          background: #f9f0e8;
          margin: 0 !important; 
        }
      }
      .ais-InstantSearch__root { 
        display: flex;
      width: 100%; }
      }
  `;

  const ApolloApp = () => (
    <ApolloProvider client={apolloClient}>
      <Global />
      <App />
    </ApolloProvider>
  );

  ReactDOM.render(<ApolloApp />, document.getElementById('root'));

  registerServiceWorker();
}
