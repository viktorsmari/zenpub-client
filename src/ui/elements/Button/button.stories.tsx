import React from 'react';
import { storiesOf } from '@storybook/react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { Box, Button } from 'rebass/styled-components';
storiesOf('Elements/Button', module)
  .addDecorator(themeDeco())
  .add('Simple', () => (
    <div>
      <Box m={2}>
        <Button variant="primary">Primary</Button>
      </Box>
      <Box m={2}>
        <Button variant="outline">Outline</Button>
      </Box>
    </div>
  ));
