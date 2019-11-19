import Resource from './Resource';
import Community from './Community';
import User from './User';

export default interface Collection {
  followers: {
    edges: [
      {
        cursor: number;
        node: User;
      }
    ];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    totalCount: number;
  };
  followed: boolean;
  icon: string | null;
  id: string;
  localId: string;
  preferredUsername: string;
  name: string;
  summary: string;
  resources: {
    totalCount: number;
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    edges: [
      {
        cursor: number;
        node: Resource;
      }
    ];
  };
  threads: {
    totalCount: number;
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    edges: [
      {
        cursor: number;
        node: Resource;
      }
    ];
  };
  community: Community;
}
