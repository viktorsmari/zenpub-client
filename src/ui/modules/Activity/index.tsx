// import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import React, { SFC } from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
// import removeMd from 'remove-markdown';
import media from 'styled-media-query';
// import { BasicCollectionFragment } from '../../../graphql/fragments/basicCollection.generated';
// import { BasicCommentWithInReplyToFragment } from '../../../graphql/fragments/basicComment.generated';
// import { BasicCommunityFragment } from '../../../graphql/fragments/basicCommunity.generated';
// import { BasicResourceFragment } from '../../../graphql/fragments/basicResource.generated';
// import { BasicUserFragment } from '../../../graphql/fragments/basicUser.generated';
// import { useDeleteMutationMutation } from '../../../graphql/delete.generated';
// import { useLikeMutationMutation } from '../../../graphql/like.generated';
// import { Comment, User } from '../../../graphql/types.generated';
import styled from 'ui/themes/styled';
import { Link } from 'react-router-dom';
import Actions from './Actions';
import Preview from './preview';
import { throwUnimplementedFn } from 'common/util/ctx-mock/throwUnimplementedFn';
import Avatar from 'ui/elements/Avatar';

// interface Likeable {
//   id: string;
//   myLike?: { id: string } | null;
// }
// interface CollectionProps {
//   collection: BasicCollectionFragment;
//   toggleLike: (likeable: Likeable) => unknown;
//   noAction?: boolean;
//   user: BasicUserFragment | User;
//   createdAt;
//   verb: string;
// }

// interface ResourceProps {
//   resource: BasicResourceFragment;
//   toggleLike: (likeable: Likeable) => unknown;
//   noAction?: boolean;
//   user: BasicUserFragment | User;
//   createdAt: string;
//   verb: string;
// }

// interface CommentProps {
//   comment: BasicCommentWithInReplyToFragment;
//   toggleLike: (likeable: Likeable) => unknown;
//   noAction?: boolean;
//   user: BasicUserFragment | User;
//   createdAt: string;
//   verb: string;
// }

// interface CommunityProps {
//   community: BasicCommunityFragment;
//   toggleLike: (likeable: Likeable) => unknown;
//   noAction?: boolean;
//   user: BasicUserFragment | User;
//   createdAt: string;
//   verb: string;
// }

// const CollectionItem: SFC<CollectionProps> = ({
//   collection,
//   user,
//   createdAt,
//   verb
// }) => (
//   <Member>
//     <MemberItem mr={2}>
//       <Img src={user.icon || ''} />
//     </MemberItem>
//     <MemberInfo>
//       <Name>
//         <Link to={'/user/' + user.id}>
//           {user.name}{' '}
//           {user.preferredUsername ? (
//             <Username ml={2}>@{user.preferredUsername}</Username>
//           ) : null}
//         </Link>
//         <Spacer mr={2}>·</Spacer>{' '}
//         <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
//       </Name>

