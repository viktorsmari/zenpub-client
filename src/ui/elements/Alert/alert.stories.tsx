import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { Box } from 'rebass/styled-components';
storiesOf('Elements/Alert', module)
  .addDecorator(themeDeco())
  .add('Simple', () => (
    <div>
      <Box m={2}>
        <Alert variant="bad">Bad!</Alert>
      </Box>
      <Box m={2}>
        <Alert variant="good">Good!</Alert>
      </Box>
      <Box m={2}>
        <Alert variant="warning">Warning!</Alert>
      </Box>
      <Box m={2}>
        <Alert variant="info">Info!</Alert>
      </Box>
    </div>
  ));
