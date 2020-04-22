import React, { FC, useMemo } from 'react';
import { Flag } from 'graphql/types.generated';
import { FlaggedItem, FlaggedProps } from 'ui/modules/Previews/FlaggedItem';

interface FlagPreviewHOC {
  flagId: Flag['id'];
}
export const FlagPreviewHOC: FC<FlagPreviewHOC> = ({ flagId }) => {
  const props = useMemo<FlaggedProps>(() => {
    return {
      FlaggedItemContextElement,
      blockUserFormik,
      deleteContentFormik,
      ignoreFlagFormik,
      reason,
      type
    };
  }, []);
  return <FlaggedItem {...props} />;
};
