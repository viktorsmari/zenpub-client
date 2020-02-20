import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Text, Box } from 'rebass/styled-components';
import media from 'styled-media-query';

import {
  Nav,
  NavItem,
  Panel,
  PanelTitle,
  WrapperPanel
} from 'ui/elements/Panel';
import styled from 'ui/themes/styled';
import { Link } from 'react-feather';

export interface Props {
  ActivityBoxes: JSX.Element;
  HeroUserBox: JSX.Element;
  Header: JSX.Element;
  CommunityBoxes: JSX.Element;
  CollectionsBoxes: JSX.Element;
  UserBoxes: JSX.Element;
  basePath: string;
  totalCommunities: string;
  totalActivities: string;
  totalCollections: string;
  totalUsers: string;
}

export const User: React.FC<Props> = ({
  HeroUserBox,
  ActivityBoxes,
  CommunityBoxes,
  CollectionsBoxes,
  UserBoxes,
  basePath,
  Header,
  totalCommunities,
  totalActivities,
  totalCollections,
  totalUsers
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {Header}
            {HeroUserBox}
            <Switch>
              <Route exact path={`${basePath}/`}>
                <Menu basePath={basePath} />
                {ActivityBoxes}
              </Route>
              <Route exact path={`${basePath}/likes`}>
                <Menu basePath={basePath} />
                {ActivityBoxes}
              </Route>
              <Route exact path={`${basePath}/communities`}>
                <WrapperBoxes>{CommunityBoxes}</WrapperBoxes>
              </Route>
              <Route exact path={`${basePath}/collections`}>
                {CollectionsBoxes}
              </Route>
              <Route exact path={`${basePath}/following`}>
                {UserBoxes}
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Relevant links
          </PanelTitle>
          <Nav>
            <NavWrapper fontSize={1} mb={2}>
              <NavLink exact to={`${basePath}`}>
                <Text ml={2} flex={1}>
                  <Bold>{totalActivities}</Bold> Activities
                </Text>
              </NavLink>
            </NavWrapper>
            <NavWrapper fontSize={1} mb={2}>
              <NavLink to={`${basePath}/communities`}>
                <Text ml={2} flex={1}>
                  <Bold>{totalCommunities}</Bold> Joined communities
                </Text>
              </NavLink>
            </NavWrapper>
            <NavWrapper fontSize={1} mb={2}>
              <NavLink to={`${basePath}/collections`}>
                <Text ml={2} flex={1}>
                  <Bold>{totalCollections}</Bold> Followed collections
                </Text>
              </NavLink>
            </NavWrapper>
            <NavWrapper fontSize={1}>
              <NavLink to={`${basePath}/following`}>
                <Text ml={2} flex={1}>
                  <Bold>{totalUsers}</Bold> Followed users
                </Text>
              </NavLink>
            </NavWrapper>
          </Nav>
        </Panel>

        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Relevant links
          </PanelTitle>
          <Nav>
            <NavItem fontSize={1}>
              <Flex>
                <Link size={20} />{' '}
                <Text ml={2} flex={1}>
                  dougbelshaw.com
                </Text>
              </Flex>
            </NavItem>
          </Nav>
        </Panel>
      </WrapperPanel>
    </MainContainer>
  );
};

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuWrapper p={3} pt={3}>
    <NavLink exact to={`${basePath}`}>
      Recent activities
    </NavLink>
    <NavLink exact to={`${basePath}/likes`}>
      Likes
    </NavLink>
  </MenuWrapper>
);

const NavWrapper = styled(NavItem)`
  .active {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    b {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Bold = styled.b`
  font-size: 14px;
  font-weight: 800;
  border: 1px solid ${props => props.theme.colors.primary};
  padding: 0px 4px;
  border-radius: 2px;
  width: 24px;
  display: inline-block;
  text-align: center;
`;

const WrapperBoxes = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  padding: 8px;
`;

const MenuWrapper = styled(Flex)`
  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: 8px;
    color: ${props => props.theme.colors.gray};
    letterspacing: 1px;
    font-size: 13px;
    padding: 4px 8px;
    &.active {
      color: #ffffff;
      background: ${props => props.theme.colors.orange};
      border-radius: 4px;
    }
  }
`;

export const HomeBox = styled(Flex)`
  max-width: 600px;
  width: 100%;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  ${media.lessThan('1005px')`
    max-width: 100%;
  `};
  // ${media.lessThan('1280px')`
  // top: 60px;
  // `};
`;

export const MainContainer = styled(Flex)`
  align-items: stretch;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
`;

export const WrapperCont = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  background: white;
  border-radius: 6px;
  z-index: 0;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  & ul {
    display: block;

    & li {
      display: inline-block;

      & h5 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  & h4 {
    margin: 0;
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #151b26;
    line-height: 40px;
  }
`;
