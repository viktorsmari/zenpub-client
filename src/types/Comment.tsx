import User from './User';

export default interface Comment {
  content: string;
  id: string;
  localId: string;
  author: User;
  published: number;
  inReplyTo: Comment;
  replies: {
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
    totalCount: number;
  };
}
