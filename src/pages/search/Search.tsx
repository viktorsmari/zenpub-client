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

const CommunityWrapper = styled(Box)`
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

const Collections = styled(Box)`
  margin-left: 10px;
`;

const Collection = styled(Flex)`
  align-items: center;
  border-bottom: 3px solid white;
  background: #f1e5db;
`;
const CollectionImage = styled(Box)`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-size: cover;
`;

const UrlLink = styled.a`
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

function ResultCommunity(props) {
  var community = props.hit;

  return (
    <CommunityWrapper m={2} mb={4}>
      {!community.collections.length ? (
      <Community>
        <UrlLink href={community.id}>
        <CommunityImage
          m={3}
          style={{ backgroundImage: `url(${community.image || community.icon})` }}
        >
          <CommunityText ml={1}>{community.name}</CommunityText>
        </CommunityImage>
        </UrlLink>
      </Community>
      ) : (
      <>
      <SubText p={2}>
        {community.name}
      </SubText>
      <Collections>
        {community.collections.map((collection, i_col) =>
          ResultCollection(collection)
        )}
      </Collections>
      </>
      )}
    </CommunityWrapper>
  );
}

function ResultCollection(collection) {
  return (
    !collection.resources.length ? (
      <Collection>
        <UrlLink href={collection.id}>
        <CollectionImage
          m={3}
          style={{ backgroundImage: `url(${collection.icon || collection.image})` }}
        >
        </CollectionImage>
        <CommunityText ml={1}>{collection.name}</CommunityText>
        </UrlLink>
      </Collection>
    ) : (
    <>
    <SubText p={2}>
        {collection.name}
    </SubText>
    {collection.resources.map((resource, i_res) => (
    <Resource>
      <ResourceCard
        key={i_res}
        icon={resource.icon}
        title={resource.name}
        summary={resource.summary}
        url={resource.url}
        coreIntegrationURL={
          moodle_core_download_url
          ? moodle_core_download_url +
            `&sourceurl=` +
            encodeURIComponent(resource.url) +
            `&moodleneturl=` +
            encodeURIComponent(collection.id) +
            `&name=` +
            encodeURIComponent(resource.name) +
            `&description=` +
            encodeURIComponent(resource.summary)
          : null
        }
      />
    </Resource>
  ))}
  </>
  )
  )
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
            <Hits hitComponent={ResultCommunity} />
          </Box>
          <Pagination />
          {/* </WrapperCont>
        </Wrapper> */}
        </HomeBox>
      </MainContainer>
    );
  }
}
