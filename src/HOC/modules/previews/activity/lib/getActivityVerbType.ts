import * as GQL from 'graphql/types.generated';
import { VerbType } from '../types';
import { ActivityPreviewFragment } from '../ActivityPreview.generated';

export const getActivityVerbType = (
  activity: ActivityPreviewFragment
): VerbType | null => {
  if (!activity.context) {
    return null;
  }

  const verbType: null | VerbType =
    activity.context.__typename === 'Flag' ||
    activity.context.__typename === 'Like' ||
    activity.context.__typename === 'Follow'
      ? activity.context.__typename
      : activity.verb === GQL.ActivityVerb.Created
      ? 'Create'
      : activity.verb === GQL.ActivityVerb.Updated
      ? 'Update'
      : null; // activity.verb: never

  return verbType;
};
