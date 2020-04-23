import React from 'react';
import { Props } from 'ui/modules/MainHeader';
import { Input } from '@rebass/forms';
import Modal from 'ui/modules/Modal';

export const getMainHeaderProps = (): Props => {
  return {
    user: {
      name: '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
      icon:
        'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
      link: '/',
      logout: () => console.log(false)
    },
    toggleSideBar: () => {},
    Search: <Input placeholder="Search..." />,
    CreateCommunityModal: ({ done }) => (
      <Modal closeModal={done}>Community creation modal</Modal>
    )
  };
};
