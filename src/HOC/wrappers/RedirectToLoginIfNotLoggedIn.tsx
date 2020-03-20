import { useMe } from 'fe/session/me';
import Login from 'pages/login/Login';
import React, { FC } from 'react';

export const RedirectToLoginIfNotLoggedIn: FC = ({ children }) => {
  const { me, loading } = useMe();
  if (loading) {
    return null;
  }

  if (!me) {
    return <Login />;
  }

  return <>{children}</>;
};
