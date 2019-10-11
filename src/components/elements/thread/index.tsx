import styled from '../../../themes/styled';
import React, { useState } from 'react';
import { SFC } from 'react';
import { Text, Box, Flex, Image } from 'rebass';
import * as Feather from 'react-feather';
import { DateTime } from 'luxon';
import Talk from '../TalkModal';
import Link from '../Link/Link';
import { Trans } from '@lingui/react';

const Icon = styled(Flex)`
  cursor: pointer;
  &:hover {
    svg {
      stroke: ${props => props.theme.styles.colors.orange};
    }
    div {
      color: ${props => props.theme.styles.colors.orange};
    }
  }
`;

const Wrapper = styled(Box)`
  a {
    text-decoration: none;
    color: inherit !important;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background: ${props => props.theme.styles.colors.black};
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

const Message = styled(Text)`
  line-height: 30px;
`;

const InReply = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  a {
    color: ${props => props.theme.styles.colors.black} !important;
    font-weight: 700;
  }
`;

const Actions = styled(Flex)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

interface Props {
  content: string;
  url?: string;
  date: string;
  replies: number;
  likes: number;
  retweets?: number;
  inReplyTo: any;
  user: {
    image: string;
    name: string;
    username: string;
    localId: string;
  };
}

const Thread: SFC<Props> = ({ content, user, date, retweets, inReplyTo }) => {
  const [isOpen, onOpen] = useState(false);
  return (
    <Wrapper px={3} py={3}>
      <Flex alignItems="center">
        <Avatar src={user.image} />
        <Flex flexDirection="column">
          <Flex>
            <Link to={'/user/' + user.localId}>
              <Text fontWeight={800} mx={2} fontSize={1}>
                {user.name}
              </Text>
            </Link>
            <Spacer>·</Spacer>{' '}
            <Date fontSize={1}>{DateTime.fromISO(date).toRelative()}</Date>
          </Flex>
          <Link to={'/user/' + user.localId}>
            <Username mt={1} fontSize={1} mx={2}>
              @{user.username}
            </Username>
          </Link>
        </Flex>
      </Flex>
      {inReplyTo !== null ? (
        <InReply my={2} fontSize={1}>
          <Trans>in reply to</Trans>{' '}
          <Link to={`/user/${inReplyTo.author.localId}`}>
            {inReplyTo.author.name}
          </Link>
        </InReply>
      ) : null}
      <Message mt={2} fontSize={[3]}>
        {content}
      </Message>
      <Actions alignItems="center" mt={3} py={3}>
        <Icon mr={5} className="tooltip" onClick={() => onOpen(true)}>
          <Feather.MessageSquare color={'rgba(0,0,0,.4)'} size="20" />
        </Icon>
        <Icon mr={5}>
          <Feather.Heart color={'rgba(0,0,0,.4)'} size="20" />
        </Icon>
        {retweets ? (
          <Icon>
            <Feather.Repeat color={'rgba(0,0,0,.4)'} size="20" />
            <Text
              ml={1}
              mr={3}
              style={{ display: 'inline-block', verticalAlign: 'super' }}
            >
              {retweets}
            </Text>
          </Icon>
        ) : null}
      </Actions>
      <Talk toggleModal={onOpen} modalIsOpen={isOpen} />
    </Wrapper>
  );
};

export default Thread;
