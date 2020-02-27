import React from 'react';
import styled from 'ui/themes/styled';
import { Box, Flex, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import { UserPlus } from 'react-feather';

export interface Props {
  image: string;
  name: string;
  username: string;
  bio: string;
}

export const User: React.SFC<Props> = ({ image, name, username, bio }) => (
  <WrapperFlex p={3}>
    <Avatar variant="avatar" src={image} />
    <Wrapper ml={2}>
      <Names>
        <Text variant="subhead">{name}</Text>
        <Username ml={1}>{username}</Username>
      </Names>
      <Box mr={1}>
        <Text variant="text">{bio}</Text>
      </Box>
    </Wrapper>
    <Icon>
      <UserPlus size={20} />
    </Icon>
  </WrapperFlex>
);

const WrapperFlex = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;

const Icon = styled(Box)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.lighter};
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  svg {
    stroke: ${props => props.theme.colors.gray};
  }
`;

const Wrapper = styled(Box)`
  flex: 1;
`;
const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  flex: 1;
`;

const Names = styled(Flex)`
  align-items: center;
`;
