// import { Trans } from '@lingui/react';
// import { DateTime } from 'luxon';
// import { clearFix } from 'polished';
// import * as React from 'react';
// import { FC } from 'react';
// import { Star } from 'react-feather';
// import { NavLink } from 'react-router-dom';
// import { Box, Flex, Text } from 'rebass/styled-components';
// import removeMd from 'remove-markdown';
// import styled from '../../../themes/styled';
// import Link from '../Link/Link';
// import Actions from './Actions';
// import Preview from './preview';
// import media from 'styled-media-query';
// import { useLikeMutationMutation } from '../../../graphql/like.generated';
// import { useDeleteMutation } from '../../../graphql/delete.generated';

// interface Props {
//   userpage?: boolean;
//   user: any;
//   node: any;
// }

// const Item: FC<Props> = ({ user, node, userpage }) => {
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
//   return (
//     <FeedItem>
//       {activityType === 'CreateComment' && object.inReplyTo ? (
//         <NavigateToThread to={`/thread/${object.inReplyTo.id}`} />
//       ) : activityType === 'CreateComment' ||
//       activityType === 'LikeComment' ? (
//         <NavigateToThread to={`/thread/${object.id}`} />
//       ) : null}
//       {activityType === 'LikeComment' ? (
//         <Box>
//           <SubText mb={2}>
//             <Star size="20" color="#ca8f04" />
//             <NavLink style={{ marginRight: '4px' }} to="/">
//               {user.name}
//             </NavLink>
//             <Trans>boosted</Trans>
//           </SubText>
//           <MemberWrapped>
//             <MemberItem mr={2}>
//               <Img src={object.author.icon} />
//             </MemberItem>
//             <MemberInfo>
//               <Name>
//                 <Link to={'/user/' + object.author.id}>
//                   {object.author.name}{' '}
//                   {object.author.preferredUsername ? (
//                     <Username ml={2}>
//                       @{object.author.preferredUsername}
//                     </Username>
//                   ) : null}
//                 </Link>
//                 <Spacer mr={2}>·</Spacer>{' '}
//                 <Date>{DateTime.fromISO(published).toRelative()}</Date>
//               </Name>
//               <Comment>
//                 {object.content && object.content.length > 320
//                   ? removeMd(object.content).replace(
//                       /^([\s\S]{316}[^\s]*)[\s\S]*/,
//                       '$1...'
//                     )
//                   : removeMd(object.content)}
//               </Comment>
//             </MemberInfo>
//           </MemberWrapped>
//         </Box>
//       ) : (
//         <Member>
//           <MemberItem mr={2}>
//             <Img src={user ? user.icon : ''} />
//           </MemberItem>
//           <MemberInfo>
//             {userpage ? (
//               <b>{user ? user.name : <Trans>Deleted user</Trans>}</b>
//             ) : user ? (
//               <Name>
//                 <Link to={'/user/' + user.id}>
//                   {user.name}{' '}
//                   {user.preferredUsername ? (
//                     <Username ml={2}>@{user.preferredUsername}</Username>
//                   ) : null}
//                 </Link>
//                 <Spacer mr={2}>·</Spacer>{' '}
//                 <Date>{DateTime.fromISO(published).toRelative()}</Date>
//               </Name>
//             ) : (
//               <Name>
//                 <Trans>Deleted user</Trans>
//               </Name>
//             )}

//             {activityType === 'JoinCommunity' ? (
//               <SubText>
//                 <Trans>joined</Trans>
//                 <NavLink to={`/communities/${object.id}`}>
//                   {' '}
//                   @{object.name}
//                 </NavLink>
//               </SubText>
//             ) : activityType === 'CreateComment' ? (
//               <>
//                 {object.inReplyTo !== null ? (
//                   <InReply my={2}>
//                     <MemberWrapped>
//                       <MemberItem className={'miniavatar'} mr={2}>
//                         <Img src={object.inReplyTo.author.icon} />
//                       </MemberItem>
//                       <MemberInfo>
//                         <Name>
//                           <Link
//                             to={'/user/' + object.inReplyTo.author.id}
//                           >
//                             {object.inReplyTo.author.name}
//                           </Link>
//                           <Spacer mr={2}>·</Spacer>{' '}
//                           <Date>
//                             {DateTime.fromISO(published).toRelative()}
//                           </Date>
//                         </Name>
//                         <Comment>
//                           {object.inReplyTo.content &&
//                           object.inReplyTo.content.length > 320
//                             ? removeMd(object.inReplyTo.content).replace(
//                                 /^([\s\S]{316}[^\s]*)[\s\S]*/,
//                                 '$1...'
//                               )
//                             : removeMd(object.inReplyTo.content)}
//                         </Comment>
//                       </MemberInfo>
//                     </MemberWrapped>
//                   </InReply>
//                 ) : null}
//                 <Comment>
//                   {object.content && object.content.length > 320
//                     ? removeMd(object.content).replace(
//                         /^([\s\S]{316}[^\s]*)[\s\S]*/,
//                         '$1...'
//                       )
//                     : removeMd(object.content)}
//                 </Comment>
//               </>
//             ) : activityType === 'UpdateCommunity' ? (
//               <SubText mt={1}>
//                 <Trans>updated</Trans>{' '}
//                 <NavLink
//                   style={{ marginLeft: '4px' }}
//                   to={`/communities/${object.id}`}
//                 >
//                   @{object.name}
//                 </NavLink>
//               </SubText>
//             ) : activityType === 'UpdateCollection' ? (
//               <SubText mt={1}>
//                 <Trans>updated</Trans>{' '}
//                 <NavLink
//                   style={{ marginLeft: '4px' }}
//                   to={`/collections/${object.id}`}
//                 >
//                   +{object.name}
//                 </NavLink>
//               </SubText>
//             ) : activityType === 'FollowCollection' ? (
//               <SubText mt={1}>
//                 <Trans>followed</Trans>
//                 <NavLink
//                   style={{ marginLeft: '4px' }}
//                   to={`/collections/${object.id}`}
//                 >
//                   +{object.name}
//                 </NavLink>
//               </SubText>
//             ) : activityType === 'CreateResource' ? (
//               <Box>
//                 <SubText mt={1}>
//                   <Trans>added a new resource</Trans> <Trans>in</Trans>{' '}
//                   <NavLink
//                     to={`/collections/${object.collection.id}`}
//                   >
//                     +{object.collection.name}
//                   </NavLink>
//                 </SubText>
//                 <Preview
//                   icon={object.icon}
//                   title={object.name}
//                   summary={object.summary}
//                   url={`/collections/${object.collection.id}`}
//                 />
//               </Box>
//             ) : activityType === 'CreateCollection' ? (
//               <Box>
//                 <SubText mt={1}>
//                   <Trans>created a new collection</Trans>{' '}
//                   <NavLink to={`/collections/${object.id}`}>
//                     +{object.name}
//                   </NavLink>
//                 </SubText>
//                 <Preview
//                   icon={object.icon}
//                   title={object.name}
//                   summary={object.summary}
//                   url={`/collections/${object.id}`}
//                 />
//               </Box>
//             ) : activityType === 'CreateCommunity' ? (
//               <Box>
//                 <SubText mt={1}>
//                   <Trans>created a new community</Trans>{' '}
//                   <NavLink to={`/communities/${object.id}`}>
//                     @{object.name}
//                   </NavLink>
//                 </SubText>
//                 <Preview
//                   icon={object.icon}
//                   title={object.name}
//                   summary={object.summary}
//                   url={`/communities/${object.id}`}
//                 />
//               </Box>
//             ) : null}

