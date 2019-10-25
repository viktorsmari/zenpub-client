import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import getApolloClient from './apollo/client';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createGlobalStyle } from './themes/styled';
import { ProvideContexts } from './_context/global';
import createStore from './_redux/store';

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
          font-family: 'Open Sans', sans-serif !important;
      }
      
      * {
        box-sizing: border-box;
      }

      body {
      background: #fbfbf9;
      overflow-y: scroll;
      overscroll-behavior-y: none;
      .ais-SearchBox {
        height: 40px;
        display: flex;
        flex-grow: 1;
        background: #fff;
        border-radius: 100px;
        margin: 0 8px;
        text-indent: 8px;
        margin-left: 16px;
        border: 1px solid #dadada
        input {
          height: 100%;
          border: none;
          background: #fff;
          margin: 0 !important; 
        }
      }
      .ais-InstantSearch__root { 
        display: flex;
      width: 100%; }
      }
  `;
  const store = createStore();
  const ApolloApp = () => (
    <ApolloProvider client={apolloClient}>
      <ProvideContexts store={store}>
        <Global />
        <App />
      </ProvideContexts>
    </ApolloProvider>
  );

  ReactDOM.render(<ApolloApp />, document.getElementById('root'));

  registerServiceWorker();
}
