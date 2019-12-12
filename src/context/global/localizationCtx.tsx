import { setupI18n, I18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, { createContext, useContext, useMemo } from 'react';
import { StateContext } from './stateCtx';

export type LocaleContextT = {
  locale: string | null;
  selectedLocale: string;
  i18n: I18n;
  locales: string[];
};

export const i18n = setupI18n();
export const LocaleContext = createContext<LocaleContextT>({
  locale: 'en_GB',
  selectedLocale: 'en_GB',
  i18n,
  locales: ['en_GB']
});
export const ProvideLocalizationCtx: React.FC = ({ children }) => {
  const {
    localization: { catalogs, locale }
  } = useContext(StateContext);
  const localeContextValue = useMemo<LocaleContextT>(
    () => ({
      locale: catalogs[locale] ? locale : null,
      selectedLocale: locale,
      i18n,
      locales: Object.keys(catalogs)
    }),
    [catalogs, locale, i18n]
  );
  return (
    <LocaleContext.Provider value={localeContextValue}>
      <I18nProvider i18n={i18n} language={locale} catalogs={catalogs}>
        {children}
      </I18nProvider>
    </LocaleContext.Provider>
  );
};
