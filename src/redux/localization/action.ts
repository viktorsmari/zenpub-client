import { actionCtx } from '../../util/redux/Actions';
import { LocaleKey } from '../../mn-constants';

export const setLang = actionCtx<'localization.setLang', LocaleKey>(
  'localization.setLang'
);
