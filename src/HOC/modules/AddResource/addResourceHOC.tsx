import { useAddResource } from 'fe/resource/add/useAddResource';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
  ResourceFormValues,
  UploadResource
} from 'ui/modules/AddResource/UploadResource';
import * as Yup from 'yup';
import { accepted_license_types } from 'mn-constants';
import { ResourceInput } from 'graphql/types.generated';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';

export const validationSchema: Yup.ObjectSchema<ResourceFormValues> = Yup.object<
  ResourceFormValues
>({
  name: Yup.string()
    .max(90)
    .required(),
  summary: Yup.string().max(1000),
  icon: Yup.mixed<File | string>().test(...TestUrlOrFile),
  resource: Yup.mixed<File>().required(),
  license: Yup.string()
});

export const initialValues: ResourceFormValues = {
  name: '',
  summary: '',
  icon: '',
  license: accepted_license_types[1],
  resource: undefined
};

export interface AddResourceHOC {
  collectionId: string;
  done(): any;
}

export const AddResourceHOC: FC<AddResourceHOC> = ({
  done,
  collectionId
}: AddResourceHOC) => {
  const { create } = useAddResource();

  const formik = useFormik<ResourceFormValues>({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    onSubmit: vals => {
      const { resource: resFile } = vals;
      if (!resFile) {
        return;
      }

      const resource: ResourceInput = {
        name: vals.name,
        summary: vals.summary,
        license: vals.license
      };

      return create({
        collectionId,
        resource,
        content: resFile,
        icon: vals.icon
      }).then(done);
    }
  });

  return (
    <UploadResource
      cancel={done}
      formik={formik}
      acceptedLicenses={accepted_license_types}
    />
  );
};
