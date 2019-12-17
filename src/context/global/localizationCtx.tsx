import { setupI18n, I18n, Catalog, Catalogs } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState
} from 'react';
import { StateContext } from './stateCtx';
import { IS_DEV, locales, LocaleKey } from '../../constants';

export type LocaleContextT = {
  locale: LocaleKey;
  i18n: I18n;
};

export const i18n = setupI18n({ locales: locales });
export const LocaleContext = createContext<LocaleContextT>({
  locale: locales[0],
  i18n
});
export const ProvideLocalizationCtx: React.FC = ({ children }) => {
  const {
    localization: { locale }
  } = useContext(StateContext);

  const [catalogs, setCatalogs] = useState<Catalogs>({});

  useEffect(
    () => {
      setHTMLDirection();
      if (!locales.includes(locale) || catalogs[locale]) {
        return;
      }
      loadCatalog(locale)
        .then(cat => setCatalogs({ ...catalogs, [locale]: cat }))
        .catch(err => console.error(`Error loading Locale: ${locale}`, err));
    },
    [locale]
  );

  const localeContextValue = useMemo<LocaleContextT>(
    () => ({
      locale,
      i18n
    }),
    [locale, i18n]
  );

  const directionForLanguage = (locale): string => {
    return locale === 'ar_SA' ? 'rtl' : 'ltr';
  };

  const setHTMLDirection = () => {
    const htmlEl = document.querySelector('html');
    if (htmlEl) {
      const dir = directionForLanguage(locale);
      console.log('locale  ' + dir);
      htmlEl.style.direction = locale === 'ar_SA' ? 'rtl' : 'ltr';
      htmlEl.classList.remove('--rtl', '--ltr');
      htmlEl.classList.add(`--${dir}`);
    }
  };

  return (
    <I18nProvider i18n={i18n} language={locale} catalogs={catalogs}>
      <LocaleContext.Provider value={localeContextValue}>
        {children}
      </LocaleContext.Provider>
    </I18nProvider>
  );
};

const loadCatalog = async (locale: string): Promise<Catalog> => {
  if (IS_DEV) {
    return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `@lingui/loader!../../locales/${locale}/messages.po`);
  } else {
    return import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
    `../../locales/${locale}/messages.js`);
  }
};
