import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import React from 'react';
import { connectStateResults, InstantSearch } from 'react-instantsearch-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
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
import Settings from '../../pages/settings';
import Thread from '../../pages/thread/component';
import User from '../../pages/User';
import Signup from '../../pages/Signup';
import ConfirmAccount from '../../pages/Confirm';
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
  const { me } = React.useContext(SessionContext);

  return searchState && searchState.query ? (
    <>
      <MobileHeader onOpen={onOpen} />
      <Switch>
        <Route path="/search" component={SearchComp} />
      </Switch>
    </>
  ) : (
    <>
      <MobileHeader onOpen={onOpen} />
      <Switch>
        <Route exact path="/" component={me ? Home : Login} />
        <Route exact path="/profile" component={me ? Profile : Login} />
        <Route
          exact
          path="/mycommunities"
          component={me ? MyCommunities : Login}
        />
        <Route exact path="/settings" component={me ? Settings : Login} />
        <Route
          exact
          path="/mycollections"
          component={me ? MyCollections : Login}
        />

        <Route exact path="/discover" component={Discover} />
        <Route exact path="/communities" component={CommunitiesAll} />
        <Route
          exact
          path="/communities/:communityId"
          render={route => {
            const communityId = route.match.params.communityId;
            return (
              <CommunitiesCommunity
                url={route.match.url}
                communityId={communityId}
              />
            );
          }}
        />
        <Route
          exact
          path="/thread/:id"
          render={route => {
            const threadId = route.match.params.id;
            return <Thread threadId={threadId} />;
          }}
        />
        <Route
          exact
          path="/collections/:id"
          render={route => {
            const id = route.match.params.id;
            return <Collection id={id} />;
          }}
        />
        <Route
          exact
          path="/user/:id"
          render={route => {
            const userId = route.match.params.id;
            return me && me.user.id === userId ? (
              <Redirect to="/profile" />
            ) : (
              <User {...route} />
            );
          }}
        />
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
  '884f8371d98c8c9837cf76f85f4b5daa'
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
  const { me: auth } = React.useContext(SessionContext);
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
      if (
        lastLocation &&
        !props.history.location.pathname.startsWith('/search/')
      ) {
        setSearchState({ search: '' });
        setLastLocation(undefined);
        return;
      }
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
        indexName="moodlenet_mothership"
      >
        <PageContainer>
          {auth ? (
            <Sidebar isOpen={isSidebarOpen} />
          ) : location.pathname !== '/' ? (
            <SidebarNoLoggedWrapper isOpen={isSidebarOpen} />
          ) : null}
          <MainWrapper>
            <WrapperDimension
              isLogin={!auth && location.pathname === '/' ? true : false}
            >
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

export default _ => {
  const { me: auth } = React.useContext(SessionContext);

  return (
    <Main>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/reset-min.css"
      />
      <Router>
        <AppInner>
          <Switch>
            <Route
              exact
              path="/confirm-email/:token"
              render={route =>
                auth ? (
                  <Redirect to="/" />
                ) : (
                  <ConfirmAccount token={route.match.params.token} />
                )
              }
            />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/reset/:token" component={CreateNewPassword} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={props => <App {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </AppInner>
      </Router>
    </Main>
  );
};
