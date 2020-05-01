import { MoodleThemeInterface } from './styled';
import { colors, fonts } from 'mn-constants';

// Global style variables
export const theme: MoodleThemeInterface = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '28px', '32px', '48px'],
  colors: {
    // Main
    app: colors.app,
    appInverse: colors.appInverse,
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,

    // Status
    positive: colors.positive,
    negative: colors.negative,
    warning: colors.warning,

    // Monochrome
    lightest: colors.lightest,
    lighter: colors.lighter,
    light: colors.light,
    mediumlight: colors.mediumlight,
    medium: colors.medium,
    mediumdark: colors.mediumdark,
    dark: colors.dark,
    darker: colors.darker,
    darkest: colors.darkest,

    border: colors.border
  },
  variants: {
    negative: {
      bg: colors.negative,
      color: colors.light
    },
    positive: {
      bg: colors.positive,
      color: colors.light
    },
    warning: {
      bg: colors.warning,
      color: colors.light
    },
    avatar: {
      borderRadius: '100% !important'
    }
  },
  text: {
    subhead: {
      fontFamily: fonts.primary,
      fontSize: 2,
      color: colors.dark,
      textTransform: 'capitalize',
      letterSpacing: '0.5px',
      fontWeight: '600'
    },
    suptitle: {
      fontFamily: fonts.primary,
      fontSize: 0,
      color: colors.dark,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: '700'
    },
    link: {
      fontFamily: fonts.primary,
      fontSize: 1,
      color: colors.dark,
      letterSpacing: '.5px',
      fontWeight: '600'
    },
    text: {
      fontFamily: fonts.primary,
      fontSize: 1,
      color: colors.dark,
      letterSpacing: '.5px',
      fontWeight: '500'
    },
    heading: {
      fontFamily: fonts.primary,
      fontSize: 5,
      color: colors.dark,
      letterSpacing: '1px',
      fontWeight: '800'
    }
  },
  buttons: {
    primary: {
      fontWeight: '600',
      height: '40px',
      px: 4,
      backgroundColor: colors.primary,
      borderRadius: '4px',
      fontSize: '12px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    danger: {
      fontWeight: '600',
      height: '40px',
      px: 4,
      backgroundColor: colors.negative,
      color: colors.lighter,
      borderRadius: '4px',
      fontSize: '12px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    outline: {
      fontWeight: '600',
      height: '40px',
      px: 4,
      backgroundColor: 'transparent',
      borderRadius: '4px',
      fontSize: '12px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: colors.dark,
      border: `1px solid ${colors.primary}`
    }
  },
  space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px'],
  fontFamily: fonts.primary
};
