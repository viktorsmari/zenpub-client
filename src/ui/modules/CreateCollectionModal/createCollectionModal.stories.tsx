import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { basicCreateCollectionMutation } from 'common/data/mocks/gql/collection/CreateCollectionMutation';
import { apolloMockDeco, mockLink } from 'common/util/storybook/apolloDeco';
import { CreateCollectionMutationMutationOperation } from 'graphql/createCollection.generated';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import CreateCollectionModal from '.';

const createCollectionMockLink = mockLink<
  CreateCollectionMutationMutationOperation
>('createCollectionMutation', () => ({ data: basicCreateCollectionMutation }));

const apolloMock = apolloMockDeco(createCollectionMockLink);
storiesOf('Modules/CreateCollection', module)
  .addDecorator(themeDeco())
  .add('Standard', () =>
    apolloMock(() => (
      <CreateCollectionModal
        closeModal={action('close modal')}
        communityId="#"
      />
    ))
  );
