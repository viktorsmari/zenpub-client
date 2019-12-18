import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import * as React from 'react';
import { SFC } from 'react';
// import { Star } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import removeMd from 'remove-markdown';
import media from 'styled-media-query';
import { BasicCollectionFragment } from '../../../graphql/fragments/generated/basicCollection.generated';
import { BasicCommentWithInReplyToFragment } from '../../../graphql/fragments/generated/basicComment.generated';
import { BasicCommunityFragment } from '../../../graphql/fragments/generated/basicCommunity.generated';
import { BasicResourceFragment } from '../../../graphql/fragments/generated/basicResource.generated';
import { BasicUserFragment } from '../../../graphql/fragments/generated/basicUser.generated';
import { useDeleteMutationMutation } from '../../../graphql/generated/delete.generated';
import { useLikeMutationMutation } from '../../../graphql/generated/like.generated';
import { Comment, User } from '../../../graphql/types.generated';
import styled from '../../../themes/styled';
import Link from '../Link/Link';
import Actions from './Actions';
import Preview from './preview';

interface Props {
  user: User | BasicUserFragment;
  context: any;
  verb: string;
  createdAt: string;
}
interface Likeable {
  id: string;
  myLike?: { id: string } | null;
}
interface CollectionProps {
  collection: BasicCollectionFragment;
  toggleLike: (likeable: Likeable) => unknown;
  noAction?: boolean;
  user: BasicUserFragment | User;
  createdAt;
  verb: string;
}

interface ResourceProps {
  resource: BasicResourceFragment;
  toggleLike: (likeable: Likeable) => unknown;
  noAction?: boolean;
  user: BasicUserFragment | User;
  createdAt: string;
  verb: string;
}

interface CommentProps {
  comment: BasicCommentWithInReplyToFragment;
  toggleLike: (likeable: Likeable) => unknown;
  noAction?: boolean;
  user: BasicUserFragment | User;
  createdAt: string;
  verb: string;
}

interface CommunityProps {
  community: BasicCommunityFragment;
  toggleLike: (likeable: Likeable) => unknown;
  noAction?: boolean;
  user: BasicUserFragment | User;
  createdAt: string;
  verb: string;
}

