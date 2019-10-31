import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import getApolloClient from './apollo/client';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createGlobalStyle } from 'styled-components';
import { ProvideContexts } from './context/global';
import createStore from './redux/store';
import { createLocalSessionKVStorage } from './util/keyvaluestore/localSessionStorage';
import { integrateSessionApolloRedux } from './integrations/Session-Apollo-Redux';

run();
async function run() {
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
  const KVlocalStorageCreate = createLocalSessionKVStorage('local');
  const store = createStore({ createLocalKVStore: KVlocalStorageCreate });
  const initialState = store.getState();
  const authToken =
    (initialState.session.user && initialState.session.user.token) || undefined;
  const apolloClient = await getApolloClient({ authToken });
  integrateSessionApolloRedux(apolloClient.opInterceptor, store);
  const ApolloApp = () => (
    <ApolloProvider client={apolloClient.client}>
      <ProvideContexts
        store={store}
        apolloInterceptor={apolloClient.opInterceptor}
      >
        <Global />
        <App />
      </ProvideContexts>
    </ApolloProvider>
  );

  ReactDOM.render(<ApolloApp />, document.getElementById('root'));

  registerServiceWorker();
}
