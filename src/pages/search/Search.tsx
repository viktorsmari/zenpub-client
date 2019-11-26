import * as React from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
// import styled from '../../themes/styled';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import {
  connectInfiniteHits,
  Pagination,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import Preview from './preview';
import { TabPanel, Tabs } from 'react-tabs';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import { Trans } from '@lingui/macro';
// import { LocaleContext } from '../../containers/App/App';
import styled from '../../themes/styled';
import { Nav, Panel, PanelTitle, WrapperPanel } from '../../sections/panel';
const urlParams = new URLSearchParams(window.location.search);
const moodle_core_download_url = decodeURI(
  urlParams.get('moodle_core_download_url') || ''
);

const WrapperResult = styled(Box)`
  :hover {
    background: ${props => props.theme.colors.lighter};
  }
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;
const SupText = styled(Text)`
  a {
    color: inherit;
    text-decoration: none
   :hover {
      color: ${props => props.theme.colors.orange};
    }
  }
`;

const PagFlex = styled(Flex)`
  align-content: center;
  text-align: center;
  .ais-Pagination {
    flex: 1;
  }
`;

function Result(props) {
  var hit = props.hit;
  return (
    <WrapperResult p={3}>
      {hit.collection ? (
        <SupText mb={3} variant="suptitle">
          <a href={hit.collection.community.canonicalUrl}>
            {hit.collection.community.name}
          </a>{' '}
          > <a href={hit.collection.canonicalUrl}>{hit.collection.name}</a>
        </SupText>
      ) : hit.community ? (
        <SupText mb={3} variant="suptitle">
          <a href={hit.community.canonicalUrl}>{hit.community.name}</a>
        </SupText>
      ) : (
        <span />
      )}
      <Preview
        icon={hit.icon || hit.image}
        title={hit.name}
        summary={hit.summary}
        url={hit.url || hit.canonicalUrl}
        type={hit.index_type}
        coreIntegrationURL={
          moodle_core_download_url
            ? moodle_core_download_url +
              `&sourceurl=` +
              encodeURIComponent(hit.url) +
              `&moodleneturl=` +
              encodeURIComponent(hit.canonicalUrl) +
              `&name=` +
              encodeURIComponent(hit.name) +
              `&description=` +
              encodeURIComponent(hit.summary)
            : null
        }
      />
    </WrapperResult>
  );
}

const InfiniteHits = ({ hits }) => (
  // return the DOM output
  <>
    {hits.map(hit => (
      <Result key={hit.objectID} hit={hit} />
    ))}
    <PagFlex alignItems="center" p={3}>
      <Pagination showNext />
    </PagFlex>
  </>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

export default class extends React.Component {
  render() {
    return (
      <MainContainer>
        <HomeBox>
          <WrapperCont>
            <Wrapper>
              <Configure hitsPerPage={8} />
              <Flex>
                <Tabs style={{ flex: 1 }}>
                  <SuperTabList>
                    <SuperTab>
                      <h5>
                        <Trans>Search result</Trans>
                      </h5>
                    </SuperTab>
                  </SuperTabList>
                  <TabPanel>
                    <Box>
                      <CustomInfiniteHits />
                    </Box>
                  </TabPanel>
                </Tabs>
              </Flex>
            </Wrapper>
          </WrapperCont>
        </HomeBox>

        <WrapperPanel>
          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              <Trans>Search filter</Trans>
            </PanelTitle>
            <Nav>
              <RefinementList attribute="index_type" />
            </Nav>
          </Panel>
        </WrapperPanel>
      </MainContainer>
    );
  }
}
