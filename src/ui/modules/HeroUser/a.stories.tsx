// import { storiesOf } from '@storybook/react';
// import React from 'react';
// import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
// import { HeroUser, Props, Status } from '.';
// import { Box } from 'rebass';
// import { action } from '@storybook/addon-actions';

// storiesOf('Modules/HeroUser', module)
//   .addDecorator(themeDeco())
//   .add('Standard', () => {
//     const props: Props = {
//       status: Status.Loaded,
//       me: false,
//       user: {
//         isAdmin: true,
//         following: true,
//         image:
//           'https://pbs.twimg.com/profile_banners/764365/1574452341/1500x500',
//         displayUsername: 'dajbelshaw@team.moodle.net',
//         location: 'Morpeth, UK',
//         icon:
//           'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
//         name: '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
//         summary:
//           'Open Educational Thinkerer. Product Manager @MoodleNet & Co-op founder @WeAreOpenCoop. Aspiring Mountain Leader. Previously: @Mozilla @Jisc teacher',
//         toggleJoin: {
//           toggle: action('Unjoin !'),
//           isSubmitting: false
//         }
//       }
//     };
//     return (
//       <Box
//         width="600px"
//         sx={{ background: '#fff', borderRadius: '6px', margin: '0 auto' }}
//       >
//         <HeroUser {...props} />
//       </Box>
//     );
//   });
