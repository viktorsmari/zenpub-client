import React from 'react';
import styled from 'ui/themes/styled';
import { XCircle, Slash, ShieldOff } from 'react-feather';

import { Box, Text, Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/react';
import Modal from 'ui/modules/Modal';

export interface FlaggedProps {
  flaggedItemContext: JSX.Element;
  ConfirmDeleteModal?: null | React.ComponentType<{ done(): unknown }>;
  type: string;
  // flaggedItemId: string;
  reason: string;
}

export const FlaggedItem: React.SFC<FlaggedProps> = ({
  flaggedItemContext,
  ConfirmDeleteModal,
  type,
  // flaggedItemId,
  reason
}) => {
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [isOpenBlock, setOpenBlock] = React.useState(false);
  const [isOpenIgnore, setOpenIgnore] = React.useState(false);

  return (
    <Wrapper>
      <Bordered p={2}>{flaggedItemContext}</Bordered>
      <Text sx={{ fontSize: '24px' }} variant="text" mb={2}>
        {reason}
      </Text>
      <Actions mt={2}>
        <Box>
          <Items>
            {type == 'User' ? (
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
              <ActionIcon>
                <ShieldOff
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
                <Trans>Ignore</Trans>
              </Text>
            </ActionItem>
          </Items>
          {ConfirmDeleteModal && isOpenDelete && (
            <Modal closeModal={() => setOpenDelete(false)}>
              <ConfirmDeleteModal done={() => setOpenDelete(false)} />
            </Modal>
          )}
          {ConfirmDeleteModal && isOpenBlock && (
            <Modal closeModal={() => setOpenBlock(false)}>
              <ConfirmDeleteModal done={() => setOpenBlock(false)} />
            </Modal>
          )}
          {ConfirmDeleteModal && isOpenIgnore && (
            <Modal closeModal={() => setOpenIgnore(false)}>
              <ConfirmDeleteModal done={() => setOpenIgnore(false)} />
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
`;

const Bordered = styled(Box)`
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
`;
