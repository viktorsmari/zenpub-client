import { CommunityInput } from 'graphql/types.generated';
import * as Yup from 'yup';

export interface BasicCreateCommunityFormValues {
  name: string;
  summary: string;
  image: string;
}

export type BasicCreateCommunityFormValuesSchema = Yup.ObjectSchema<
  BasicCreateCommunityFormValues
>;
export const basicCreateCommunityFormValuesSchema: BasicCreateCommunityFormValuesSchema = Yup.object<
  BasicCreateCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const basicCreateCommunityInitialValues: BasicCreateCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const getBasicCreateCommunityInput = (
  formVals: BasicCreateCommunityFormValues
): CommunityInput => ({
  ...formVals,
  preferredUsername: formVals.name.replace(/\W+/g, '_')
});
