// import { Trans } from '@lingui/react';
import { i18nMark, Trans } from '@lingui/react';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
// import media from 'styled-media-query';
import Avatar from 'ui/elements/Avatar';
import SocialText from 'ui/modules/SocialText';
import styled from 'ui/themes/styled';
import { LocaleContext } from '../../../context/global/localizationCtx';
import Actions, { ActionProps } from './Actions';
import { Actor } from './types';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import { Input, Label } from '@rebass/forms';
import Button from 'ui/elements/Button';
import Modal from 'ui/modules/Modal';
import { MoreHorizontal, Flag, Upload, Copy } from 'react-feather';

const tt = {
  placeholders: {
    name: i18nMark('Post a reply'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    image: i18nMark('Enter the URL of an image to represent the collection')
  }
};

export enum Status {
  Loading,
  Loaded
}
export interface ActivityLoaded extends Activity {
  status: Status.Loaded;
}
export interface ActivityLoading {
  status: Status.Loading;
}

export interface Activity {
  createdAt: string;
  actor: Actor;
  link: string;
  actions: ActionProps | null;
  event: string;
  preview: JSX.Element;
}

export type Props = ActivityLoaded | ActivityLoading;

// export const ThreadActivityPreview: FC<Props> = activity => {
//   if (activity.status === Status.Loading) {
//     return <Trans>loading...</Trans>;
//   }
//   return (
//     <FeedItem>
//       <ActorComp actor={activity.actor} createdAt={activity.createdAt} />
//       <Contents>
//         <Wrapper>
//           <Preview {...activity.context} />
//           {activity.actions && <Actions {...activity.actions} />}{' '}
//         </Wrapper>
//       </Contents>
//     </FeedItem>
//   );
// };

export const ActivityPreview: FC<Props> = activity => {
  if (activity.status === Status.Loading) {
    return <Trans>loading...</Trans>;
  }

  return (
    <FeedItem>
      <WrapperLink to={activity.link} />
      {/* {activity.inReplyToCtx && <InReplyTo {...activity.inReplyToCtx} />} */}
      <ActorComp
        actor={activity.actor}
        createdAt={activity.createdAt}
        event={activity.event}
      />
      <Contents>
        <Wrapper>
          {activity.preview}
          {activity.actions && <Actions {...activity.actions} />}
        </Wrapper>
      </Contents>
    </FeedItem>
  );
};

export interface BigThreadCommentPreviewPropsLoading {
  status: Status.Loading;
}
export interface BigThreadCommentPreviewPropsLoaded {
  status: Status.Loaded;
  actor: Activity['actor'];
  createdAt: Activity['createdAt'];
  actions: Activity['actions'];
  content: string;
}

export type BigThreadCommentPreviewProps =
  | BigThreadCommentPreviewPropsLoading
  | BigThreadCommentPreviewPropsLoaded;
export const BigThreadCommentPreview: FC<BigThreadCommentPreviewProps> = thread => {
  if (thread.status === Status.Loading) {
    return <Trans>loading...</Trans>;
  }
  const { i18n } = React.useContext(LocaleContext);
  return (
    <FeedItem>
      {/* {activity.inReplyToCtx && <InReplyTo {...activity.inReplyToCtx} />} */}
      <ActorComp actor={thread.actor} createdAt={thread.createdAt} event={''} />
      <Contents>
        <Box>
          <Comment variant="text">{thread.content}</Comment>
          {thread.actions && thread.actions.reply && (
            <Box mt={3}>
              <SocialText
                placeholder={i18n._(tt.placeholders.name)}
                defaultValue={''}
                submit={msg => {
                  if (!(thread.actions && thread.actions.reply)) {
                    //FIXME: use a useCallback
                    return;
                  }
                  thread.actions.reply.replyFormik.values.replyMessage = msg;
                  thread.actions.reply.replyFormik.submitForm();
                }}
              />
            </Box>
          )}
        </Box>
      </Contents>
    </FeedItem>
  );
};

// const Event = styled(Text)``;

const WrapperLink = styled(NavLink)`
  text-decoration: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Comment = styled(Text)`
  font-size: 32px;
`;

export interface ActorProps {
  actor: Actor;
  createdAt: string;
  event: string;
}
const ActorComp: FC<ActorProps> = ({ actor, createdAt, event }) => {
  const [isOpen, onOpen] = React.useState(false);
  const [isEnterUrlOpen, onEnterUrlOpen] = React.useState(false);
  // const [setOpenFlagModal] = React.useState(false);
  return (
    <Member>
      <Avatar initials={actor.name} src={actor.icon} variant="avatar" />
      <MemberInfo ml={2}>
        <Flex mt={1} alignItems="center">
          <Flex flex={1}>
            <Name>
              <Link to={actor.link}>{actor.name}</Link>
            </Name>
            <Text sx={{ textTransform: 'lowercase' }} variant="text" ml={1}>
              {event}
            </Text>
          </Flex>
          <ActionItem
            ml={4}
            onClick={() => onOpen(true)}
            sx={{ position: 'relative' }}
          >
            <ActionIcon>
              <MoreHorizontal className="hover" size={20} />
            </ActionIcon>
            {isEnterUrlOpen && <EnterUrl close={onEnterUrlOpen} />}
            {isOpen && (
              <Dropdown orientation="top" cb={onOpen}>
                {/* {activity.context.type === ContextType.Resource && ( */}
                <DropdownItem onClick={() => onEnterUrlOpen(true)}>
                  <Upload size={20} color={'rgb(101, 119, 134)'} />
                  <Text sx={{ flex: 1 }} ml={2}>
                    Add to Moodle
                  </Text>
                </DropdownItem>
                <DropdownItem>
                  <Copy size={20} color={'rgb(101, 119, 134)'} />
                  <Text sx={{ flex: 1 }} ml={2}>
                    Copy link
                  </Text>
                </DropdownItem>
                <DropdownItem>
                  <Flag size={20} color={'rgb(101, 119, 134)'} />
                  <Text sx={{ flex: 1 }} ml={2}>
                    <Trans>Flag</Trans>
                  </Text>
                </DropdownItem>
              </Dropdown>
            )}
          </ActionItem>
        </Flex>
        <Flex sx={{ marginTop: '-2px' }} alignItems="center">
          <Date>{DateTime.fromSQL(createdAt).toRelative()}</Date>
          <Spacer mx={1}>·</Spacer>
          <CommunityName to={'communityLink'}>@CommunityName</CommunityName>
        </Flex>
      </MemberInfo>
    </Member>
  );
};

const EnterUrl = ({ close }) => (
  <Modal closeModal={() => close(false)}>
    <Box p={3}>
      <Label htmlFor="name">Moodle url</Label>
      <Input
        sx={{ border: '1px solid #dadada' }}
        id="name"
        name="name"
        placeholder="Type the moodle url..."
      />
      <Button mt={2} variant="primary">
        Send to Moodle
      </Button>
    </Box>
  </Modal>
);

const ActionItem = styled(Flex)`
  align-items: center;
  color: ${props => props.theme.colors.gray};
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.orange};
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
    stroke: ${props => props.theme.colors.darkGray};
  }
`;

const CommunityName = styled(Link)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: 13px;
`;

const Contents = styled(Box)`
  // margin-top: -30px;
  margin-left: 55px;
`;

// const Username = styled(Text)`
//   color: ${props => props.theme.colors.gray};
//   margin: 0 8px;
//   font-weight: 500;
//   font-size: 13px;

//   ${media.lessThan('1280px')`
//   display: none;
//  `};
// `;

const Spacer = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
`;

const Date = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: 13px;
`;

const Name = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  flex-direction: row;
  a {
    font-weight: 800;
    display: flex;
    text-decoration: none;
    align-items: center;
    position: relative;
    z-index: 9;
    color: ${props => props.theme.colors.primary} !important;
  }
`;

const Member = styled(Flex)`
  align-items: stretch;
`;

const MemberInfo = styled(Box)`
  width: 100%;
  margin-top: -4px;
`;

const Wrapper = styled(Box)``;
const FeedItem = styled(Box)`
  min-height: 30px;
  position: relative;
  margin: 0;
  padding: 16px;
  word-wrap: break-word;
  font-size: 14px;
  // &:hover {
  //   background: #f980120a;
  // }
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
