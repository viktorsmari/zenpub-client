import React from 'react';
import styled from 'ui/themes/styled';
import { XCircle, Slash, Flag } from 'react-feather';

import { Box, Text, Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/react';
import Modal from 'ui/modules/Modal';
import { FormikHook } from 'ui/@types/types';
import ConfirmationModal from '../ConfirmationModal';
import { LocaleContext } from 'context/global/localizationCtx';

export interface FlaggedProps {
  FlaggedItemContextElement: JSX.Element;
  blockUserFormik: FormikHook;
  deleteContentFormik: FormikHook;
  ignoreFlagFormik: FormikHook;
  type: string;
  reason: string;
}

export const FlaggedItem: React.SFC<FlaggedProps> = ({
  FlaggedItemContextElement,
  blockUserFormik,
  deleteContentFormik,
  ignoreFlagFormik,
  type,
  reason
}) => {
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [isOpenBlock, setOpenBlock] = React.useState(false);
  const [isOpenIgnore, setOpenIgnore] = React.useState(false);
  const { i18n } = React.useContext(LocaleContext);

  return (
    <Wrapper>
      <Bordered p={2}>{FlaggedItemContextElement}</Bordered>
      <Text sx={{ textDecoration: 'none' }} variant="text" mb={2} mt={2}>
        {reason}
      </Text>
      <Actions mt={2}>
        <Box>
          <Items>
            {type === 'User' ? (
              <ActionItem onClick={() => setOpenBlock(true)}>
                <ActionIcon>
                  <Slash
                    className="hover"
                    color="rgba(0,0,0,.4)"
                    strokeWidth="1"
                    size="20"
                  />
                </ActionIcon>
                <Text
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  <Trans>Block</Trans>
                </Text>
              </ActionItem>
            ) : (
              <ActionItem onClick={() => setOpenDelete(true)}>
                <ActionIcon>
                  <XCircle
                    className="hover"
                    color="rgba(0,0,0,.4)"
                    strokeWidth="1"
                    size="20"
                  />
                </ActionIcon>
                <Text
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  <Trans>Delete</Trans>
                </Text>
              </ActionItem>
            )}
            <ActionItem ml={4} onClick={() => setOpenIgnore(true)}>
              <ActionIcon className="unflag">
                <Flag className="hover" strokeWidth="1" size="16" />
              </ActionIcon>
              <Text
                variant={'suptitle'}
                sx={{ textTransform: 'capitalize' }}
                ml={1}
              >
                <Trans>Ignore</Trans>
              </Text>
            </ActionItem>
          </Items>
          {isOpenDelete && (
            <Modal closeModal={() => setOpenDelete(false)}>
              <ConfirmationModal
                cancel={() => setOpenDelete(false)}
                formik={deleteContentFormik}
                modalAction={i18n._(`Delete flagged content`)}
                modalDescription={i18n._(
                  `Are you sure you want to permanently delete this ${type} content?`
                )}
                modalTitle={i18n._(`Delete`)}
              />
            </Modal>
          )}
          {isOpenBlock && (
            <Modal closeModal={() => setOpenBlock(false)}>
              <ConfirmationModal
                cancel={() => setOpenBlock(false)}
                formik={blockUserFormik}
                modalAction={i18n._(`Delete user`)}
                modalDescription={i18n._(
                  `Are you sure you want to permanently delete this user?`
                )}
                modalTitle={i18n._(`Delete`)}
              />
            </Modal>
          )}
          {isOpenIgnore && (
            <Modal closeModal={() => setOpenIgnore(false)}>
              <ConfirmationModal
                cancel={() => setOpenIgnore(false)}
                formik={ignoreFlagFormik}
                modalAction={i18n._(`Ignore flag`)}
                modalDescription={i18n._(
                  `Are you sure you want to ignore and delete this flag?`
                )}
                modalTitle={i18n._(`Ignore`)}
              />
            </Modal>
          )}
        </Box>
      </Actions>
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
  color: ${props => props.theme.colors.medium};
  cursor: pointer;
  .unflag {
    position: relative;
    &:after {
      display: block;
      content: '';
      width: 0px;
      height: 25px;
      transform: rotateZ(-45deg);
      position: absolute;
      left: 14px;
      border-right: 3px solid #fff;
      border-left: 1px solid;
      top: 1px;
    }
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  .hover {
    stroke: ${props => props.theme.colors.medium};
  }
  &:hover {
    svg {
      &.hover {
        stroke: ${props => props.theme.colors.primary};
      }
    }
    .unflag:after {
      border-left-color: ${props => props.theme.colors.primary};
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
`;

const Bordered = styled(Box)`
  border: ${props => props.theme.colors.border};
  border-radius: 4px;
`;
