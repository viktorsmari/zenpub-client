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
import { IS_DEV, locales } from '../../constants';

export type LocaleContextT = {
  locale: string | null;
  selectedLocale: string;
  i18n: I18n;
  locales: string[];
};

export const i18n = setupI18n({ locales: locales });
export const LocaleContext = createContext<LocaleContextT>({
  locale: locales[0],
  selectedLocale: locales[0],
  i18n,
  locales
});
export const ProvideLocalizationCtx: React.FC = ({ children }) => {
  const {
    localization: { locale }
  } = useContext(StateContext);

  const [catalogs, setCatalogs] = useState<Catalogs>({});

  useEffect(
    () => {
      if (catalogs[locale]) {
        return;
      }
      (async function() {
        try {
          let cat: Catalog;
          if (IS_DEV) {
            cat = await import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
            `@lingui/loader!../../locales/${locale}/messages.po`);
          } else {
            cat = await import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
            `../../locales/${locale}/messages.js`);
          }
          setCatalogs({ ...catalogs, [locale]: cat });
        } catch (err) {
          console.error(`Error loading Locale: ${locale}`, err);
        }
      })();
    },
    [locale]
  );

  const localeContextValue = useMemo<LocaleContextT>(
    () => ({
      locale: catalogs[locale] ? locale : null,
      selectedLocale: locale,
      i18n,
      locales
    }),
    [catalogs, locale, i18n]
  );
  return (
    <I18nProvider i18n={i18n} language={locale} catalogs={catalogs}>
      <LocaleContext.Provider value={localeContextValue}>
        {children}
      </LocaleContext.Provider>
    </I18nProvider>
  );
};
