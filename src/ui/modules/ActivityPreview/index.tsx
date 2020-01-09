// import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import React, { SFC } from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { Link } from 'react-router-dom';
import Actions from './Actions';
import Preview, { ActivityType, ContextType } from './preview';
import { throwUnimplementedFn } from 'common/util/ctx-mock/throwUnimplementedFn';
import Avatar from 'ui/elements/Avatar';

interface Props {
  activityId;
}

export interface ActivityPreviewContextData {
  actor: {
    icon: string;
    id: string;
    name: string;
    preferredUsername: string;
  };
  createdAt: string;
  type: ContextType;
  verb: ActivityType;
  context: {
    icon: string;
    title: string;
    summary: string;
    url: string;
    actor: {
      id: string;
      name: string;
    };
  };
  comment: string;
}

export type ActivityPreviewContext = (
  cfg: { activityId: string }
) => ActivityPreviewContextData;

export const ActivityPreviewContext = React.createContext<
  ActivityPreviewContext
>(throwUnimplementedFn<ActivityPreviewContext>('Activity'));

export const ActivityPreview: SFC<Props> = ({ activityId }) => {
  const { actor, createdAt, type, verb, context, comment } = React.useContext(
    ActivityPreviewContext
  )({ activityId });
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
