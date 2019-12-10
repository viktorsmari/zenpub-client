import { Middleware, Reducer, AnyAction } from 'redux';
import * as Localization from '.';
import { KVStore } from '../../util/keyvaluestore/types';

const LANG_KEY = 'lang';

interface LocalizationSrv {
  mw: Middleware;
  reducer: Reducer<Localization.State, AnyAction>;
}
const defaultLang: Localization.Lang = 'en_GB';
export const createLocalizationMW = (kvstore: KVStore): LocalizationSrv => {
  const getStoredLang = (): Localization.Lang | null => kvstore.get(LANG_KEY);
  // const delStoredLang = (): Localization.Lang | null => kvstore.del(LANG_KEY);
  const setStoredLang = (locState: Localization.Lang): void =>
    kvstore.set(LANG_KEY, locState);
  const mw: Middleware = store => next => {
    return action => {
      if (Localization.setLang.is(action)) {
        setStoredLang(action.payload);
      }
      return next(action);
    };
  };
  const initialState: Localization.State = {
    lang: getStoredLang() || defaultLang
  };
  const reducer = Localization.reducer(initialState);
  return {
    mw,
    reducer
  };
};
