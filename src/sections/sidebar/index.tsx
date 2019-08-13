import * as React from 'react';
import { Box, Image, Text, Flex } from 'rebass';
import Avatar from '../../styleguide/avatar';
import styled from '../../themes/styled';
import { Trans } from '@lingui/macro';
import { NavLink } from 'react-router-dom';
import { Globe } from 'react-feather';
import OutsideClickHandler from 'react-outside-click-handler';
import { Settings, User, Power } from 'react-feather';

const MnetLogo = require('./moodle-logo.png');
const SidebarComponent = styled(Box)`
  overflow-y: overlay;
`;
const Header = styled(Flex)`
  position: relative;
  cursor: pointer;
  input {
    margin-left: 8px !important;
  }
`;
const Nav = styled(Box)`
  border-top: 4px solid ${props => props.theme.styles.colors.lightgray};
  a {
    text-decoration: none;
  }
`;

const SidebarLink = styled(NavLink)`
  position: relative;
  color: inherit;
  &.active {
    color: ${props => props.theme.styles.colors.orange};
    position: relative;
    &:before {
      position: absolute;
      content: '';
      left: -10px;
      top: 24px;
      width: 8px;
      border-radius: 100px;
      height: 8px;
      display: block;
      background: ${props => props.theme.styles.colors.orange};
    }
  }
  div {
    color: ${props =>
      props.isActive ? props.theme.styles.colors.orange : 'inherit'};
  }
`;

const NavItem = styled(Flex)`
  border-radius: 4px;
  padding: 8px;
  &:hover {
    background: ${props => props.theme.styles.colors.lightgray};
  }
`;
const SupText = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  text-transform: uppercase;
`;

const ItemTitle = styled(Text)`
  color: ${props => props.theme.styles.colors.darkgray};
`;

const WrapperMenu = styled.div`
  box-sizing: border-box;
  width: 250px;
  padding: 5px;
  border-radius: 0.25em;
  background-color: rgb(232, 232, 232);
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 999999999999;
`;

const Layer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 50px;
  z-index: 1;
  display: block;
`;

const ProfileMenu = styled.div`
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
const List = styled.div<{ lined?: boolean }>`
  padding: 8px;
  border-bottom: ${props => (props.lined ? '1px solid #dadada' : null)};
`;
const Item = styled.div`
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  cursor: pointer;
  font-weight: 600;
  color: ${props => props.theme.styles.colour.base3};
  & span {
    display: inline-block;
    margin-right: 8px;
    & svg {
      vertical-align: sub;
    }
  }
  & a {
    color: inherit !important;
    text-decoration: none;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Sidebar = props => {
  return (
    <SidebarComponent width={300} p={3}>
      <Header alignItems={'center'}>
        <Avatar
          onClick={props.handleOpen}
          src={props.data.me.user.icon}
          name={props.data.me.user.name}
        />
        {props.isOpen ? (
          <>
            <OutsideClickHandler onOutsideClick={props.closeMenu}>
              <WrapperMenu>
                <ProfileMenu>
                  <List lined>
                    <Item onClick={() => props.navigateToPage('/profile')}>
                      <span>
                        <User size={18} color={'#333'} />
                      </span>
                      <Trans>Profile</Trans>
                    </Item>
                    <Item onClick={() => props.navigateToPage('/settings')}>
                      <span>
                        <Settings size={18} color={'#333'} />
                      </span>
                      <Trans>Settings</Trans>
                    </Item>
                  </List>
                  <List lined>
                    <Item>
                      <a
                        href="https://docs.moodle.org/dev/MoodleNet/Code_of_Conduct"
                        target="blank"
                      >
                        <Trans>Code of Conduct</Trans>
                      </a>
                    </Item>

                    <Item>
                      <a
                        href="https://changemap.co/moodle/moodlenet/"
                        target="blank"
                      >
                        <Trans>Feedback &amp; Suggestions</Trans>
                      </a>
                    </Item>

                    <Item>
                      <a
                        href="https://blog.moodle.net/category/versions/"
                        target="blank"
                      >
                        v0.9.4 alpha <Trans>Changelog</Trans>
                      </a>
                    </Item>
                  </List>
                  <List>
                    <Item onClick={props.logout}>
                      <span>
                        <Power
                          width={18}
                          height={18}
                          strokeWidth={1}
                          color={'#333'}
                        />
                      </span>
                      <Trans>Sign out</Trans>
                    </Item>
                  </List>
                </ProfileMenu>
              </WrapperMenu>
            </OutsideClickHandler>
            <Layer />
          </>
        ) : null}
        {/* <Input placeholder={"Search here"} /> */}
      </Header>
      <Nav mt={3} pt={3}>
        <SidebarLink exact to={'/discover'}>
          <NavItem mb={3} alignItems={'center'}>
            <Globe size={36} />
            <ItemTitle ml={2} fontSize={2} fontWeight={600} width={1}>
              <Trans>Discover</Trans>
            </ItemTitle>
          </NavItem>
        </SidebarLink>
        <SidebarLink exact to={'/'}>
          <NavItem mb={3} alignItems={'center'}>
            <Image
              mr={2}
              borderRadius={4}
              height={36}
              width={36}
              src={MnetLogo}
            />
            <ItemTitle fontSize={2} fontWeight={600} width={1}>
              <Trans>My MoodleNet</Trans>
            </ItemTitle>
          </NavItem>
        </SidebarLink>
      </Nav>
      <Nav mt={3} pt={3} mb={2}>
        <SupText mb={3} fontSize={1}>
          Communities
        </SupText>
        {props.data.me.user.joinedCommunities.edges.map((c, i) => (
          <NavLink key={i} to={'/communities/' + c.node.localId}>
            <NavItem alignItems={'center'} mb={2}>
              <Image
                mr={2}
                borderRadius={4}
                height={36}
                width={36}
                src={c.node.icon}
              />
              <ItemTitle fontSize={1} fontWeight={600}>
                {c.node.name}
              </ItemTitle>
            </NavItem>
          </NavLink>
        ))}
      </Nav>
    </SidebarComponent>
  );
};

export default Sidebar;
