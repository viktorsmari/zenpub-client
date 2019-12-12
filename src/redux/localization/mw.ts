import { Middleware, Reducer, AnyAction } from 'redux';
import * as Localization from '.';
import { KVStore } from '../../util/keyvaluestore/types';
import { Catalogs } from '@lingui/core';
import { Settings } from 'luxon';

const LANG_KEY = 'lang';

interface LocalizationSrv {
  mw: Middleware;
  reducer: Reducer<Localization.State, AnyAction>;
}
const defaultLang: Localization.Locale = 'en_GB';
export const createLocalizationMW = (
  kvstore: KVStore,
  catalogs: Catalogs
): LocalizationSrv => {
  const getStoredLang = (): Localization.Locale | null => kvstore.get(LANG_KEY);
  // const delStoredLang = (): Localization.Lang | null => kvstore.del(LANG_KEY);
  const setStoredLang = (locState: Localization.Locale): void =>
    kvstore.set(LANG_KEY, locState);
  const mw: Middleware = store => next => {
    return action => {
      if (Localization.setLang.is(action)) {
        setStoredLang(action.payload);

        if (process.env.NODE_ENV === 'development') {
          import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
          `@lingui/loader!../../locales/${action.payload}/messages.po`);
        } else {
          import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
          `../../locales/${action.payload}/messages.js`);
        }

        Settings.defaultLocale = action.payload.split('_')[0];
      }
      return next(action);
    };
  };
  const initialLocale = getStoredLang() || defaultLang;
  Settings.defaultLocale = initialLocale.split('_')[0];
  Settings.defaultZoneName = 'UTC';
  const initialState: Localization.State = {
    locale: initialLocale,
    catalogs
  };
  const reducer = Localization.makeReducer(initialState);
  return {
    mw,
    reducer
  };
};
