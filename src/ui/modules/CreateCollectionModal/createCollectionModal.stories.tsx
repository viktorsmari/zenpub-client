import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CreateCollectionModal from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { createCollectionSrv } from 'common/hooks/service/collection/create';
import { StorybookAsyncServiceMockProviderDeco } from 'common/util/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/CreateCollection', module)
  .addDecorator(themeDeco())
  .addDecorator(
    StorybookAsyncServiceMockProviderDeco(
      'Create Collection',
      createCollectionSrv,
      {
        id: '#231-123-123'
      }
    )
  )
  .add('Standard', () => (
    <CreateCollectionModal closeModal={action('close modal')} />
  ));
