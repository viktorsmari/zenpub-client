import { Settings } from 'luxon';
import { AnyAction, Middleware, Reducer } from 'redux';
import * as Localization from '.';
import { KVStore } from '../../util/keyvaluestore/types';

const LOCALE_KEY = 'locale';

interface LocalizationSrv {
  mw: Middleware;
  reducer: Reducer<Localization.State, AnyAction>;
}
const defaultLang: Localization.Locale = 'en_GB';
export const createLocalizationMW = (kvstore: KVStore): LocalizationSrv => {
  const getStoredLang = (): Localization.Locale | null =>
    kvstore.get(LOCALE_KEY);
  // const delStoredLang = (): Localization.Lang | null => kvstore.del(LANG_KEY);
  const setStoredLang = (locale: Localization.Locale): void =>
    kvstore.set(LOCALE_KEY, locale);
  const mw: Middleware = store => next => {
    return action => {
      if (Localization.setLang.is(action)) {
        Settings.defaultLocale = action.payload.split('_')[0];
        setStoredLang(action.payload);
        next(action);
      }
    };
  };
  const initialLocale = getStoredLang() || defaultLang;
  Settings.defaultLocale = initialLocale.split('_')[0];
  Settings.defaultZoneName = 'UTC';
  const initialState: Localization.State = {
    locale: initialLocale
  };
  const reducer = Localization.makeReducer(initialState);
  return {
    mw,
    reducer
  };
};
