import { useAllFlags } from 'fe/flags/all/useAllFlags';
import { FlagPreviewHOC } from 'HOC/modules/previews/flag/FlagPreview';
import React, { FC, useMemo } from 'react';
import Flags, { Props } from 'ui/pages/settings/flags';

export interface InstanceFlagsSection {}

export const InstanceFlagsSection: FC<InstanceFlagsSection> = () => {
  const { flagsPage } = useAllFlags();
  const FlagsBox = useMemo<Props['FlagsBox']>(() => {
    return (
      <>
        {flagsPage.edges.map(flag => {
          return <FlagPreviewHOC flagId={flag.id} />;
        })}
      </>
    );
  }, [flagsPage.edges]);
  const props = useMemo<Props>(() => {
    return {
      FlagsBox
    };
  }, [FlagsBox]);
  return <Flags {...props} />;
};
