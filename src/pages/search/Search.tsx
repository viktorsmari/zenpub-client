import * as React from 'react';
import ResourceCard from '../../components/elements/Resource/Resource';
import { Box, Flex, Text } from 'rebass';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import styled from '../../themes/styled';

import { Hits, Pagination, Configure } from 'react-instantsearch-dom';
// import { Trans } from '@lingui/macro';

const urlParams = new URLSearchParams(window.location.search);
const moodle_core_download_url = decodeURI(
  urlParams.get('moodle_core_download_url') || ''
);

const ResultWrapper = styled(Box)`
  border-radius: 4px;
`;

const Community = styled(Flex)`
  align-items: center;
  border-bottom: 3px solid white;
  background: #f1e5db;
`;
const CommunityImage = styled(Box)`
  width: 100%;
  height: 100px;
  border-radius: 6px;
  background-size: cover;
`;
const CommunityText = styled(Text)`
  font-size: 16px;
  font-weight: 800;
`;

const Collection = styled(Flex)`
  border-bottom: 3px solid white;
  background: #f1e5db;
`;
const CollectionImage = styled(Box)`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-size: cover;
`;

const CollectionText = styled(Text)`
  font-size: 16px;
  font-weight: 800;
`;


const UrlLink = styled.a`
  text-decoration: none;
  width: 100%;
  display: block;
`;

const UrlBlock = styled(UrlLink)`
  text-decoration: none;
  width: 100%;
  display: block;
`;

const Resource = styled.div`
  margin-left: 15px;
  background-color: #f9f0e8;
`;

const SubText = styled(Text)`
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props => props.theme.styles.colors.darkgray};
  background: #f1e5db;
`;

function Result(props) {
  var hit = props.hit;

  return (
    <ResultWrapper m={2} mb={4}>
      {hit.collection ? (
        <SubText p={2}>
          <a href={hit.collection.community.id}>{hit.collection.community.name}</a> > <a href={hit.collection.id}>{hit.collection.name}</a>
        </SubText>
      ) : (
        hit.community ? (
          <SubText p={2}>
          <a href={hit.community.id}>{hit.community.name}</a>
          </SubText>
        ) : (
          <span/>
        )
      )}
      {
        hit.index_type=='Resource' ?
        (
          <Resource>
            <ResourceCard
              key={hit.id}
              icon={hit.icon}
              title={hit.name}
              summary={hit.summary}
              url={hit.url}
              coreIntegrationURL={
                moodle_core_download_url
                ? moodle_core_download_url +
                  `&sourceurl=` +
                  encodeURIComponent(hit.url) +
                  `&moodleneturl=` +
                  encodeURIComponent(hit.id) +
                  `&name=` +
                  encodeURIComponent(hit.name) +
                  `&description=` +
                  encodeURIComponent(hit.summary)
                : null
              }
            />
          </Resource>
        ) : (
          hit.index_type=='Collection' ? (
            <Collection>
              <UrlBlock href={hit.id}>
              <CollectionImage
                m={3}
                style={{ backgroundImage: `url(${hit.icon || hit.image})` }}
              >
              </CollectionImage>
              <CollectionText ml={1}>{hit.name}</CollectionText>
              </UrlBlock>
              <div>{hit.summary}</div>
            </Collection>
          ) : (
            <Community>
              <UrlBlock href={hit.id}>
              <CommunityImage
                m={3}
                style={{ backgroundImage: `url(${hit.image || hit.icon})` }}
              >
                <CommunityText ml={1}>{hit.name}</CommunityText>
              </CommunityImage>
              </UrlBlock>
              <div>{hit.summary}</div>
            </Community>
          )
        )
      }
    </ResultWrapper>
  );
}


export default class extends React.Component {
  render() {
    return (
      <MainContainer>
        <HomeBox>
          {/* <Wrapper>
          <WrapperCont> */}
          <Configure hitsPerPage={8} />
          <Box>
            <Hits hitComponent={Result} />
          </Box>
          <Pagination />
          {/* </WrapperCont>
        </Wrapper> */}
        </HomeBox>
      </MainContainer>
    );
  }
}
