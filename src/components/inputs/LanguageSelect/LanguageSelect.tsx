import * as React from 'react';
import Select from 'react-select';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { ActionContext } from '../../../context/global/actionCtx';
import { setLang } from '../../../redux/localization';

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

export const LanguageSelect: React.FC<LanguageSelectProps> = props => {
  const { locale, locales } = React.useContext(LocaleContext);
  const { dispatch } = React.useContext(ActionContext);
  const options = React.useMemo(
    () =>
      locales.map(
        loc => ({
          value: loc,
          label: languageNames[loc] || loc
        }),
        {}
      ),
    [locales]
  );
  return (
    <Select
      options={options}
      defaultValue={options.find(_ => _.value === locale)}
      onChange={selectedKey => {
        const selection =
          !!selectedKey && 'length' in selectedKey
            ? selectedKey[0]
            : selectedKey;
        if (!selection) {
          return;
        }

        dispatch(setLang.create(selection.value));
      }}
    />
  );
};
export default LanguageSelect;
