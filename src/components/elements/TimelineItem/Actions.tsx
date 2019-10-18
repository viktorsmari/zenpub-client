import * as React from 'react';
import { MessageCircle, Star } from 'react-feather';
import styled from '../../../themes/styled';
import { Box, Flex, Text } from 'rebass';

const ActionsWrapper = ({ totalReplies, totalLikes }) => (
  <Actions mt={2}>
    <Items>
      <ActionItem>
        <ActionIcon>
          <MessageCircle color="rgba(0,0,0,.4)" size="16" />
        </ActionIcon>
        <Text ml={2}>{totalReplies}</Text>
      </ActionItem>
      <ActionItem>
        <ActionIcon>
          <Star color="rgba(0,0,0,.4)" size="16" />
        </ActionIcon>
        <Text ml={2}>{totalLikes}</Text>
      </ActionItem>
    </Items>
  </Actions>
);

const Items = styled(Flex)`
  flex: 1;
`;

const Actions = styled(Flex)``;

const ActionItem = styled(Flex)`
  margin-right: 32px;
  align-items: center;
  color: ${props => props.theme.styles.colors.gray};
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    div:first-of-type {
      background: #fffbf8;
      svg {
        color: ${props => props.theme.styles.colors.orange};
      }
    }
    div:last-of-type {
      color: ${props => props.theme.styles.colors.orange};
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
  }
`;

export default ActionsWrapper;
