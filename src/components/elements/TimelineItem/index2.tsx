// import { Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import * as React from 'react';
import { SFC } from 'react';
// import { Star } from 'react-feather';
// import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
// import removeMd from 'remove-markdown';
import styled from '../../../themes/styled';
import Link from '../Link/Link';
// import Actions from './Actions';
// import Preview from './preview';
import media from 'styled-media-query';
// import { useLikeMutationMutation } from '../../../graphql/generated/like.generated';
// import { useDeleteMutation } from '../../../graphql/generated/delete.generated';
import {
  Activity,
  Collection,
  Comment,
  Community,
  Resource
} from '../../../graphql/types';
import {} from '../../../graphql/types';

interface Props {
  userpage?: boolean;
  user: any;
  activity: Activity;
}

interface CollectionProps {
  activity: Activity;
  collection: Collection;
}

interface ResourceProps {
  activity: Activity;
  resource: Resource;
}

interface CommentProps {
  activity: Activity;
  comment: Comment;
}

interface CommunityProps {
  activity: Activity;
  community: Community;
}

const CollectionItem: SFC<CollectionProps> = ({ activity, collection }) => (
  <Box>collection</Box>
);
const ResourceItem: SFC<ResourceProps> = ({ activity, resource }) => (
  <Box>resource</Box>
);
const CommentItem: SFC<CommentProps> = ({ activity, comment }) => (
  <Box>comment</Box>
);
const CommunityItem: SFC<CommunityProps> = ({ activity, community }) => (
  <Box>community</Box>
);

const Item: SFC<Props> = ({ user, activity, userpage }) => {
  const context = activity.context!;

  return (
    <FeedItem>
      {activity.verb === 'CREATED' ? (
        <>
          {/* <NavigateToThread to={`/thread/${activity.context!.}`} /> */}
          <Member>
            <MemberItem mr={2}>
              <Img src={user ? user.icon : ''} />
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
                <Date>
                  {DateTime.fromISO(activity.createdAt!).toRelative()}
                </Date>
              </Name>
              {context.__typename === 'Collection' ? (
                <CollectionItem activity={activity} collection={context} /> // qui il context è risolto come Collection
              ) : context.__typename === 'Resource' ? (
                <ResourceItem activity={activity} resource={context} /> // qui il context è risolto come Resource
              ) : context.__typename === 'Comment' ? (
                <CommentItem activity={activity} comment={context} /> // qui il context è risolto come Comment
              ) : context.__typename === 'Community' ? (
                <CommunityItem activity={activity} community={context} /> // qui il context è risolto come Community
              ) : (
                <div>Unknown should never happen</div>
              )}
            </MemberInfo>
          </Member>
        </>
      ) : null}
    </FeedItem>
  );
};

// const Item: SFC<Props> = ({ user, node, userpage }) => {
//   const [iLikeIt, setiLikeIt] = React.useState(false);
//   const [like] = useLikeMutationMutation();
//   const [undoLike] = useDeleteMutation();
//   const toggleLike = React.useCallback(
//     (contextId: string) => () => {
//       (iLikeIt ? undoLike : like)({ variables: { contextId } });
//       setiLikeIt(!iLikeIt);
//     },
//     [iLikeIt, like, undoLike]
//   );
//   console.log(toggleLike)
//   return (
//     <FeedItem>
//       {node.verb === "CREATED" ?
//       <>
//        <NavigateToThread to={`/thread/${node.context.inReplyToId}`} />
//         <Member>
//           <MemberItem mr={2}>
//             <Img src={user ? user.icon : ''} />
//           </MemberItem>
//           <MemberInfo>
//            <Name>
//             <Link to={'/user/' + user.id}>
//               {user.name}{' '}
//               {user.preferredUsername ? (
//                 <Username ml={2}>
//                   @{user.preferredUsername}
//                 </Username>
//               ) : null}
//             </Link>
//             <Spacer mr={2}>·</Spacer>{' '}
//             <Date>{DateTime.fromISO(node.createdAt).toRelative()}</Date>
//           </Name>
//           {node.context.__typename === 'Comment' ?
//             <>
//             {node.context.inReplyToId !== null ? (
//               <InReply my={2}>
//                 <MemberWrapped>
//                   {/* <MemberItem className={'miniavatar'} mr={2}>
//                     <Img src={node.context.thread.context.author.icon} />
//                   </MemberItem> */}
//                   <MemberInfo>
//                     <Name>
//                       <Link
//                         to={'/user/' + node.context.inReplyTo.author.localId}
//                       >
//                         {node.context.inReplyTo.author.name}
//                       </Link>
//                       <Spacer mr={2}>·</Spacer>{' '}
//                       <Date>
//                         {DateTime.fromISO(node.published).toRelative()}
//                       </Date>
//                     </Name>
//                     <Comment>
//                       {node.context.inReplyTo.content &&
//                       node.context.inReplyTo.content.length > 320
//                         ? removeMd(node.context.inReplyTo.content).replace(
//                             /^([\s\S]{316}[^\s]*)[\s\S]*/,
//                             '$1...'
//                           )
//                         : removeMd(node.context.inReplyTo.content)}
//                     </Comment>
//                   </MemberInfo>
//                 </MemberWrapped>
//               </InReply>
//             ) : null}
//             <Comment>
//               {node.context.content && node.context.content.length > 320
//                 ? removeMd(node.context.content).replace(
//                     /^([\s\S]{316}[^\s]*)[\s\S]*/,
//                     '$1...'
//                   )
//                 : removeMd(node.context.content)}
//             </Comment>
//           </>
//           : null}
//           </MemberInfo>
//           </Member>
//       </> : null
//     }
//     </FeedItem>
//   );
// };

// const NavigateToThread = styled(Link)`
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   z-index: 1;
// `;

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

// const MemberWrapped = styled(Member)`
//   padding: 8px;
//   .miniavatar {
//     min-width: 40px !important;
//     height: 40px;
//   }
// `;

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
