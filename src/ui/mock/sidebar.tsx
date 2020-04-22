import { Props, Status } from 'ui/modules/Sidebar';

export const getSidebarProps = (): Props => {
  return {
    status: Status.Loaded,
    communities: [
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
