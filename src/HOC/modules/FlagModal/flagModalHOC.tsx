import { useFormik } from 'formik';
import React, { createContext, SFC, useContext, useMemo } from 'react';
import { BasicCreateFlagFormValues, FlagModal } from 'ui/modules/FlagModal';
// import { useDeleteMutationMutation } from '../../../graphql/delete.generated';
import * as Yup from 'yup';
import * as GQL from './flagModal.generated';

export const validationSchema: Yup.ObjectSchema<
  BasicCreateFlagFormValues
> = Yup.object<BasicCreateFlagFormValues>({
  reason: Yup.string()
    .max(200)
    .required()
});

export const createFlagFormInitialValues: BasicCreateFlagFormValues = {
  reason: ''
};

export interface Props {
  contextId: string;
  flagged: boolean;
  done(): any;
}

export interface FlagModalCtx {
  useCreateFlagPanelCreateMutation: typeof GQL.useCreateFlagPanelCreateMutation;
}
export const FlagModalCtx = createContext<FlagModalCtx>({
  useCreateFlagPanelCreateMutation: GQL.useCreateFlagPanelCreateMutation
});

export const FlagModalHOC: SFC<Props> = ({
  done,
  contextId,
  flagged
}: Props) => {
  const { useCreateFlagPanelCreateMutation } = useContext(FlagModalCtx);
  const [flag] = useCreateFlagPanelCreateMutation();
  // const [undoflag] = useDeleteMutationMutation();
  const initialValues = useMemo<BasicCreateFlagFormValues>(
    () => createFlagFormInitialValues,
    []
  );
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
  return <FlagModal cancel={done} flagged={flagged} formik={formik} />;
};

export default FlagModalHOC;
