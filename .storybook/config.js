import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';

import 'storybook-chromatic';

addParameters({
  options: {
    showRoots: true,
  }
});

addDecorator(withA11y);
addDecorator(themeDeco());


// automatically import all files ending in *.stories.tsx
// const req = [
//   require.context('../src/ui/', true, /\.stories\.tsx$/),
//   require.context('../src/ui/', true, /\.stories\.mdx$/),
// ];

// function loadStories() {
//   req.keys().forEach(req);
// }

configure(
  [
    require.context('../src/ui', true, /\.stories\.mdx$/),
    require.context('../src/ui', true, /\.stories\.tsx$/),
  ],
  module
);

// configure(loadStories, module);