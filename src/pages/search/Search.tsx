import * as React from 'react';
import ResourceCard from '../../components/elements/Resource/Resource';
import { Box, Flex, Text } from 'rebass';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import styled from '../../themes/styled';

import { Hits, Pagination, Configure } from 'react-instantsearch-dom';
import { Trans } from '@lingui/macro';

const CommunityWrapper = styled(Box)`
  border-radius: 4px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  flex: 1;
  width: 100%;
`;

const Community = styled(Flex)`
  align-items: center;
  border-bottom: 3px solid #f9f9f9;
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

const SubText = styled(Text)`
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkgray};
`;

const BoxResource = styled(Box)`
  > div {
    border-bottom: 1px solid #efefef;
  }
`;
const PaginationWrapper = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 24px 0;
  .ais-Pagination {
    margin: 0 auto;
    margin-bottom: 16px;
  }
  .ais-Pagination-item--disabled {
    background: #eaeaea !important;
    border: 1px solid #dadada;
  }

  .ais-Pagination-item {
    width: 30px;
    height: 30px;
    background: #f5801f;
    margin-right: 4px;
    text-align: center;
    display: flex;
    align-items: center;
    flex: 1;
    &.ais-Pagination-item--selected {
      background: #c7600b;
      a,
      span {
        color: white;
      }
    }
    a {
      flex: 1;
      color: black;
      text-decoration: none;
      font-weight: 600;
      font-size: 13px;
      width: 100%;
      height: 100%;
      line-height: 30px;
    }
    span {
      flex: 1;
      color: black;
      text-decoration: none;
      font-weight: 600;
      font-size: 13px;
      width: 100%;
      height: 100%;
      line-height: 30px;
    }
  }
`;

function Hit(props) {
  var community = props.hit;

  return (
    <CommunityWrapper m={2} mb={3}>
      <Community>
        <CommunityImage
          m={3}
          style={{ backgroundImage: `url(${community.icon})` }}
        />
        <CommunityText ml={1}>{community.name}</CommunityText>
      </Community>
      <BoxResource>
        <SubText p={2}>
          <Trans>Resources list</Trans>
        </SubText>
        {community.collections.map((collection, i_col) =>
          collection_resources(collection)
        )}
      </BoxResource>
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
          <Box width={'100%'}>
            <Hits hitComponent={Hit} />
          </Box>
          <PaginationWrapper>
            <Pagination />
          </PaginationWrapper>
          {/* </WrapperCont>
        </Wrapper> */}
        </HomeBox>
      </MainContainer>
    );
  }
}
