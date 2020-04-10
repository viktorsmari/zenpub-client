import { Props as FeaturedModalProps } from 'ui/modules/FeaturedModal';
import { action } from '@storybook/addon-actions';
import { ToggleFormik } from './formik';

export const getFeaturedModalProps = (): FeaturedModalProps => {
  const formik = ToggleFormik();
  return {
    formik,
    isFeatured: false,
    itemName: 'Type Theory',
    itemType: 'community',
    cancel: action('cancel')
  };
};
