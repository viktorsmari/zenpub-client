import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import * as React from 'react';
import { SFC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass';
import removeMd from 'remove-markdown';
import { GqlSdkCtx } from '../../../containers/App/ProvideGqlSdk';
import styled from '../../../themes/styled';
import Collection from '../Collection/CollectionSmall';
import CommunitySmall from '../Community/CommunitySmall';
import Link from '../Link/Link';
import Resource from '../Resource/Resource';
import Actions from './Actions';
import { Star } from 'react-feather';
interface Props {
  userpage?: boolean;
  user: any;
  node: any;
}

const Item: SFC<Props> = ({ user, node, userpage }) => {
  const FAKE________COMMENT_I_LIKE_IT = !!Math.round(Math.random());
  const sdk = React.useContext(GqlSdkCtx);
  const [iLikeIt, setiLikeIt] = React.useState(FAKE________COMMENT_I_LIKE_IT);
  const toggleLike = React.useCallback(
    () => {
      if (iLikeIt) {
        sdk
          .likeCommentMutation({ localId: node.object.localId })
          .then(_ => setiLikeIt(false));
      } else {
        sdk
          .undoLikeCommentMutation({ localId: node.object.localId })
          .then(_ => setiLikeIt(true));
      }
    },
    [node, iLikeIt]
  );
  return (
    <FeedItem>
      <NavigateToThread to={`/thread/${node.object.localId}`} />
      {node.activityType === 'LikeComment' ? (
        <Box>
          <SubText mb={2}>
            <Star size="20" color="#ca8f04" />
            <NavLink style={{ marginRight: '4px' }} to="/">
              {user.name}
            </NavLink>
            <Trans>boosted</Trans>
          </SubText>
          <MemberWrapped>
            <MemberItem mr={2}>
              <Img src={node.object.author.icon} />
            </MemberItem>
            <MemberInfo>
              <Name>
                <Link to={'/user/' + node.object.author.localId}>
                  {node.object.author.name}{' '}
                  {node.object.author.preferredUsername ? (
                    <Username>@{node.object.author.preferredUsername}</Username>
                  ) : null}
                </Link>
                <Spacer>·</Spacer>{' '}
                <Date>{DateTime.fromISO(node.published).toRelative()}</Date>
              </Name>
              <Comment>
                {node.object.content && node.object.content.length > 320
                  ? removeMd(node.object.content).replace(
                      /^([\s\S]{316}[^\s]*)[\s\S]*/,
                      '$1...'
                    )
                  : removeMd(node.object.content)}
              </Comment>
            </MemberInfo>
          </MemberWrapped>
        </Box>
      ) : (
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
                    <InReply my={2} fontSize={1}>
                      <Trans>in reply to</Trans>{' '}
                      <Link
                        to={`/user/${node.object.inReplyTo.author.localId}`}
                      >
                        {node.object.inReplyTo.author.name}
                      </Link>
                    </InReply>
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
                <CommunityPreview mt={2}>
                  <Collection collection={node.object} />
                </CommunityPreview>
              </SubText>
            ) : node.activityType === 'CreateCommunity' ? (
              <SubText>
                <Trans>created a new community</Trans>{' '}
                <NavLink to={`/communities/${node.object.localId}`}>
                  @{node.object.name}
                </NavLink>
                <CommunityPreview mt={2}>
                  <CommunitySmall community={node.object} />
                </CommunityPreview>
              </SubText>
            ) : null}

            {node.activityType === 'CreateComment' ? (
              <Actions
                totalReplies={node.object.replies.totalCount as number}
                totalLikes={node.object.likers.totalCount as number}
                toggleLike={toggleLike}
                iLikeIt={iLikeIt}
              />
            ) : null}
          </MemberInfo>
        </Member>
      )}
    </FeedItem>
  );
};
const NavigateToThread = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

const InReply = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  a {
    color: ${props => props.theme.styles.colors.black} !important;
    font-weight: 700;
  }
`;

const ResourcePreview = styled(Box)`
  border: 1px solid ${props => props.theme.styles.colors.lightgray};
  border-radius: 2px;
  max-height: 200px;
  overflow-y: hidden;
  > div {
    padding: 8px;
    margin: 0;
  }
`;

const CommunityPreview = styled(Box)`
  border: 1px solid ${props => props.theme.styles.colors.lightgray};
  border-radius: 2px;
  max-width: 200px;
  overflow-y: hidden;
  > div {
    padding: 8px;
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

const SubText = styled(Flex)`
font-size: 14px;
align-items: center;
svg {
  fill: #ffc02d;
  margin-right: 8px;
}
> a {
  position: relative;
  z-index: 9;
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
    position: relative;
    z-index: 9;
    color: ${props => props.theme.styles.colors.darkgray} !important;
  }
`;

const Member = styled(Flex)`
  align-items: stretch;
`;

const MemberWrapped = styled(Member)`
  padding: 8px;
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
  min-width: 48px !important;
  .--rtl & {
    margin-right: 0px;
    margin-left: 8px;
  }
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
  .--rtl & {
    margin-right: 0px;
    margin-left: 8px;
  }
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
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.styles.colors.lighter};
  }
  border-bottom: 1px solid  ${props => props.theme.styles.colors.lightgray};
  a {
    text-decoration: none;
    color: inherit !important;
    &:hover {
      text-decoration: underline
    }
  }

`;

export default Item;
