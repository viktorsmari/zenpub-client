import React from 'react';
import { storiesOf } from '@storybook/react';
import { CommunityPreview, CommunitySmall } from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { Box, Flex } from 'rebass/styled-components';

let community = {
  id: '1',
  icon: 'https://picsum.photos/id/32/150/150',
  name: 'awesome community',
  summary:
    'More simply put, the difference is in the standards and documentation that accompanies the assets. With a guide on why and how to use them, design components because easier to use and clearer to discern.',
  followersCount: 12,
  collectionsCount: 3
};

storiesOf('Modules/Community', module)
  .addDecorator(themeDeco())
  .add('Standard Community', () => (
    <Flex>
      <CommunityPreview
        icon={community.icon}
        name={community.name}
        summary={community.summary}
        followersCount={community.followersCount}
        collectionsCount={community.collectionsCount}
      />

      <CommunityPreview
        icon={community.icon}
        name={community.name}
        summary={community.summary}
        followersCount={community.followersCount}
        collectionsCount={community.collectionsCount}
      />

      <CommunityPreview
        icon={community.icon}
        name={community.name}
        summary={community.summary}
        followersCount={community.followersCount}
        collectionsCount={community.collectionsCount}
      />
    </Flex>
  ));

storiesOf('Modules/Community', module)
  .addDecorator(themeDeco())
  .add('Community preview', () => (
    <div>
      <Box m={2}>
        <CommunitySmall icon={community.icon} name={community.name} />
      </Box>
    </div>
  ));
