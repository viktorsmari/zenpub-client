import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { apolloMockDeco, mockLink } from 'common/util/storybook/apolloDeco';
import { GetCommunityQueryQueryOperation } from 'graphql/generated/getCommunity.generated';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import EditCommunityModal from '.';
import { UpdateCommunityMutationMutationOperation } from 'graphql/generated/updateCommunity.generated';
import { basicUpdateCommunityMutation } from 'common/data/mocks/gql/community/UpdateCommunityMutation';
import { basicGetCommunityQuery } from 'common/data/mocks/gql/community/GetCommunityQuery';

const getCommunityMockLink = mockLink<GetCommunityQueryQueryOperation>(
  'getCommunityQuery',
  () => ({ data: basicGetCommunityQuery })
);
const updateCommunityMockLink = mockLink<
  UpdateCommunityMutationMutationOperation
>('updateCommunityMutation', () => ({ data: basicUpdateCommunityMutation }));

storiesOf('Modules/EditCommunity', module)
  .addDecorator(themeDeco())
  .addDecorator(apolloMockDeco(getCommunityMockLink, updateCommunityMockLink))
  .add('Standard', () => (
    <EditCommunityModal closeModal={action('close modal')} communityId="#" />
  ));
