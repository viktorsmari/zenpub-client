import React, { FC, useMemo } from 'react';
import Flags, { Props } from 'ui/pages/settings/flags';
import * as Yup from 'yup';

export interface InstanceFlagsSection {}

export const withEmailValidation = Yup.object().shape({
  email: Yup.string().email()
});

export const InstanceFlagsSection: FC<InstanceFlagsSection> = () => {
  const props = useMemo<Props>(() => {
    return {};
  }, []);
  return <Flags {...props} />;
};
