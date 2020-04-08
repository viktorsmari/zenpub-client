import Maybe from 'graphql/tsutils/Maybe';
import { Collection, ResourceInput } from 'graphql/types.generated';
import { useMemo } from 'react';
import { CollectionResourcesDocument } from '../collection/useCollectionResources.generated';
import * as GQL from './useAddResource.generated';
import {
  getMaybeUploadInput,
  getUploadInput
} from 'fe/mutation/upload/getUploadInput';

export const useAddResource = () => {
  const [
    createResource,
    createResourceStatus
  ] = GQL.useAddResourceCreateResourceMutation();
  return useMemo(() => {
    if (createResourceStatus.loading) {
      return;
    }
    const create = (
      collectionId: Collection['id'],
      resource: ResourceInput,
      content: File,
      icon: Maybe<File | string>
    ) => {
      const refetchQueries = [
        {
          query: CollectionResourcesDocument,
          variables: { collectionId }
        }
      ];

      return createResource({
        variables: {
          collectionId: collectionId,
          resource,
          content: getUploadInput(content),
          icon: getMaybeUploadInput(icon)
        },
        refetchQueries
      });
    };
    return {
      create
    };
  }, [createResourceStatus, createResource]);
};
