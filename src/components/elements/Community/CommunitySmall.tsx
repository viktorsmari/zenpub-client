import * as React from 'react';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';
import styled from '../../../themes/styled';
import Collection from '../../../types/Collection';
import H5 from '../../typography/H5/H5';
const PlaceholderImg = require('../Icons/collectionPlaceholder.png');

interface CollectionProps {
  collection: Collection;
}
const Collection: React.FC<CollectionProps> = ({ collection }) => {
  return (
    <Wrapper>
      <Link to={`/communities/${collection.localId}`}>
        <Img
          style={{
            backgroundImage: `url(${collection.icon || PlaceholderImg})`
          }}
        />
        <Infos>
          <Title>
            {collection.name.length > 80
              ? collection.name.replace(/^(.{76}[^\s]*).*/, '$1...')
              : collection.name}
          </Title>
        </Infos>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  margin-bottom: 8px;
  margin-left: 32px;
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
const Title = styled(H5)`
  font-size: 13px !important;
  margin: 8px 0 8px 0 !important;
  line-height: 13px !important;
  letter-spacing: 0.8px;
  font-weight: 500 !important;
  color: ${props => props.theme.styles.colour.base1};
`;

export default Collection;
