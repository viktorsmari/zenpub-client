import { Catalogs } from '@lingui/core';
import { Trans } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';
import '@zendeskgarden/react-avatars/dist/styles.css';
import '@zendeskgarden/react-buttons/dist/styles.css';
import '@zendeskgarden/react-checkboxes/dist/styles.css';
import { Chrome } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';
import '@zendeskgarden/react-grid/dist/styles.css';
import '@zendeskgarden/react-menus/dist/styles.css';
import '@zendeskgarden/react-pagination/dist/styles.css';
import '@zendeskgarden/react-select/dist/styles.css';
import '@zendeskgarden/react-tabs/dist/styles.css';
import '@zendeskgarden/react-tags/dist/styles.css';
import '@zendeskgarden/react-textfields/dist/styles.css';
import '@zendeskgarden/react-tooltips/dist/styles.css';
import * as React from 'react';
import { ThemeProvider } from '../../styleguide/Wrapper';
import '../../styles/flag-icons.css';
import '../../styles/loader.css';
import '../../styles/social-icons.css';
// import styled from '../../themes/styled';
import Router from './Router';

const LocalStorageLocaleKey = 'locale';

// export const AppStyles = styled.div`
//   font-family: ${props => props.theme.styles.fontFamily};

//   * {
//     font-family: ${props => props.theme.styles.fontFamily};
//   }
// `;

export const locale_default =
  localStorage.getItem(LocalStorageLocaleKey) || 'en_GB';

export const LocaleContext = React.createContext({
  catalogs: {},
  locale: locale_default,
  setLocale: (locale: string) => {}
});

interface State {
  catalogs: Catalogs;
  locale: string;
  setLocale: (locale: string) => void;
}

/**
 * App container.
 *
 * Sets up app-wide state which contains which locale is in use, for example.
 *
 * It also wraps the whole application tree in various providers:
 *
 *  - ThemeProvider: used to theme all Zendesk Garden components
 *
 *  - LocaleContext.Provider: used to give children access to the
 *    application locale API in order to set the active locale
 *
 *  - I18nProvider: used to enable localisation throughout the app
 */
export default class App extends React.Component<{}, State> {
  state = {
    catalogs: {
      en_GB: require(process.env.NODE_ENV === 'development'
        ? '../../locales/en_GB/messages.po'
        : '../../locales/en_GB/messages.js')
    },
    locale: locale_default,
    setLocale: this.setLocale.bind(this)
  };

  async setLocale(locale) {
    let catalogs = {};

    // if (!this.state.catalogs[locale] || locale == locale_default) {
    let catalog;

    if (process.env.NODE_ENV === 'development') {
      catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `@lingui/loader!../../locales/${locale}/messages.po`);
    } else {
      catalog = await import(/* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `../../locales/${locale}/messages.js`);
    }

    catalogs = {
      ...this.state.catalogs,
      [locale]: catalog
    };
    // }

    this.setState({
      locale,
      catalogs
    });

    // Persist the locale to local-storage.
    localStorage.setItem(LocalStorageLocaleKey, locale);
  }

  render() {
    // console.log(this.state)

    if (!this.state.catalogs[this.state.locale]) {
      return (
        <p>
          <Trans>
            Sorry, we encountered a problem loading the app in your language.
          </Trans>
        </p>
      );
    }

    return (
      <ThemeProvider>
        <LocaleContext.Provider value={this.state}>
          <I18nProvider
            language={this.state.locale}
            catalogs={this.state.catalogs}
          >
            {/* <AppStyles> */}
            <Chrome>
              <Router />
            </Chrome>
            {/* </AppStyles> */}
          </I18nProvider>
        </LocaleContext.Provider>
      </ThemeProvider>
    );
  }
}
