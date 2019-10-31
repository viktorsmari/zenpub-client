import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export interface MoodleThemeInterface {
  // rebass
  buttons: {
    primary: {
      backgroundColor: string;
      color: string;
      borderRadius: string;
    };
    outline: {
      color: string;
      borderColor: string;
      backgroundColor: string;
      borderRadius: string;
    };
  };
  breakpoints: string[];
  fontSizes: number[];
  colors: {
    orange: string;
    black: string;
    gray: string;
    lightgray: string;
    lighter: string;
    darkgray: string;
  };
  space: number[];
  fontFamily: string;
}

export interface StyledThemeInterface {
  theme: MoodleThemeInterface;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<MoodleThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };

export default styled;
