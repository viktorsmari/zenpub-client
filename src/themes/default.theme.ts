import { MoodleThemeInterface } from './styled';

const themeLight: MoodleThemeInterface = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px', '64px'],
  colors: {
    primary: '#f98012',
    orange: '#f98012',
    black: '#000000e0',
    darkgray: '#3C3C3C',
    gray: 'rgba(0,0,0,.4)',
    lightgray: 'rgba(0,0,0,.1)',
    lighter: '#F5F6F7'
  },
  radii: {
    default: 12
  },
  variants: {
    primary: {
      bg: '#000'
    }
  },
  buttons: {
    secondary: {
      // backgroundColor: '#f98012',
      // color: '#fff',
      fontWeight: '600',
      p: 3,
      px: 4,
      backgroundColor: 'orange',
      borderRadius: '4px',
      fontSize: '12px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    outline: {
      color: '#000000e0',
      borderColor: '#f98012',
      backgroundColor: 'transparent'
      // borderRadius: '3px'
    }
  },
  space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  fontFamily: '"Open Sans", sans-serif'
};

export const theme = themeLight;
