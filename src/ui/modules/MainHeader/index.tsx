import React from 'react';
import styled from 'ui/themes/styled';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ChevronLeft, ChevronDown } from 'react-feather';
import { Flex, Text, Box } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
// import Avatar from 'ui/elements/Avatar';
import { DropdownSidebar } from './dropdown';
import media from 'styled-media-query';
import { ellipsis } from 'polished';
const MnetLogo = require('./moodle-logo.png');

interface Props {
  user: {
    icon: string;
    name: string;
    id: string;
  };
  Search: JSX.Element;
  logout(): unknown;
}

export const MainHeader: React.FC<Props> = props => {
  const history = useHistory();
  const [isOpenDropdown, setOpenDropdown] = React.useState(false);
  const openMenu = React.useCallback(() => setOpenDropdown(true), []);
  console.log(history);
  return (
    <HeaderWrapper>
      <Left>
        <Icon mx={2} onClick={() => history.goBack()}>
          <ChevronLeft size="20" />
        </Icon>
        <Avatar size="s" src={MnetLogo} />
      </Left>
      <Center>{props.Search}</Center>
      <Header alignItems={'center'}>
        {/* {props.Search} */}
        <NavItem
          sx={{ position: 'relative' }}
          alignItems="center"
          onClick={openMenu}
        >
          <Avatar
            size="s"
            initials={props.user.name.substring(0, 2)}
            src={props.user.icon}
            variant="avatar"
          />
          <HeaderName ml={2} variant="link">
            {props.user.name}
          </HeaderName>
          <Right ml={2}>
            <ChevronDown size="20" />
          </Right>
          {isOpenDropdown && (
            <DropdownSidebar
              logout={props.logout}
              userId={props.user.id}
              setOpenDropdown={setOpenDropdown}
            />
          )}
        </NavItem>
      </Header>
    </HeaderWrapper>
  );
};

const Center = styled(Box)`
  flex: 1 1 100%;
  order: 1;
  padding: 0 24px;
  overflow: hidden;
  input {
    width: 300px;
    margin: 0 auto;
  }
`;

const Right = styled(Box)`
  color: ${props => props.theme.colors.gray};
  flex: 0 0 256px;
  order: 2;
  justify-content: flex-end;
`;

const HeaderName = styled(Text)`
  flex: 1;
  ${ellipsis('180px')};
  font-size: 15px;
`;

const NavItem = styled(Flex)`
  border-radius: 0px;
  padding: 7px;
  &:hover {
    background: ${props => props.theme.colors.lightgray};
  }
  ${media.lessThan('1280px')`
img {
    margin-right: 0;
}
`};
`;

const Header = styled(Box)`
  cursor: pointer;
  flex: 0 0 256px;
  order: 2;
  justify-content: flex-end;
  img {
    min-width: 36px;
    height: 36px;
    border-radius: 36px;
  }
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
    stroke: ${props => props.theme.colors.darkgray};
  }
`;

const Left = styled(Flex)`
  align-items: center;
  flex: 0 0 256px;
  order: 0;
  justify-content: flex-start;
`;

const HeaderWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  //   height: 50px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999999999999999999;
  flex: 0 50px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;
