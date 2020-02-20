import React from 'react';
import styled from 'ui/themes/styled';
import { Box, Flex, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import { UserPlus } from 'react-feather';

export const User = () => (
  <WrapperFlex p={3}>
    <Avatar
      variant="avatar"
      src="https://i.pinimg.com/474x/ce/03/0b/ce030b51864cb4d0e9a8f88113ee0fb0.jpg"
    />
    <Wrapper ml={2}>
      <Names>
        <Text variant="subhead">Ivan</Text>
        <Username ml={1}>@ivan@moodle.net</Username>
      </Names>
      <Box mr={1}>
        <Text variant="text">
          Capitalism is the most efficient system known to man for destroying
          the biosphere on a planetary scale.
        </Text>
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
