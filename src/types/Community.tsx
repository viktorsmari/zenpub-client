import Collection from './Collection';
import Comment from './Comment';
import User from './User';

export default interface Community {
  icon: string | null;
  id: string;
  localId: string;
  name: string;
  preferredUsername: string;
  summary: string;
  collections: {
    edges: [
      {
        cursor: number;
        node: Collection;
      }
    ];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
    totalCount: number;
  };
  threads: {
    totalCount: number;
    edges: [
      {
        cursor: number;
        node: Comment;
      }
    ];
    pageInfo?: {
      startCursor: string;
      endCursor: string;
    };
  };
  members: {
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
}
