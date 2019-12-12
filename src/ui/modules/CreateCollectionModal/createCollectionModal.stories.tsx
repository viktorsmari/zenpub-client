import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { basicCreateCollectionMutation } from 'common/data/mocks/gql/collection/CreateCollectionMutation';
import { apolloMockDeco, mockLink } from 'common/util/storybook/apolloDeco';
import { CreateCollectionMutationMutationOperation } from 'graphql/generated/createCollection.generated';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import CreateCollectionModal from '.';
import { GetCollectionQueryOperation } from 'graphql/generated/getCollection.generated';
import { basicGetCollectionQuery } from 'common/data/mocks/gql/collection/GetCollectionQuery';

const createCollectionMockLink = mockLink<
  CreateCollectionMutationMutationOperation
>('createCollectionMutation', () => ({ data: basicCreateCollectionMutation }));
const getCollectionMockLink = mockLink<GetCollectionQueryOperation>(
  'getCollection',
  () => ({ data: basicGetCollectionQuery })
);

storiesOf('Modules/CreateCollection', module)
  .addDecorator(themeDeco())
  .addDecorator(apolloMockDeco(createCollectionMockLink, getCollectionMockLink))
  .add('Standard', () => (
    <CreateCollectionModal closeModal={action('close modal')} communityId="#" />
  ));
