import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '../../themes/styled';
import { compose, withState } from 'recompose';
import CommunitiesAll from '../../pages/communities.all/CommunitiesAll';
import CollectionsAll from '../../pages/collections.all';
import CommunitiesCommunity from '../../pages/communities.community/CommunitiesCommunity';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/not-found/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Search from '../../pages/search/Search';
import Home from '../../pages/home';
import Discover from '../../pages/discover';
import Profile from '../../pages/Profile';
import MyCommunities from '../../pages/communities.all/communitiesJoined';
import MyCollections from '../../pages/collections.all/collectionsFollowed';
import User from '../../pages/User';
import Settings from '../../pages/settings';
import Reset from '../../pages/Reset';
import CreateNewPassword from '../../pages/CreateNewPassword';
import {
  MainWrapper,
  WrapperDimension,
  Inner
} from '../../sections/layoutUtils';
import { Flex } from 'rebass';
import Sidebar from '../../sections/sidebar/sidebarHOC';
import CollectionViewModal from '../../components/elements/CollectionViewModal';

const Main = styled(Flex)`
  background: rgb(245, 246, 247);
  height: 100%;
  font-family: 'Open Sans', sans-serif;
`;

const AppInner = styled.div`
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  flex-basis: 0%;
  flex-grow: 1;
  display: flex;
  flex-shrink: 1;
`;

const PageContainer = styled(Flex)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  ponter-events: auto;
  flex-direction: row;
`;

export default compose(withState('sidebar', 'onSidebar', false))(p => (
  <Main>
    <Router>
      <AppInner>
        <Switch>
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/reset/:token" component={CreateNewPassword} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <ProtectedRoute
            path="/"
            component={props => (
              <>
                <PageContainer>
                  <Sidebar history={props.history} />
                  <MainWrapper>
                    <WrapperDimension>
                      <Inner>
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/discover" component={Discover} />
                          <Route exact path="/settings" component={Settings} />
                          <Route
                            exact
                            path="/communities"
                            component={CommunitiesAll}
                          />
                          <Route
                            exact
                            path="/mycommunities"
                            component={MyCommunities}
                          />
                          <Route
                            exact
                            path="/mycollections"
                            component={MyCollections}
                          />
                          <Route
                            exact
                            path="/communities/:community"
                            component={CommunitiesCommunity}
                          />
                          <Route
                            exact
                            path="/communities/:community/collections/:collection"
                            component={CollectionViewModal}
                          />
                          <Route
                            exact
                            path="/collections"
                            component={CollectionsAll}
                          />
                          <Route exact path="/profile" component={Profile} />
                          <Route exact path="/user/:id" component={User} />
                          <Route component={NotFound} />
                        </Switch>
                      </Inner>
                    </WrapperDimension>
                  </MainWrapper>
                </PageContainer>
              </>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </AppInner>
    </Router>
  </Main>
));
