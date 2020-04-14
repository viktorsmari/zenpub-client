import { Props, Status } from 'ui/modules/Sidebar';

export const getSidebarProps = (): Props => {
  return {
    status: Status.Loaded,
    communities: [
      {
        link: {
          url: 'string',
          external: true
        },
        name: 'test',
        icon: ''
      }
    ]
  };
};
