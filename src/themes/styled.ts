import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export interface MoodleThemeInterface {
  breakpoints: string[];
  fontSizes: string[];
  colors: {
    primary: string;
    orange: string;
    black: string;
    gray: string;
    lightgray: string;
    lighter: string;
    darkgray: string;
  };
  radii: {
    default: number;
  };
  variants: {
    primary: {
      bg: string;
    };
  };
  buttons: {
    secondary: {
      fontWeight: string;
      borderRadius: string;
      p: number;
      px: number;
      fontSize: string;
      backgroundColor: string;
      cursor: string;
      textTransform: string;
      letterSpacing: string;
    };
    outline: {
      color: string;
      borderColor: string;
      backgroundColor: string;
    };
  };
  space: string[];
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
