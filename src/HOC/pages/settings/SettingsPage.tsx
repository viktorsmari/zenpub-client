import { useMe } from 'fe/session/useMe';
import { useProfile } from 'fe/user/profile/useProfile';
import { useFormik } from 'formik';
import React, { FC, useMemo } from 'react';
import {
  EditProfile,
  Props as SettingsUIProps,
  Settings as SettingsPageUI
} from 'ui/pages/settings';
import Flags from 'ui/pages/settings/flags';
import Emails from 'ui/pages/settings/invites';
import Preferences from 'ui/pages/settings/preferences';
import { InstanceSettingsSection } from './instance/InstanceSettingsSection';

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
    icon: profile?.icon?.url || undefined,
    image: profile?.image?.url || undefined,
    location: profile?.location || '',
    name: profile?.name || '',
    website: profile?.website || '',
    summary: profile?.summary || ''
  };
  const updateProfileFormik = useFormik<EditProfile>({
    initialValues,
    enableReinitialize: true,
    onSubmit: ({ icon, image, ...profile }) =>
      updateProfile({ profile, icon, image })
  });

  const settingsPageProps = useMemo<SettingsUIProps | null>(() => {
    const props: SettingsUIProps = {
      basePath,
      displayUsername: profile?.displayUsername || '',
      formik: updateProfileFormik,
      Preferences: <Preferences />, // FIXME: pass in props and remove optionals in UI
      Instance: <InstanceSettingsSection />, // FIXME: pass in props and remove optionals in UI
      Invites: <Emails />, // FIXME: pass in props and remove optionals in UI
      Flags: <Flags />, // FIXME: pass in props and remove optionals in UI
      isAdmin: !!me?.isInstanceAdmin
    };
    return props;
  }, [profile, updateProfileFormik]);

  return settingsPageProps && <SettingsPageUI {...settingsPageProps} />;
};
