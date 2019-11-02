/*  currently:
NODE_ENV: "development"
PUBLIC_URL: ""
REACT_APP_GRAPHQL_ENDPOINT: "https://home.next.moodle.net/api/graphql"
REACT_APP_PHOENIX_SOCKET_ENDPOINT: "ws://home.next.moodle.net/api/socket" 
*/

export const PHOENIX_SOCKET_ENDPOINT =
  process.env.REACT_APP_PHOENIX_SOCKET_ENDPOINT;
export const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const NODE_ENV = process.env.NODE_ENV;
export const PUBLIC_URL = process.env.PUBLIC_URL;

export const IS_DEV = NODE_ENV === 'development';

// was process.env.REACT_APP_GRAPHQL_ENDPOINT === 'https://home.moodle.net/api/graphql'
export const LOCAL_STORAGE_USER_ACCESS_TOKEN = IS_DEV
  ? 'dev_user_access_token'
  : 'user_access_token';

export const LOCAL_STORAGE_SESSION = IS_DEV ? 'dev_moo_session' : 'moo_session';

export const APP_NAME = 'MoodleNet';

IS_DEV &&
  console.log(`constants:
PHOENIX_SOCKET_ENDPOINT=${PHOENIX_SOCKET_ENDPOINT}
GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT}
NODE_ENV=${NODE_ENV}
PUBLIC_URL=${PUBLIC_URL}
IS_DEV=${IS_DEV}
LOCAL_STORAGE_USER_ACCESS_TOKEN=${LOCAL_STORAGE_USER_ACCESS_TOKEN}
LOCAL_STORAGE_SESSION=${LOCAL_STORAGE_SESSION}
APP_NAME=${APP_NAME}
`);
