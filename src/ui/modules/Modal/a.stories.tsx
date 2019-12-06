import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '.';

storiesOf('Modules/Modal', module).add('Simple', () => (
  <Modal closeModal={action('close modal')}>Hello Modal</Modal>
));
