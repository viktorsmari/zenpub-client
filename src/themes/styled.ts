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

// MoodleNet theme interface, defines the shape of a theme definition
export interface ThemeInterface {
  // There is a "styles" parent property on the interface because
  // we are using Zendesk Garden which provides its own ThemeProvider,
  // which places the consumer theme at `props.theme.styles` instead
  // of the styled-components' usual `props.theme`.
  // https://garden.zendesk.com/react-components/theming/#themeprovider
  styles: MoodleThemeInterface;
}

export interface StyledThemeInterface {
  theme: ThemeInterface;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };

export default styled;
