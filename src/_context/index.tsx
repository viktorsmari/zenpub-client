import React from 'react';
import { ProvideActionCtx } from './actionCtx';
import { ProvideGlobCtx } from './GLOB';
import { ProvideSessionCtx } from './sessionCtx';
import { ProvideStateCtx } from './stateCtx';
import { ProvideStoreCtx } from './storeCtx';

export const ProvideContexts: React.FC = ({ children }) => {
  return (
    <ProvideStoreCtx>
      <ProvideStateCtx>
        <ProvideActionCtx>
          <ProvideSessionCtx>
            <ProvideGlobCtx>{children}</ProvideGlobCtx>
          </ProvideSessionCtx>
        </ProvideActionCtx>
      </ProvideStateCtx>
    </ProvideStoreCtx>
  );
};
