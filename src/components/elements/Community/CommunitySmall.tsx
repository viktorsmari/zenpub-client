import { BasicCommunityFragment } from 'graphql/fragments/generated/basicCommunity.generated';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import styled from '../../../themes/styled';
const PlaceholderImg = require('../Icons/collectionPlaceholder.png');

interface CommunityProps {
  community: BasicCommunityFragment;
}
const CommunitySmall: React.FC<CommunityProps> = ({ community }) => {
  return (
    <Wrapper py={1} mb={1} ml={3}>
      <Link to={`/communities/${community.id}`}>
        <Img
          style={{
            backgroundImage: `url(${community.icon ||
              community.image ||
              PlaceholderImg})`
          }}
        />
        <Infos>
          <Title fontSize={1} my={1} fontWeight={600}>
            {community.name.length > 80
              ? community.name.replace(/^(.{76}[^\s]*).*/, '$1...')
              : community.name}
          </Title>
        </Infos>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  cursor: pointer;
  position: relative;
  ${media.lessThan('medium')`
  display: block;
`} & a {
    color: inherit;
    text-decoration: none;
    width: 100%;
  }
`;
const Img = styled.div`
  width: 100%;
  height: auto;
  padding: 50%;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Infos = styled.div``;
const Title = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

export default CommunitySmall;
