import { useProfile } from 'fe/user/settings/useSettings';
import { useFormik } from 'formik';
import { useMe } from 'fe/session/me';
import React, { FC, useMemo } from 'react';
import {
  Settings as SettingsPageUI,
  Props as SettingsUIProps,
  EditProfile
} from 'ui/pages/settings';

import Preferences from 'ui/pages/settings/preferences';
import Emails from 'ui/pages/settings/invites';
import Instance from 'ui/pages/settings/instance';
import Flags from 'ui/pages/settings/flags';

export enum SettingsPageTab {
  General,
  Preferences,
  Invites,
  Instance,
  Flags
}
export interface SettingsPage {
  tab: SettingsPageTab;
  basePath: string;
}

export const SettingsPage: FC<SettingsPage> = ({ basePath }) => {
  const { me } = useMe();
  const { profile, updateProfile } = useProfile();
  const initialValues: EditProfile = {
    icon: profile?.icon || '',
    image: profile?.image || '',
    location: profile?.location || '',
    name: profile?.name || '',
    summary: profile?.summary || '',
    website: profile?.website || ''
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
      formik: updateProfileFormik,
      Preferences: <Preferences />, // FIXME: pass in props and remove optionals in UI
      Instance: <Instance />, // FIXME: pass in props and remove optionals in UI
      Invites: <Emails />, // FIXME: pass in props and remove optionals in UI
      Flags: <Flags />, // FIXME: pass in props and remove optionals in UI
      isAdmin: !!me?.isInstanceAdmin
    };
    return props;
  }, [profile, updateProfileFormik]);

  return settingsPageProps && <SettingsPageUI {...settingsPageProps} />;
};
