import { storiesOf } from '@storybook/react';
import React from 'react';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
import { HeroCommunity, HeroContext } from '.';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import {
  EditCommunityFormContext,
  EditCommunityFormValues
} from '../EditCommunityModal';

storiesOf('Modules/HeroCommunity', module)
  .addDecorator(themeDeco())
  .add('Standard', () => {
    const editProvider: EditCommunityFormContext = () => {
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
    const heroContext: HeroContext = () => {
      return {
        community: {
          canModify: true,
          following: true,
          icon: 'https://picsum.photos/800/300',
          name: 'Community nino',
          preferredUsername: 'ninos',
          summary: '',
          totalMembers: 193,
          joinFormik: useFormik<{}>({
            initialValues: {},
            onSubmit: () => {
              action('submit')();
            }
          })
        }
      };
    };
    return (
      <HeroContext.Provider value={heroContext}>
        <EditCommunityFormContext.Provider value={editProvider}>
          <HeroCommunity communityId={'1'} />
        </EditCommunityFormContext.Provider>
      </HeroContext.Provider>
    );
  });
