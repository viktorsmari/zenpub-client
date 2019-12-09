import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CreateCommunityModal from '.';
import { themeDeco } from '../../styleguide/storiesThemeDecorator';
import { createCommunitySrv } from '../../../common/hooks/createCommunity';
import { asyncSubmitProviderDeco } from '../../../common/ctx-mock/submitProviderActionDeco';

storiesOf('Modules/CreateCommunity', module)
  .addDecorator(themeDeco())
  .addDecorator(
    asyncSubmitProviderDeco('Create Community', createCommunitySrv, {
      id: '#231-123-123'
    })
  )
  .add('Standard', () => (
    <CreateCommunityModal closeModal={action('close modal')} />
  ));
