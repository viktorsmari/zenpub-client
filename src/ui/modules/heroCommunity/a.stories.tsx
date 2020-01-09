import { storiesOf } from '@storybook/react';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { HeroCommunity, HeroCommunityContext } from '.';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import {
  EditCommunityContext,
  EditCommunityFormValues
} from '../EditCommunityModal';

storiesOf('Modules/HeroCommunity', module)
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
    const heroContext: HeroCommunityContext = () => {
      return {
        community: {
          canModify: true,
          following: true,
          icon: 'https://picsum.photos/800/300',
          name: 'Community nino',
          preferredUsername: 'ninos',
          summary: '',
          totalMembers: 193,
          toggleJoin: {
            toggle: action('submit'),
            isSubmitting: false
          }
        }
      };
    };
    return (
      <HeroCommunityContext.Provider value={heroContext}>
        <EditCommunityContext.Provider value={editProvider}>
          <HeroCommunity communityId={'1'} />
        </EditCommunityContext.Provider>
      </HeroCommunityContext.Provider>
    );
  });
