import React, { SFC } from 'react';
import { User } from 'graphql/types.generated';
import { User as UserPage, Props } from 'ui/pages/user';
import * as GQL from './UserPage.generated';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import { HeroUserHOC } from 'HOC/modules/HeroUser/HeroUserHOC';

export interface UserPageHOC {
  userId: User['id'];
}
export const UserPageHOC: SFC<UserPageHOC> = ({ userId }) => {
  const outboxQ = GQL.useUserPageOutboxQuery({ variables: { userId } });
  const ActivityBoxes = (
    <>
      {outboxQ.data &&
      outboxQ.data.user &&
      outboxQ.data.user.outbox &&
      outboxQ.data.user.outbox.edges
        ? outboxQ.data.user.outbox.edges
            .map(
              edge =>
                edge && (
                  <ActivityPreviewHOC
                    activityId={edge.node.id}
                    key={edge.node.id}
                  />
                )
            )
            .filter(_ => !!_)
        : null}
    </>
  );
  const HeroUserBox = <HeroUserHOC userId={userId} />;

  const userPageProps: Props = {
    basePath: `/user/${userId}`,
    ActivityBoxes,
    HeroUserBox
  };
  return <UserPage {...userPageProps} />;
};
