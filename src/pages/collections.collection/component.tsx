import React from 'react';
import { useGetCollectionQuery } from '../../graphql/generated/getCollection.generated';
import Stateless from './stateless';
import { useDynamicLinkOpResult } from 'util/apollo/dynamicLink';
import { CreateResourceMutationMutationOperation } from 'graphql/generated/createResource.generated';
export interface Props {
  id: string;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const collectionQuery = useGetCollectionQuery({ variables: { id } });
  useDynamicLinkOpResult<CreateResourceMutationMutationOperation>(
    'createResourceMutation',
    () => {
      collectionQuery.refetch();
    },
    [collectionQuery.refetch]
  );
  return <Stateless collectionQuery={collectionQuery} />;
};

export default Thread;
