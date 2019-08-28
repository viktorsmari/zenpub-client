import * as React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import Sidebar from './';
import Loader from '../../components/elements/Loader/Loader';
import { Trans } from '@lingui/macro';
import User from '../../types/User';
import { compose, withHandlers, withState } from 'recompose';
const getSidebar = require('../../graphql/getSidebar.graphql');

const SidebarWrapper = props =>
  props.data.error ? (
    <span>
      <Trans>Error loading communities</Trans>
    </span>
  ) : props.data.loading ? (
    <Loader />
  ) : (
    <Sidebar {...props} />
  );

const withSidebarData = graphql<
  {},
  {
    data: {
      me: User;
    };
  }
>(getSidebar, {
  options: props => ({
    variables: {
      limitComm: 10
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withSidebarData,
  withState('isOpen', 'onOpen', false),
  withHandlers({
    handleOpen: props => () => props.onOpen(true),
    closeMenu: props => () => props.onOpen(false),
    logout: props => () => {
      let token;
      process.env.REACT_APP_GRAPHQL_ENDPOINT ===
      'https://home.moodle.net/api/graphql'
        ? (token = 'user_access_token')
        : (token = 'dev_user_access_token');
      localStorage.removeItem(token);
      localStorage.removeItem('dark');
      return window.location.reload();
    }
  }),
  withHandlers({
    navigateToPage: props => url => {
      props.closeMenu();
      return props.history.push(url);
    }
  })
)(SidebarWrapper);
