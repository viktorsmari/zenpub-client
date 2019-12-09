import React from 'react';
import { storiesOf } from '@storybook/react';
import Collection, { CollectionSmall } from '.';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { Box } from 'rebass/styled-components';

let collection = {
  id: '1',
  icon: 'https://picsum.photos/id/342/150/150',
  name: 'awesome collection',
  summary:
    'More simply put, the difference is in the standards and documentation that accompanies the assets. With a guide on why and how to use them, design components because easier to use and clearer to discern.',
  totalResources: 12
};

storiesOf('Modules/Collection', module)
  .addDecorator(themeDeco())
  .add('Standard collection', () => (
    <div>
      <Box m={2} width="40%">
        <Collection
          id={collection.id}
          icon={collection.icon}
          name={collection.name}
          summary={collection.summary}
          totalResources={collection.totalResources}
        />
      </Box>
    </div>
  ));

storiesOf('Modules/Collection', module)
  .addDecorator(themeDeco())
  .add('Collection preview', () => (
    <div>
      <Box m={2} width="200px">
        <CollectionSmall icon={collection.icon} name={collection.name} />
      </Box>
    </div>
  ));
