import React from 'react';
import styled from '../../../themes/styled';
import { Text, Box, Flex } from 'rebass/styled-components';
import { Layers, Users } from 'react-feather';
import Avatar from '../../elements/Avatar';
import media from 'styled-media-query';

interface Props {
  name: string;
  icon?: string;
  image?: string;
  summary: string;
  followersCount?: number;
  collectionsCount?: number;
  followed?: boolean;
  threadsCount?: number;
}

const Community: React.FC<Props> = ({
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

    <Text variant="heading" mt={3} fontSize={3}>
      {name.length > 60 ? name.replace(/^(.{56}[^\s]*).*/, '$1...') : name}
    </Text>

    <Text variant="text" mt={2}>
      {summary.length > 160
        ? summary.replace(/^([\s\S]{156}[^\s]*)[\s\S]*/, '$1...')
        : summary}
    </Text>
    <Meta my={2} mt={3}>
      <Flex mr={4} alignSelf="center" alignItems="center">
        <Flex mr={1}>
          <Users size={20} strokeWidth={2} />
        </Flex>
        <Text ml={2} variant="suptitle">
          {followersCount || 0}
        </Text>
      </Flex>
      <Flex mr={4} alignSelf="center" alignItems="center">
        <Flex mr={1}>
          <Layers size={20} strokeWidth={2} />
        </Flex>
        <Text ml={2} variant="suptitle">
          {collectionsCount || 0}
        </Text>
      </Flex>
    </Meta>
  </Wrapper>
);

export const CommunitySmall: React.FC<{ icon: string; name: string }> = ({
  icon,
  name
}) => {
  return (
    <WrapperSmall py={1} mb={1} ml={3}>
      <Avatar size="m" src={icon} />
      <Box>
        <Text
          textAlign="center"
          variant="subhead"
          fontSize={1}
          my={3}
          fontWeight={600}
        >
          {name.length > 80 ? name.replace(/^(.{76}[^\s]*).*/, '$1...') : name}
        </Text>
      </Box>
    </WrapperSmall>
  );
};

export default Community;

const WrapperSmall = styled(Box)`
  cursor: pointer;
  position: relative;
  > div {
    margin: 0 auto;
  }
  ${media.lessThan('medium')`
  display: block;
`};
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.gray};
`;

const Wrapper = styled(Box)`
  padding: 10px;
  position: relative;
  max-height: 560px;
  overflow: hidden;
  z-index: 9;
  border-radius: 6px;
  padding-bottom: 0;
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
  &:hover {
    & span {
      display: block;
    }
  }
`;
