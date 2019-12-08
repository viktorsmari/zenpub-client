import * as Yup from 'yup';
export interface FormValues {
  name: string;
  summary: string;
  image: string;
}
export type ValidationSchema = Yup.ObjectSchema<FormValues>;

export const schema: ValidationSchema = Yup.object<FormValues>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});
export const defaultValues: FormValues = {
  name: '',
  summary: '',
  image: ''
};
