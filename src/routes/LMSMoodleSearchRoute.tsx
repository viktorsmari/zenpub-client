import {
  getParamsFromMoodleLMS,
  saveLMSParams
} from 'fe/lib/moodleLMS/moodleLMSintegration';
import { LMSMoodleSearch } from 'HOC/pages/lmsMoodleSearch/lmsMoodleSearch';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';

interface LMSMoodleSearchRouter {}
const LMSMoodleSearchRouter: FC<RouteComponentProps<LMSMoodleSearchRouter>> = ({
  match
}) => {
  const params = getParamsFromMoodleLMS();
  saveLMSParams(params);
  return (
    <RedirectAnonymousToLogin>
      <WithSidebarTemplate>
        <LMSMoodleSearch params={params} />
      </WithSidebarTemplate>
    </RedirectAnonymousToLogin>
  );
};

export const LMSMoodleSearchRoute: RouteProps = {
  exact: true,
  path: '/lms/moodle/search',
  component: LMSMoodleSearchRouter
};
