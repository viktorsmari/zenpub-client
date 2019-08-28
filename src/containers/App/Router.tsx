import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '../../themes/styled';
import CommunitiesAll from '../../pages/communities.all/CommunitiesAll';
import CollectionsAll from '../../pages/collections.all';
import CommunitiesCommunity from '../../pages/communities.community/CommunitiesCommunity';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/not-found/NotFound';
import ProtectedRoute from './ProtectedRoute';
import SearchComp from '../../pages/search/Search';
import Home from '../../pages/home';
import Discover from '../../pages/discover';
import Profile from '../../pages/Profile';
import MyCommunities from '../../pages/communities.all/communitiesJoined';
import MyCollections from '../../pages/collections.all/collectionsFollowed';
import User from '../../pages/User';
import Settings from '../../pages/settings';
import Reset from '../../pages/Reset';
import Thread from '../../pages/thread';
import CreateNewPassword from '../../pages/CreateNewPassword';
import qs from 'qs';

import {
  MainWrapper,
  WrapperDimension,
  Inner
} from '../../sections/layoutUtils';
import { Flex } from 'rebass';
import Sidebar from '../../sections/sidebar/sidebarHOC';
import CollectionViewModal from '../../components/elements/CollectionViewModal';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, connectStateResults } from 'react-instantsearch-dom';

const Main = styled(Flex)`
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

const createURL = state => `?${qs.stringify(state)}`;

const searchStateToUrl = (props, searchState) => {
  if (searchState.query) {
    return `/search/${createURL(searchState)}`;
  } else if (
    !props.location.pathname.includes('search') &&
    !searchState.query
  ) {
    return props.location.pathname;
  } else if (props.location.pathname.includes('search') && !searchState.query) {
    return '/';
  }
};

const Content = connectStateResults(
  ({ searchState }) =>
    searchState && searchState.query ? (
      <Switch>
        <Route path="/search" component={SearchComp} />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/communities" component={CommunitiesAll} />
        <Route exact path="/mycommunities" component={MyCommunities} />
        <Route exact path="/mycollections" component={MyCollections} />
        <Route exact path="/thread/:id" component={Thread} />
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
        <Route exact path="/collections" component={CollectionsAll} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/user/:id" component={User} />
        <Route path="/search" component={SearchComp} />

        <Route component={NotFound} />
      </Switch>
    )
);

const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const DEBOUNCE_TIME = 100;

const searchClient = algoliasearch(
  'KVG4RFL0JJ',
  '2b7ba2703d3f4bac126ea5765c2764eb'
);

class App extends React.Component<any> {
  state = {
    searchState: urlToSearchState(this.props.location),
    lastLocation: this.props.location
  };

  static getDerivedStateFromProps(props, state) {
    if (props.location !== state.lastLocation) {
      return {
        searchState: urlToSearchState(props.location),
        lastLocation: props.location
      };
    }

    return null;
  }

  onSearchStateChange = searchState => {
    clearTimeout(this['debouncedSetState']);

    this['debouncedSetState'] = setTimeout(() => {
      this.props.history.push(
        searchStateToUrl(this.props, searchState),
        searchState
      );
    }, DEBOUNCE_TIME);

    this.setState({ searchState });
  };

  render() {
    return (
      <Flex alignItems={'center'}>
        <InstantSearch
          searchState={this.state.searchState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={createURL}
          searchClient={searchClient}
          indexName="next_moodlenet"
        >
          <PageContainer>
            <Sidebar history={history} />
            <MainWrapper>
              <WrapperDimension>
                <Inner>
                  <Content />
                </Inner>
              </WrapperDimension>
            </MainWrapper>
          </PageContainer>
        </InstantSearch>
      </Flex>
    );
  }
}

export default p => (
  <Main>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/reset-min.css"
    />
    <Router>
      <AppInner>
        <Switch>
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/reset/:token" component={CreateNewPassword} />
          <Route exact path="/login" component={Login} />

          <ProtectedRoute path="/" component={props => <App {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </AppInner>
    </Router>
  </Main>
);
