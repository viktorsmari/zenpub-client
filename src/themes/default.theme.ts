import { MoodleThemeInterface } from './styled';

const themeLight: MoodleThemeInterface = {
  buttons: {
    primary: {
      backgroundColor: '#f98012',
      color: '#fff',
      borderRadius: '3px'
    },
    outline: {
      color: '#000000e0',
      borderColor: '#f98012',
      backgroundColor: 'transparent',
      borderRadius: '3px'
    }
  },
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    orange: '#f98012',
    black: '#000000e0',
    darkgray: '#3C3C3C',
    gray: 'rgba(0,0,0,.4)',
    lightgray: 'rgba(0,0,0,.1)',
    lighter: '#F5F6F7'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontFamily: '"Open Sans", sans-serif'
};

export const theme = themeLight;
