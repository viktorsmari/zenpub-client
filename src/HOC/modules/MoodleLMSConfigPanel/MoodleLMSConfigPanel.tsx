import { useProfile } from 'fe/user/profile/useProfile';
import { useFormik } from 'formik';
import React, { FC, useCallback } from 'react';
import {
  BasicMoodleLMSConfigFormValues,
  MoodlePanel
} from 'ui/modules/MoodlePanel';
import * as Yup from 'yup';

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
      if (sendToMoodleFormik.dirty) {
        await updateProfile({ profile: { extraInfo: { LMS } } });
      }
      done(LMS);
    }
  });
  const cancel = useCallback(() => done(), [done]);
  return loading ? null : (
    <MoodlePanel cancel={cancel} sendToMoodleFormik={sendToMoodleFormik} />
  );
};
