import React from 'react';
import styled from 'ui/themes/styled';
import { Box, Text, Flex } from 'rebass/styled-components';
import SocialText from 'ui/modules/SocialText';
import { i18nMark, Trans } from '@lingui/react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { FormikHook } from 'ui/@types/types';
import { MessageCircle, Star, MoreHorizontal, Flag } from 'react-feather';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import DOMPurify from 'dompurify';

import Modal from 'ui/modules/Modal';
import { Link } from 'react-router-dom';

export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}
export interface ReplyActions {
  replyFormik: FormikHook<{ replyMessage: string }>;
}
export interface CommentProps {
  FlagModal: null | React.ComponentType<{ done(): unknown }>;
  like: LikeActions;
  reply: ReplyActions;
  content: string;
  url: string;
  isFlagged: boolean;
  hideActions?: boolean;
}

const tt = {
  placeholders: {
    name: i18nMark('Post a reply'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    image: i18nMark('Enter the URL of an image to represent the collection')
  }
};

export const Comment: React.SFC<CommentProps> = ({
  content,
  reply,
  like,
  url,
  FlagModal,
  isFlagged,
  hideActions
}) => {
  const [talkModalVisible, showTalkModal] = React.useState(false);
  const { i18n } = React.useContext(LocaleContext);
  const [isOpenFlagModal, setOpenFlagModal] = React.useState(false);
  const [isOpen, onOpen] = React.useState(false);

  return (
    <Wrapper>
      <Link to={url}>
        <Text
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          sx={{ textDecoration: 'none' }}
          variant="text"
          mb={2}
        />
      </Link>
      {hideActions ? null : (
        <Actions mt={2}>
          {talkModalVisible && (
            <SocialText
              placeholder={i18n._(tt.placeholders.name)}
              defaultValue={''}
              submit={msg => {
                showTalkModal(false);
                reply.replyFormik.setValues({ replyMessage: msg });
                reply.replyFormik.submitForm();
              }}
            />
          )}
          <Box>
            <Items>
              <ActionItem onClick={() => showTalkModal(!talkModalVisible)}>
                <ActionIcon>
                  <MessageCircle
                    className="hover"
                    strokeWidth="1"
                    color="rgba(0,0,0,.4)"
                    size="20"
                  />
                </ActionIcon>
                <Text
                  ml={1}
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                >
                  <Trans>Comment</Trans>
                </Text>
              </ActionItem>
              <ActionItem ml={4} onClick={like.toggleLikeFormik.submitForm}>
                <ActionIcon>
                  <Star
                    className="hover"
                    color={like.iLikeIt ? '#ED7E22' : 'rgba(0,0,0,.4)'}
                    strokeWidth="1"
                    size="20"
                  />
                </ActionIcon>
                <Text
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  {like.totalLikes + ' '} <Trans>Favourite</Trans>
                </Text>
              </ActionItem>
              <ActionItem
                ml={4}
                onClick={() => onOpen(true)}
                sx={{ position: 'relative' }}
              >
                <ActionIcon>
                  <MoreHorizontal
                    className="hover"
                    size={20}
                    color="rgba(0,0,0,.4)"
                  />
                </ActionIcon>
                <Text
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  {/* <Trans>More</Trans> */}
                </Text>
                {isOpen && (
                  <Dropdown orientation="bottom" cb={onOpen}>
                    {FlagModal && (
                      <DropdownItem onClick={() => setOpenFlagModal(true)}>
                        <Flag size={20} color={'rgb(101, 119, 134)'} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          {!isFlagged ? (
                            <Trans>Flag this comment</Trans>
                          ) : (
                            <Trans>Unflag this comment</Trans>
                          )}
                        </Text>
                      </DropdownItem>
                    )}
                  </Dropdown>
                )}
              </ActionItem>
            </Items>
            {FlagModal && isOpenFlagModal && (
              <Modal closeModal={() => setOpenFlagModal(false)}>
                <FlagModal done={() => setOpenFlagModal(false)} />
              </Modal>
            )}
          </Box>
        </Actions>
      )}
    </Wrapper>
  );
};

const Items = styled(Flex)`
  flex: 1;
  justify-content: start;
`;

const Actions = styled(Box)`
  position: relative;
  z-index: 999999999999999999999999999999999999;
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
  }
`;

const Wrapper = styled(Box)`
  background: white;
  a {
    text-decoration: none
    &:hover {
      text-decoration: none;
    }
  }
`;