const CollectionItem: SFC<CollectionProps> = ({
  noAction,
  toggleLike,
  collection,
  user,
  createdAt,
  verb
}) => (
  <Member>
    <MemberItem mr={2}>
      <Img src={user.icon || ''} />
    </MemberItem>
    <MemberInfo>
      <Name>
        <Link to={'/user/' + user.id}>
          {user.name}{' '}
          {user.preferredUsername ? (
            <Username ml={2}>@{user.preferredUsername}</Username>
          ) : null}
        </Link>
        <Spacer mr={2}>·</Spacer>{' '}
        <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
      </Name>

      <Box>
        <SubText mt={1}>
          <Trans>
            {verb === 'CREATED' ? 'created' : 'updated'} a collection in
          </Trans>{' '}
          <NavLink
            to={`/communities/${
              collection.community ? collection.community.id : ''
            }`}
          >
            @{collection.community ? collection.community.name : ''}
          </NavLink>
        </SubText>
        <Preview
          icon={collection.icon || ''}
          title={collection.name}
          summary={collection.summary || ''}
          url={`/collections/${collection.id}`}
        />
        {noAction ? null : (
          <Actions
            // totalReplies={collection.threads.totalCount as number}
            // totalLikes={collection.likes.totalCount as number}
            // comment={collection}
            toggleLike={() => toggleLike(collection)}
            iLikeIt={!!collection.myLike}
          />
        )}
      </Box>
    </MemberInfo>
  </Member>
);
const ResourceItem: SFC<ResourceProps> = ({
  noAction,
  toggleLike,
  resource,
  user,
  createdAt,
  verb
}) => (
  <Member>
    <MemberItem mr={2}>
      <Img src={user.icon || ''} />
    </MemberItem>
    <MemberInfo>
      <Name>
        <Link to={'/user/' + user.id}>
          {user.name}{' '}
          {user.preferredUsername ? (
            <Username ml={2}>@{user.preferredUsername}</Username>
          ) : null}
        </Link>
        <Spacer mr={2}>·</Spacer>{' '}
        <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
      </Name>
      <Box>
        <SubText mt={1}>
          <Trans>{verb === 'CREATED' ? 'created' : 'updated'} a resource</Trans>{' '}
          <Trans>in</Trans>{' '}
          <NavLink to={`/collections/${resource.collection.id}`}>
            +{resource.collection.name}
          </NavLink>
        </SubText>
        <Preview
          icon={resource.icon || ''}
          title={resource.name}
          summary={resource.summary || ''}
          url={`/collections/${resource.collection.id}`}
        />
      </Box>
    </MemberInfo>
  </Member>
);
const CommentItem: SFC<CommentProps> = ({
  toggleLike,
  noAction,
  comment,
  verb,
  user,
  createdAt
}) => (
  <Member>
    <MemberItem mr={2}>
      <Img src={user.icon || ''} />
    </MemberItem>
    <MemberInfo>
      <Name>
        <Link to={'/user/' + user.id}>
          {user.name}{' '}
          {user.preferredUsername ? (
            <Username ml={2}>@{user.preferredUsername}</Username>
          ) : null}
        </Link>
        <Spacer mr={2}>·</Spacer>{' '}
        <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
      </Name>
      {comment.inReplyTo !== null ? (
        <InReply my={2}>
          <MemberWrapped>
            {/* <MemberItem className={'miniavatar'} mr={2}> */}
            {/* <Img src={comment.thread.context.creator.icon} /> */}
            {/* </MemberItem> */}
            <MemberInfo>
              {/* <Name>
            <Link
              to={'/user/' + comment.thread.context.creator.id}
            >
              {comment.thread.context.creator.name}
            </Link>
            <Spacer mr={2}>·</Spacer>{' '}
            <Date>
              {DateTime.fromISO(comment.thread.createdAt).toRelative()}
            </Date>
          </Name> */}

              {comment.thread.context.__typename === 'Collection' ? (
                <CollectionItem
                  user={comment.thread.context.creator}
                  createdAt={comment.thread.context.createdAt}
                  noAction
                  verb={verb}
                  toggleLike={toggleLike}
                  collection={comment.thread.context}
                /> // qui il comment.thread.context è risolto come Collection
              ) : comment.thread.context.__typename === 'Resource' ? (
                <ResourceItem
                  user={comment.thread.context.creator}
                  createdAt={comment.thread.context.createdAt}
                  noAction
                  verb={verb}
                  toggleLike={toggleLike}
                  resource={comment.thread.context}
                /> // qui il comment.thread.context è risolto come Resource
              ) : comment.thread.context.__typename === 'Community' ? (
                <CommunityItem
                  user={comment.thread.context.creator}
                  createdAt={comment.thread.context.createdAt}
                  noAction
                  verb={verb}
                  toggleLike={toggleLike}
                  community={comment.thread.context}
                /> // qui il context è risolto come Community
              ) : null}
            </MemberInfo>
          </MemberWrapped>
        </InReply>
      ) : null}
      <Comment>
        {comment.content && comment.content.length > 320
          ? removeMd(comment.content).replace(
              /^([\s\S]{316}[^\s]*)[\s\S]*/,
              '$1...'
            )
          : removeMd(comment.content)}
      </Comment>
      {noAction ? null : (
        <Actions
          // totalReplies={comment.thread.comments.totalCount}
          // totalLikes={comment.likes.totalCount}
          comment={comment}
          toggleLike={() => toggleLike(comment)}
          iLikeIt={!!comment.myLike}
        />
      )}
    </MemberInfo>
  </Member>
);
const CommunityItem: SFC<CommunityProps> = ({
  verb,
  community,
  user,
  createdAt
}) => (
  <Member>
    <MemberItem mr={2}>
      <Img src={user.icon || ''} />
    </MemberItem>
    <MemberInfo>
      <Name>
        <Link to={'/user/' + user.id}>
          {user.name}{' '}
          {user.preferredUsername ? (
            <Username ml={2}>@{user.preferredUsername}</Username>
          ) : null}
        </Link>
        <Spacer mr={2}>·</Spacer>{' '}
        <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
      </Name>
      <Box>
        <SubText mt={1}>
          <Trans>
            {verb === 'CREATED' ? 'created' : 'updated'} a community
          </Trans>{' '}
          <NavLink to={`/communities/${community.id}`}>
            @{community.name}
          </NavLink>
        </SubText>
        <Preview
          icon={community.icon || ''}
          title={community.name}
          summary={community.summary || ''}
          url={`/communities/${community.id}`}
        />
      </Box>
    </MemberInfo>
  </Member>
);

