import React from 'react';
import { HeroCommunityContext } from 'ui/modules/heroCommunity';
import { useHeroCommunityCtx } from 'common/forms/heroCommunity/heroCommuityCtx';
import { EditCommunityContext } from 'ui/modules/EditCommunityModal';
import { useEditCommunityFormContext } from 'common/forms/community/edit/editCommunityCtx';

export const ProvideUiCtx: React.FC = ({ children }) => {
  return (
    <HeroCommunityContext.Provider value={useHeroCommunityCtx}>
      <EditCommunityContext.Provider value={useEditCommunityFormContext}>
        {children}
      </EditCommunityContext.Provider>
    </HeroCommunityContext.Provider>
  );
};
