/*  currently:
NODE_ENV: "development"
PUBLIC_URL: ""
REACT_APP_GRAPHQL_ENDPOINT: "https://team.moodle.net/api/graphql"
REACT_APP_PHOENIX_SOCKET_ENDPOINT: "ws://team.moodle.net/api/socket" 
*/

export const PHOENIX_SOCKET_ENDPOINT =
  process.env.REACT_APP_PHOENIX_SOCKET_ENDPOINT;
export const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const NODE_ENV = process.env.NODE_ENV;
export const PUBLIC_URL = process.env.PUBLIC_URL;
export const SENTRY_KEY = process.env.SENTRY_KEY || '';

export const APP_NAME = 'MoodleNet';
export const INSTANCE_DESCRIPTION =
  'This instance of MoodleNet is currently invite-only.';
export const INVITE_ONLY_TEXT =
  'Please note, signups on this instance are currently invite-only.';

export const IS_DEV = NODE_ENV === 'development';

// was process.env.REACT_APP_GRAPHQL_ENDPOINT === 'https://home.moodle.net/api/graphql'
export const LOCAL_STORAGE_USER_ACCESS_TOKEN = IS_DEV
  ? 'dev_user_access_token'
  : 'user_access_token';

export const LOCAL_STORAGE_SESSION = IS_DEV ? 'dev_moo_session' : 'moo_session';

IS_DEV &&
  console.log(`-environment-
${Object.keys(process.env)
    .map(key => `${key}=${process.env[key]}`)
    .join('\n')}
-
`);
export const catalogs = {
  en_GB: require(IS_DEV
    ? './locales/en_GB/messages.po'
    : './locales/en_GB/messages.js'),
  en_US: require(IS_DEV
    ? './locales/en_US/messages.po'
    : './locales/en_US/messages.js'),
  es_ES: require(IS_DEV
    ? './locales/es_ES/messages.po'
    : './locales/es_ES/messages.js'),
  es_MX: require(IS_DEV
    ? './locales/es_MX/messages.po'
    : './locales/es_MX/messages.js'),
  fr_FR: require(IS_DEV
    ? './locales/fr_FR/messages.po'
    : './locales/fr_FR/messages.js'),
  eu: require(IS_DEV ? './locales/eu/messages.po' : './locales/eu/messages.js')
};

console.log(catalogs);
