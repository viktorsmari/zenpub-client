import React, { FC, useMemo } from 'react';
import { Flag } from 'graphql/types.generated';
import { FlaggedItem, FlaggedProps } from 'ui/modules/Previews/FlaggedItem';
import { useFlagPreview } from 'fe/flags/preview/useFlagPreview';
import { PreviewComponent } from '../activity/PreviewComponent';
import { useFormik } from 'formik';

interface FlagPreviewHOC {
  flagId: Flag['id'];
}
export const FlagPreviewHOC: FC<FlagPreviewHOC> = ({ flagId }) => {
  const {
    deactivateFlaggedUser,
    deleteFlagContext,
    flag,
    ignoreFlag
  } = useFlagPreview(flagId);

  const FlaggedItemContextElement: FlaggedProps['FlaggedItemContextElement'] = useMemo(() => {
    return flag ? <PreviewComponent context={flag.context} /> : <></>;
  }, [flag]);

  const blockUserFormik: FlaggedProps['blockUserFormik'] = useFormik({
    initialValues: {},
    onSubmit: deactivateFlaggedUser
  });

  const deleteContentFormik: FlaggedProps['deleteContentFormik'] = useFormik({
    initialValues: {},
    onSubmit: deleteFlagContext
  });

  const ignoreFlagFormik: FlaggedProps['blockUserFormik'] = useFormik({
    initialValues: {},
    onSubmit: ignoreFlag
  });

  const props = useMemo<FlaggedProps | null>(() => {
    return flag
      ? {
          FlaggedItemContextElement,
          blockUserFormik,
          deleteContentFormik,
          ignoreFlagFormik,
          reason: flag.message,
          type: flag.context.__typename
        }
      : null;
  }, [
    FlaggedItemContextElement,
    blockUserFormik,
    deleteContentFormik,
    ignoreFlagFormik,
    flag
  ]);
  return props && <FlaggedItem {...props} />;
};
