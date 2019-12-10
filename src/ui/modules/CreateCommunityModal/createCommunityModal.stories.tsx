import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { ApolloLink, FetchResult, Observable } from 'apollo-link';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import CreateCommunityModal from '.';

const cli = new ApolloClient({
  cache: new InMemoryCache(),
  link: new ApolloLink((op, next) => {
    const res: FetchResult /* <CreateCommunityMutationMutation> */ = {
      data: { createCommunity: { id: '11' } }
    };

    return Observable.from([res]);
  })
});

storiesOf('Modules/CreateCommunity', module)
  .addDecorator(themeDeco())
  .add('Standard', () => (
    <ApolloProvider client={cli}>
      <CreateCommunityModal closeModal={action('close modal')} />
    </ApolloProvider>
  ));
