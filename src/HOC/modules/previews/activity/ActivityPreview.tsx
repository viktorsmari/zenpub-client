import { useActivityPreview } from 'fe/activities/preview/useActivityPreview';
import * as GQL from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import { getActivityActor } from './lib/getActivityActor';
import { PreviewComponent } from './PreviewComponent';
import { BaseProps } from './PreviewComponent';

export interface Props {
  activityId: GQL.Activity['id'];
}
export const ActivityPreviewHOC: FC<Props> = ({ activityId }) => {
  const { activity } = useActivityPreview(activityId);
  return useMemo<null | JSX.Element>(() => {
    if (!activity) {
      return <UI.ActivityPreview {...{ status: UI.Status.Loading }} />;
    } else {
      if (!(activity.user && activity.context)) {
        console.error('ActivityPreviewHOC: user or context :null', activity);
        return null;
      }

      const baseProps: BaseProps = {
        status: UI.Status.Loaded,
        createdAt: activity.createdAt,
        actor: getActivityActor(activity.user)
      };

      return (
        <PreviewComponent
          baseProps={baseProps}
          context={activity.context}
          verb={activity.verb}
        />
      );
    }
  }, [activity]);
};
