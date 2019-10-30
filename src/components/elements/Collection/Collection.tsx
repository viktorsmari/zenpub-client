import * as React from 'react';
import styled from '../../../themes/styled';
import CollectionType from '../../../types/Collection';
import { Link } from 'react-router-dom';
import { Resource } from '../Icons';
import { Flex, Text, Heading } from 'rebass';
const PlaceholderImg = require('../Icons/collectionPlaceholder.png');

interface CollectionProps {
  collection: CollectionType;
  openModal: any;
  communityId: string;
}
/**
 * Collection component.
 */

export default ({ collection, communityId, openModal }: CollectionProps) => {
  return (
    <Wrapper mb={2} p={2}>
      <Link
        to={
          collection.localId
            ? `/communities/${communityId}/collections/${collection.localId}`
            : `/communities/${communityId}/collections/federate?url=${encodeURI(
                collection.id
              )}`
        }
      >
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
          <Desc mt={2}>
            {collection.summary.length > 320
              ? collection.summary.replace(
                  /^([\s\S]{316}[^\s]*)[\s\S]*/,
                  '$1...'
                )
              : collection.summary}
          </Desc>
          <Actions>
            <ActionItem>
              <Resource
                width={18}
                height={18}
                strokeWidth={2}
                color={'#8b98a2'}
              />
              {(collection.resources && collection.resources.totalCount) || 0}{' '}
            </ActionItem>
          </Actions>
        </Infos>
      </Link>
    </Wrapper>
  );
};

const Actions = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0;
`;
const ActionItem = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.styles.colour.collectionIcon};
  text-transform: uppercase;
  & svg {
    vertical-align: sub;
    color: inherit !important;
    margin-right: 4px;
  }
`;

const Wrapper = styled(Flex)`
  cursor: pointer;
  position: relative;
  border-bottom: 4px solid ${props => props.theme.styles.colors.lighter};
  & a {
    display: flex;
    color: inherit;
    text-decoration: none;
    width: 100%;
    flex: 1;
  }
  &:hover {
    border-radius: 4px;
    background: ${props => props.theme.styles.colors.lighter};
  }
`;
const Img = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 8px;
  .--rtl & {
    margin-right: 0px;
    margin-left: 8px;
  }
`;
const Infos = styled.div`
  flex: 1;
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
  position: relative;
`;
const Title = styled(Heading)`
  color: ${props => props.theme.styles.colors.darkgray};
  font-size: 20px;
`;
const Desc = styled(Text)`
  color: ${props => props.theme.styles.colors.darkgray};
  line-height: 20px;
  margin-bottom: 26px !important;
`;

// export default Collection;
