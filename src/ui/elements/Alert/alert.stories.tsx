import React from 'react';
import Alert from '.';

export default {
  title: 'Elements/Alert',
  parameters: {
    componentSubtitle: 'An alert to display further information',
    component: Alert
  }
};

/**
 * Only use me once per page for the preferred user action.
 */
export const Bad = () => <Alert variant="bad">Bad!</Alert>;

/**
 * Only use me once per page for the preferred user action.
 */
export const Good = () => <Alert variant="good">Good!</Alert>;

/**
 * Only use me once per page for the preferred user action.
 */
export const Warning = () => <Alert variant="warning">Warning!</Alert>;

/**
 * Only use me once per page for the preferred user action.
 */
export const Info = () => <Alert variant="info">Info!</Alert>;
