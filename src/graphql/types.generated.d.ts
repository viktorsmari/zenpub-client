export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Represents an uploaded file. */
  Upload: any,
};

export type ActivitiesEdge = {
   __typename?: 'ActivitiesEdge',
  cursor: Scalars['String'],
  node: Activity,
};

export type ActivitiesEdges = {
   __typename?: 'ActivitiesEdges',
  edges: Array<Maybe<ActivitiesEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

/** An event that appears in a feed */
export type Activity = {
   __typename?: 'Activity',
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The object of the user's verbing */
  context: ActivityContext,
  /** When the activity was created */
  createdAt: Scalars['String'],
  /** An instance-local UUID identifying the activity */
  id: Scalars['String'],
  /** Whether the activity is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the activity is public */
  isPublic: Scalars['Boolean'],
  /** The user who performed the activity */
  user: User,
  /** The verb describing the activity */
  verb: ActivityVerb,
};

/** Activity object */
export type ActivityContext = Collection | Comment | Community | Flag | Follow | Like | Resource;

/** Something a user does, in past tense */
export enum ActivityVerb {
  Created = 'CREATED',
  Updated = 'UPDATED'
}

export type AuthPayload = {
   __typename?: 'AuthPayload',
  me: Me,
  token: Scalars['String'],
};

/** A collection is the home of resources and discussion threads within a community */
export type Collection = {
   __typename?: 'Collection',
  /** A url for the collection, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The community the collection belongs to */
  community: Community,
  /** When the collection was created */
  createdAt: Scalars['String'],
  /** The user who created the collection */
  creator: User,
  /** Flags users have made about the collection, most recently created first */
  flags: FlagsEdges,
  /** Subscriptions users have to the collection */
  followers: FollowsEdges,
  /** An avatar url */
  icon?: Maybe<Scalars['String']>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether an instance admin has hidden the collection */
  isDisabled: Scalars['Boolean'],
  /** Whether the collection is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the collection is public */
  isPublic: Scalars['Boolean'],
  /** 
 * When the collection or a resource in it was last updated or a
   * thread or a comment was created or updated
 **/
  lastActivity: Scalars['String'],
  /** Likes users have given the collection */
  likes: LikesEdges,
  /** The current user's flag of the collection, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of this collection, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this collection, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities on the collection, most recent first */
  outbox: ActivitiesEdges,
  /** An instance-unique identifier shared with users and communities */
  preferredUsername: Scalars['String'],
  /** The resources in the collection, most recently created last */
  resources: ResourcesEdges,
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * The threads created on the collection, most recently created
   * first. Does not include threads created on resources.
 **/
  threads: ThreadsEdges,
  /** When the collection was last updated */
  updatedAt: Scalars['String'],
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionFlagsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionFollowersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionLikesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionOutboxArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionResourcesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionThreadsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

export type CollectionInput = {
  icon?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type CollectionsEdge = {
   __typename?: 'CollectionsEdge',
  cursor: Scalars['String'],
  node: Collection,
};

export type CollectionsEdges = {
   __typename?: 'CollectionsEdges',
  edges: Array<Maybe<CollectionsEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type CollectionsNodes = {
   __typename?: 'CollectionsNodes',
  nodes: Array<Maybe<Collection>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type CollectionUpdateInput = {
  icon?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type Comment = {
   __typename?: 'Comment',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The comment text */
  content: Scalars['String'],
  /** When the comment was created */
  createdAt: Scalars['String'],
  /** The user who created this comment */
  creator: User,
  /** Flags users have made about the comment, most recently created first */
  flags: FlagsEdges,
  /** An instance-local UUID identifying the thread */
  id: Scalars['String'],
  /** The id of the comment this one was a reply to */
  inReplyTo?: Maybe<Comment>,
  /** Whether an comment admin has hidden the thread */
  isHidden: Scalars['Boolean'],
  /** Whether the comment is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the comment is publically visible */
  isPublic: Scalars['Boolean'],
  /** Users who like the comment, most recently liked first */
  likes: LikesEdges,
  /** The current user's like of this comment, if any */
  myLike?: Maybe<Like>,
  /** The thread this comment is part of */
  thread: Thread,
  /** When the comment was last updated */
  updatedAt: Scalars['String'],
};


export type CommentFlagsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type CommentLikesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

export type CommentInput = {
  content: Scalars['String'],
};

export type CommentsEdge = {
   __typename?: 'CommentsEdge',
  cursor: Scalars['String'],
  node: Comment,
};

export type CommentsEdges = {
   __typename?: 'CommentsEdges',
  edges: Array<Maybe<CommentsEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type CommunitiesNodes = {
   __typename?: 'CommunitiesNodes',
  nodes: Array<Maybe<Community>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type Community = {
   __typename?: 'Community',
  /** A url for the community, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The communities a user has joined, most recently joined first */
  collections: CollectionsEdges,
  /** When the community was created */
  createdAt: Scalars['String'],
  /** The user who created the community */
  creator: User,
  /** Users following the community, most recently followed first */
  followers: FollowsEdges,
  /** An avatar url */
  icon?: Maybe<Scalars['String']>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** A header background image url */
  image?: Maybe<Scalars['String']>,
  /** Whether an instance admin has disabled the community */
  isDisabled: Scalars['Boolean'],
  /** Whether the community is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the community has a public profile */
  isPublic: Scalars['Boolean'],
  /** 
 * When the community or a resource or collection in it was last
   * updated or a thread or a comment was created or updated
 **/
  lastActivity: Scalars['String'],
  /** The current user's flag of the community, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this community, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities in the community, most recently created first */
  outbox: ActivitiesEdges,
  /** An instance-unique identifier shared with users and collections */
  preferredUsername: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * Threads started on the community, in most recently updated
   * order. Does not include threads started on collections or
   * resources
 **/
  threads: ThreadsEdges,
  /** When the community was last updated */
  updatedAt: Scalars['String'],
};


export type CommunityCollectionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityFollowersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityOutboxArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityThreadsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

export type CommunityInput = {
  icon?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type CommunityUpdateInput = {
  icon?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

/** A thing that can be deleted */
export type DeleteContext = Activity | Collection | Comment | Community | Flag | Follow | Like | Resource | Thread | User;

<<<<<<< HEAD
export type FileMetadata = {
   __typename?: 'FileMetadata',
  heightPx?: Maybe<Scalars['Int']>,
  pageCount?: Maybe<Scalars['Int']>,
  widthPx?: Maybe<Scalars['Int']>,
};

=======
/** More detailed metadata parsed from a file. */
export type FileIntrinsics = {
   __typename?: 'FileIntrinsics',
  bitsPerPixel?: Maybe<Scalars['Int']>,
  bitsPerSample?: Maybe<Scalars['Int']>,
  blockAlign?: Maybe<Scalars['Int']>,
  byteRate?: Maybe<Scalars['Int']>,
  colorPlanes?: Maybe<Scalars['Int']>,
  numColorPalette?: Maybe<Scalars['Int']>,
  numFrames?: Maybe<Scalars['Int']>,
  pageCount?: Maybe<Scalars['Int']>,
};

/** 
 * Metadata associated with a file.
 * 
 * None of the parameters are required and are filled depending on the
 * file type.
 **/
export type FileMetadata = {
   __typename?: 'FileMetadata',
  heightPx?: Maybe<Scalars['Int']>,
  intrinsics?: Maybe<FileIntrinsics>,
  numAudioChannels?: Maybe<Scalars['Int']>,
  sampleRateHz?: Maybe<Scalars['Int']>,
  widthPx?: Maybe<Scalars['Int']>,
};

/** An uploaded file, may contain metadata. */
>>>>>>> feature/flagging
export type FileUpload = {
   __typename?: 'FileUpload',
  id: Scalars['ID'],
  isPublic: Scalars['Boolean'],
<<<<<<< HEAD
  mediaType?: Maybe<Scalars['String']>,
  metadata?: Maybe<FileMetadata>,
  parent: UploadParent,
  size?: Maybe<Scalars['Int']>,
=======
  mediaType: Scalars['String'],
  metadata?: Maybe<FileMetadata>,
  parent: UploadParent,
  size: Scalars['Int'],
>>>>>>> feature/flagging
  uploader: User,
  url: Scalars['String'],
};

/** A report about objectionable content */
export type Flag = {
   __typename?: 'Flag',
  /** A url for the flag, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being flagged */
  context: FlagContext,
  /** When the flag was created */
  createdAt: Scalars['String'],
  /** The user who flagged */
  creator: User,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether the flag is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Is the flag considered dealt with by the instance moderator? */
  isResolved: Scalars['Boolean'],
  /** The reason for flagging */
  message: Scalars['String'],
  /** When the flag was updated */
  updatedAt: Scalars['String'],
};

/** A thing that can be flagged */
export type FlagContext = Collection | Comment | Community | Resource | User;

export type FlagsEdge = {
   __typename?: 'FlagsEdge',
  cursor: Scalars['String'],
  node: Flag,
};

export type FlagsEdges = {
   __typename?: 'FlagsEdges',
  edges: Array<Maybe<FlagsEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

/** A record that a user follows something */
export type Follow = {
   __typename?: 'Follow',
  /** A url for the flag, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being followed */
  context: FollowContext,
  /** When the follow was created */
  createdAt: Scalars['String'],
  /** The user who followed */
  creator: User,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether the follow is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the follow is public */
  isPublic: Scalars['Boolean'],
  /** When the follow was last updated */
  updatedAt: Scalars['String'],
};

/** A thing that can be followed */
export type FollowContext = Collection | Community | Thread | User;

export type FollowedCollection = {
   __typename?: 'FollowedCollection',
  collection: Collection,
  follow: Follow,
};

export type FollowedCollectionsEdge = {
   __typename?: 'FollowedCollectionsEdge',
  cursor: Scalars['String'],
  node: FollowedCollection,
};

export type FollowedCollectionsEdges = {
   __typename?: 'FollowedCollectionsEdges',
  edges: Array<Maybe<FollowedCollectionsEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type FollowedCommunitiesEdge = {
   __typename?: 'FollowedCommunitiesEdge',
  cursor: Scalars['String'],
  node: FollowedCommunity,
};

export type FollowedCommunitiesEdges = {
   __typename?: 'FollowedCommunitiesEdges',
  edges: Array<Maybe<FollowedCommunitiesEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type FollowedCommunity = {
   __typename?: 'FollowedCommunity',
  community: Community,
  follow: Follow,
};

export type FollowedUser = {
   __typename?: 'FollowedUser',
  follow: Follow,
  user: User,
};

export type FollowedUsersEdge = {
   __typename?: 'FollowedUsersEdge',
  cursor: Scalars['String'],
  node: FollowedUser,
};

export type FollowedUsersEdges = {
   __typename?: 'FollowedUsersEdges',
  edges: Array<Maybe<FollowedUsersEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type FollowsEdge = {
   __typename?: 'FollowsEdge',
  cursor: Scalars['String'],
  node: Follow,
};

export type FollowsEdges = {
   __typename?: 'FollowsEdges',
  edges: Array<Maybe<FollowsEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type Instance = {
   __typename?: 'Instance',
  description?: Maybe<Scalars['String']>,
  hostname: Scalars['String'],
  /** A list of public activity on the local instance, most recent first */
  outbox: ActivitiesEdges,
};


export type InstanceOutboxArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

/** A record that a user likes a thing */
export type Like = {
   __typename?: 'Like',
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is liked */
  context: LikeContext,
  /** When the like was created */
  createdAt: Scalars['String'],
  /** The user who liked */
  creator: User,
  /** An instance-local UUID identifying the like */
  id: Scalars['String'],
  /** Whether the like is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the like is public */
  isPublic: Scalars['Boolean'],
  /** When the like was last updated */
  updatedAt: Scalars['String'],
};

/** A thing which can be liked */
export type LikeContext = Collection | Comment | Resource | User;

export type LikesEdge = {
   __typename?: 'LikesEdge',
  cursor: Scalars['String'],
  node: Like,
};

export type LikesEdges = {
   __typename?: 'LikesEdges',
  edges: Array<Maybe<LikesEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

/** The current user. Contains more information than just the `user` type */
export type Me = {
   __typename?: 'Me',
  /** The user's email */
  email: Scalars['String'],
  /** Has the user confirmed their account? */
  isConfirmed: Scalars['Boolean'],
  /** Is the user a witch or wizard? */
  isInstanceAdmin: Scalars['Boolean'],
  /** The public info */
  user: User,
  /** Would the user like to receive digest emails of updates? */
  wantsEmailDigest: Scalars['Boolean'],
  /** Does the user want notifications? Which don't work yet. */
  wantsNotifications: Scalars['Boolean'],
};

/** Cursors for pagination */
export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor: Scalars['String'],
  hasNextPage?: Maybe<Scalars['Boolean']>,
  hasPrevPage?: Maybe<Scalars['Boolean']>,
  startCursor: Scalars['String'],
};

export type RegistrationInput = {
  email: Scalars['String'],
  icon?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  password: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
  wantsEmailDigest: Scalars['Boolean'],
  wantsNotifications: Scalars['Boolean'],
  website?: Maybe<Scalars['String']>,
};

export type Resource = {
   __typename?: 'Resource',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The collection this resource is a part of */
  collection: Collection,
  /** When the collection was created */
  createdAt: Scalars['String'],
  /** The user who created the resource */
  creator: User,
  /** Flags users have made about the resource, most recently created first */
  flags: FlagsEdges,
  /** An avatar url */
  icon?: Maybe<Scalars['String']>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether an instance admin has hidden the resource */
  isDisabled: Scalars['Boolean'],
  /** Whether the resource is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the resource is public */
  isPublic: Scalars['Boolean'],
  /** What license is it available under? */
  license?: Maybe<Scalars['String']>,
  /** Users who like the resource, most recently liked first */
  likes: LikesEdges,
  /** The current user's flag of the resource, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's like of the resource, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** When the collection was last updated */
  updatedAt: Scalars['String'],
  /** A link to an external resource */
  url?: Maybe<Scalars['String']>,
};


export type ResourceFlagsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type ResourceLikesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

export type ResourceInput = {
  icon?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type ResourcesEdge = {
   __typename?: 'ResourcesEdge',
  cursor: Scalars['String'],
  node: Resource,
};

export type ResourcesEdges = {
   __typename?: 'ResourcesEdges',
  edges: Array<Maybe<ResourcesEdge>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type RootMutationType = {
   __typename?: 'RootMutationType',
  /** Confirm email. Returns a login token. */
  confirmEmail?: Maybe<AuthPayload>,
  /** Copy a resource */
  copyResource?: Maybe<Resource>,
  /** Create a collection */
  createCollection?: Maybe<Collection>,
  /** Create a community */
  createCommunity?: Maybe<Community>,
  /** Flag a user, community, collection, resource or comment, returning a flag id */
  createFlag?: Maybe<Flag>,
  /** Follow a community, collection or thread returning a follow id */
  createFollow?: Maybe<Follow>,
  /** Like a comment, collection, or resource returning a like id */
  createLike?: Maybe<Like>,
  /** Create a reply */
  createReply?: Maybe<Comment>,
  /** Create a resource */
  createResource?: Maybe<Resource>,
  /** Log in */
  createSession?: Maybe<AuthPayload>,
  /** Create a new thread */
  createThread?: Maybe<Comment>,
  /** Create a user */
  createUser?: Maybe<Me>,
  /** Delete more or less anything */
  delete?: Maybe<DeleteContext>,
  /** Deletes my account! */
  deleteSelf?: Maybe<Scalars['Boolean']>,
  /** Log out */
  deleteSession?: Maybe<Scalars['Boolean']>,
  /** Edit a comment */
  editComment?: Maybe<Comment>,
  /** Fetch metadata from webpage */
  fetchWebMetadata?: Maybe<WebMetadata>,
  /** Reset password */
  resetPassword?: Maybe<AuthPayload>,
  /** Reset password request */
  resetPasswordRequest?: Maybe<Scalars['Boolean']>,
  /** Close a flag */
  resolveFlag?: Maybe<Flag>,
  /** Update a collection */
  updateCollection?: Maybe<Collection>,
  /** Update a community */
  updateCommunity?: Maybe<Community>,
  /** Update a profile */
  updateProfile?: Maybe<Me>,
  /** Update a resource */
  updateResource?: Maybe<Resource>,
<<<<<<< HEAD
  /** Upload an avatar (icon in ActivityPub). Returns the full image. */
  uploadFile?: Maybe<FileUpload>,
=======
  /** Upload a small icon, also known as an avatar. */
  uploadIcon?: Maybe<FileUpload>,
  /** Upload a large image, also known as a header. */
  uploadImage?: Maybe<FileUpload>,
  uploadResource?: Maybe<FileUpload>,
>>>>>>> feature/flagging
};


export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String']
};


export type RootMutationTypeCopyResourceArgs = {
  collectionId: Scalars['String'],
  resourceId: Scalars['String']
};


export type RootMutationTypeCreateCollectionArgs = {
  collection: CollectionInput,
  communityId: Scalars['String']
};


export type RootMutationTypeCreateCommunityArgs = {
  community: CommunityInput
};


export type RootMutationTypeCreateFlagArgs = {
  contextId: Scalars['String'],
  message: Scalars['String']
};


export type RootMutationTypeCreateFollowArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateLikeArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateReplyArgs = {
  comment: CommentInput,
  inReplyToId: Scalars['String'],
  threadId: Scalars['String']
};


export type RootMutationTypeCreateResourceArgs = {
  collectionId: Scalars['String'],
  resource: ResourceInput
};


export type RootMutationTypeCreateSessionArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RootMutationTypeCreateThreadArgs = {
  comment: CommentInput,
  contextId: Scalars['String']
};


export type RootMutationTypeCreateUserArgs = {
  user: RegistrationInput
};


export type RootMutationTypeDeleteArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteSelfArgs = {
  iAmSure: Scalars['Boolean']
};


export type RootMutationTypeEditCommentArgs = {
  comment: CommentInput,
  commentId: Scalars['String']
};


export type RootMutationTypeFetchWebMetadataArgs = {
  url: Scalars['String']
};


export type RootMutationTypeResetPasswordArgs = {
  password: Scalars['String'],
  token: Scalars['String']
};


export type RootMutationTypeResetPasswordRequestArgs = {
  email: Scalars['String']
};


export type RootMutationTypeResolveFlagArgs = {
  flagId: Scalars['String']
};


export type RootMutationTypeUpdateCollectionArgs = {
  collection: CollectionUpdateInput,
  collectionId: Scalars['String']
};


export type RootMutationTypeUpdateCommunityArgs = {
  community: CommunityUpdateInput,
  communityId: Scalars['String']
};


export type RootMutationTypeUpdateProfileArgs = {
  profile: UpdateProfileInput
};


export type RootMutationTypeUpdateResourceArgs = {
  resource: ResourceInput,
  resourceId: Scalars['String']
};


<<<<<<< HEAD
export type RootMutationTypeUploadFileArgs = {
=======
export type RootMutationTypeUploadIconArgs = {
  contextId: Scalars['ID'],
  upload: Scalars['Upload']
};


export type RootMutationTypeUploadImageArgs = {
  contextId: Scalars['ID'],
  upload: Scalars['Upload']
};


export type RootMutationTypeUploadResourceArgs = {
>>>>>>> feature/flagging
  contextId: Scalars['ID'],
  upload: Scalars['Upload']
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  activity?: Maybe<Activity>,
  /** Get a collection */
  collection?: Maybe<Collection>,
  /** Get list of collections, most recent activity first */
  collections: CollectionsNodes,
  /** Get a comment */
  comment?: Maybe<Comment>,
  /** Get list of communities, most followed first */
  communities: CommunitiesNodes,
  /** Get a community */
  community?: Maybe<Community>,
  flag?: Maybe<Flag>,
  follow?: Maybe<Follow>,
  /** A logical object for the local instance */
  instance?: Maybe<Instance>,
  like?: Maybe<Like>,
  /** Get my user */
  me?: Maybe<Me>,
  /** Get a resource */
  resource?: Maybe<Resource>,
  /** Get a thread */
  thread?: Maybe<Thread>,
  /** Get a user */
  user?: Maybe<User>,
  /** Check if a user exists with a username */
  usernameAvailable: Scalars['Boolean'],
};


export type RootQueryTypeActivityArgs = {
  activityId: Scalars['String']
};


export type RootQueryTypeCollectionArgs = {
  collectionId: Scalars['String']
};


export type RootQueryTypeCollectionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCommentArgs = {
  commentId: Scalars['String']
};


export type RootQueryTypeCommunitiesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCommunityArgs = {
  communityId: Scalars['String']
};


export type RootQueryTypeFlagArgs = {
  flagId: Scalars['String']
};


export type RootQueryTypeFollowArgs = {
  followId: Scalars['String']
};


export type RootQueryTypeLikeArgs = {
  likeId: Scalars['String']
};


export type RootQueryTypeResourceArgs = {
  resourceId: Scalars['String']
};


export type RootQueryTypeThreadArgs = {
  threadId: Scalars['String']
};


export type RootQueryTypeUserArgs = {
  userId: Scalars['String']
};


export type RootQueryTypeUsernameAvailableArgs = {
  username: Scalars['String']
};

/** A thread is essentially a list of comments */
export type Thread = {
   __typename?: 'Thread',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Comments in the thread, most recently created first */
  comments: CommentsEdges,
  /** The object the thread is attached to */
  context: ThreadContext,
  /** When the thread was created */
  createdAt: Scalars['String'],
  /** Users following the collection, most recently followed first */
  followers: FollowsEdges,
  /** An instance-local UUID identifying the thread */
  id: Scalars['String'],
  /** Whether an instance admin has hidden the thread */
  isHidden: Scalars['Boolean'],
  /** Whether the thread is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the thread is publically visible */
  isPublic: Scalars['Boolean'],
  /** The last time the thread or a comment on it was created or updated */
  lastActivity: Scalars['String'],
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>,
  /** When the thread was last updated */
  updatedAt: Scalars['String'],
};


/** A thread is essentially a list of comments */
export type ThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** A thread is essentially a list of comments */
export type ThreadFollowersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

/** The thing the comment is about */
export type ThreadContext = Collection | Community | Flag | Resource;

export type ThreadsEdge = {
   __typename?: 'ThreadsEdge',
  cursor: Scalars['String'],
  node: Thread,
};

export type ThreadsEdges = {
   __typename?: 'ThreadsEdges',
  edges?: Maybe<Array<Maybe<ThreadsEdge>>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount: Scalars['Int'],
};

export type UpdateProfileInput = {
  icon?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  wantsEmailDigest?: Maybe<Scalars['Boolean']>,
  wantsNotifications?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
};


/** A parent of an upload */
export type UploadParent = Collection | Comment | Community | Resource | User;

/** User profile information */
export type User = {
   __typename?: 'User',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Comments the user has made, most recently created first */
  comments: CommentsEdges,
  /** When the user signed up */
  createdAt: Scalars['String'],
  /** The collections a user is following, most recently followed first */
  followedCollections: FollowedCollectionsEdges,
  /** The communities a user is following, most recently followed first */
  followedCommunities: FollowedCommunitiesEdges,
  /** The users a user is following, most recently followed first */
  followedUsers: FollowedUsersEdges,
  /** An avatar url */
  icon?: Maybe<Scalars['String']>,
  /** An instance-local UUID identifying the user */
  id: Scalars['ID'],
  /** A header background image url */
  image?: Maybe<Scalars['String']>,
  /** 
 * Activities of others the user is following, most recently created
   * first. Only available to the current user under `me`
 **/
  inbox: ActivitiesEdges,
  /** Whether an instance admin has disabled the user's account */
  isDisabled: Scalars['Boolean'],
  /** Whether the user is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the user has a public profile */
  isPublic: Scalars['Boolean'],
  /** The last time the user did anything */
  lastActivity?: Maybe<Scalars['String']>,
  /** The collections a user is following, most recently followed first */
  likes: LikesEdges,
  /** Free text */
  location?: Maybe<Scalars['String']>,
  /** The current user's flag of this user, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of this user, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this user, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name?: Maybe<Scalars['String']>,
  /** Activities of the user, most recently created first */
  outbox: ActivitiesEdges,
  /** An instance-unique identifier shared with communities and collections */
  preferredUsername: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** When the user last updated their profile */
  updatedAt: Scalars['String'],
  /** A valid URL */
  website?: Maybe<Scalars['String']>,
};


/** User profile information */
export type UserCommentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowedCollectionsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowedCommunitiesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowedUsersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserInboxArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserLikesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserOutboxArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};

export type WebMetadata = {
   __typename?: 'WebMetadata',
  author?: Maybe<Scalars['String']>,
  embedCode?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  resourceType?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};
