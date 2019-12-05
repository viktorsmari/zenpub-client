import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '.';
import { themeDeco } from '../../styleguide/storiesThemeDecorator';

storiesOf('Elements/Alert', module)
  .addDecorator(themeDeco())
  .add('Simple', () => <Alert>Hello Modal</Alert>);
