import { Trans } from '@lingui/macro';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import * as React from 'react';
import { MessageCircle, Star } from 'react-feather';
import { Box, Flex, Text } from 'rebass';
import { compose, withState } from 'recompose';
import removeMd from 'remove-markdown';
import { gqlRequest } from '../../../gql/actions';
import { Comment } from '../../../gql/sdk';
import styled from '../../../themes/styled';
import { ActionContext } from '../../../_context/global/actionCtx';
import Link from '../Link/Link';
import Talk from '../TalkModal';

interface EventProps {
  userpage?: boolean;
  user?: any;
  comment: Comment;
  thread?: boolean;
  totalReplies?: string;
  noAction?: boolean;
  onOpen(boolean): unknown;
  isOpen: boolean;
  replyTo: any;
  id: string;
}

const CommentWrapper: React.FC<EventProps> = ({
  user,
  userpage,
  comment,
  noAction,
  onOpen,
  isOpen,
  replyTo
}) => {
  const FAKE________COMMENT_I_LIKE_IT = !!Math.round(Math.random());
  const { dispatch } = React.useContext(ActionContext);
  const [iLikeIt, setiLikeIt] = React.useState(FAKE________COMMENT_I_LIKE_IT);
  const toggleLike = React.useCallback(
    () => {
      if (iLikeIt) {
        dispatch(
          gqlRequest.create({
            op: {
              undoLikeCommentMutation: [{ localId: comment!.localId! }]
            },
            replyTo
          })
        );
      } else {
        dispatch(
          gqlRequest.create({
            op: {
              likeCommentMutation: [{ localId: comment!.localId! }]
            },
            replyTo
          })
        );
      }
      setiLikeIt(!iLikeIt);
    },
    [comment, iLikeIt]
  );
  return (
    <FeedItem>
      <NavigateToThread to={`/thread/${comment!.localId}`} />
      <Member>
        <MemberItem mr={2}>
          <Img src={user ? user.icon : ''} />
        </MemberItem>
        <MemberInfo>
          {userpage ? (
            <b>{user ? user.name : <Trans>Deleted user</Trans>}</b>
          ) : user ? (
            <Name>
              <Link to={'/user/' + user.localId}>
                {user.name}{' '}
                {user.preferredUsername ? (
                  <Username>@{user.preferredUsername}</Username>
                ) : null}
              </Link>
              <Spacer mx={2}>·</Spacer>{' '}
              <Date>{DateTime.fromISO(comment!.published!).toRelative()}</Date>
            </Name>
          ) : (
            <Name>
              <Trans>Deleted user</Trans>
            </Name>
          )}
          <>
            {/* {comment!.inReplyTo !== null ? (
              <SubText my={1}>
                <Trans>in reply to</Trans>{' '}
                <Link to={`/user/${comment!.inReplyTo!.author!.localId}`}>
                  {comment!.inReplyTo!.author!.name}
                </Link>
              </SubText>
            ) : null} */}
            <Comment>
              {comment!.content && comment!.content!.length > 320
                ? removeMd(comment!.content).replace(
                    /^([\s\S]{316}[^\s]*)[\s\S]*/,
                    '$1...'
                  )
                : removeMd(comment!.content)}
            </Comment>
          </>
          {noAction ? null : (
            <Actions mt={2}>
              <Items>
                <ActionItem>
                  <ActionIcon onClick={() => onOpen(true)}>
                    <MessageCircle color="rgba(0,0,0,.4)" size="16" />
                  </ActionIcon>
                  <Text ml={2}>{comment!.replies!.totalCount}</Text>
                </ActionItem>
                <ActionItem ml={3}>
                  <ActionIcon>
                    <Star
                      onClick={toggleLike}
                      color={iLikeIt ? 'yellow' : 'rgba(0,0,0,.4)'}
                      size="16"
                    />
                  </ActionIcon>
                  <Text ml={2}>{comment!.likers!.totalCount}</Text>
                </ActionItem>
              </Items>
            </Actions>
          )}
        </MemberInfo>
      </Member>
      <Talk
        toggleModal={onOpen}
        modalIsOpen={isOpen}
        comment={comment}
        author={user}
        id={comment!.id!}
        replyTo={null}
      />
    </FeedItem>
  );
};

export default compose(withState('isOpen', 'onOpen', false))(CommentWrapper);

const NavigateToThread = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

const Date = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  font-weight: 500;
`;

const Items = styled(Flex)`
  flex: 1;
`;

const Actions = styled(Flex)`
  z-index: 9;
  position: relative;
`;

const ActionItem = styled(Flex)`
  margin-right: 32px;
  align-items: center;
  color: ${props => props.theme.styles.colors.gray};
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
  }
  &:hover {
    div:first-of-type {
      background: #fffbf8;
      svg {
        color: ${props => props.theme.styles.colors.orange};
      }
    }
    div:last-of-type {
      color: ${props => props.theme.styles.colors.orange};
    }
  }
`;

const ActionIcon = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: -8px;
  svg {
    margin: 0 auto;
  }
`;

const Username = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  margin: 0 8px;
  font-weight: 500;
`;

const Spacer = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  margin-right: 8px;
  font-weight: 500;
`;

// const SubText = styled(Text)`
// font-size: 14px;
// color:  ${props => props.theme.styles.colors.gray};
// > a {
//   text-decoration: none;
//   font-weight: 600
//   color: ${props => props.theme.styles.colors.black} !important;
//   z-index: 9;
//   position: relative;

//   &:hover {
//     text-decoration: underline;
//   }
// }
// `;

const Name = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.styles.colors.darkgray};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 2px;
  a {
    font-weight: 800;
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${props => props.theme.styles.colors.darkgray} !important;
    z-index: 9;
    position: relative;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Member = styled(Flex)`
  align-items: stretch;
`;

const MemberInfo = styled(Box)`
  margin-top: 4px;
  width: 100%;
`;

const Comment = styled.div`
  margin-top: 6px;
  & a {
    color: ${props => props.theme.styles.colors.darkgray} !important;
    font-weight: 400 !important;
    font-size: 14px;
    text-decoration: none;
    line-height: 20px;
    z-index: 9;
    position: relative;
  }
`;

const MemberItem = styled(Box)`
  background-color: #d6dadc;
  border-radius: 50px;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 48px;
  user-select: none;
  z-index: 0;
  vertical-align: inherit;
  margin-right: 8px;
  min-width: 48px;
`;

const Img = styled.img`
  width: 48px;
  height: 48px;
  display: block;
  -webkit-appearance: none;
  line-height: 48px;
  text-indent: 4px;
  font-size: 13px;
  overflow: hidden;
  max-width: 48px;
  max-height: 48px;
  text-overflow: ellipsis;
  vertical-align: text-top;
  margin-right: 8px;
`;

const FeedItem = styled.div`
  min-height: 30px;
  position: relative;
  margin: 0;
  padding: 16px;
  word-wrap: break-word;
  font-size: 14px;
  ${clearFix()};
  transition: background 0.5s ease;
  margin-top: 0
  z-index: 10;
  position: relative;
  background: #ffffff;
  position: relative;
  border-bottom: 1px solid  ${props => props.theme.styles.colors.lightgray};
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    background: ${props => props.theme.styles.colors.lighter};
  }

`;
