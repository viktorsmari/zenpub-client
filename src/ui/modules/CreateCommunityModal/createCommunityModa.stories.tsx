import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '.';
import { themeDeco } from '../../styleguide/storiesThemeDecorator';

storiesOf('Modules/CreateCommunity', module)
  .addDecorator(themeDeco())
  .add('Standard', () => (
    <Modal
      toggleModal={action('close modal')}
      validationSchema={''}
      submit={action('send stuff')}
    />
  ));

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .max(60)
//     .required(),
//   summary: Yup.string().max(500),
//   image: Yup.string().url()
// });
