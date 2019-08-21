import * as React from 'react';
import styled from '../../../themes/styled';
import CollectionType from '../../../types/Collection';
import { Link } from 'react-router-dom';
import { Resource, Eye, Message } from '../Icons';
import { Flex, Text, Heading } from 'rebass';
const PlaceholderImg = require('../Icons/collectionPlaceholder.png');

interface CollectionProps {
  collection: CollectionType;
}
/**
 * Collection component.
 */

export default ({ collection }: CollectionProps) => {
  return (
    <Wrapper mb={2} p={2}>
      <Link
        to={
          collection.localId
            ? `/collections/${collection.localId}`
            : `/collections/federate?url=${encodeURI(collection.id)}`
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
          <Desc mb={2}>
            {collection.summary.length > 320
              ? collection.summary.replace(
                  /^([\s\S]{316}[^\s]*)[\s\S]*/,
                  '$1...'
                )
              : collection.summary}
          </Desc>
          <Actions>
            <ActionItem>
              {(collection.resources && collection.resources.totalCount) || 0}{' '}
              <Resource
                width={18}
                height={18}
                strokeWidth={2}
                color={'#8b98a2'}
              />
            </ActionItem>
            <ActionItem>
              {(collection.followers && collection.followers.totalCount) || 0}{' '}
              <Eye width={18} height={18} strokeWidth={2} color={'#8b98a2'} />
            </ActionItem>
            <ActionItem>
              {(collection.threads && collection.threads.totalCount) || 0}{' '}
              <Message
                width={18}
                height={18}
                strokeWidth={2}
                color={'#8b98a2'}
              />
            </ActionItem>
          </Actions>
        </Infos>
      </Link>
    </Wrapper>
  );
};

const Actions = styled.div`
  margin-top: 10px;
`;
const ActionItem = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.styles.colour.collectionIcon};
  text-transform: uppercase;
  margin-right: 20px;
  & svg {
    vertical-align: sub;
    color: inherit !important;
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
`;
const Infos = styled.div`
  flex: 1;
  margin-left: 8px;
`;
const Title = styled(Heading)`
  color: ${props => props.theme.styles.colors.darkgray};
  font-size: 20px;
`;
const Desc = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  line-height: 20px;
`;

// export default Collection;
