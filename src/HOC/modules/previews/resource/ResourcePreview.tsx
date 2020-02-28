import { useResourcePreview } from 'fe/resource/preview/useResourcePreview';
import { Resource } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Props as ResourcePreviewProps,
  Resource as ResourcePreviewUI
} from 'ui/modules/Previews/Resource';
import { useFormik } from 'formik';

export interface Props {
  resourceId: Resource['id'];
}

export const ResourcePreviewHOC: FC<Props> = ({ resourceId }) => {
  const { resource, toggleLike } = useResourcePreview(resourceId);
  const toggleLikeFormik = useFormik({
    initialValues: {},
    onSubmit: toggleLike
  });
  const resourcePreviewProps = useMemo<ResourcePreviewProps | null>(() => {
    if (!resource) {
      return null;
    }

    const { id, icon, name, summary, url, canonicalUrl } = resource;

    const props: ResourcePreviewProps = {
      icon: icon || '',
      id,
      link: url || canonicalUrl || '',
      name,
      summary: summary || '',
      like: {
        iLikeIt: !!resource.myLike,
        totalLikes: resource.likes?.totalCount || 0,
        toggleLikeFormik
      }
    };
    return props;
  }, [resource]);

  return (
    resourcePreviewProps && <ResourcePreviewUI {...resourcePreviewProps} />
  );
};
