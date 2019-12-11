import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { apolloMockDeco, mockLink } from 'common/util/storybook/apolloDeco';
import { CreateCommunityMutationMutationOperation } from 'graphql/generated/createCommunity.generated';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import CreateCommunityModal from '.';
import { basicCreateCommunityMutation } from 'common/data/mocks/gql/community/CreateCommunityMutation';

const createCommunityMockLink = mockLink<
  CreateCommunityMutationMutationOperation
>('createCommunityMutation', () => ({ data: basicCreateCommunityMutation }));

storiesOf('Modules/CreateCommunity', module)
  .addDecorator(themeDeco())
  .addDecorator(apolloMockDeco(createCommunityMockLink))
  .add('Standard', () => (
    <CreateCommunityModal closeModal={action('close modal')} />
  ));
