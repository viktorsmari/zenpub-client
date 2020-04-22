import { accepted_license_types } from 'mn-constants';
import { useResourcePreview } from 'fe/resource/preview/useResourcePreview';
import { useFormik } from 'formik';
import { Resource } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Props as ResourcePreviewProps,
  Resource as ResourcePreviewUI
} from 'ui/modules/Previews/Resource';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';

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

    const props: ResourcePreviewProps = {
      icon: resource.icon?.url || '',
      link: resource.payload?.url || '',
      name,
      summary: resource.summary || '',
      like: {
        iLikeIt: !!resource.myLike,
        toggleLikeFormik,
        totalLikes: resource.likers?.totalCount || 0
      },
      isLocal: !!resource.payload?.upload,
      acceptedLicenses: accepted_license_types,
      license: resource.license || null,
      isFlagged: !!resource.myFlag,
      FlagModal: ({ done }) => <FlagModalHOC done={done} ctx={resource} />
      //  type: resource.type FIXME add type of the resource field
    };
    return props;
  }, [resource, toggleLikeFormik]);

  return (
    resourcePreviewProps && <ResourcePreviewUI {...resourcePreviewProps} />
  );
};
