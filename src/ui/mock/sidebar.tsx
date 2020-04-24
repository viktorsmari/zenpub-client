import { Props, Status } from 'ui/modules/Sidebar';

export const getSidebarProps = (): Props => {
  return {
    status: Status.Loaded,
    isOpenSidebar: true,
    communities: [
      {
        link: {
          url: '/',
          external: false
        },
        name: 'OER Licensing',
        icon: 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg'
      },
      {
        link: {
          url: 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg',
          external: true
        },
        name: 'OER Licensing',
        icon: ''
      },
      {
        link: {
          url: 'https://live.staticflickr.com/855/30064665718_d43727c1b8_b.jpg',
          external: true
        },
        name: 'OER Licensing',
        icon: ''
      }
    ]
  };
};
