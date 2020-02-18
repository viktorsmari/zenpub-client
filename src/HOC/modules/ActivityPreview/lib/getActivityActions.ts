import * as UIA from 'ui/modules/ActivityPreview/Actions';
import { GQLConcreteContext } from '../types';
import { isActivityFollowed } from './isActivityFollowed';
import FlagModalHOC from 'HOC/modules/FlagModal/flagModalHOC';
import { SFC } from 'react';
export const getActivityActions = (
  context: GQLConcreteContext,
  replyFormik: UIA.ReplyActions['replyFormik'],
  toggleLikeFormik: UIA.LikeActions['toggleLikeFormik']
): null | UIA.ActionProps => {
  if (!isActivityFollowed(context)) {
    return null;
  }
  const like: null | UIA.LikeActions =
    'Community' !== context.__typename && 'myLike' in context
      ? {
          toggleLikeFormik,
          iLikeIt: !!context.myLike,
          totalLikes:
            'likes' in context
              ? context.likes && context.likes.totalCount
              : null
        }
      : null;

  const reply: null | UIA.ReplyActions = {
    replyFormik
  };
  const FlagModal: null | SFC<{ done(): unknown }> =
    context.__typename === 'Comment'
      ? null
      : ({ done }) => {
          return FlagModalHOC({
            done,
            contextId:
              context.__typename === 'User' ? context.userId : context.id,
            flagged: !!context.myFlag
          });
        };
  return {
    FlagModal,
    like,
    reply
  };
};
