import * as UIA from 'ui/modules/ActivityPreview/Actions';
import { GQLConcreteContext } from '../types';
import { isActivityFollowed } from './isActivityFollowed';
import FlagModalHOC from 'HOC/modules/FlagModal/flagModalHOC';
import { FC } from 'react';
export const getActivityActions = (
  context: GQLConcreteContext,
  replyFormik: null | UIA.ReplyActions['replyFormik'],
  toggleLikeFormik: null | UIA.LikeActions['toggleLikeFormik']
): null | UIA.ActionProps => {
  if (!isActivityFollowed(context)) {
    return null;
  }
  const like: null | UIA.LikeActions =
    ('Resource' === context.__typename || 'Comment' === context.__typename) &&
    toggleLikeFormik
      ? {
          toggleLikeFormik,
          iLikeIt: !!context.myLike,
          totalLikes:
            //FIXME: Resource must have a likerCount !!!
            context.__typename === 'Resource'
              ? context.likes?.totalCount || 0
              : context.likerCount || 0
        }
      : null;

  const reply: null | UIA.ReplyActions =
    'Comment' === context.__typename && replyFormik
      ? {
          replyFormik
        }
      : null;
  const FlagModal: null | FC<{ done(): unknown }> =
    'Resource' === context.__typename //|| 'Comment' === context.__typename)
      ? ({ done }) => {
          return FlagModalHOC({
            done,
            contextId: context.id,
            flagged: !!context.myFlag
          });
        }
      : null;
  return {
    FlagModal,
    like,
    reply
  };
};
