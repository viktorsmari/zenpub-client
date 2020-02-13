import * as GQL from 'graphql/types.generated';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import * as APGQL from './getActivityPreview.generated';
import { getActivityActions } from './lib/getActivityActions';
import { getActivityActor } from './lib/getActivityActor';
import { getActivityContext } from './lib/getActivityContext';
import { getActivityGqlConcreteContext } from './lib/getActivityGqlConcreteContext';
import { getActivityInReplyContext } from './lib/getActivityInReplyContext';
import { getActivityVerbType } from './lib/getActivityVerbType';
import { useActivityReplyFormik } from './lib/useActivityReplyFormik';
import { useActivityToggleLikeFormik } from './lib/useActivityToggleLikeFormik';

export interface ActivityPreviewCtx {
  useGetActivityPreviewQuery: typeof APGQL.useGetActivityPreviewQuery;
  useActivityPreviewLikeMutation: typeof APGQL.useActivityPreviewLikeMutation;
  useActivityPreviewUnlikeMutation: typeof APGQL.useActivityPreviewUnlikeMutation;
  useActivityPreviewCreateReplyMutation: typeof APGQL.useActivityPreviewCreateReplyMutation;
  useActivityPreviewCreateThreadMutation: typeof APGQL.useActivityPreviewCreateThreadMutation;
}
export const ActivityPreviewCtx = createContext<ActivityPreviewCtx>({
  useGetActivityPreviewQuery: APGQL.useGetActivityPreviewQuery,
  useActivityPreviewLikeMutation: APGQL.useActivityPreviewLikeMutation,
  useActivityPreviewUnlikeMutation: APGQL.useActivityPreviewUnlikeMutation,
  useActivityPreviewCreateReplyMutation:
    APGQL.useActivityPreviewCreateReplyMutation,
  useActivityPreviewCreateThreadMutation:
    APGQL.useActivityPreviewCreateThreadMutation
});

export interface Props {
  activityId: GQL.Activity['id'];
}
export const ActivityPreviewHOC: SFC<Props> = ({ activityId }) => {
  const { useGetActivityPreviewQuery } = useContext(ActivityPreviewCtx);
  const activityQ = useGetActivityPreviewQuery({
    variables: { activityId }
  });
  const activity = activityQ.data && activityQ.data.activity;
  const replyFormik = useActivityReplyFormik(activity);
  const toggleLikeFormik = useActivityToggleLikeFormik(activity);
  const props = useMemo<UI.Props>(
    () => {
      if (!activity) {
        return {
          status: UI.Status.Loading
        };
      } else {
        const user = activity.user;
        const activityContext = activity.context;
        if (!(user && activityContext)) {
          console.error(
            'ActivityPreviewHOC: user or activityContext :null',
            activity
          );
          return {
            status: UI.Status.Loading
          };
        }
        const _baseProps: Pick<
          UI.ActivityLoaded,
          'status' | 'actor' | 'createdAt'
        > = {
          status: UI.Status.Loaded,
          createdAt: activity.createdAt,
          actor: getActivityActor(user)
        };
        const gqlContext = getActivityGqlConcreteContext(activityContext);
        const verbType = getActivityVerbType(activity);
        if (!(gqlContext && verbType)) {
          console.error(
            `ActivityPreviewHOC: can't provide concreteContext or verb`,
            activity,
            gqlContext,
            verbType
          );
          return {
            status: UI.Status.Loading
          };
        }
        const context = getActivityContext(gqlContext, verbType);
        if (!context) {
          console.error(
            `ActivityPreviewHOC: can't provide context`,
            activity,
            gqlContext,
            verbType
          );
          return {
            status: UI.Status.Loading
          };
        }
        const actions = getActivityActions(
          gqlContext,
          replyFormik,
          toggleLikeFormik
        );
        const inReplyToCtx = getActivityInReplyContext(activityContext);
        const props: UI.ActivityLoaded = {
          ..._baseProps,
          context,
          actions,
          inReplyToCtx
        };
        return props;
      }
    },
    [activity]
  );
  return <UI.ActivityPreview {...props} />;
};
