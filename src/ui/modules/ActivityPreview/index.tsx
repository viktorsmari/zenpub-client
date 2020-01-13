// import { Trans } from '@lingui/react';
import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import Actions from './Actions';
import Preview, { ActivityVerb, ContextType } from './preview';
import { FormikHook } from 'common/types';

export enum Status {
  Loading,
  Loaded
}

export interface Actor {
  icon: string;
  link: {
    url: string;
    external: boolean;
  };
  name: string;
  preferredUsername: string;
}
export interface BaseActivity {
  contextType: ContextType;
  verb: ActivityVerb;
  status: Status.Loaded;
  createdAt: string;
  actor: Actor;
  inReplyToContext: {
    type: ContextType;
    verb: ActivityVerb;
    context: ConcreteContext;
    actor: Actor;
  } | null;
  replies: number;
  replyFormik: FormikHook<{ replyMessage: string }>;
}

interface WithLike {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}

// interface WithFollow {
//   toggleFollowFormik: FormikHook<{}>
//   following: boolean
// }

interface ConcreteContext {
  icon: string;
  title: string;
  summary: string;
  link: {
    url: string;
    external: boolean;
  };
}

export interface ActivityLoading {
  status: Status.Loading;
}

export interface CommentContext extends BaseActivity, WithLike {
  contextType: ContextType.Comment;
  msgContent: string;
}
export interface ResourceContext
  extends BaseActivity,
    ConcreteContext,
    WithLike {
  contextType: ContextType.Resource;
}
export interface CollectionContext
  extends BaseActivity,
    ConcreteContext,
    WithLike {
  contextType: ContextType.Collection;
}
export interface CommunityContext
  extends BaseActivity,
    ConcreteContext,
    WithLike {
  contextType: ContextType.Community;
}

export interface LikeContext extends BaseActivity {
  contextType: ContextType.Like;
}
export interface FlagContext extends BaseActivity {
  contextType: ContextType.Flag;
}
export interface FollowContext extends BaseActivity {
  contextType: ContextType.Follow;
}

export type Context =
  | CommentContext
  | ResourceContext
  | CollectionContext
  | CommunityContext
  | LikeContext
  | FlagContext
  | FollowContext;

export interface ActivityLoaded {
  status: Status.Loaded;
  context: Context;
}

export interface Props {
  activity: ActivityLoaded | ActivityLoading;
}

export const ActivityPreview: SFC<Props> = ({ activity }) => {
  if (activity.status === Status.Loading) {
    return <Trans>loading ...</Trans>;
  }
  const { actor, createdAt, type, verb, context, comment } = activity;
  return (
    <FeedItem>
      <Actor actor={actor} createdAt={createdAt} />
      <Wrapper>
        <Preview context={context} verb={verb} type={type} comment={comment} />
        <Actions
          totalReplies={13}
          totalLikes={13}
          iLikeIt={true}
          toggleLike={() => console.log('')}
        />
      </Wrapper>
    </FeedItem>
  );
};

const Actor = ({ actor, createdAt }) => (
  <Member>
    <Avatar initials={actor.name} src={actor.icon} />
    <MemberInfo ml={2}>
      <Name>
        <Link to={'/user/' + actor.id}>
          {actor.name}
          <Username ml={2}>@{actor.preferredUsername}</Username>
        </Link>
        <Spacer mr={2}>·</Spacer>
        <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
      </Name>
    </MemberInfo>
  </Member>
);

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  margin: 0 8px;
  font-weight: 500;

//   ${media.lessThan('1280px')`
//   display: none;
//  `};
`;

const Spacer = styled(Text)`
  color: ${props => props.theme.colors.gray};
  margin-right: 8px;
  font-weight: 500;
//   ${media.lessThan('1280px')`
//   display: none;
//  `};
`;

const Date = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: 12px;
`;

const Name = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.colors.darkgray};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 2px;
  ${media.lessThan('1280px')`
  flex-direction: column;
  align-items: normal;
 `};

  a {
    font-weight: 800;
    display: flex;
    text-decoration: none;
    align-items: center;
    position: relative;
    z-index: 9;
    color: ${props => props.theme.colors.darkgray} !important;
  }
`;

const Member = styled(Flex)`
  align-items: stretch;
`;

const MemberInfo = styled(Box)`
  width: 100%;
  margin-top: -4px;
`;

const Wrapper = styled(Box)`
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
  margin-top: -24px;
  margin-left: 54px;
  background: white;
`;
const FeedItem = styled(Box)`
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
  border-bottom: 1px solid  ${props => props.theme.colors.lightgray};
  a {
    text-decoration: none;
    // color: inherit !important;
    &:hover {
      text-decoration: underline
    }
  }

`;