const Item: SFC<Props> = ({ user, context, verb, createdAt }) => {
  const [like] = useLikeMutationMutation();
  const [undoLike] = useDeleteMutationMutation();
  const toggleLike = React.useCallback(
    (likeable: Likeable) => {
      likeable.myLike
        ? undoLike({ variables: { contextId: likeable.myLike.id } })
        : like({ variables: { contextId: likeable.id } });
    },
    [like, undoLike]
  );
  /*   const navigateTo = 
  context.__typename === 'Collection' ? 'collections' :
  context.__typename === 'Comment' ? 'thread' :
  context.__typename === 'Community' ? 'communities' :
  null
 */

  return (
    <FeedItem>
      {/* {context.__typename} */}
      {/* navigateTo && <NavigateToThread to={`/${navigateTo}/${context.id}`} /> */}
      {context.__typename === 'Collection' ? (
        <CollectionItem
          user={user}
          verb={verb}
          createdAt={createdAt}
          toggleLike={toggleLike}
          collection={context}
          noAction
        /> // qui il context è risolto come Collection
      ) : context.__typename === 'Resource' ? (
        <ResourceItem
          user={user}
          verb={verb}
          createdAt={createdAt}
          toggleLike={toggleLike}
          resource={context}
          noAction
        /> // qui il context è risolto come Resource
      ) : context.__typename === 'Comment' ? (
        <CommentItem
          user={user}
          verb={verb}
          createdAt={createdAt}
          toggleLike={toggleLike}
          comment={context}
        /> // qui il context è risolto come Comment
      ) : context.__typename === 'Community' ? (
        <CommunityItem
          user={user}
          verb={verb}
          createdAt={createdAt}
          toggleLike={toggleLike}
          community={context}
          noAction
        /> // qui il context è risolto come Community
      ) : null
      /* 
        implement other activity types
        <div>Unknown should never happen {context.__typename}</div> 
        */
      }
    </FeedItem>
  );
};

// const NavigateToThread = styled(Link)`
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   z-index: 1;
// `;

const InReply = styled(Box)`
  color: ${props => props.theme.colors.gray};
  position: relative;
  opacity: 0.8
  &:after {
    position: absolute;
    content: '';
    width: 4px;
    top: 10px;
    left: -2px;
    bottom: 10px;
    display: block;
    background: #f3f3f3;
  }
  a {
    color: ${props => props.theme.colors.black} !important;
    font-weight: 700;
  }
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  margin: 0 8px;
  font-weight: 500;

  ${media.lessThan('1280px')`
  display: none;
 `};
`;

const Spacer = styled(Text)`
  color: ${props => props.theme.colors.gray};
  margin-right: 8px;
  font-weight: 500;
  ${media.lessThan('1280px')`
  display: none;
 `};
`;

const Date = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: 12px;
`;

const SubText = styled(Flex)`
font-size: 14px;
align-items: end;
display: inline;
svg {
  fill: #ffc02d;
  margin-right: 8px;
}
> a {
  position: relative;
  z-index: 9;
  text-decoration: none;
  font-weight: 800
  margin-left: 4px;
  color: ${props => props.theme.colors.darkgray} !important;
  &:hover {
    text-decoration: underline;
  }
}
`;

const Name = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.colors.darkgray};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
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

const MemberWrapped = styled(Member)`
  padding: 8px;
  .miniavatar {
    min-width: 40px !important;
    height: 40px;
  }
`;

const MemberInfo = styled(Box)`
  margin-top: 4px;
  width: 100%;
`;

const Comment = styled.div`
  margin-top: 6px;
  & a {
    color: ${props => props.theme.colors.darkgray} !important;
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
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.lighter};
  }
  border-bottom: 1px solid  ${props => props.theme.colors.lightgray};
  a {
    text-decoration: none;
    color: inherit !important;
    &:hover {
      text-decoration: underline
    }
  }

`;

export default Item;