//       <Box>
//         <SubText mt={1}>
//           <Trans>
//             {verb === 'CREATED' ? 'created' : 'updated'} a collection in
//           </Trans>{' '}
//           <NavLink
//             to={`/communities/${
//               collection.community ? collection.community.id : ''
//             }`}
//           >
//             @{collection.community ? collection.community.name : ''}
//           </NavLink>
//         </SubText>
//         <Preview
//           icon={collection.icon || ''}
//           title={collection.name}
//           summary={collection.summary || ''}
//           url={`/collections/${collection.id}`}
//         />
//         {/* {noAction ? null : (
//           <Actions
//             toggleLike={() => toggleLike(collection)}
//             iLikeIt={!!collection.myLike}
//           />
//         )} */}
//       </Box>
//     </MemberInfo>
//   </Member>
// );
// const ResourceItem: SFC<ResourceProps> = ({
//   noAction,
//   toggleLike,
//   resource,
//   user,
//   createdAt,
//   verb
// }) => (
//   <Member>
//     <MemberItem mr={2}>
//       <Img src={user.icon || ''} />
//     </MemberItem>
//     <MemberInfo>
//       <Name>
//         <Link to={'/user/' + user.id}>
//           {user.name}{' '}
//           {user.preferredUsername ? (
//             <Username ml={2}>@{user.preferredUsername}</Username>
//           ) : null}
//         </Link>
//         <Spacer mr={2}>·</Spacer>{' '}
//         <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
//       </Name>
//       <Box>
//         <SubText mt={1}>
//           <Trans>{verb === 'CREATED' ? 'created' : 'updated'} a resource</Trans>{' '}
//           <Trans>in</Trans>{' '}
//           <NavLink to={`/collections/${resource.collection.id}`}>
//             +{resource.collection.name}
//           </NavLink>
//         </SubText>
//         <Preview
//           icon={resource.icon || ''}
//           title={resource.name}
//           summary={resource.summary || ''}
//           url={`/collections/${resource.collection.id}`}
//         />
//       </Box>
//     </MemberInfo>
//   </Member>
// );
// const CommentItem: SFC<CommentProps> = ({
//   toggleLike,
//   noAction,
//   comment,
//   verb,
//   user,
//   createdAt
// }) => (
//   <Member>
//     <MemberItem mr={2}>
//       <Img src={user.icon || ''} />
//     </MemberItem>
//     <MemberInfo>
//       <Name>
//         <Link to={'/user/' + user.id}>
//           {user.name}{' '}
//           {user.preferredUsername ? (
//             <Username ml={2}>@{user.preferredUsername}</Username>
//           ) : null}
//         </Link>
//         <Spacer mr={2}>·</Spacer>{' '}
//         <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
//       </Name>
//       {comment.inReplyTo !== null ? (
//         <InReply my={2}>
//           <MemberWrapped>
//             {/* <MemberItem className={'miniavatar'} mr={2}> */}
//             {/* <Img src={comment.thread.context.creator.icon} /> */}
//             {/* </MemberItem> */}
//             <MemberInfo>
//               {/* <Name>
//             <Link
//               to={'/user/' + comment.thread.context.creator.id}
//             >
//               {comment.thread.context.creator.name}
//             </Link>
//             <Spacer mr={2}>·</Spacer>{' '}
//             <Date>
//               {DateTime.fromISO(comment.thread.createdAt).toRelative()}
//             </Date>
//           </Name> */}

//               {comment.thread.context.__typename === 'Collection' ? (
//                 <CollectionItem
//                   user={comment.thread.context.creator}
//                   createdAt={comment.thread.context.createdAt}
//                   noAction
//                   verb={verb}
//                   toggleLike={toggleLike}
//                   collection={comment.thread.context}
//                 /> // qui il comment.thread.context è risolto come Collection
//               ) : comment.thread.context.__typename === 'Resource' ? (
//                 <ResourceItem
//                   user={comment.thread.context.creator}
//                   createdAt={comment.thread.context.createdAt}
//                   noAction
//                   verb={verb}
//                   toggleLike={toggleLike}
//                   resource={comment.thread.context}
//                 /> // qui il comment.thread.context è risolto come Resource
//               ) : comment.thread.context.__typename === 'Community' ? (
//                 <CommunityItem
//                   user={comment.thread.context.creator}
//                   createdAt={comment.thread.context.createdAt}
//                   noAction
//                   verb={verb}
//                   toggleLike={toggleLike}
//                   community={comment.thread.context}
//                 /> // qui il context è risolto come Community
//               ) : null}
//             </MemberInfo>
//           </MemberWrapped>
//         </InReply>
//       ) : <Comment>
//       {comment.content && comment.content.length > 320
//         ? removeMd(comment.content).replace(
//             /^([\s\S]{316}[^\s]*)[\s\S]*/,
//             '$1...'
//           )
//         : removeMd(comment.content)}
//     </Comment>}

