import { CollectionInput } from 'graphql/types.generated';
import * as Yup from 'yup';
// import { BasicCreateCollectionFormValues } from 'ui/modules/CreateCollectionPanel';

export interface BasicCreateCollectionFormValues {
  name: string;
  summary: string;
  icon: string;
}

export type BasicCreateCollectionFormValuesSchema = Yup.ObjectSchema<
  BasicCreateCollectionFormValues
>;
export const basicCreateCollectionFormValuesSchema: BasicCreateCollectionFormValuesSchema = Yup.object<
  BasicCreateCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.string().url()
});

export const basicCreateCollectionInitialValues: BasicCreateCollectionFormValues = {
  name: '',
  summary: '',
  icon: ''
};

export const getBasicCreateCollectionInput = (
  formVals: BasicCreateCollectionFormValues
): CollectionInput => ({
  ...formVals,
  preferredUsername: formVals.name.replace(/\W+/g, '_')
});
