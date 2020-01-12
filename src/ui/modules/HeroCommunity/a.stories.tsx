import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { HeroCommunity, Props } from '.';

storiesOf('Modules/HeroCommunity', module)
  .addDecorator(themeDeco())
  .add('Standard', () => {
    const props: Props = {
      community: {
        canModify: true,
        following: true,
        icon: 'https://picsum.photos/800/300',
        name: 'Community nino',
        preferredUsername: 'ninos',
        summary: '',
        totalMembers: 193,
        toggleJoin: {
          toggle: action('Unjoin !'),
          isSubmitting: false
        },
        EditCommunityPanel: ({ done }) => (
          <img
            onClick={done}
            src="https://via.placeholder.com/400x200.png?text=An editing panel"
          />
        )
      }
    };
    return <HeroCommunity {...props} />;
  });
