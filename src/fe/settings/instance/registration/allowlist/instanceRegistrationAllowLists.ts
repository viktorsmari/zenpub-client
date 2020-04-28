import * as GQL from './instanceRegistrationAllowLists.generated';
import { useMemo, useCallback } from 'react';
import { usePage } from 'fe/lib/helpers/usePage';
// import { DEFAULT_PAGE_SIZE } from 'mn-constants';

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
  const [
    sendInviteEmailMut /* ,sendInviteEmailStatus */
  ] = GQL.useSendInviteEmailMutation();

  const listEmailsQ = GQL.useInstanceRegisterEmailAccessesQuery({
    variables: {
      /* limit: DEFAULT_PAGE_SIZE  */
    }
  });
  const listEmailsPage = usePage(listEmailsQ.data?.registerEmailAccesses);

  const listEmailDomainsQ = GQL.useInstanceRegisterEmailDomainAccessesQuery({
    variables: {
      /* limit: DEFAULT_PAGE_SIZE  */
    }
  });
  const listEmailDomainsPage = usePage(
    listEmailDomainsQ.data?.registerEmailDomainAccesses
  );

  const addEmailDomain = useCallback(
    (domain: string) => {
      return addEmailDomainMut({
        variables: { domain },
        refetchQueries: [
          GQL.InstanceRegisterEmailDomainAccessesQueryRefetch({})
        ]
      });
    },
    [addEmailDomainMut]
  );
  const removeEmailDomain = useCallback(
    (id: string) => {
      return removeEmailDomainMut({
        variables: { id },
        refetchQueries: [
          GQL.InstanceRegisterEmailDomainAccessesQueryRefetch({})
        ]
      });
    },
    [removeEmailDomainMut]
  );

  const sendInviteEmail = useCallback(
    (email: string) => {
      return sendInviteEmailMut({ variables: { email } });
    },
    [sendInviteEmailMut]
  );

  const addEmail = useCallback(
    (email: string) => {
      return addEmailMut({
        variables: { email },
        refetchQueries: [GQL.InstanceRegisterEmailAccessesQueryRefetch({})]
      });
    },
    [addEmailMut]
  );
  const removeEmail = useCallback(
    (id: string) => {
      return removeEmailMut({
        variables: { id },
        refetchQueries: [GQL.InstanceRegisterEmailAccessesQueryRefetch({})]
      });
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
      removeEmail,
      sendInviteEmail
    };
  }, [
    listEmailDomainsPage,
    listEmailsPage,
    addEmailDomain,
    removeEmailDomain,
    addEmail,
    removeEmail,
    sendInviteEmail
  ]);
};
