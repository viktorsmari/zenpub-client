import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CreateCollectionModal from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { createCommunitySrv } from 'common/hooks/service/community/create';
import { StorybookAsyncServiceMockProviderDeco } from 'common/util/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/CreateCollection', module)
  .addDecorator(themeDeco())
  .addDecorator(
    StorybookAsyncServiceMockProviderDeco(
      'Create Collection',
      createCommunitySrv,
      {
        id: '#231-123-123'
      }
    )
  )
  .add('Standard', () => (
    <CreateCollectionModal closeModal={action('close modal')} />
  ));