//             {activityType === 'CreateComment' ? (
//               <Actions
//                 totalReplies={object.replies.totalCount as number}
//                 totalLikes={object.likers.totalCount as number}
//                 comment={object}
//                 toggleLike={toggleLike(object.id)}
//                 iLikeIt={iLikeIt}
//               />
//             ) : null}
//           </MemberInfo>
//         </Member>
//       )}
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

// const Username = styled(Text)`
//   color: ${props => props.theme.colors.gray};
//   margin: 0 8px;
//   font-weight: 500;

//   ${media.lessThan('1280px')`
//   display: none;
//  `};
// `;

// const Spacer = styled(Text)`
//   color: ${props => props.theme.colors.gray};
//   margin-right: 8px;
//   font-weight: 500;
//   ${media.lessThan('1280px')`
//   display: none;
//  `};
// `;

// const Date = styled(Text)`
//   color: ${props => props.theme.colors.gray};
//   font-weight: 500;
//   font-size: 12px;
// `;

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

// const Name = styled(Text)`
//   font-weight: 600;
//   color: ${props => props.theme.colors.darkgray};
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   font-size: 14px;
//   margin-bottom: 2px;
//   ${media.lessThan('1280px')`
//   flex-direction: column;
//   align-items: normal;
//  `};

//   a {
//     font-weight: 800;
//     display: flex;
//     text-decoration: none;
//     align-items: center;
//     position: relative;
//     z-index: 9;
//     color: ${props => props.theme.colors.darkgray} !important;
//   }
// `;

// const Member = styled(Flex)`
//   align-items: stretch;
// `;

// const MemberWrapped = styled(Member)`
//   padding: 8px;
//   .miniavatar {
//     min-width: 40px !important;
//     height: 40px;
//   }
// `;

// const MemberInfo = styled(Box)`
//   margin-top: 4px;
//   width: 100%;
// `;

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

// const MemberItem = styled(Box)`
//   background-color: #d6dadc;
//   border-radius: 50px;
//   height: 48px;
//   overflow: hidden;
//   position: relative;
//   width: 48px;
//   user-select: none;
//   z-index: 0;
//   vertical-align: inherit;
//   margin-right: 8px;
//   min-width: 48px !important;
// .--rtl & {
//   margin-right: 0px;
//   margin-left: 8px;
// }
// `;

// const Img = styled.img`
//   width: 48px;
//   height: 48px;
//   display: block;
//   -webkit-appearance: none;
//   line-height: 48px;
//   text-indent: 4px;
//   font-size: 13px;
//   overflow: hidden;
//   max-width: 48px;
//   max-height: 48px;
//   text-overflow: ellipsis;
//   vertical-align: text-top;
//   margin-right: 8px;
// .--rtl & {
//   margin-right: 0px;
//   margin-left: 8px;
// }
// `;

// const FeedItem = styled.div`
//   min-height: 30px;
//   position: relative;
//   margin: 0;
//   padding: 16px;
//   word-wrap: break-word;
//   font-size: 14px;
//   ${clearFix()};
//   transition: background 0.5s ease;
//   margin-top: 0
//   z-index: 10;
//   position: relative;
//   background: #ffffff;
//   position: relative;
//   cursor: pointer;
//   &:hover {
//     background: ${props => props.theme.colors.lighter};
//   }
//   border-bottom: 1px solid  ${props => props.theme.colors.lightgray};
//   a {
//     text-decoration: none;
//     color: inherit !important;
//     &:hover {
//       text-decoration: underline
//     }
//   }

// `;

// export default Item;
