import { useFormik } from 'formik';
import { getActivityActions } from 'HOC/modules/ActivityPreview/lib/getActivityActions';
import { getActivityActor } from 'HOC/modules/ActivityPreview/lib/getActivityActor';
import React, { createContext, SFC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ActivityPreview,
  Props as ActivityPreviewProps,
  Status as ActivityPreviewStatus
} from 'ui/modules/ActivityPreview';
import * as UIP from 'ui/modules/ActivityPreview/preview';
import * as GQL from './CollectionPageResourceActivity.generated';

export interface CPResourceActivityCtx {
  useCollectionPageResourceCreateThreadMutation: typeof GQL.useCollectionPageResourceCreateThreadMutation;
  useCollectionPageResourceLikeMutation: typeof GQL.useCollectionPageResourceLikeMutation;
  useCollectionPageResourceUnlikeMutation: typeof GQL.useCollectionPageResourceUnlikeMutation;
}
export const CPResourceActivityCtx = createContext<CPResourceActivityCtx>({
  useCollectionPageResourceCreateThreadMutation:
    GQL.useCollectionPageResourceCreateThreadMutation,
  useCollectionPageResourceLikeMutation:
    GQL.useCollectionPageResourceLikeMutation,
  useCollectionPageResourceUnlikeMutation:
    GQL.useCollectionPageResourceUnlikeMutation
});

export interface CPResourceActivityProps {
  resource: GQL.CollectionPageResourceFragment;
}

export const CPResourceActivity: SFC<CPResourceActivityProps> = ({
  resource
}) => {
  const {
    useCollectionPageResourceLikeMutation,
    useCollectionPageResourceCreateThreadMutation,
    useCollectionPageResourceUnlikeMutation
  } = useContext(CPResourceActivityCtx);
  const history = useHistory();
  const [likeMut, likeMutStatus] = useCollectionPageResourceLikeMutation();
  const [
    unlikeMut,
    unlikeMutStatus
  ] = useCollectionPageResourceUnlikeMutation();
  const [
    createThreadMut,
    createThreadMutStatus
  ] = useCollectionPageResourceCreateThreadMutation();
  const commentResourceFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => {
      if (createThreadMutStatus.loading) {
        return;
      }
      return createThreadMut({
        variables: {
          comment: { content: replyMessage },
          contextId: resource.id
        }
      }).then(resp => {
        if (
          !(
            resp.data &&
            resp.data.createThread &&
            resp.data.createThread.thread
          )
        ) {
          return;
        }
        const threadId = resp.data.createThread.thread.id;
        history.push(`/thread/${threadId}`);
      });
    }
  });
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: () => {
      if (likeMutStatus.loading || unlikeMutStatus.loading) {
        return;
      }
      const { myLike } = resource;
      if (myLike) {
        return unlikeMut({
          variables: { contextId: myLike.id }
        });
      } else {
        return likeMut({
          variables: {
            contextId: resource.id
          }
        });
      }
    }
  });

  const props: ActivityPreviewProps | null = resource.creator
    ? {
        actor: getActivityActor(resource.creator),
        context: {
          type: UIP.ContextType.Resource,
          link: resource.collection
            ? `/collections/${resource.collection.id}`
            : '',
          verb: UIP.ContextVerb.Created,
          title: resource.name,
          icon: resource.icon || '',
          summary: resource.summary || '',
          resourceUrl: resource.url || resource.canonicalUrl || ''
        },
        createdAt: resource.createdAt,
        status: ActivityPreviewStatus.Loaded,
        actions: getActivityActions(
          resource,
          commentResourceFormik,
          toggleLikeFormik
        ),
        inReplyToCtx: null
      }
    : null;

  return props && <ActivityPreview {...props} />;
};
