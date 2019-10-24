import styled from '../../../themes/styled';
import React, { useState } from 'react';
import { SFC } from 'react';
import { Text, Box, Flex, Image } from 'rebass';
import * as Feather from 'react-feather';
import { DateTime } from 'luxon';
import Talk from '../TalkModal';
import Link from '../Link/Link';
import { Trans } from '@lingui/react';
import { Comment } from '../../../generated/graphqlapollo';
// import { Comment } from 'src/gql/sdk';

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
  comment: Comment;
}

const Thread: SFC<Props> = ({ comment }) => {
  const [isOpen, onOpen] = useState(false);
  return (
    <Wrapper px={3} py={3}>
      <Flex alignItems="center">
        <Avatar src={comment.author!.image!} />
        <Flex flexDirection="column">
          <Flex>
            <Link to={'/user/' + comment.author!.localId!}>
              <Text fontWeight={800} mx={2} fontSize={1}>
                {comment.author!.name}
              </Text>
            </Link>
            <Spacer>·</Spacer>{' '}
            <Date fontSize={1}>
              {DateTime.fromISO(comment.published!).toRelative()}
            </Date>
          </Flex>
          <Link to={'/user/' + comment.author!.localId!}>
            <Username mt={1} fontSize={1} mx={2}>
              @{comment.author!.name!}
            </Username>
          </Link>
        </Flex>
      </Flex>
      {comment.inReplyTo && (
        <InReply my={2} fontSize={1}>
          <Trans>in reply to</Trans>{' '}
          <Link to={`/user/${comment.inReplyTo.author!.localId!}`}>
            {comment.inReplyTo.author!.name!}
          </Link>
        </InReply>
      )}
      <Message mt={2} fontSize={[3]}>
        {comment.content!}
      </Message>
      <Actions alignItems="center" mt={3} py={3}>
        <Icon mr={5} className="tooltip" onClick={() => onOpen(true)}>
          <Feather.MessageSquare color={'rgba(0,0,0,.4)'} size="20" />
        </Icon>
        <Icon mr={5}>
          <Feather.Heart color={'rgba(0,0,0,.4)'} size="20" />
        </Icon>
        {
          //TODO Retweets
        }
        {null && (
          <Icon>
            <Feather.Repeat color={'rgba(0,0,0,.4)'} size="20" />
            <Text
              ml={1}
              mr={3}
              style={{ display: 'inline-block', verticalAlign: 'super' }}
            >
              {`--------RETWEETS---------`}
            </Text>
          </Icon>
        )}
      </Actions>
      <Talk toggleModal={onOpen} modalIsOpen={isOpen} comment={comment} />
    </Wrapper>
  );
};

export default Thread;
