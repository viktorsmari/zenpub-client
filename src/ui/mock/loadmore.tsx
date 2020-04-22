import { Props as LoadMoreProps } from 'ui/modules/Loadmore';
import { ToggleFormik } from './formik';

export const getLoadMoreProps = (): LoadMoreProps => {
  return {
    LoadMoreFormik: ToggleFormik()
  };
};
