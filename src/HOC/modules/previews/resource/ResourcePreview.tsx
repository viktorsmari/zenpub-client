import { useResourcePreview } from 'fe/resource/preview/useResourcePreview';
import { useFormik } from 'formik';
import { Resource } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Props as ResourcePreviewProps,
  Resource as ResourcePreviewUI
} from 'ui/modules/Previews/Resource';

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

    const { icon, name, summary, url, canonicalUrl } = resource;

    const props: ResourcePreviewProps = {
      icon: icon || '',
      link: url || canonicalUrl || '',
      name,
      summary: summary || '',
      like: {
        iLikeIt: !!resource.myLike,
        toggleLikeFormik,
        totalLikes: resource.likes?.totalCount || 0
      }
    };
    return props;
  }, [resource, toggleLikeFormik]);

  return (
    resourcePreviewProps && <ResourcePreviewUI {...resourcePreviewProps} />
  );
};
