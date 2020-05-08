import { useProfile } from 'fe/user/profile/useProfile';
import { MoodleLMSConfigPanel } from 'HOC/modules/MoodleLMSConfigPanel/MoodleLMSConfigPanel';
import React, { useMemo } from 'react';
import { MoodleLMSParams, sendToMoodle } from './moodleLMSintegration';

type MaybeResourceUrl = string | null | undefined;
export const useSendToMoodle = (resourceUrl: MaybeResourceUrl) => {
  const { profile } = useProfile();
  const LMSParams = profile?.extraInfo?.LMS;
  const sendToMoodleCB = useMemo(() => {
    if (!LMSParams || !resourceUrl) {
      return null;
    }
    return ((_resourceUrl: string, params: MoodleLMSParams) => () =>
      sendToMoodle(_resourceUrl, params))(resourceUrl, LMSParams);
  }, [resourceUrl, LMSParams]);

  const sendToMoodleModalCB = useMemo(() => {
    if (!resourceUrl) {
      return null;
    }
    return ((_resourceUrl: string) => (params: MoodleLMSParams) =>
      sendToMoodle(_resourceUrl, params))(resourceUrl);
  }, [resourceUrl, LMSParams]);

  return useMemo(
    () => ({
      sendToMoodle: sendToMoodleCB,
      MoodlePanel:
        sendToMoodleModalCB &&
        (({ done }) => (
          <MoodleLMSConfigPanel
            done={params => {
              if (params && sendToMoodleModalCB) {
                sendToMoodleModalCB(params);
              }
              done();
            }}
          />
        ))
    }),
    [sendToMoodleCB, sendToMoodleModalCB]
  );
};
