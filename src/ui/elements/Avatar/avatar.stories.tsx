import React from 'react';
// import { storiesOf } from '@storybook/react';
import Avatar from '.';
// import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
// import { Box } from 'rebass/styled-components';

export default {
  title: 'Elements/Avatar',
  parameters: {
    componentSubtitle: 'An avatar blabla',
    component: Avatar
  }
};

/**
 * Only use me once per page for the preferred user action.
 */
export const Squared = () => (
  <Avatar src="https://picsum.photos/id/342/50/50" initials="AA" />
);

/**
 * Only use me once per page for the preferred user action.
 */
export const Rounded = () => (
  <Avatar variant="avatar" src="https://picsum.photos/id/32/50/50" />
);

/**
 * Only use me once per page for the preferred user action.
 */
export const WithoutPhoto = () => <Avatar initials="AA" />;

// storiesOf('Elements/Avatar', module)
//   .addDecorator(themeDeco())
//   .add('Simple', () => (
//     <div>
//       <Box m={2}>
//         <Avatar src="https://picsum.photos/id/342/50/50" initials="AA" />
//       </Box>
//       <Box m={2}>
//         <Avatar variant="avatar" src="https://picsum.photos/id/32/50/50" />
//       </Box>
//       <Box m={2}>
//         <Avatar initials="AA" />
//       </Box>
//     </div>
//   ));
