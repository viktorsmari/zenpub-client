import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { basicGetCollectionQuery } from 'common/data/mocks/gql/collection/GetCollectionQuery';
import { basicUpdateCollectionMutation } from 'common/data/mocks/gql/collection/UpdateCollectionMutation';
import { apolloMockDeco, mockLink } from 'common/util/storybook/apolloDeco';
import { GetCollectionQueryOperation } from 'graphql/generated/getCollection.generated';
import { UpdateCollectionMutationMutationOperation } from 'graphql/generated/updateCollection.generated';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import EditCollectionModal from '.';

const getCollectionMockLink = mockLink<GetCollectionQueryOperation>(
  'getCollection',
  () => ({ data: basicGetCollectionQuery })
);
const updateCollectionMockLink = mockLink<
  UpdateCollectionMutationMutationOperation
>('updateCollectionMutation', () => ({ data: basicUpdateCollectionMutation }));

const apolloMock = apolloMockDeco(
  getCollectionMockLink,
  updateCollectionMockLink
);

storiesOf('Modules/EditCollection', module)
  .addDecorator(themeDeco())
  .add('Standard', () =>
    apolloMock(() => (
      <EditCollectionModal
        closeModal={action('close modal')}
        collectionId="#"
      />
    ))
  );
