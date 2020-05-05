import {
  createLocalSessionKVStorage,
  LOCAL
} from 'util/keyvaluestore/localSessionStorage';
export interface MoodleLMSParams {
  site: string;
  course?: string;
  section?: string;
}
export const getParamsFromMoodleLMS = (): MoodleLMSParams => {
  const q = new URLSearchParams(location.search);
  const site = q.get('site') || '';
  const course = q.get('course') || '';
  const section = q.get('section') || '';
  return {
    site,
    course,
    section
  };
};

const PARAMS = 'PARAMS';
const storage = createLocalSessionKVStorage(LOCAL)('MOODLE_LMS');
export const saveLMSParams = (params: MoodleLMSParams) =>
  storage.set(PARAMS, params);
export const getLMSParams = (params: MoodleLMSParams) => storage.get(PARAMS);

export const getUserPreferred_moodle_lms_url = (extraInfo: any) =>
  'string' === typeof extraInfo?.preferred_moodle_lms_url
    ? extraInfo?.preferred_moodle_lms_url
    : '';

export const addToMoodleRequest = {
  method: 'POST',
  getUrl: (moodleSite: string) =>
    `${moodleSite}/admin/tool/moodlenet/import.php`
};
