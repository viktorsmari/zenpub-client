import Maybe from 'graphql/tsutils/Maybe';
import { Collection, ResourceInput } from 'graphql/types.generated';
import { useMemo } from 'react';
import { CollectionResourcesDocument } from '../collection/useCollectionResources.generated';
import * as GQL from './useAddResource.generated';
import {
  getMaybeUploadInput,
  getUploadInput
} from 'fe/mutation/upload/getUploadInput';

export interface AddResource {
  collectionId: Collection['id'];
  resource: ResourceInput;
  content: File;
  icon: Maybe<File | string>;
}
export const useAddResource = () => {
  const [
    createResource,
    createResourceStatus
  ] = GQL.useAddResourceCreateResourceMutation();
  return useMemo(() => {
    const create = async ({
      collectionId,
      content,
      icon,
      resource
    }: AddResource) => {
      if (createResourceStatus.loading) {
        return;
      }
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
