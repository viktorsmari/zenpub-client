import { useMe } from 'fe/session/useMe';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import React, { FC, useMemo, useRef } from 'react';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';
import Modal from 'ui/modules/Modal';
import { CreateCommunityPanelHOC } from 'HOC/modules/CreateCommunityPanel/createCommunityPanelHOC';

export interface MainHeaderHOC {
  toggleSideBar(): unknown;
}
export const MainHeaderHOC: FC<MainHeaderHOC> = ({ toggleSideBar }) => {
  const meQ = useMe();
  const user = meQ.me?.user;
  const { current: CreateCommunityModal } = useRef<
    MainHeaderProps['CreateCommunityModal']
  >(({ done }) => (
    <Modal closeModal={done}>
      <CreateCommunityPanelHOC done={done} />
    </Modal>
  ));
  const headerProps = useMemo<MainHeaderProps>(() => {
    const props: MainHeaderProps = {
      Search: <SearchBox />,
      user: user
        ? {
            logout: meQ.logout,
            icon: user.icon?.url || '',
            link: `/user/${user.id}`,
            name: user.name || ''
          }
        : null,
      toggleSideBar,
      CreateCommunityModal
    };
    return props;
  }, [user, toggleSideBar]);
  return <MainHeader {...headerProps} />;
};
