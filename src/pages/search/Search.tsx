import * as React from 'react';
// import CommunityCard from '../../components/elements/Community/Community';
import ResourceCard from '../../components/elements/Resource/Resource';
import { Box, Flex, Text } from 'rebass';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
// import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import styled from '../../themes/styled';

import { Hits, Pagination, Configure } from 'react-instantsearch-dom';

const CommunityWrapper = styled(Box)`
  border: 1px solid ${props => props.theme.styles.colors.lighter};
  background: white;
  border-radius: 3px;
`;

const Community = styled(Flex)`
  align-items: center;
  border-bottom: 3px solid ${props => props.theme.styles.colors.lighter};
`;
const CommunityImage = styled(Box)`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  background-size: cover;
`;
const CommunityText = styled(Text)`
  font-size: 16px;
  font-weight: 800;
`;

function Hit(props) {
  var community = props.hit;

  return (
    <CommunityWrapper m={2} p={2}>
      <Community pb={2}>
        <CommunityImage style={{ backgroundImage: `url(${community.icon})` }} />
        <CommunityText ml={3}>{community.name}</CommunityText>
      </Community>
      <Box>
        {community.collections.map((collection, i_col) =>
          collection_resources(collection)
        )}
      </Box>
    </CommunityWrapper>
  );
}

function collection_resources(collection) {
  const urlParams = new URLSearchParams(window.location.search);
  const moodle_core_download_url = decodeURI(
    urlParams.get('moodle_core_download_url') || ''
  );
  return collection.resources.map((resource, i_res) => (
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
  ));
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
            <Hits hitComponent={Hit} />
          </Box>
          <Pagination />
          {/* </WrapperCont>
        </Wrapper> */}
        </HomeBox>
      </MainContainer>
    );
  }
}
