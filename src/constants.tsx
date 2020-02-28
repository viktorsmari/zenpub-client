export const PHOENIX_SOCKET_ENDPOINT =
  process.env.REACT_APP_PHOENIX_SOCKET_ENDPOINT;
export const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const NODE_ENV = process.env.NODE_ENV;
export const PUBLIC_URL = process.env.PUBLIC_URL;
export const SENTRY_KEY = process.env.SENTRY_KEY || '';

export const APP_NAME = 'MoodleNet';
export const INSTANCE_DESCRIPTION =
  process.env.INSTANCE_DESCRIPTION || 'An instance of MoodleNet.';
export const INVITE_ONLY_TEXT =
  process.env.REACT_APP_INVITE_ONLY_TEXT ||
  'Signups on this instance are currently invite-only.';

export const IS_DEV = NODE_ENV === 'development';

export const languages = {
  en_GB: 'English, British',
  en_US: 'English, USA',
  es_MX: 'Español, Méjico',
  es_ES: 'Español, España',
  fr_FR: 'Français, France',
  eu: 'Euskara',
  ar_SA: 'العربية, المملكة العربية السعودية'
};
export type LocaleKey = keyof typeof languages;
export const locales = Object.keys(languages) as LocaleKey[];

export const algoliaCreds = {
  appId: 'KVG4RFL0JJ',
  apiKey: '884f8371d98c8c9837cf76f85f4b5daa'
};

export const max_file_size = '10MB';

export const accepted_file_types =
  '.pdf, .rtf, .docx, .doc, .odt, .ott, .xls, .xlsx, .ods, .ots, .csv, .ppt, .pps, .pptx, .odp, .otp, .odg, .otg, .odc, .ogg, .mp3, .flac, .m4a, .wav, .mp4, .mkv, .flv, .avi, .gif, .jpg, .jpeg, .png, .svg, .webm, .eps, .tex, .mbz';

// these licenses must match the icons (in the same order) configured in the UploadResource UI module
// please use standard identifiers from https://spdx.org/licenses/preview/ in order to preserve interoperability
export const accepted_license_types = ['CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0'];

/* log ENV if DEV */
IS_DEV &&
  console.log(`-environment-
${Object.keys(process.env)
    .map(key => `${key}=${process.env[key]}`)
    .join('\n')}
-------------
`);
/***/
