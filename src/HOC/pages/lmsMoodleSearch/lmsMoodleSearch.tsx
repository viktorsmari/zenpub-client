import React, { FC } from 'react';
import { MoodleLMSParams } from 'fe/lib/moodleLMS/moodleLMSintegration';

export interface LMSMoodleSearch {
  params: MoodleLMSParams;
}

export const LMSMoodleSearch: FC<LMSMoodleSearch> = ({
  params: { course, site, section }
}) => {
  return (
    <div>
      <h1>Welcome from Moodle LMS !</h1>
      <h2>Site: {site}</h2>
      <h3>course: {course}</h3>
      <h3>section: {section}</h3>
    </div>
  );
};
