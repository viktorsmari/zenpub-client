import gql from 'graphql-tag';
import React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import { compose, withState } from 'recompose';
import styled from '../../../themes/styled';
import { Text, Box } from 'rebass';
import Loader from '../Loader/Loader';
const {
  joinCollectionMutation
} = require('../../../graphql/joinCollection.graphql');
const {
  undoJoinCollectionMutation
} = require('../../../graphql/undoJoinCollection.graphql');

interface Props {
  joinCollection: any;
  leaveCollection: any;
  id: string;
  followed: boolean;
  externalId: string;
  isSubmitting: boolean;
  onSubmitting: any;
}

const withJoinCollection = graphql<{}>(joinCollectionMutation, {
  name: 'joinCollection'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

const withLeaveCollection = graphql<{}>(undoJoinCollectionMutation, {
  name: 'leaveCollection'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

const Join: React.FC<Props> = ({
  joinCollection,
  id,
  leaveCollection,
  externalId,
  followed,
  isSubmitting,
  onSubmitting
}) => {
  if (followed) {
    return (
      <Span
        unfollow
        onClick={() => {
          onSubmitting(true);
          return leaveCollection({
            variables: { collectionId: id },
            update: (proxy, { data: { undoJoinCollection } }) => {
              const fragment = gql`
                fragment Res on Collection {
                  followed
                }
              `;
              let collection = proxy.readFragment({
                id: `Collection:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res'
              });
              collection.followed = !collection.followed;
              proxy.writeFragment({
                id: `Collection:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res',
                data: collection
              });
            }
          })
            .then(res => {
              onSubmitting(false);
            })
            .catch(err => console.log(err));
        }}
      >
        {isSubmitting ? (
          <Loader />
        ) : (
          <>
            <Text>Unfollow</Text>
          </>
        )}
      </Span>
    );
  } else {
    return (
      <Span
        onClick={() => {
          onSubmitting(true);
          return joinCollection({
            variables: { collectionId: id },
            update: (proxy, { data: { joinCollection } }) => {
              const fragment = gql`
                fragment Res on Collection {
                  followed
                }
              `;
              let collection = proxy.readFragment({
                id: `Collection:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res'
              });
              collection.followed = !collection.followed;
              proxy.writeFragment({
                id: `Collection:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res',
                data: collection
              });
            }
          })
            .then(res => {
              onSubmitting(false);
            })
            .catch(err => console.log(err));
        }}
      >
        {isSubmitting ? <Loader /> : <Text>Follow</Text>}
      </Span>
    );
  }
};

const Span = styled(Box)<{ unfollow?: boolean }>`
  color: ${props =>
    props.unfollow ? '#fff' : props.theme.styles.colour.primary};
  background: ${props =>
    props.unfollow ? props.theme.styles.colour.primary : 'transparent'};
  cursor: pointer;
  height: 40px;
  width: 140px;
  line-height: 40px;
  border-radius: 3px;
  text-align: center;
  border: 1px solid
    ${props =>
      props.unfollow
        ? props => props.theme.styles.colour.primary
        : props.theme.styles.colour.primary};
  &:hover {
    color: ${props =>
      props.unfollow ? props => 'white' : props.theme.styles.colour.base6};
    background: ${props =>
      props.unfollow
        ? props.theme.styles.colour.primary
        : props.theme.styles.colour.newcommunityBgHover};
  }
`;

export default compose(
  withJoinCollection,
  withLeaveCollection,
  withState('isSubmitting', 'onSubmitting', false)
)(Join);
