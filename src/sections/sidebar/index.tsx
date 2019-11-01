import { Trans } from '@lingui/macro';
import { ellipsis } from 'polished';
import * as React from 'react';
import { Globe } from 'react-feather';
import { SearchBox } from 'react-instantsearch-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Image, Text } from 'rebass';
import media from 'styled-media-query';
import Loader from '../../components/elements/Loader/Loader';
import Avatar from '../../styleguide/avatar';
import styled from '../../themes/styled';
import Dropdown from './dropdown';
import { GetSidebarQueryQueryResult } from '../../graphql/generated/getSidebar.generated';
const MnetLogo = require('./moodle-logo.png');
const SidebarComponent = styled(Flex)`
  flex-grow: 1;
  align-items: flex-end;
  z-index: 3;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  overflow-y: auto;
`;

const InternalWrapper = styled(Box)`
${media.greaterThan('1281px')`
  width: 300px !important;
`}
${media.lessThan('1280px')`
  width: 88px;
`}
${media.lessThan('10240px')`
  width: 68px;
`}
`;

const SidebarFixed = styled(Box)`
  justify-content: space-between;
  height: 100%;
  position: fixed;
  top: 16px;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
`;

const SidebarOverflow = styled(Box)`
  overflow-y: auto;
`;

const Header = styled(Flex)`
  cursor: pointer;
  padding-left: 8px;
  img {
    width: 36px;
    height: 36px;
  }
  input {
    margin: 0 8px !important;
    border-radius: 100px;
    border-width: 1px;
    ${media.lessThan('1280px')`
      display: none;
    `};
  }
`;
const Nav = styled(Box)`
  // border-top: 4px solid ${props => props.theme.colors.lightgray};
  a {
    text-decoration: none;
  }
`;

const CommunityLink = styled(NavLink)`
  &.active {
    > div {
      background: ${props => props.theme.colors.orange};
    }
    div {
      color: white !important;
    }
    position: relative;
  }
`;

const SidebarLink = styled(NavLink)`
  position: relative;
  color: inherit;
  &.active {
    color: ${props => props.theme.colors.orange};
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
      background: ${props => props.theme.colors.orange};
    }
  }
  div {
    color: ${props => (props.isActive ? props.theme.colors.orange : 'inherit')};
  }
`;

const NavItem = styled(Flex)`
  border-radius: 4px;
  padding: 8px;
  &:hover {
    background: ${props => props.theme.colors.lightgray};
  }
  ${media.lessThan('1280px')`
  img {
    margin-right: 0;
  }
`};
`;

const ItemTitle = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
  ${ellipsis('220px')} ${media.lessThan('1280px')`
  display: none;
`};
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

const Sbox = styled(Box)`
  width: 100%;
  ${media.lessThan('1280px')`
 display: none;
`};
`;
interface Props {
  resp: GetSidebarQueryQueryResult;
}
const Sidebar: React.FC<Props> = ({ resp }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const closeMenu = React.useCallback(() => setMenuIsOpen(false), []);
  const openMenu = React.useCallback(() => setMenuIsOpen(true), []);
  const { data } = resp;
  return resp.error ? (
    <span>
      <Trans>Error loading communities</Trans>
    </span>
  ) : resp.loading ? (
    <Loader />
  ) : (
    <SidebarComponent>
      <InternalWrapper>
        <SidebarFixed>
          <SidebarOverflow>
            <Header alignItems={'center'}>
              <Avatar
                onClick={openMenu}
                src={data!.me!.user!.icon!}
                // name={props.data.me.user.name}
              />
              <Sbox>
                <SearchBox />
              </Sbox>
              {/* <Input placeholder="Search" /> */}
              {menuIsOpen ? (
                <>
                  <OutsideClickHandler onOutsideClick={closeMenu}>
                    <Dropdown />
                  </OutsideClickHandler>
                  <Layer />
                </>
              ) : null}
              {/* <Input placeholder={"Search here"} /> */}
            </Header>
            <Nav pt={3}>
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
            <Nav>
              {data!.me!.user!.joinedCommunities!.edges!.map(
                userJoinedCommunitiesEdge => (
                  <CommunityLink
                    key={userJoinedCommunitiesEdge!.node!.localId!}
                    to={
                      '/communities/' +
                      userJoinedCommunitiesEdge!.node!.localId!
                    }
                  >
                    <NavItem alignItems={'center'} mb={2}>
                      <Image
                        mr={2}
                        borderRadius={4}
                        height={36}
                        width={36}
                        src={userJoinedCommunitiesEdge!.node!.icon!}
                      />
                      <ItemTitle fontSize={1} fontWeight={600}>
                        {userJoinedCommunitiesEdge!.node!.name}
                      </ItemTitle>
                    </NavItem>
                  </CommunityLink>
                )
              )}
            </Nav>
          </SidebarOverflow>
        </SidebarFixed>
      </InternalWrapper>
    </SidebarComponent>
  );
};

export default Sidebar;
