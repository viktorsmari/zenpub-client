import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '../../themes/styled';
import { compose, withState } from 'recompose';
import CommunitiesAll from '../../pages/communities.all/CommunitiesAll';
import CollectionsAll from '../../pages/collections.all';
import CommunitiesCommunity from '../../pages/communities.community/CommunitiesCommunity';
import CollectionsCollection from '../../pages/collections.collection/CollectionsCollection';
// import Header from '../../components/header';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/not-found/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Search from '../../pages/search/Search';
import Home from '../../pages/home';
import Discover from '../../pages/discover';
import Profile from '../../pages/Profile';
import User from '../../pages/User';
import Settings from '../../pages/settings';
import Reset from '../../pages/Reset';
import CreateNewPassword from '../../pages/CreateNewPassword';

import { Flex } from 'rebass';
import Sidebar from '../../sections/sidebar/sidebarHOC';

const AppInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export default compose(withState('sidebar', 'onSidebar', false))(p => (
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
              <Flex justifyContent={'center'}>
                <Sidebar history={props.history} />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/discover" component={Discover} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/communities" component={CommunitiesAll} />
                  <Route
                    path="/communities/:community"
                    component={CommunitiesCommunity}
                  />
                  <Route exact path="/collections" component={CollectionsAll} />
                  <Route
                    path="/collections/:collection"
                    component={CollectionsCollection}
                  />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/user/:id" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </Flex>
            </>
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </AppInner>
  </Router>
));
