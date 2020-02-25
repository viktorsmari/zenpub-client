import { useFormik } from 'formik';
import { getActivityActions } from 'HOC/modules/ActivityPreview/lib/getActivityActions';
import { getActivityActor } from 'HOC/modules/ActivityPreview/lib/getActivityActor';
import React, { FC } from 'react';
import {
  ActivityPreview,
  Props as ActivityPreviewProps,
  Status as ActivityPreviewStatus
} from 'ui/modules/ActivityPreview';
import * as UIP from 'ui/modules/ActivityPreview/preview';
import * as GQL from './CollectionPage.generated';
import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useCreateThreadContext } from 'fe/context/createThread/useCreateThreadContext';

export interface ResourceActivityMock {
  resource: GQL.CollectionPageResourceFragment;
}

export const ResourceActivityMock: FC<ResourceActivityMock> = ({
  resource
}) => {
  const { createThread } = useCreateThreadContext(resource.id);
  const { toggleLike } = useLikeContext(
    resource.id,
    resource.myLike,
    resource.likes?.totalCount,
    resource.__typename
  );
  const commentResourceFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => createThread(replyMessage)
  });
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: toggleLike
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
