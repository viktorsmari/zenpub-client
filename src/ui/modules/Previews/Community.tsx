import { Trans } from '@lingui/macro';
import React from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';

export interface Props {
  name: string;
  icon: string;
  summary: string;
  followersCount: number;
  collectionsCount: number;
  threadsCount: number;
  toggleJoinFormik: FormikHook<{}>;
  joined: boolean;
}

export const Community: React.FC<Props> = ({
  name,
  icon,
  summary,
  followersCount,
  joined,
  toggleJoinFormik,
  collectionsCount
}) => (
  <Bordered>
    <Wrapper p={2}>
      <WrapperImage>
        <Avatar size="l" src={icon} />
      </WrapperImage>
      <Box p={2}>
        <Flex>
          <Box flex={1}>
            <Text variant="heading" fontSize={3}>
              {name.length > 60
                ? name.replace(/^(.{56}[^\s]*).*/, '$1...')
                : name}
            </Text>
            <Username>@ivan@moodle.net</Username>
          </Box>
        </Flex>

        <Text variant="text" mt={2}>
          {summary.length > 160
            ? summary.replace(/^([\s\S]{156}[^\s]*)[\s\S]*/, '$1...')
            : summary}
        </Text>

        <Meta mt={2}>
          <Flex alignSelf="center" mr={3} alignItems="center">
            <Text fontSize={'10px'} variant="suptitle">
              {followersCount || 0} <Trans>Users</Trans>
            </Text>
          </Flex>
          <Flex alignSelf="center" alignItems="center">
            <Text fontSize={'10px'} variant="suptitle">
              {collectionsCount || 0} <Trans>Collections</Trans>
            </Text>
          </Flex>
          <ActionItem onClick={toggleJoinFormik.submitForm}>
            <Text
              ml={1}
              variant={'suptitle'}
              sx={{ textTransform: 'capitalize' }}
            >
              {joined ? <Trans>Leave</Trans> : <Trans>Join</Trans>}
            </Text>
          </ActionItem>
        </Meta>
      </Box>
    </Wrapper>
    {/* <Actions>
      <Box>
        <Items>
          
        </Items>
      </Box>
    </Actions> */}
  </Bordered>
);

// const Items = styled(Flex)`
//   flex: 1;
//   justify-content: space-around;
// `;

// const Actions = styled(Box)`
//   position: relative;
//   z-index: 999999999999999999999999999999999999;
//   border-top: 1px solid #dadada;
//   padding: 8px;
// `;

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

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  flex: 1;
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.gray};
`;

const Bordered = styled(Box)`
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
`;

const Wrapper = styled(Box)`
  position: relative;
  max-height: 560px;
  overflow: hidden;
  z-index: 9;
  padding-bottom: 0;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.lighter};
    text-decoration: none;
  }
  & a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

const WrapperImage = styled.div`
  position: relative;
  div {
    width: 100%;
    heigth: 150px;
    background-repeat: no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:hover {
    & span {
      display: block;
    }
  }
`;
