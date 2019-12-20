import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { useHistory } from 'react-router-dom';
import { algoliaCreds } from '../../constants';
const createURL = searchState => `?${qs.stringify(searchState)}`;

const searchStateToUrl = searchState => `/search/${createURL(searchState)}`;

const urlToSearchState = (search: string) => qs.parse(search.slice(1));
// const DEBOUNCE_TIME = 100;
// const debouncedSetState = React.useRef<any>()
// clearTimeout(debouncedSetState.current);
// debouncedSetState.current = setTimeout(() => {}, DEBOUNCE_TIME);
const LAST_LOCATION = Symbol('last location');
const searchClient = algoliasearch(algoliaCreds.appId, algoliaCreds.apiKey);

export const ProvideAlgoliaContext: React.FC = ({ children }) => {
  const { location, push } = useHistory();
  const [searchState, setSearchState] = React.useState(
    urlToSearchState(location.search)
  );
  React.useEffect(
    () => {
      console.log(searchState, location);
      if (searchState.query) {
        const nextLocState =
          location.state && location.state[LAST_LOCATION]
            ? location.state
            : { [LAST_LOCATION]: location };
        push(searchStateToUrl(searchState), nextLocState);
      } else if (location.pathname === '/search/') {
        const nextLocation =
          location.state &&
          location.state[LAST_LOCATION] &&
          location.state[LAST_LOCATION].pathname !== '/search/'
            ? location.state[LAST_LOCATION]
            : '/';
        push(nextLocation);
      }
    },
    [searchState]
  );

  return (
    <InstantSearch
      searchState={searchState}
      onSearchStateChange={setSearchState}
      searchClient={searchClient}
      indexName="moodlenet_mothership"
    >
      {children}
    </InstantSearch>
  );
};
