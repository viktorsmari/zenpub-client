import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EditResourceModal from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { editResourceSrv } from 'common/hooks/service/resource/edit';
import { StorybookAsyncServiceMockProviderDeco } from 'common/util/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/EditResource', module)
  .addDecorator(themeDeco())
  .addDecorator(
    StorybookAsyncServiceMockProviderDeco('Edit Resource', editResourceSrv, {
      id: '#231-123-123'
    })
  )
  .add('Standard', () => (
    <EditResourceModal closeModal={action('close modal')} />
  ));
