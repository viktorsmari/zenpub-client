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

interface Props {
  userpage?: boolean;
  user: any;
  node: any;
}

const Item: SFC<Props> = ({ user, node, userpage }) => (
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
            <Link to={`/communities/${node.object.localId}`}>
              @{node.object.name}
            </Link>
          </SubText>
        ) : node.activityType === 'CreateComment' ? (
          <>
            <SubcommentText>
              {node.object.inReplyTo !== null ? (
                <Trans>replied to a</Trans>
              ) : (
                <Trans>started</Trans>
              )}{' '}
              <Link
                to={
                  node.object.context.__typename === 'Community'
                    ? `/communities/${node.object.context.localId}/thread/${
                        node.object.localId
                      }`
                    : `/collections/${node.object.context.localId}/thread/${
                        node.object.localId
                      }`
                }
              >
                <Trans>a thread</Trans>
              </Link>{' '}
              <Trans>in </Trans>{' '}
              <Link
                style={
                  node.object.context.__typename === 'Community'
                    ? {
                        textDecoration: 'none',
                        fontWeight: 800,
                        color: '#3C3C3C !important'
                      }
                    : {
                        textDecoration: 'none',
                        fontWeight: 600,
                        color: '#f98012'
                      }
                }
                to={
                  node.object.context.__typename === 'Community'
                    ? `/communities/${node.object.context.localId}`
                    : `/collections/${node.object.context.localId}`
                }
              >
                {node.object.context.__typename === 'Community' ? '@' : '+'}
                {node.object.context.name}
              </Link>
              :
            </SubcommentText>
            <Comment>
              <Link
                to={
                  node.object.context.__typename === 'Community'
                    ? `/communities/${node.object.context.localId}/thread/${
                        node.object.localId
                      }`
                    : `/collections/${node.object.context.localId}/thread/${
                        node.object.localId
                      }`
                }
              >
                {node.object.content && node.object.content.length > 320
                  ? removeMd(node.object.content).replace(
                      /^([\s\S]{316}[^\s]*)[\s\S]*/,
                      '$1...'
                    )
                  : removeMd(node.object.content)}
              </Link>
            </Comment>
          </>
        ) : node.activityType === 'UpdateCommunity' ? (
          <SubText>
            <Trans>updated</Trans>{' '}
            <Link to={`/communities/${node.object.localId}`}>
              @{node.object.name}
            </Link>
          </SubText>
        ) : node.activityType === 'UpdateCollection' ? (
          <SubCollText>
            <Trans>updated</Trans>{' '}
            <Link
              to={
                `/communities/${node.object.community.localId}/collections/` +
                node.object.localId
              }
            >
              +{node.object.name}
            </Link>
          </SubCollText>
        ) : node.activityType === 'FollowCollection' ? (
          <SubCollText>
            <Trans>followed</Trans>{' '}
            <Link
              to={
                `/communities/${node.object.community.localId}/collections/` +
                node.object.localId
              }
            >
              +{node.object.name}
            </Link>
          </SubCollText>
        ) : node.activityType === 'CreateResource' ? (
          <SubResourceText>
            <Trans>added a new resource</Trans> <Trans>in</Trans>{' '}
            <Link
              to={
                `/communities/${
                  node.object.collection.community.localId
                }/collections/` + node.object.collection.localId
              }
            >
              +{node.object.collection.name}
            </Link>{' '}
            <ResourcePreview mt={2}>
              <Resource
                icon={node.object.icon}
                title={node.object.name}
                summary={node.object.summary}
                url={node.object.url}
                localId={node.object.localId}
              />
            </ResourcePreview>
          </SubResourceText>
        ) : node.activityType === 'CreateCollection' ? (
          <SubResourceText>
            <Trans>created</Trans>{' '}
            <Link
              to={
                `/communities/${node.object.community.localId}/collections/` +
                node.object.localId
              }
            >
              +{node.object.name}
            </Link>{' '}
            <ResourcePreview mt={2}>
              <Collection collection={node.object} />
            </ResourcePreview>
          </SubResourceText>
        ) : node.activityType === 'CreateCommunity' ? (
          <SubResourceText>
            <Trans>created</Trans>{' '}
            <Link to={`/communities/${node.object.localId}`}>
              @{node.object.name}
            </Link>{' '}
            <ResourcePreview mt={2}>
              <CommunitySmall community={node.object} />
            </ResourcePreview>
          </SubResourceText>
        ) : null}
      </MemberInfo>
    </Member>
  </FeedItem>
);

const ResourcePreview = styled(Box)`
  background: ${props => props.theme.styles.colors.lighter};
  border-radius: 4px;
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
a {
  text-decoration: none;
  font-weight: 800
  color: ${props => props.theme.styles.colors.darkgray} !important;
}
`;

const SubcommentText = styled(Text)`
font-size: 14px;
a {
  text-decoration: none;
  font-weight: 600
  color: ${props => props.theme.styles.colors.orange};
}
`;

const SubResourceText = styled(Text)`
font-size: 14px;
a {
  text-decoration: none;
  font-weight: 600
  color: ${props => props.theme.styles.colors.orange};
}
`;

const SubCollText = styled(Text)`
font-size: 14px;
a {
  text-decoration: none;
  font-weight: 600
  color: ${props => props.theme.styles.colors.orange};
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
  background:${props => props.theme.styles.colour.feedBg};
  margin-top: 0
  z-index: 10;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.styles.colour.divider};
`;

export default Item;
