import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EditCollectionModal from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { editCollectionSrv } from 'common/hooks/service/collection/edit';
import { StorybookAsyncServiceMockProviderDeco } from 'common/util/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/EditCollection', module)
  .addDecorator(themeDeco())
  .addDecorator(
    StorybookAsyncServiceMockProviderDeco(
      'Edit Collection',
      editCollectionSrv,
      {
        id: '#231-123-123'
      }
    )
  )
  .add('Standard', () => (
    <EditCollectionModal closeModal={action('close modal')} />
  ));
