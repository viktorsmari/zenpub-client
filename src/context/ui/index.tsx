import React from 'react';
import { HeroCommunityContext } from 'ui/modules/HeroCommunity';
import { useHeroCommunityCtx } from 'ui-context-impl/HeroCommunity/heroCommuityCtx';
import { EditCommunityContext } from 'ui/modules/EditCommunityModal';
import { useEditCommunityFormContext } from 'ui-context-impl/community/edit/editCommunityCtx';
import { ActivityPreviewContext } from 'ui/modules/ActivityPreview';
import { useActivityPreviewContext } from 'ui-context-impl/ActivityPreview/activityPreviewCtx';

export const ProvideUiCtx: React.FC = ({ children }) => {
  return (
    <HeroCommunityContext.Provider value={useHeroCommunityCtx}>
      <EditCommunityContext.Provider value={useEditCommunityFormContext}>
        <ActivityPreviewContext.Provider value={useActivityPreviewContext}>
          {children}
        </ActivityPreviewContext.Provider>
      </EditCommunityContext.Provider>
    </HeroCommunityContext.Provider>
  );
};
