import * as React from 'react'
import { compose } from 'recompose';
import { graphql, OperationOption } from 'react-apollo';
import Sidebar from './'
import Loader from '../../components/elements/Loader/Loader';
import { Trans } from '@lingui/macro';
import User from '../../types/User';
const getSidebar = require('../../graphql/getSidebar.graphql');


const SidebarWrapper = (props) => (
  props.data.error ? (
    <span>
      <Trans>Error loading communities</Trans>
    </span>
  ) : props.data.loading ? (
    <Loader />
  ) : <Sidebar {...props} />
)

const withSidebarData = graphql<
  {},
  {
    data: {
      me: User;
    };
  }
>(getSidebar, {
  options: (props) => ({
    variables: {
      limitComm: 15
    }
  })
}) as OperationOption<{}, {}>;

export default compose(
  withSidebarData,
)(SidebarWrapper);
