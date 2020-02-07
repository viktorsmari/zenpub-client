import * as GQL from 'graphql/types.generated';
import * as UIP from 'ui/modules/ActivityPreview/preview';
import * as APGQL from '../getActivityPreview.generated';
import { GQLConcreteContext } from '../types';
import { getActivitySimpleLink } from './getActivitySimpleLink';

export type VerbMapKey = keyof typeof verbMap;
export const verbMap = {
  Create: UIP.ContextVerb.Created,
  Update: UIP.ContextVerb.Updated,
  Flag: UIP.ContextVerb.Flag,
  Follow: UIP.ContextVerb.Follow,
  Like: UIP.ContextVerb.Like
};
export const getActivityContext = (
  activity: APGQL.ActivityPreviewDataFragment
): [UIP.Context, GQLConcreteContext] => {
  //FIXME https://gitlab.com/moodlenet/meta/issues/185
  if (!activity.context) {
    console.error(activity);
    throw new Error(
      `Inconsistent data activity.context===null  (https://gitlab.com/moodlenet/meta/issues/185)`
    );
  }

  const verbType: null | VerbMapKey =
    activity.context.__typename === 'Flag' ||
    activity.context.__typename === 'Like' ||
    activity.context.__typename === 'Follow'
      ? activity.context.__typename
      : activity.verb === GQL.ActivityVerb.Created
        ? 'Create'
        : activity.verb === GQL.ActivityVerb.Updated
          ? 'Update'
          : null; // activity.verb: never
  if (!verbType) {
    console.error(activity);
    throw new Error(`Type Error: can't extract activity verbType`);
  }

  const gqlContext: null | GQLConcreteContext =
    activity.context.__typename === 'Collection' ||
    activity.context.__typename === 'Community' ||
    activity.context.__typename === 'Comment' ||
    activity.context.__typename === 'Resource'
      ? activity.context // simple direct concrete object ctx
      : activity.context.__typename === 'Flag' ||
        activity.context.__typename === 'Follow' ||
        activity.context.__typename === 'Like'
        ? //FIXME https://gitlab.com/moodlenet/meta/issues/185
          //@ts-ignore
          activity.context.context.__typename === 'Thread' // if VERB'ed ona a thread we should go deeper
          ? //FIXME https://gitlab.com/moodlenet/meta/issues/185
            //@ts-ignore
            activity.context.context.context.__typename === 'Flag' // if it's thread about a flag go deeper
            ? //FIXME https://gitlab.com/moodlenet/meta/issues/185
              //@ts-ignore
              activity.context.context.context.context // simple thread's flag's concrete object ctx
            : //FIXME https://gitlab.com/moodlenet/meta/issues/185
              //@ts-ignore
              activity.context.context.context // if not VERB'ed ona a thread use that context
          : activity.context.context
        : null; // activity.context: never
  if (!gqlContext) {
    console.error(activity);
    throw new Error(`Type Error: can't extract activity context`);
  }
  const context: null | UIP.Context =
    gqlContext.__typename === 'Collection'
      ? {
          verb: verbMap[verbType],
          link: getActivitySimpleLink(gqlContext),
          type: UIP.ContextType.Collection,
          icon: gqlContext.icon || '',
          title: gqlContext.name,
          summary: gqlContext.summary || ''
        }
      : gqlContext.__typename === 'Comment'
        ? {
            verb: verbMap[verbType],
            //FIXME https://gitlab.com/moodlenet/meta/issues/185
            //@ts-ignore
            link: getActivitySimpleLink(gqlContext.thread),
            type: UIP.ContextType.Comment,
            content: gqlContext.content
          }
        : gqlContext.__typename === 'Community'
          ? {
              verb: verbMap[verbType],
              link: getActivitySimpleLink(gqlContext),
              type: UIP.ContextType.Community,
              icon: gqlContext.icon || '',
              title: gqlContext.name,
              summary: gqlContext.summary || ''
            }
          : gqlContext.__typename === 'Resource'
            ? {
                verb: verbMap[verbType],
                //FIXME https://gitlab.com/moodlenet/meta/issues/185
                //@ts-ignore
                link: getActivitySimpleLink(gqlContext.collection),
                type: UIP.ContextType.Resource,
                icon: gqlContext.icon || '',
                title: gqlContext.name,
                summary: gqlContext.summary || '',
                resourceUrl: gqlContext.url || ''
              }
            : gqlContext.__typename === 'User'
              ? {
                  verb: verbMap[verbType],
                  link: getActivitySimpleLink({
                    ...gqlContext,
                    id: gqlContext.userId
                  }),
                  type: UIP.ContextType.Resource,
                  icon: gqlContext.icon || gqlContext.image || '',
                  summary: '',
                  title: gqlContext.userName || ''
                }
              : null; // gqlContext: never
  if (!context) {
    console.error(context);
    throw new Error(`Type Error: unexpected error in providing context`);
  }
  return [context, gqlContext];
};
