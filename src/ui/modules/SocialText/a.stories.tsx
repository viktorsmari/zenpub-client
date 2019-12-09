import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SocialText from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';

storiesOf('Modules/SocialText', module)
  .addDecorator(themeDeco())
  .add('Simple', () => {
    const submit = action('submit');
    return <SocialText submit={submit} />;
  });
