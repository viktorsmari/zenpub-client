import React, { FC } from 'react';
import {
  MoodlePanel,
  BasicMoodleLMSConfigFormValues
} from 'ui/modules/MoodlePanel';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useProfile } from 'fe/user/profile/useProfile';

export interface MoodleLMSConfigPanel {
  done(_?: BasicMoodleLMSConfigFormValues): unknown;
  resourceurl?: string;
}
const validationSchema = Yup.object<BasicMoodleLMSConfigFormValues>({
  site: Yup.string().url()
});
export const MoodleLMSConfigPanel: FC<MoodleLMSConfigPanel> = ({ done }) => {
  const { loading, profile, updateProfile } = useProfile();

  const sendToMoodleFormik = useFormik<BasicMoodleLMSConfigFormValues>({
    initialValues: profile?.extraInfo?.LMS || { site: '' },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async LMS => {
      (await sendToMoodleFormik.dirty) &&
        updateProfile({ profile: { extraInfo: { LMS } } });
      done(LMS);
    }
  });
  return loading ? null : (
    <MoodlePanel cancel={done} sendToMoodleFormik={sendToMoodleFormik} />
  );
};
