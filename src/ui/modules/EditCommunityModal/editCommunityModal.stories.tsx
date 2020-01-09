import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import EditCommunityModal, {
  EditCommunityContext,
  EditCommunityFormValues
} from '.';
import { useFormik } from 'formik';

storiesOf('Modules/EditCommunity', module)
  .addDecorator(themeDeco())
  .add('Standard', () => {
    const editProvider: EditCommunityContext = () => {
      const formik = useFormik<EditCommunityFormValues>({
        initialValues: {
          image: '',
          name: 'name',
          summary: 'summary'
        },
        onSubmit: () => {
          action('submit')();
          return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
          });
        }
      });
      return { formik };
    };
    return (
      <EditCommunityContext.Provider value={editProvider}>
        <EditCommunityModal
          closeModal={action('close modal')}
          communityId="#"
        />
      </EditCommunityContext.Provider>
    );
  });
