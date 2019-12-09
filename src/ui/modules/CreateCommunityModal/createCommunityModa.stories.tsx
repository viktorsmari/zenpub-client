import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CreateCommunityModal from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { createCommunitySrv } from 'common/hooks/service/community/create';
import { StorybookAsyncServiceMockProviderDeco } from 'common/util/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/CreateCommunity', module)
  .addDecorator(themeDeco())
  .addDecorator(
    StorybookAsyncServiceMockProviderDeco(
      'Create Community',
      createCommunitySrv,
      {
        id: '#231-123-123'
      }
    )
  )
  .add('Standard', () => (
    <CreateCommunityModal closeModal={action('close modal')} />
  ));
