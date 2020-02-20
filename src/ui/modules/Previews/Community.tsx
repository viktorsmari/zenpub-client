import React from 'react';
import styled from 'ui/themes/styled';
import { Text, Box, Flex } from 'rebass/styled-components';
import { UserPlus } from 'react-feather';
import Avatar from 'ui/elements/Avatar';
import { Trans } from '@lingui/macro';

export interface Props {
  name: string;
  icon: string;
  summary: string;
  followersCount?: number;
  collectionsCount?: number;
  followed?: boolean;
  threadsCount?: number;
}

export const Community: React.FC<Props> = ({
  name,
  icon,
  summary,
  followersCount,
  collectionsCount
}) => (
  <Wrapper>
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
          </Meta>
        </Box>

        <Icon>
          <UserPlus size={20} />
        </Icon>
      </Flex>

      <Text variant="text" mt={2}>
        {summary.length > 160
          ? summary.replace(/^([\s\S]{156}[^\s]*)[\s\S]*/, '$1...')
          : summary}
      </Text>
    </Box>
  </Wrapper>
);

const Icon = styled(Box)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.lightgray};
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  svg {
    stroke: ${props => props.theme.colors.lightgray};
  }
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  flex: 1;
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.gray};
`;

const Wrapper = styled(Box)`
  position: relative;
  max-height: 560px;
  overflow: hidden;
  z-index: 9;
  border-radius: 6px;
  padding-bottom: 0;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.lightgray};
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
