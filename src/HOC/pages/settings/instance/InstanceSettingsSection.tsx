import React, { FC, useMemo } from 'react';
import Instance, { Props } from 'ui/pages/settings/instance';
import { useInstanceRegistrationAllowLists } from 'fe/settings/instance/registration/allowlist/instanceRegistrationAllowLists';
import { useFormik } from 'formik';

export interface InstanceSettingsSection {}

export const InstanceSettingsSection: FC<InstanceSettingsSection> = () => {
  const {
    removeEmailDomain,
    addEmailDomain,
    listEmailDomainsPage
  } = useInstanceRegistrationAllowLists();
  const formikAddDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    onSubmit: ({ domain }) => {
      return domain ? addEmailDomain(domain) : undefined;
    }
  });
  const formikRemoveDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    onSubmit: ({ domain }) => {
      const domainId = listEmailDomainsPage.edges.find(_ => domain === _.domain)
        ?.id;
      return domainId ? removeEmailDomain(domainId) : undefined;
    }
  });

  const domainsList: Props['domainsList'] = useMemo(
    () => listEmailDomainsPage.edges.map(_ => _.domain),
    [listEmailDomainsPage]
  );

  const props = useMemo<Props>(() => {
    return {
      formikAddDomain,
      formikRemoveDomain,
      domainsList
    };
  }, [formikAddDomain, formikRemoveDomain, domainsList]);
  return <Instance {...props} />;
};
