import { useAllFlags } from 'fe/flags/all/useAllFlags';
import { FlagPreviewHOC } from 'HOC/modules/previews/flag/FlagPreview';
import React, { FC, useMemo } from 'react';
import Flags, { Props } from 'ui/pages/settings/flags';
import { ActivityPreview, Status } from 'ui/modules/ActivityPreview';
import { getActivitySimpleLink } from 'fe/lib/activity/getActivitySimpleLink';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { useFormikPage } from 'fe/lib/helpers/usePage';

export interface InstanceFlagsSection {}

export const InstanceFlagsSection: FC<InstanceFlagsSection> = () => {
  const { flagsPage } = useAllFlags();
  const [loadMoreFlags] = useFormikPage(flagsPage);
  const FlagsBox = useMemo<Props['FlagsBox']>(() => {
    return (
      <>
        {flagsPage.edges.map(flag => {
          const context = <FlagPreviewHOC flagId={flag.id} />;
          const actor = flag.creator && getActivityActor(flag.creator);
          const link = getActivitySimpleLink(flag.context);

          return (
            <ActivityPreview
              actor={actor}
              communityLink=""
              communityName=""
              createdAt={flag.createdAt}
              event="flagged"
              link={link}
              preview={context}
              status={Status.Loaded}
            />
          );
        })}
      </>
    );
  }, [flagsPage.edges]);
  const props = useMemo<Props>(() => {
    return {
      FlagsBox,
      loadMoreFlags
    };
  }, [FlagsBox]);
  return <Flags {...props} />;
};
