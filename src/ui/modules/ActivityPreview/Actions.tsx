import * as React from 'react';
import { MessageCircle, Star } from 'react-feather';
import styled from '../../../themes/styled';
import { Box, Flex, Text } from 'rebass/styled-components';
import SocialText from '../SocialText';
import { i18nMark } from '@lingui/react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { Context, ContextType } from './types';

const tt = {
  placeholders: {
    name: i18nMark('Post a reply'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    image: i18nMark('Enter the URL of an image to represent the collection')
  }
};
interface Props {
  context: Context;
}

const ActionsWrapper = ({ context }: Props) => {
  const [talkModalVisible, showTalkModal] = React.useState(false);
  const { i18n } = React.useContext(LocaleContext);
  return (
    <Actions p={2}>
      {talkModalVisible && (
        <SocialText
          placeholder={i18n._(tt.placeholders.name)}
          defaultValue={''}
          submit={msg => {
            context.replyFormik.setValues({ replyMessage: msg });
            context.replyFormik.submitForm();
          }}
        />
      )}
      <Box>
        <Items>
          <ActionItem onClick={() => showTalkModal(!talkModalVisible)}>
            <ActionIcon>
              <MessageCircle color="rgba(0,0,0,.4)" size="16" />
            </ActionIcon>
            <Text ml={1}>{context.replies}</Text>
          </ActionItem>
          {context.contextType === ContextType.Comment ||
          context.contextType === ContextType.Resource ||
          context.contextType === ContextType.Collection ||
          context.contextType === ContextType.Community ? (
            <ActionItem ml={4} onClick={context.toggleLikeFormik.submitForm}>
              <ActionIcon>
                <Star
                  color={context.iLikeIt ? '#ED7E22' : 'rgba(0,0,0,.4)'}
                  size="16"
                />
              </ActionIcon>
              <Text ml={1}>{context.totalLikes}</Text>
            </ActionItem>
          ) : null}
        </Items>
      </Box>
    </Actions>
  );
};

const Items = styled(Flex)`
  flex: 1;
`;

const Actions = styled(Box)`
  position: relative;
  background: white;
  z-index: 9999;
  border-top: 1px solid ${props => props.theme.colors.lightgray};
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
