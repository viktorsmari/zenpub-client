import { useFormik } from 'formik';
import React, { createContext, FC, useContext, useMemo } from 'react';
import { BasicCreateFlagFormValues, FlagModal } from 'ui/modules/FlagModal';
import { useDeleteMutationMutation } from 'graphql/delete.generated';
import * as Yup from 'yup';
import * as GQL from './flagModal.generated';

export const validationSchema: Yup.ObjectSchema<BasicCreateFlagFormValues> = Yup.object<
  BasicCreateFlagFormValues
>({
  reason: Yup.string()
    .max(200)
    .required()
});

export const createFlagFormInitialValues: BasicCreateFlagFormValues = {
  reason: ''
};

export interface Props {
  contextId: string;
  flagId: string;
  done(): any;
}

export interface FlagModalCtx {
  useCreateFlagPanelCreateMutation: typeof GQL.useCreateFlagPanelCreateMutation;
}
export const FlagModalCtx = createContext<FlagModalCtx>({
  useCreateFlagPanelCreateMutation: GQL.useCreateFlagPanelCreateMutation
});

export const FlagModalHOC: FC<Props> = ({ done, contextId, flagId }: Props) => {
  const { useCreateFlagPanelCreateMutation } = useContext(FlagModalCtx);
  const [flag] = useCreateFlagPanelCreateMutation();
  const [unflag] = useDeleteMutationMutation();
  const initialValues = useMemo<BasicCreateFlagFormValues>(
    () => createFlagFormInitialValues,
    []
  );

  function unflagItem() {
    unflag({
      variables: {
        contextId: flagId!
      }
    })
      .then(done)
      .catch(err => console.log(err));
  }

  const formik = useFormik<BasicCreateFlagFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      flag({
        variables: {
          contextId: contextId!,
          message: vals.reason!
        }
      })
        .then(done)
        .catch(err => console.log(err));
    },
    validationSchema,
    initialValues
  });
  return (
    <FlagModal
      cancel={done}
      flagId={flagId}
      formik={formik}
      unflagItem={unflagItem}
    />
  );
};

export default FlagModalHOC;
