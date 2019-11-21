import * as React from 'react';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';
import styled from '../../../themes/styled';
const PlaceholderImg = require('../Icons/collectionPlaceholder.png');
import { Text, Box } from 'rebass/styled-components';
import { Collection } from '../../../graphql/types';

interface CollectionProps {
  collection: Collection;
}
const Collection: React.FC<CollectionProps> = ({ collection }) => {
  return (
    <Wrapper py={1} mb={1} ml={3}>
      <Link to={`/collections/${collection.id}`}>
        <Img
          style={{
            backgroundImage: `url(${collection.icon || PlaceholderImg})`
          }}
        />
        <Infos>
          <Title fontSize={1} my={1} fontWeight={600}>
            {collection.name.length > 80
              ? collection.name.replace(/^(.{76}[^\s]*).*/, '$1...')
              : collection.name}
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
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
const Infos = styled.div``;
const Title = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
  text-align: center;
`;

export default Collection;
