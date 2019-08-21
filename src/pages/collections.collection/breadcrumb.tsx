import { Trans } from '@lingui/macro';
import * as React from 'react';
import { SFC } from 'react';
import { Helmet } from 'react-helmet';
import Link from '../../components/elements/Link/Link';
import { APP_NAME } from '../../constants';
import { Main } from '../communities.community/breadcrumb';

interface Props {
  community: {
    id: string;
    name: string;
  };
  collectionName: string;
}

const Breadcrumb: SFC<Props> = ({ community, collectionName }) => (
  <Main>
    <Helmet>
      <title>
        {APP_NAME} > Community > {community.name} > Collection >{' '}
        {collectionName}
      </title>
    </Helmet>
    <Link to="/communities">
      <Trans>Communities</Trans>
    </Link>
    {' > '}
    <Link to={`/communities/${community.id}`}>{community.name}</Link>
    {' > '}
    <span>{collectionName}</span>
  </Main>
);

export default Breadcrumb;
