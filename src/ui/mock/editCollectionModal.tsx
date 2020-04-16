import {
  EditCollectionFormValues,
  Props as EditCollectionPanelProps
} from 'ui/modules/EditCollectionPanel';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const getEditCollectionModalProps = (): EditCollectionPanelProps => {
  const formik = useFormik<EditCollectionFormValues>({
    initialValues: {
      icon:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MPaPKKyEuv4RMPDu3T_ppgHaE7%26pid%3DApi&f=1',
      name: '24grana best songs',
      summary:
        '24 Grana appeared on the Italian underground scene in the mid 90s, in a period of a great social, political and cultural ferment. The band is named after a coin used at the times of Kind Ferdinand of Aragona.'
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, cancel: action('cancel') };
};
