import React from 'react';
import styled from 'ui/themes/styled';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ChevronLeft } from 'react-feather';
import { Flex, Text, Box } from 'rebass/styled-components';
// import Avatar from 'ui/elements/Avatar';

export const Header: React.FC<{ name: string }> = ({ name }) => {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <Left onClick={() => history.goBack()}>
        <Icon>
          <ChevronLeft size="20" />
        </Icon>
        <SupText ml={2} variant="suptitle">
          {name}
        </SupText>
      </Left>
    </HeaderWrapper>
  );
};

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
    stroke: ${props => props.theme.colors.darkgray};
  }
`;

const Left = styled(Flex)`
  flex: auto;
  align-items: center;
`;

const SupText = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
  text-transform: capitalize;
  font-size: 16px;
`;

const HeaderWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: pointer;
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;