//       {/* {noAction ? null : (
//         <Actions
//           comment={comment}
//           toggleLike={() => toggleLike(comment)}
//           iLikeIt={!!comment.myLike}
//         />
//       )} */}
//     </MemberInfo>
//   </Member>
// );
// const CommunityItem: SFC<CommunityProps> = ({
//   verb,
//   community,
//   user,
//   createdAt
// }) => (
//   <Member>
//     <MemberItem mr={2}>
//       <Img src={user.icon || ''} />
//     </MemberItem>
//     <MemberInfo>
//       <Name>
//         <Link to={'/user/' + user.id}>
//           {user.name}{' '}
//           {user.preferredUsername ? (
//             <Username ml={2}>@{user.preferredUsername}</Username>
//           ) : null}
//         </Link>
//         <Spacer mr={2}>·</Spacer>{' '}
//         <Date>{DateTime.fromISO(createdAt).toRelative()}</Date>
//       </Name>
//       <Box>
//         <SubText mt={1}>
//           <Trans>
//             {verb === 'CREATED' ? 'created' : 'updated'} a community
//           </Trans>{' '}
//           <NavLink to={`/communities/${community.id}`}>
//             @{community.name}
//           </NavLink>
//         </SubText>
//         <Preview
//           icon={community.icon || ''}
//           title={community.name}
//           summary={community.summary || ''}
//           url={`/communities/${community.id}`}
//         />
//       </Box>
//     </MemberInfo>
//   </Member>
// );

interface Props {
  activityId;
  // user: User | BasicUserFragment;
  // context: any;
  // verb: string;
  // createdAt: string;
}

interface ActivityContextData {
  actor: {
    icon: string;
    id: string;
    name: string;
    preferredUsername: string;
  };
  createdAt: string;
  type: string;
  verb: string;
  context: {
    icon: string;
    title: string;
    summary: string;
    url: string;
  };
  comment: string;
}

export type ActivityContext = (
  cfg: { activityId: string }
) => ActivityContextData;

export const ActivityContext = React.createContext<ActivityContext>(
  throwUnimplementedFn<ActivityContext>('Activity')
);
// const [like] = useLikeMutationMutation();
// const [undoLike] = useDeleteMutationMutation();
// const toggleLike = React.useCallback(
//   (likeable: Likeable) => {
//     likeable.myLike
//       ? undoLike({ variables: { contextId: likeable.myLike.id } })
//       : like({ variables: { contextId: likeable.id } });
//   },
//   [like, undoLike]
// );
// Primary timeline item
export const Activity: SFC<Props> = ({ activityId }) => {
  const { actor, createdAt, type, verb, context, comment } = React.useContext(
    ActivityContext
  )({ activityId });
  return (
    <FeedItem>
      <NavigateToThread to={`/thread/${activityId}`} />
      <AdditionalInfo verb={verb} type={type} />
      <Actor actor={actor} createdAt={createdAt} />
      <Wrapper>
        <Preview context={context} type={type} comment={comment} />
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

const AdditionalInfo = ({ verb, type }) => (
  <Text mb={2} variant="suptitle">
    {verb + ' ' + type}
  </Text>
);

const NavigateToThread = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

// const InReply = styled(Box)`
//   color: ${props => props.theme.colors.gray};
//   position: relative;
//   opacity: 0.8
//   &:after {
//     position: absolute;
//     content: '';
//     width: 4px;
//     top: 10px;
//     left: -2px;
//     bottom: 10px;
//     display: block;
//     background: #f3f3f3;
//   }
//   a {
//     color: ${props => props.theme.colors.black} !important;
//     font-weight: 700;
//   }
// `;

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

// const SubText = styled(Flex)`
// font-size: 14px;
// align-items: end;
// display: inline;
// svg {
//   fill: #ffc02d;
//   margin-right: 8px;
// }
// > a {
//   position: relative;
//   z-index: 9;
//   text-decoration: none;
//   font-weight: 800
//   margin-left: 4px;
//   color: ${props => props.theme.colors.darkgray} !important;
//   &:hover {
//     text-decoration: underline;
//   }
// }
// `;

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

// const MemberWrapped = styled(Member)`
//   padding: 8px;
//   .miniavatar {
//     min-width: 40px !important;
//     height: 40px;
//   }
// `;

const MemberInfo = styled(Box)`
  width: 100%;
  margin-top: -4px;
`;

// const Comment = styled.div`
//   margin-top: 6px;
//   & a {
//     color: ${props => props.theme.colors.darkgray} !important;
//     font-weight: 400 !important;
//     font-size: 14px;
//     text-decoration: none;
//     line-height: 20px;
//   }
// `;
const Wrapper = styled(Box)`
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
  margin-top: -24px;
  margin-left: 54px;
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
