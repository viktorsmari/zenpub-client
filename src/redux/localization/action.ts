import { actionCtx } from '../../util/redux/Actions';
import { Locale } from './types';

export const setLang = actionCtx<'localization.setLang', Locale>(
  'localization.setLang'
);
