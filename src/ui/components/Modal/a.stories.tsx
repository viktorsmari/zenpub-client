import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '.';

storiesOf('FC/Skel', module).add('Simple', () => (
  <Modal closeModal={action('close modal')}>Hello Modal</Modal>
));
