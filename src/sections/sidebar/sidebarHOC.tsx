import * as React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import Sidebar from './';

import User from '../../types/User';
import { compose, withHandlers, withState } from 'recompose';
import { LOCAL_STORAGE_USER_ACCESS_TOKEN } from '../../constants';
import { getGlob } from '../../context/global/GLOB';
import { logout } from '../../redux/session';
const getSidebar = require('../../graphql/getSidebar.graphql');

const SidebarWrapper = props => <Sidebar {...props} />;

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
      limitComm: 15
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
      getGlob().action.dispatch(logout.create());
      localStorage.removeItem(LOCAL_STORAGE_USER_ACCESS_TOKEN);
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
