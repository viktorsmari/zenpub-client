import { actionCtx } from '../../util/redux/Actions';
import { Lang } from './types';

export const setLang = actionCtx<'localization.setLang', Lang>(
  'localization.setLang'
);
