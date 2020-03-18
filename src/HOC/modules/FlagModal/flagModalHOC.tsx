import { FollowContext, useFlagContext } from 'fe/context/flag/useFlagContext';
import { useFormik } from 'formik';
import React, { createContext, FC } from 'react';
import { BasicCreateFlagFormValues, FlagModal } from 'ui/modules/FlagModal';
import * as Yup from 'yup';
import * as GQL from './flagModal.generated';

export const validationSchema: Yup.ObjectSchema<BasicCreateFlagFormValues> = Yup.object<
  BasicCreateFlagFormValues
>({
  reason: Yup.string()
    .max(200)
    .required()
});

export interface Props {
  ctx: FollowContext;
  done(): any;
}

export interface FlagModalCtx {
  useCreateFlagPanelCreateMutation: typeof GQL.useCreateFlagPanelCreateMutation;
}
export const FlagModalCtx = createContext<FlagModalCtx>({
  useCreateFlagPanelCreateMutation: GQL.useCreateFlagPanelCreateMutation
});

export const FlagModalHOC: FC<Props> = ({ done, ctx }: Props) => {
  const { unflag, flag } = useFlagContext(ctx);

  const unflagFormik = useFormik({
    onSubmit: () => unflag().then(done),
    initialValues: {}
  });

  const flagFormik = useFormik<BasicCreateFlagFormValues>({
    enableReinitialize: true,
    onSubmit: vals => flag(vals.reason).then(done),
    validationSchema,
    initialValues: { reason: '' }
  });
  return (
    <FlagModal
      cancel={done}
      isFlagged={!!ctx.myFlag}
      flagFormik={flagFormik}
      unflagFormik={unflagFormik}
    />
  );
};

export default FlagModalHOC;
