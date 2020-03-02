import { useProfile } from 'fe/user/settings/useSettings';
import { useFormik } from 'formik';
import React, { FC, useMemo } from 'react';
import {
  Settings as SettingsPageUI,
  Props as SettingsUIProps,
  EditProfile
} from 'ui/pages/settings';

export enum SettingsPageTab {
  General,
  Preferences
}
export interface SettingsPage {
  tab: SettingsPageTab;
  basePath: string;
}

export const SettingsPage: FC<SettingsPage> = ({ basePath }) => {
  const { profile, updateProfile } = useProfile();
  const initialValues: EditProfile = {
    icon: profile?.icon || '',
    image: profile?.image || '',
    location: profile?.location || '',
    name: profile?.name || '',
    summary: profile?.summary || ''
  };
  const updateProfileFormik = useFormik<EditProfile>({
    initialValues,
    enableReinitialize: true,
    onSubmit: editVals => updateProfile(editVals)
  });

  const settingsPageProps = useMemo<SettingsUIProps | null>(() => {
    const props: SettingsUIProps = {
      basePath,
      displayUsername: profile?.displayUsername || '',
      formik: updateProfileFormik
    };
    return props;
  }, [profile, updateProfileFormik]);

  return settingsPageProps && <SettingsPageUI {...settingsPageProps} />;
};
