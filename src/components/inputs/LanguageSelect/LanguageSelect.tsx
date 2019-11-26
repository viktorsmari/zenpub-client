import * as React from 'react';
import Select from 'react-select';
import { LocaleContext, locale_default } from '../../../containers/App/App';

type LanguageSelectState = {
  stateLocale: string;
};

type LanguageSelectProps = {
  fullWidth?: boolean;
} & React.SelectHTMLAttributes<object>;

export const languageNames = {
  ar_SA: 'العربية, المملكة العربية السعودية',
  en_GB: 'English, British',
  en_US: 'English, USA',
  es_MX: 'Español, Méjico',
  es_ES: 'Español, España',
  fr_FR: 'Français, France',
  eu: 'Euskara'
};

type LangKey = keyof typeof languageNames;

// Object.keys(languageNames).forEach(key => {
//   console.log(languageNames[key]);
//   options.push({ value: key, label: languageNames[key] });
// });
const options = Object.keys(languageNames).map((key: LangKey) => ({
  value: key,
  label: languageNames[key]
}));

/**
 * LanguageSelect component.
 * Allows the user to select the active locale being used in the application.
 */
export default class LanguageSelect extends React.Component<
  LanguageSelectProps,
  LanguageSelectState
> {
  state = {
    stateLocale: locale_default
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LocaleContext.Consumer>
        {({ setLocale, locale }) => (
          <Select
            options={options}
            defaultValue={options.find(_ => _.value === locale)}
            onChange={selectedKey => {
              console.log(locale);
              // setLocale(selectedKey.value);
              // this.setState({ selectedKey: selectedKey.value });
              const selection =
                !!selectedKey && 'length' in selectedKey
                  ? selectedKey[0]
                  : selectedKey;
              if (!selection) {
                return;
              }

              setLocale(selection.value);
              this.setState({ stateLocale: selection.value });
            }}
          />
        )}
      </LocaleContext.Consumer>
    );
  }
}
