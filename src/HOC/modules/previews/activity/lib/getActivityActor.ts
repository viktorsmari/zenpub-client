import * as UIT from 'ui/modules/ActivityPreview/types';
import { getActivitySimpleLink } from './getActivitySimpleLink';
import { UserPreviewFragment } from '../../user/UserPreview.generated';
export const getActivityActor = (
  usr: Pick<
    UserPreviewFragment,
    'icon' | 'image' | 'userName' | 'userId' | '__typename'
  >
): UIT.Actor => {
  return {
    icon: usr.icon || usr.image || '',
    name: usr.userName || '',
    link: getActivitySimpleLink(usr)
  };
};
