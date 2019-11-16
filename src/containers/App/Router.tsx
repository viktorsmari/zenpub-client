import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import React from 'react';
import { connectStateResults, InstantSearch } from 'react-instantsearch-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Flex } from 'rebass/styled-components';
import { SessionContext } from '../../context/global/sessionCtx';
import CollectionsAll from '../../pages/collections.all';
import MyCollections from '../../pages/collections.all/collectionsFollowed';
import Collection from '../../pages/collections.collection/component';
import CommunitiesAll from '../../pages/communities.all/CommunitiesAll';
import MyCommunities from '../../pages/communities.all/communitiesJoined';
import CommunitiesCommunity from '../../pages/communities.community/CommunitiesCommunity';
import CreateNewPassword from '../../pages/CreateNewPassword';
import Discover from '../../pages/discover';
import Home from '../../pages/home';
import Login from '../../pages/login/Login';
import NotFound from '../../pages/not-found/NotFound';
import Profile from '../../pages/Profile';
import Reset from '../../pages/Reset';
import SearchComp from '../../pages/search/Search';
// import Settings from '../../pages/settings';
// import Thread from '../../pages/thread/component';
import User from '../../pages/User';
import {
  Inner,
  MainWrapper,
  WrapperDimension
} from '../../sections/layoutUtils';
import Sidebar from '../../sections/sidebar/sidebarHOC';
import SidebarNoLoggedWrapper from '../../sections/sidebar/sidebar_not_logged';
import styled from '../../themes/styled';
import MobileHeader from './mobileHeader';

const Main = styled(Flex)`
  height: 100%;
  font-family: 'Open Sans', sans-serif !important;
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

const searchStateToUrl = (props, searchState, loggedin) => {
  if (searchState.query) {
    return `/search/${createURL(searchState)}`;
  } else if (
    !props.location.pathname.includes('search') &&
    !searchState.query
  ) {
    return props.location.pathname;
  } else if (props.location.pathname.includes('search') && !searchState.query) {
    return loggedin ? '/' : '/discover';
  }
};

const Content = connectStateResults(({ searchState, onOpen }) => {
  const { auth } = React.useContext(SessionContext);

  return searchState && searchState.query ? (
    <>
      <MobileHeader onOpen={onOpen} />
      {/* <Switch>
        <Route path="/search" component={SearchComp} />
      </Switch> */}
    </>
  ) : (
    <>
      <MobileHeader onOpen={onOpen} />
      <Switch>
        <Route exact path="/" component={auth ? Home : Login} />
        <Route exact path="/profile" component={auth ? Profile : Login} />
        <Route
          exact
          path="/mycommunities"
          component={auth ? MyCommunities : Login}
        />
        {/* <Route exact path="/settings" component={auth ? Settings : Login} />*/}
        <Route
          exact
          path="/mycollections"
          component={auth ? MyCollections : Login}
        />

        <Route exact path="/discover" component={Discover} />
        <Route exact path="/communities" component={CommunitiesAll} />
        <Route
          exact
          path="/communities/:community"
          component={CommunitiesCommunity}
        />
        {/*   <Route
          exact
          path="/thread/:id"
          render={route => {
            const threadId = route.match.params.id;
            return <Thread threadId={threadId} />;
          }}
        />*/}
        <Route
          exact
          path="/collections/:id"
          render={route => {
            const id = route.match.params.id;
            return <Collection id={id} />;
          }}
        />
        <Route exact path="/user/:id" component={User} />
        <Route path="/search" component={SearchComp} />
        <Route exact path="/collections" component={CollectionsAll} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
});

const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const DEBOUNCE_TIME = 100;

const searchClient = algoliasearch(
  'KVG4RFL0JJ',
  '2b7ba2703d3f4bac126ea5765c2764eb'
);

// static getDerivedStateFromProps(props, state) {
//   if (props.location !== state.lastLocation) {
//     return {
//       searchState: urlToSearchState(props.location),
//       lastLocation: props.location
//     };
//   }
//   return null;
// }
//   lastLocation: this.props.location,
//   isSidebarOpen: false

export interface Props {
  location: any;
  history: any;
}
const App: React.FC<Props> = props => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const { auth } = React.useContext(SessionContext);
  const [lastLocation, setLastLocation] = React.useState();
  const onSidebarOpen = React.useCallback(
    () => {
      setSidebarOpen(!isSidebarOpen);
    },
    [isSidebarOpen]
  );
  const [searchState, setSearchState] = React.useState(
    urlToSearchState(props.location)
  );
  const debouncedSetState = React.useRef<any>(null);
  const onSearchStateChange = React.useCallback(
    searchState => {
      !lastLocation && setLastLocation(props.location.pathname);
      clearTimeout(debouncedSetState.current);
      debouncedSetState.current = setTimeout(() => {
        if (searchState.query) {
          props.history.push(
            searchStateToUrl(props, searchState, !!auth),
            searchState
          );
        } else {
          props.history.push(lastLocation);
          setLastLocation(undefined);
        }
      }, DEBOUNCE_TIME);

      setSearchState(searchState);
    },
    [props.history, searchState, props, debouncedSetState.current, lastLocation]
  );
  return (
    <Flex alignItems={'center'}>
      <InstantSearch
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
        searchClient={searchClient}
        indexName="next_moodlenet_all"
      >
        <PageContainer>
          {auth ? (
            <Sidebar isOpen={isSidebarOpen} />
          ) : (
            <SidebarNoLoggedWrapper isOpen={isSidebarOpen} />
          )}
          <MainWrapper>
            <WrapperDimension>
              <Inner>
                <Content isOpen={isSidebarOpen} onOpen={onSidebarOpen} />
              </Inner>
            </WrapperDimension>
          </MainWrapper>
        </PageContainer>
      </InstantSearch>
    </Flex>
  );
};

export default _ => (
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

          <Route path="/" component={props => <App {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </AppInner>
    </Router>
  </Main>
);
