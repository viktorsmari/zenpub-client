import * as UIT from 'ui/modules/ActivityPreview/types';
import { getActivitySimpleLink } from './getActivitySimpleLink';
import { UserPreviewFragment } from '../../../HOC/modules/previews/user/UserPreview.generated';
export const getActivityActor = (
  usr: Pick<
    UserPreviewFragment,
    'icon' | 'image' | 'userName' | 'userId' | '__typename'
  >
): UIT.Actor => {
  return {
    icon: usr.icon?.url || usr.image?.url || '',
    name: usr.userName || '',
    link: getActivitySimpleLink(usr)
  };
};
