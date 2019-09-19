import styled from '../../../themes/styled';
import * as React from 'react';
import { SFC } from 'react';
import { Text, Box, Flex, Image } from 'rebass';
import * as Feather from 'react-feather';
import { DateTime } from 'luxon';

const Icon = styled(Box)`
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
    color: inherit;
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

interface Props {
  content: string;
  url?: string;
  date: string;
  replies: number;
  likes: number;
  retweets?: number;
  user: {
    image: string;
    name: string;
    username: string;
    localId: string;
  };
}

const Thread: SFC<Props> = ({
  content,
  user,
  url,
  date,
  replies,
  likes,
  retweets
}) => {
  return (
    <Wrapper style={{ borderBottom: '1px solid #efefef' }} px={3} py={3}>
      <Flex alignItems="center">
        <Avatar src={user.image} />
        <Text mx={2} fontSize={3}>
          {user.name}
        </Text>
        {user.username ? <Username>@{user.username}</Username> : null}
        <Spacer>·</Spacer>{' '}
        <Date fontSize={2}>{DateTime.fromISO(date).toRelative()}</Date>
      </Flex>
      <Text mt={2} fontSize={[4]}>
        {content}
      </Text>
      <Flex mt={3}>
        <Icon
          mr={2}
          className="tooltip"
          data-tooltip="Lorem ipsum dolor sit amet"
        >
          <Feather.MessageSquare color={'#555555'} size="20" />
          <Text
            ml={1}
            mr={3}
            style={{ display: 'inline-block', verticalAlign: 'super' }}
          >
            {replies}
          </Text>
        </Icon>
        <Icon mr={2}>
          <Feather.Heart color={'#555555'} size="20" />
          <Text
            ml={1}
            mr={3}
            style={{ display: 'inline-block', verticalAlign: 'super' }}
          >
            {likes}
          </Text>
        </Icon>
        {retweets ? (
          <Icon>
            <Feather.Repeat color={'#555555'} size="20" />
            <Text
              ml={1}
              mr={3}
              style={{ display: 'inline-block', verticalAlign: 'super' }}
            >
              {retweets}
            </Text>
          </Icon>
        ) : null}
      </Flex>
    </Wrapper>
  );
};

export default Thread;
