import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EditCommunityModal from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { editCommunitySrv } from 'common/hooks/service/community/edit';
import { StorybookAsyncServiceMockProviderDeco } from 'common/util/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/EditCommunity', module)
  .addDecorator(themeDeco())
  .addDecorator(
    StorybookAsyncServiceMockProviderDeco('Edit Community', editCommunitySrv, {
      id: '#231-123-123'
    })
  )
  .add('Standard', () => (
    <EditCommunityModal closeModal={action('close modal')} />
  ));
