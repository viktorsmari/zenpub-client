import * as React from 'react';
import { LocaleContext, locale_default } from '../../../containers/App/App';
import Select from 'react-select';

type LanguageSelectState = {
  selectedKey?: string;
};

type LanguageSelectProps = {
  fullWidth?: boolean;
} & React.SelectHTMLAttributes<object>;

export const languageNames = {
  en_GB: 'English, British',
  en_US: 'English, USA',
  es_MX: 'Español, Méjico',
  es_ES: 'Español, España',
  fr_FR: 'Français, France',
  eu: 'Euskara'
};

let options: any[] = [];

Object.keys(languageNames).forEach(key => {
  console.log(languageNames[key]);
  options.push({ value: languageNames[key], label: languageNames[key] });
});

/**
 * LanguageSelect component.
 * Allows the user to select the active locale being used in the application.
 */
export default class LanguageSelect extends React.Component<
  LanguageSelectProps,
  LanguageSelectState
> {
  state = {
    selectedKey: locale_default
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LocaleContext.Consumer>
        {({ setLocale, locale }) => (
          <Select
            defaultValue={locale}
            onChange={selectedKey => {
              setLocale(selectedKey);
              this.setState({ selectedKey });
            }}
            options={options}
          />
        )}
      </LocaleContext.Consumer>
    );
  }
}
