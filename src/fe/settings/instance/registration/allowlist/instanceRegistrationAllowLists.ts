import * as GQL from './instanceRegistrationAllowLists.generated';
import { useMemo, useCallback } from 'react';
import { usePage } from 'fe/lib/helpers/usePage';

export const useInstanceRegistrationAllowLists = () => {
  const [
    addEmailDomainMut /* ,addEmailDomainStatus */
  ] = GQL.useAddEmailDomainToAllowListMutation();
  const [
    removeEmailDomainMut /* ,removeEmailDomainStatus */
  ] = GQL.useRemoveEmailDomainFromAllowListMutation();
  const [
    addEmailMut /* ,addEmailStatus */
  ] = GQL.useAddEmailToAllowListMutation();
  const [
    removeEmailMut /* ,removeEmailStatus */
  ] = GQL.useRemoveEmailFromAllowListMutation();

  const listEmailsQ = GQL.useInstanceRegisterEmailAccessesQuery();
  const listEmailsPage = usePage(listEmailsQ.data?.registerEmailAccesses);

  const listEmailDomainsQ = GQL.useInstanceRegisterEmailDomainAccessesQuery();
  const listEmailDomainsPage = usePage(
    listEmailDomainsQ.data?.registerEmailDomainAccesses
  );

  const addEmailDomain = useCallback(
    (domain: string) => {
      return addEmailDomainMut({ variables: { domain } });
    },
    [addEmailDomainMut]
  );
  const removeEmailDomain = useCallback(
    (id: string) => {
      return removeEmailDomainMut({ variables: { id } });
    },
    [removeEmailDomainMut]
  );

  const addEmail = useCallback(
    (email: string) => {
      return addEmailMut({ variables: { email } });
    },
    [addEmailMut]
  );
  const removeEmail = useCallback(
    (id: string) => {
      return removeEmailMut({ variables: { id } });
    },
    [removeEmailMut]
  );

  return useMemo(() => {
    return {
      listEmailDomainsPage,
      listEmailsPage,
      addEmailDomain,
      removeEmailDomain,
      addEmail,
      removeEmail
    };
  }, [
    listEmailDomainsPage,
    listEmailsPage,
    addEmailDomain,
    removeEmailDomain,
    addEmail,
    removeEmail
  ]);
};
