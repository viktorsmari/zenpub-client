import React, { useMemo, SFC, createContext, useContext } from 'react';
import { useFormik } from 'formik';
import { useCreateFlagMutationMutation } from '../../../graphql/createFlag.generated';
// import { useDeleteMutationMutation } from '../../../graphql/delete.generated';
import * as Yup from 'yup';
import { PureQueryOptions } from 'apollo-client';

import { BasicCreateFlagFormValues, FlagModal } from 'ui/modules/FlagModal';

export const validationSchema: Yup.ObjectSchema<
  BasicCreateFlagFormValues
> = Yup.object<BasicCreateFlagFormValues>({
  reason: Yup.string()
    .max(200)
    .required()
});

export interface CreateFlagModalCtx {
  refetchQueries: Array<string | PureQueryOptions>;
}
export const CreateFlagModalCtx = createContext<CreateFlagModalCtx>({
  refetchQueries: []
});
export const createFlagFormInitialValues: BasicCreateFlagFormValues = {
  reason: ''
};

export interface Props {
  contextId: string;
  flagged: boolean;
  done(): any;
}

export const FlagModalHOC: SFC<Props> = ({
  done,
  contextId,
  flagged
}: Props) => {
  const ctx = useContext(CreateFlagModalCtx);
  const [flag] = useCreateFlagMutationMutation();
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
        },
        refetchQueries: ctx.refetchQueries
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
