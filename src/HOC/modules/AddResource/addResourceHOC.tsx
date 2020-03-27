import { useAddResource } from 'fe/resource/add/useAddResource';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
  ResourceFormValues,
  UploadResource
} from 'ui/modules/AddResource/UploadResource';
import * as Yup from 'yup';
import { accepted_license_types } from '../../../mn-constants';

export const validationSchema: Yup.ObjectSchema<ResourceFormValues> = Yup.object<
  ResourceFormValues
>({
  url: Yup.string().url(),
  name: Yup.string()
    .max(90)
    .required(),
  summary: Yup.string().max(1000),
  icon: Yup.string().url(),
  license: Yup.string()
});

export const initialValues: ResourceFormValues = {
  url: '',
  name: '',
  summary: '',
  icon: '',
  license: accepted_license_types[1],
  acceptedLicenses: accepted_license_types,
  resourceFiles: [],
  imageFiles: []
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
      const fileToUpload = vals.resourceFiles?.map(file => {
        return file;
      })[0];
      const iconToUpload = vals.imageFiles?.map(file => {
        return file;
      })[0];
      const resource = {
        name: vals.name,
        summary: vals.summary,
        icon: vals.icon,
        url: vals.url,
        license: vals.license
      };

      return create(collectionId, resource, fileToUpload, iconToUpload).then(
        done
      );
    }
  });

  return <UploadResource cancel={done} formik={formik} />;
};
