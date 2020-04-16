import React from 'react';
import styled from 'ui/themes/styled';
import { XCircle, Slash, Flag } from 'react-feather';

import { Box, Text, Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/react';
import Modal from 'ui/modules/Modal';

export interface FlaggedProps {
  flaggedItemContext: JSX.Element;
  BlockModal?: null | React.ComponentType<{ done(): unknown }>;
  DeleteModal?: null | React.ComponentType<{ done(): unknown }>;
  IgnoreModal?: null | React.ComponentType<{ done(): unknown }>;
  type: string;
  // flaggedItemId: string;
  reason: string;
}

export const FlaggedItem: React.SFC<FlaggedProps> = ({
  flaggedItemContext,
  BlockModal,
  DeleteModal,
  IgnoreModal,
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
      <Text sx={{ textDecoration: 'none' }} variant="text" mb={2} mt={2}>
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
          {DeleteModal && isOpenDelete && (
            <Modal closeModal={() => setOpenDelete(false)}>
              <DeleteModal done={() => setOpenDelete(false)} />
            </Modal>
          )}
          {BlockModal && isOpenBlock && (
            <Modal closeModal={() => setOpenBlock(false)}>
              <BlockModal done={() => setOpenBlock(false)} />
            </Modal>
          )}
          {IgnoreModal && isOpenIgnore && (
            <Modal closeModal={() => setOpenIgnore(false)}>
              <IgnoreModal done={() => setOpenIgnore(false)} />
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
    stroke: ${props => props.theme.colors.gray};
  }
  &:hover {
    svg {
      &.hover {
        stroke: ${props => props.theme.colors.orange};
      }
    }
    .unflag:after {
      border-left-color: ${props => props.theme.colors.orange};
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
