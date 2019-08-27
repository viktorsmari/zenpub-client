import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import * as React from 'react';
import { SFC } from 'react';
import removeMd from 'remove-markdown';
import styled from '../../../themes/styled';
import Link from '../Link/Link';
import { Box, Flex, Text } from 'rebass';
import Resource from '../Resource/Resource';
import Collection from '../Collection/CollectionSmall';
import CommunitySmall from '../Community/CommunitySmall';
import { MessageCircle, Star } from 'react-feather';
import { NavLink } from 'react-router-dom';

interface Props {
  userpage?: boolean;
  user: any;
  node: any;
}

const Item: SFC<Props> = ({ user, node, userpage }) => {
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
              <Date>{DateTime.fromISO(node.published).toRelative()}</Date>
            </Name>
          ) : (
            <Name>
              <Trans>Deleted user</Trans>
            </Name>
          )}

          {node.activityType === 'JoinCommunity' ? (
            <SubText>
              <Trans>joined</Trans>{' '}
              <NavLink to={`/communities/${node.object.localId}`}>
                @{node.object.name}
              </NavLink>
            </SubText>
          ) : node.activityType === 'CreateComment' ? (
            <>
              <SubText>
                {node.object.inReplyTo !== null ? (
                  <Trans>in reply</Trans>
                ) : null}
              </SubText>
              <Comment>
                {node.object.content && node.object.content.length > 320
                  ? removeMd(node.object.content).replace(
                      /^([\s\S]{316}[^\s]*)[\s\S]*/,
                      '$1...'
                    )
                  : removeMd(node.object.content)}
              </Comment>
            </>
          ) : node.activityType === 'UpdateCommunity' ? (
            <SubText>
              <Trans>updated</Trans>{' '}
              <NavLink to={`/communities/${node.object.localId}`}>
                @{node.object.name}
              </NavLink>
            </SubText>
          ) : node.activityType === 'UpdateCollection' ? (
            <SubText>
              <Trans>updated</Trans>{' '}
              <NavLink
                to={`/communities/${
                  node.object.community.localId
                }/collections/${node.object.localId}`}
              >
                +{node.object.name}
              </NavLink>
            </SubText>
          ) : node.activityType === 'FollowCollection' ? (
            <SubText>
              <Trans>followed</Trans>{' '}
              <NavLink
                to={`/communities/${
                  node.object.community.localId
                }/collections/${node.object.localId}`}
              >
                +{node.object.name}
              </NavLink>
            </SubText>
          ) : node.activityType === 'CreateResource' ? (
            <SubText>
              <Trans>added a new resource</Trans> <Trans>in</Trans>{' '}
              <NavLink
                to={`/communities/${
                  node.object.collection.community.localId
                }/collections/${node.object.collection.localId}`}
              >
                +{node.object.collection.name}
              </NavLink>
              <ResourcePreview mt={2}>
                <Resource
                  icon={node.object.icon}
                  title={node.object.name}
                  summary={node.object.summary}
                  url={node.object.url}
                  localId={node.object.localId}
                />
              </ResourcePreview>
            </SubText>
          ) : node.activityType === 'CreateCollection' ? (
            <SubText>
              <Trans>created a new collection</Trans>{' '}
              <NavLink
                to={`/communities/${
                  node.object.community.localId
                }/collections/${node.object.localId}`}
              >
                +{node.object.name}
              </NavLink>
              <ResourcePreview mt={2}>
                <Collection collection={node.object} />
              </ResourcePreview>
            </SubText>
          ) : node.activityType === 'CreateCommunity' ? (
            <SubText>
              <Trans>created a new community</Trans>{' '}
              <NavLink to={`/communities/${node.object.localId}`}>
                @{node.object.name}
              </NavLink>
              <ResourcePreview mt={2}>
                <CommunitySmall community={node.object} />
              </ResourcePreview>
            </SubText>
          ) : null}
          {node.activityType === 'CreateComment' ? (
            <BoxLink to={`/communities/${node.object.context.localId}`}>
              @{node.object.context.name}
            </BoxLink>
          ) : // : node.activityType === "JoinCommunity" || node.activityType === "CreateCommunity" || node.activityType === "UpdateCommunity" ?
          // <BoxLink to={`/communities/${node.object.localId}`}>
          //   @{node.object.name}
          // </BoxLink>
          // : node.activityType === "FollowCollection" || node.activityType === "UpdateCollection" || node.activityType === "CreateCollection"  ?
          // <BoxLink to={`/communities/${node.object.community.localId}/collections/${node.object.localId}` }>
          // +{node.object.name}
          // </BoxLink>
          // : node.activityType === "CreateResource" ?
          // <BoxLink to={`/communities/${node.object.collection.community.localId}/collections/${node.object.collection.localId}` }>
          // +{node.object.collection.name}
          // </BoxLink>
          // :
          null}
          {node.activityType === 'CreateComment' ? (
            <Actions mt={2}>
              <Items>
                <ActionItem>
                  <NavLink to={`/thread/${node.object.localId}`}>
                    <ActionIcon>
                      <MessageCircle color="rgba(0,0,0,.4)" size="16" />
                    </ActionIcon>
                    <Text ml={2}>0</Text>
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
          ) : null}
        </MemberInfo>
      </Member>
    </FeedItem>
  );
};

const Items = styled(Flex)`
  flex: 1;
`;

const BoxLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  display: inline-block;
  color: ${props => props.theme.styles.colors.orange} !important;
  margin-top: 8px;
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

const ResourcePreview = styled(Box)`
  border: 1px solid ${props => props.theme.styles.colors.lightgray};
  border-radius: 2px;
  > div {
    padding: 16px;
    margin: 0;
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

const Date = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  font-weight: 500;
`;

const SubText = styled(Text)`
font-size: 14px;
> a {
  text-decoration: none;
  font-weight: 800
  color: ${props => props.theme.styles.colors.darkgray} !important;
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

export default Item;
