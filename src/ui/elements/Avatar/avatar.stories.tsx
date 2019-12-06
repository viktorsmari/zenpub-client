import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '.';
import { themeDeco } from '../../styleguide/storiesThemeDecorator';
import { Box } from 'rebass/styled-components';
storiesOf('Elements/Avatar', module)
  .addDecorator(themeDeco())
  .add('Simple', () => (
    <div>
      <Box m={2}>
        <Avatar src="https://picsum.photos/id/342/50/50" initials="AA" />
      </Box>
      <Box m={2}>
        <Avatar variant="avatar" src="https://picsum.photos/id/32/50/50" />
      </Box>
      <Box m={2}>
        <Avatar initials="AA" />
      </Box>
    </div>
  ));
