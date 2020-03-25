import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Text, Box } from 'rebass/styled-components';
import media from 'styled-media-query';
import { Header } from 'ui/modules/Header';

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
  CommunityBoxes: JSX.Element;
  CollectionsBoxes: JSX.Element;
  UserBoxes: JSX.Element;
  basePath: string;
  totalCommunities: string;
  totalActivities: string;
  totalCollections: string;
  totalUsers: string;
  userLink: string;
  userName: string;
}

export const User: React.FC<Props> = ({
  HeroUserBox,
  ActivityBoxes,
  CommunityBoxes,
  CollectionsBoxes,
  UserBoxes,
  basePath,
  totalCommunities,
  userLink,
  totalCollections,
  totalUsers,
  userName
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Box mb={2} sx={{ background: 'white' }}>
              <Header name={userName} />
              {HeroUserBox}
              <Menu
                basePath={basePath}
                totalCommunities={totalCommunities}
                totalCollections={totalCollections}
                totalUsers={totalUsers}
              />
            </Box>
            <Switch>
              <Route exact path={`${basePath}/`}>
                {ActivityBoxes}
              </Route>
              <Route exact path={`${basePath}/likes`}>
                {ActivityBoxes}
              </Route>
              <Route path={`${basePath}/communities`}>
                <WrapperBoxes>{CommunityBoxes}</WrapperBoxes>
              </Route>
              <Route path={`${basePath}/collections`}>{CollectionsBoxes}</Route>
              <Route path={`${basePath}/following`}>{UserBoxes}</Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        {userLink.length > 0 ? (
          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              Relevant links
            </PanelTitle>
            <Nav>
              <NavItem fontSize={1}>
                <Flex>
                  <Link size={20} />{' '}
                  <Text ml={2} flex={1}>
                    {userLink}
                  </Text>
                </Flex>
              </NavItem>
            </Nav>
          </Panel>
        ) : null}
      </WrapperPanel>
    </MainContainer>
  );
};

const Menu = ({
  basePath,
  totalCommunities,
  totalCollections,
  totalUsers
}: {
  basePath: string;
  totalCommunities: string;
  totalCollections: string;
  totalUsers: string;
}) => (
  <MenuWrapper p={3} pt={3}>
    <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink>
    <NavLink exact to={`${basePath}/likes`}>
      Likes
    </NavLink>
    <NavLink exact to={`${basePath}/communities`}>
      {totalCommunities} communities
    </NavLink>
    <NavLink exact to={`${basePath}/collections`}>
      {totalCollections} collections
    </NavLink>
    <NavLink exact to={`${basePath}/following`}>
      {totalUsers} following
    </NavLink>
  </MenuWrapper>
);

const WrapperBoxes = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  padding: 8px;
`;

const MenuWrapper = styled(Flex)`
  justify-content: space-around;
  border-bottom: 3px solid ${props => props.theme.colors.lighter};
  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: 8px;
    text-transform: capitalize;
    color: ${props => props.theme.colors.gray};
    letterspacing: 1px;
    font-size: 13px;
    padding: 4px 8px;
    border-radius: 4px;
    &:hover {
      background: ${props => props.theme.colors.lighter};
    }
    &.active {
      color: #ffffff;
      background: ${props => props.theme.colors.orange};
    }
  }
`;

export const HomeBox = styled(Flex)`
  width: 600px;
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
