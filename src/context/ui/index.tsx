import React from 'react';
import { HeroCommunityContext } from 'ui/modules/HeroCommunity';
import { useHeroCommunityCtx } from 'ui-context-impl/HeroCommunity/heroCommuityCtx';
import { EditCommunityContext } from 'ui/modules/EditCommunityModal';
import { useEditCommunityFormContext } from 'ui-context-impl/community/edit/editCommunityCtx';

export const ProvideUiCtx: React.FC = ({ children }) => {
  return (
    <HeroCommunityContext.Provider value={useHeroCommunityCtx}>
      <EditCommunityContext.Provider value={useEditCommunityFormContext}>
        {children}
      </EditCommunityContext.Provider>
    </HeroCommunityContext.Provider>
  );
};
