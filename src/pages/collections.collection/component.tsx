import React from 'react';
import { useGetCollectionQuery } from '../../graphql/generated/getCollection.generated';
import Stateless from './stateless';
export interface Props {
  id: string;
}
export const Thread: React.FC<Props> = ({ id }) => {
  const collectionQuery = useGetCollectionQuery({ variables: { id } });

  return <Stateless collectionQuery={collectionQuery} />;
};

export default Thread;
