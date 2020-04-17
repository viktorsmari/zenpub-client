import { Trans } from '@lingui/macro';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex } from 'rebass/styled-components';
import { LoadMore } from 'ui/modules/Loadmore';
import { SidePanel } from 'ui/modules/SidePanel';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import media from 'styled-media-query';

export enum HomePageTab {
  Activities = 1,
  MyCommunities,
  MyCollections
}

export interface Props {
  tab: HomePageTab;
  nextCommunitiesFormik: FormikHook;
  nextCollectionsFormik: FormikHook;
  nextInboxFormik: FormikHook;
  myFollowedCommunitiesPage: JSX.Element;
  myFollowedCollectionsPage: JSX.Element;
  InboxPage: JSX.Element;
}

export const Home: React.FC<Props> = ({
  tab,
  InboxPage,
  nextInboxFormik,
  nextCommunitiesFormik,
  nextCollectionsFormik,
  myFollowedCommunitiesPage,
  myFollowedCollectionsPage
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Menu basePath="/" />
            {tab === HomePageTab.Activities && (
              <>
                <h1>act</h1>
                {InboxPage}
                {nextCommunitiesFormik && (
                  <LoadMore LoadMoreFormik={nextInboxFormik} />
                )}
              </>
            )}
            <>
              {tab === HomePageTab.MyCommunities && (
                <>
                  <h1>comm</h1>
                  {myFollowedCommunitiesPage}
                  {nextCommunitiesFormik && (
                    <LoadMore LoadMoreFormik={nextCommunitiesFormik} />
                  )}
                </>
              )}
              {tab === HomePageTab.MyCollections && (
                <>
                  <h1>coll</h1>
                  {myFollowedCollectionsPage}
                  {nextCollectionsFormik && (
                    <LoadMore LoadMoreFormik={nextCollectionsFormik} />
                  )}
                </>
              )}
            </>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanel />
    </MainContainer>
  );
};

export default Home;

const Menu = ({ basePath }: { basePath: string }) => {
  return (
    <MenuWrapper>
      <NavLink exact to={'/'}>
        <Trans>My Timeline</Trans>
      </NavLink>
      <>
        <NavLink to={`/mycommunities`}>
          <Trans>Joined communities</Trans>
        </NavLink>
        <NavLink to={`/mycollections`}>
          <Trans>Followed collections</Trans>
        </NavLink>
      </>
    </MenuWrapper>
  );
};

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

const MenuWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  padding: 12px 8px;
  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: 8px;
    color: ${props => props.theme.colors.gray};
    letterspacing: 1px;
    font-size: 14px;
    padding: 4px 8px;
    // white-space: nowrap;
    &.active {
      color: #ffffff;
      background: ${props => props.theme.colors.orange};
      border-radius: 4px;
    }
  }
`;
