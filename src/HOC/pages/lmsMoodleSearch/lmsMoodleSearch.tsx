import React, { FC } from 'react';
import { MoodleLMSParams } from 'fe/lib/moodleLMS/moodleLMSintegration';

export type LMSMoodleSearch =
  | {
      params: MoodleLMSParams;
      needsLogin?: false;
      badParams?: false;
    }
  | {
      badParams?: false;
      needsLogin: true;
    }
  | {
      needsLogin?: false;
      badParams: true;
    };

export const LMSMoodleSearch: FC<LMSMoodleSearch> = props => {
  if (props.badParams) {
    return <div>Bad Params</div>;
  } else if (props.needsLogin) {
    return <div>Need to Login</div>;
  } else {
    const { course, site, section } = props.params;
    return (
      <div>
        <h1>Welcome from Moodle LMS !</h1>
        <h2>Site: {site}</h2>
        <h3>course: {course}</h3>
        <h3>section: {section}</h3>
      </div>
    );
  }
};
