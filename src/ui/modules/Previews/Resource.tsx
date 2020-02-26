import * as React from 'react';
import { ExternalLink, ChevronDown } from 'react-feather';
// import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
// import { ellipsis } from 'polished';

export interface Props {
  id: string;
  icon: string;
  name: string;
  summary: string;
  link: string;
}

export const Resource: React.FC<Props> = ({
  id,
  icon,
  name,
  summary,
  link
}) => {
  return (
    // <WrapperLink to={'/collections/' + id}>
    <Wrapper>
      <Avatar size="m" src={icon} />
      <Infos flex={1} ml={3}>
        <Flex>
          <Badge mt={1}>Video</Badge>
          <Title flex="1">{name}</Title>
        </Flex>
        <ActionItem mt={1}>
          <ExternalLink size={16} />
          <Text flex={1} ml={2}>
            {link}
          </Text>
        </ActionItem>
        <Text variant="text" mt={2}>
          {summary}
        </Text>
        <Hashtags mt={1}>
          <Text variant="text" mr={2}>
            #tutorial
          </Text>
          <Text variant="text">#exp</Text>
        </Hashtags>
      </Infos>
      <Icon>
        <ChevronDown size={20} />
      </Icon>
    </Wrapper>
    // </WrapperLink>
  );
};

const Hashtags = styled(Flex)`
div {
    color: ${props => props.theme.colors.primary};
    // background: ${props => props.theme.colors.lighter};
    // padding: 4px 8px;
    // border-radius: 40px;
  }
`;

const Badge = styled(Box)`
  border: 1px solid ${props => props.theme.colors.primary};
  margin-right: 8px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  border-radius: 30px;
  line-height: 20px;
  height: 20px;
  padding: 0 8px;
  color: ${props => props.theme.colors.darkgray};
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
    stroke: ${props => props.theme.colors.lightgray};
  }
`;

// const WrapperLink = styled(NavLink)`
//   text-decoration: none;
// `;

const ActionItem = styled(Flex)`
  color: ${props => props.theme.colors.gray};
  align-items: center;
  & svg {
    vertical-align: sub;
    stroke: ${props => props.theme.colors.gray};
  }
`;

const Wrapper = styled(Flex)`
  position: relative;
  text-decoration: none;
  background: #fff;
  margin-top: 0;
  border-radius: 6px;
//   &:hover {
//     border-radius: 4px;
//     background: ${props => props.theme.colors.lighter};
//   }
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darkgray};
  font-size: 20px;
  text-decoration: none;
`;
