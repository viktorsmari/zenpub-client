import { Trans } from '@lingui/macro';
import { clearFix } from 'polished';
import * as React from 'react';
import styled from '../../../themes/styled';
import Link from '../Link/Link';
import { MessageCircle, Star } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass';
import removeMd from 'remove-markdown';
import { DateTime } from 'luxon';

interface EventProps {
  userpage?: boolean;
  user?: any;
  comment: {
    id: string;
    content: string;
    published: string;
    inReplyTo: any;
    localId: string;
    replies: any;
  };
  thread?: boolean;
  totalReplies?: string;
  noAction?: boolean;
  selectThread(number): number;
}

const Event: React.FC<EventProps> = ({
  user,
  userpage,
  comment,
  noAction,
  totalReplies,
  selectThread
}) => {
  console.log(comment);
  return (
    <FeedItem>
      <Member>
        <MemberItem>
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
              <Spacer>·</Spacer>{' '}
              <Date>{DateTime.fromISO(comment.published).toRelative()}</Date>
            </Name>
          ) : (
            <Name>
              <Trans>Deleted user</Trans>
            </Name>
          )}
          <>
            {comment.inReplyTo !== null ? (
              <SubText>
                <Trans>in reply to</Trans>{' '}
                <Link to={`/user/${comment.inReplyTo.author.localId}`}>
                  {comment.inReplyTo.author.name}
                </Link>
              </SubText>
            ) : null}
            <Comment>
              {comment.content && comment.content.length > 320
                ? removeMd(comment.content).replace(
                    /^([\s\S]{316}[^\s]*)[\s\S]*/,
                    '$1...'
                  )
                : removeMd(comment.content)}
            </Comment>
          </>
          <Actions mt={2}>
            <Items>
              <ActionItem>
                <NavLink to={`/thread/${comment.localId}`}>
                  <ActionIcon>
                    <MessageCircle color="rgba(0,0,0,.4)" size="16" />
                  </ActionIcon>
                  <Text ml={2}>{comment.replies.totalCount}</Text>
                </NavLink>
              </ActionItem>
              <ActionItem>
                <ActionIcon>
                  <Star color="rgba(0,0,0,.4)" size="16" />
                </ActionIcon>
                <Text ml={2}>0</Text>
              </ActionItem>
            </Items>
          </Actions>
        </MemberInfo>
      </Member>
    </FeedItem>

    // <FeedItem>
    //   {noAuthor ? null : (
    //     <Member>
    //       <MemberItem>
    //         <Img alt="user" src={author.icon} />
    //       </MemberItem>
    //       <MemberInfo>
    //         <h3>
    //           {author.localId ? (
    //             <Link to={'/user/' + author.localId}>{author.name}</Link>
    //           ) : (
    //             <b>{author.name}</b>
    //           )}
    //         </h3>
    //         <Date>{comment.date}</Date>
    //       </MemberInfo>
    //     </Member>
    //   )}
    //   <Desc>
    //     <Primary>
    //       <Markdown children={comment.body} />
    //     </Primary>
    //     {noAction ? null : (
    //       <Sub>
    //         <Actions>
    //           {thread ? null : (
    //             <Button onClick={() => selectThread(comment.id)}>
    //               <Reply
    //                 width={16}
    //                 height={16}
    //                 strokeWidth={2}
    //                 color={'#667d99'}
    //               />
    //               <Trans>Reply</Trans> ({totalReplies})
    //             </Button>
    //           )}
    //         </Actions>
    //       </Sub>
    //     )}
    //   </Desc>
    // </FeedItem>
  );
};

export default Event;

const Date = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  font-weight: 500;
`;

const Items = styled(Flex)`
  flex: 1;
`;

const Actions = styled(Flex)``;

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

const SubText = styled(Text)`
font-size: 14px;
color: dimgrey;
> a {
  text-decoration: none;
  font-weight: 600
  // color: ${props => props.theme.styles.colors.darkgray} !important;
  &:hover {
    text-decoration: underline;
  }
}
`;

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

`;
