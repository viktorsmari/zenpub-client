import React from 'react';
import { MoodleThemeInterface } from '../themes/styled';
import ThemeProvider from '../styleguide/Wrapper';

export const themeDeco = (theme?: MoodleThemeInterface) => storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
