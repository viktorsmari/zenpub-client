import * as React from 'react';
import { MessageCircle, Star } from 'react-feather';
import styled from '../../../themes/styled';
import { Box, Flex, Text } from 'rebass/styled-components';
import TalkModal from '../TalkModal';
import { Comment } from '../../../graphql/types';

export interface Props {
  totalReplies: number;
  totalLikes: number;
  iLikeIt: boolean;
  toggleLike: () => unknown;
  comment: Comment;
}
const ActionsWrapper = ({
  totalReplies,
  comment,
  totalLikes,
  iLikeIt,
  toggleLike
}: Props) => {
  const [talkModalVisible, showTalkModal] = React.useState(false);
  return (
    <Actions mt={2}>
      <Items>
        <ActionItem>
          <ActionIcon>
            <MessageCircle
              onClick={() => showTalkModal(true)}
              color="rgba(0,0,0,.4)"
              size="16"
            />
          </ActionIcon>
          <Text ml={1}>{totalReplies}</Text>
        </ActionItem>
        <ActionItem ml={3}>
          <ActionIcon>
            <Star
              onClick={toggleLike}
              color={iLikeIt ? 'yellow' : 'rgba(0,0,0,.4)'}
              size="16"
            />
          </ActionIcon>
          <Text ml={1}>{totalLikes}</Text>
        </ActionItem>
      </Items>
      <TalkModal
        modalIsOpen={talkModalVisible}
        comment={comment}
        toggleModal={showTalkModal}
      />
    </Actions>
  );
};

const Items = styled(Flex)`
  flex: 1;
`;

const Actions = styled(Flex)`
  position: relative;
  z-index: 9999;
`;

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
    div:first-of-type {
      background: #fffbf8;
      svg {
        color: ${props => props.theme.colors.orange};
      }
    }
    div:last-of-type {
      color: ${props => props.theme.colors.orange};
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
