export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ActivitiesEdge = {
  __typename?: 'ActivitiesEdge';
  cursor: Scalars['String'];
  node?: Maybe<Activity>;
};

export type ActivitiesEdges = {
  __typename?: 'ActivitiesEdges';
  edges?: Maybe<Array<Maybe<ActivitiesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An event that appears in a feed */
export type Activity = {
  __typename?: 'Activity';
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The object of the user's verbing */
  context?: Maybe<ActivityContext>;
  /** When the activity was created */
  createdAt?: Maybe<Scalars['String']>;
  /** An instance-local UUID identifying the activity */
  id?: Maybe<Scalars['String']>;
  /** Whether the activity is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the activity is public */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** The user who performed the activity */
  user?: Maybe<User>;
  /** The verb describing the activity */
  verb?: Maybe<ActivityVerb>;
};

/** Activity object */
export type ActivityContext = Collection | Comment | Community | Resource;

/** Something a user does, in past tense */
export enum ActivityVerb {
  Created = 'CREATED',
  Updated = 'UPDATED'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  me?: Maybe<Me>;
  token?: Maybe<Scalars['String']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type Collection = {
  __typename?: 'Collection';
  /** A url for the collection, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The community the collection belongs to */
  community?: Maybe<Community>;
  /** When the collection was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who created the collection */
  creator?: Maybe<User>;
  /** Flags users have made about the collection, most recently created first */
  flags?: Maybe<FlagsEdges>;
  /** Subscriptions users have to the collection */
  followers?: Maybe<FollowsEdges>;
  /** An avatar url */
  icon?: Maybe<Scalars['String']>;
  /** An instance-local UUID identifying the user */
  id?: Maybe<Scalars['String']>;
  /** Whether an instance admin has hidden the collection */
  isDisabled?: Maybe<Scalars['Boolean']>;
  /** Whether the collection is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the collection is public */
  isPublic?: Maybe<Scalars['Boolean']>;
  /**
   * When the collection or a resource in it was last updated or a
   * thread or a comment was created or updated
   **/
  lastActivity?: Maybe<Scalars['String']>;
  /** Likes users have given the collection */
  likes?: Maybe<LikesEdges>;
  /** The current user's follow of this collection, if any */
  myFollow?: Maybe<Follow>;
  /** The current user's like of this collection, if any */
  myLike?: Maybe<Like>;
  /** A name field */
  name?: Maybe<Scalars['String']>;
  /** Activities on the collection, most recent first */
  outbox?: Maybe<ActivitiesEdges>;
  /** An instance-unique identifier shared with users and communities */
  preferredUsername?: Maybe<Scalars['String']>;
  /** The primary language the community speaks */
  primaryLanguage?: Maybe<Language>;
  /** The resources in the collection, most recently created last */
  resources?: Maybe<ResourcesEdges>;
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>;
  /**
   * The threads created on the collection, most recently created
   * first. Does not include threads created on resources.
   **/
  threads?: Maybe<ThreadsEdges>;
  /** When the collection was last updated */
  updatedAt?: Maybe<Scalars['String']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type CollectionFlagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type CollectionFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type CollectionLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type CollectionOutboxArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type CollectionResourcesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** A collection is the home of resources and discussion threads within a community */
export type CollectionThreadsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CollectionInput = {
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preferredUsername: Scalars['String'];
  primaryLanguageId?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
};

export type CollectionsEdge = {
  __typename?: 'CollectionsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Collection>;
};

export type CollectionsEdges = {
  __typename?: 'CollectionsEdges';
  edges?: Maybe<Array<Maybe<CollectionsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CollectionsNodes = {
  __typename?: 'CollectionsNodes';
  nodes?: Maybe<Array<Maybe<Collection>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The comment text */
  content?: Maybe<Scalars['String']>;
  /** When the comment was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who created this comment */
  creator?: Maybe<User>;
  /** Flags users have made about the comment, most recently created first */
  flags?: Maybe<FlagsEdges>;
  /** An instance-local UUID identifying the thread */
  id?: Maybe<Scalars['String']>;
  /** The id of the comment this one was a reply to */
  inReplyToId?: Maybe<Scalars['String']>;
  /** Whether an comment admin has hidden the thread */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Whether the comment is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the comment is publically visible */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** Users who like the comment, most recently liked first */
  likes?: Maybe<LikesEdges>;
  /** The current user's like of this comment, if any */
  myLike?: Maybe<Like>;
  /** The thread this comment is part of */
  thread?: Maybe<Thread>;
  /** When the comment was last updated */
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommentFlagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommentLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommentInput = {
  content: Scalars['String'];
};

export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
};

export type CommentsEdges = {
  __typename?: 'CommentsEdges';
  edges?: Maybe<Array<Maybe<CommentsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommunitiesNodes = {
  __typename?: 'CommunitiesNodes';
  nodes?: Maybe<Array<Maybe<Community>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Community = {
  __typename?: 'Community';
  /** A url for the community, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The communities a user has joined, most recently joined first */
  collections?: Maybe<CollectionsEdges>;
  /** When the community was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who created the community */
  creator?: Maybe<User>;
  /** Users following the community, most recently followed first */
  followers?: Maybe<FollowsEdges>;
  /** An avatar url */
  icon?: Maybe<Scalars['String']>;
  /** An instance-local UUID identifying the user */
  id?: Maybe<Scalars['String']>;
  /** A header background image url */
  image?: Maybe<Scalars['String']>;
  /** Activities for community moderators. Not available to plebs. */
  inbox?: Maybe<ActivitiesEdges>;
  /** Whether an instance admin has disabled the community */
  isDisabled?: Maybe<Scalars['Boolean']>;
  /** Whether the community is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the community has a public profile */
  isPublic?: Maybe<Scalars['Boolean']>;
  /**
   * When the community or a resource or collection in it was last
   * updated or a thread or a comment was created or updated
   **/
  lastActivity?: Maybe<Scalars['String']>;
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>;
  /** A name field */
  name?: Maybe<Scalars['String']>;
  /** Activities in the community, most recently created first */
  outbox?: Maybe<ActivitiesEdges>;
  /** An instance-unique identifier shared with users and collections */
  preferredUsername?: Maybe<Scalars['String']>;
  /** The primary language the community speaks */
  primaryLanguage?: Maybe<Language>;
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>;
  /**
   * Threads started on the community, in most recently updated
   * order. Does not include threads started on collections or
   * resources
   **/
  threads?: Maybe<ThreadsEdges>;
  /** When the community was last updated */
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommunityCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityInboxArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityOutboxArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityThreadsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CommunityInput = {
  icon?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preferredUsername: Scalars['String'];
  primaryLanguageId: Scalars['String'];
  summary: Scalars['String'];
};

export type CountriesNodes = {
  __typename?: 'CountriesNodes';
  nodes?: Maybe<Array<Maybe<Country>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Country = {
  __typename?: 'Country';
  createdAt?: Maybe<Scalars['String']>;
  englishName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isoCode2?: Maybe<Scalars['String']>;
  isoCode3?: Maybe<Scalars['String']>;
  localName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** A report about objectionable content */
export type Flag = {
  __typename?: 'Flag';
  /** A url for the flag, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The thing that is being flagged */
  context?: Maybe<FlagContext>;
  /** When the flag was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who flagged */
  creator?: Maybe<User>;
  /** An instance-local UUID identifying the user */
  id?: Maybe<Scalars['String']>;
  /** Whether the flag is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the flag is public */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** Is the flag considered dealt with by the instance moderator? */
  isResolved?: Maybe<Scalars['Boolean']>;
  /** The reason for flagging */
  message?: Maybe<Scalars['String']>;
  /** When the flag was updated */
  updatedAt?: Maybe<Scalars['String']>;
};

/** A thing that can be flagged */
export type FlagContext = Collection | Comment | Community | Resource | User;

export type FlagsEdge = {
  __typename?: 'FlagsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Flag>;
};

export type FlagsEdges = {
  __typename?: 'FlagsEdges';
  edges?: Maybe<Array<Maybe<FlagsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A record that a user follows something */
export type Follow = {
  __typename?: 'Follow';
  /** A url for the flag, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The thing that is being followed */
  context?: Maybe<FollowContext>;
  /** When the like was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who followed */
  creator?: Maybe<User>;
  /** An instance-local UUID identifying the user */
  id?: Maybe<Scalars['String']>;
  /** Whether the follow is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the follow is public */
  isPublic?: Maybe<Scalars['Boolean']>;
};

/** A thing that can be followed */
export type FollowContext = Collection | Community | Thread | User;

export type FollowsEdge = {
  __typename?: 'FollowsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Follow>;
};

export type FollowsEdges = {
  __typename?: 'FollowsEdges';
  edges?: Maybe<Array<Maybe<FollowsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Instance = {
  __typename?: 'Instance';
  /** A list of public activity on the local instance, most recent first */
  outbox?: Maybe<ActivitiesEdges>;
};

export type InstanceOutboxArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Language = {
  __typename?: 'Language';
  createdAt?: Maybe<Scalars['String']>;
  englishName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isoCode2?: Maybe<Scalars['String']>;
  isoCode3?: Maybe<Scalars['String']>;
  localName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type LanguagesNodes = {
  __typename?: 'LanguagesNodes';
  nodes?: Maybe<Array<Maybe<Language>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A record that a user likes a thing */
export type Like = {
  __typename?: 'Like';
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The thing that is liked */
  context?: Maybe<LikeContext>;
  /** When the like was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who liked */
  creator?: Maybe<User>;
  /** An instance-local UUID identifying the like */
  id?: Maybe<Scalars['String']>;
  /** Whether the like is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the like is public */
  isPublic?: Maybe<Scalars['Boolean']>;
};

/** A thing which can be liked */
export type LikeContext = Collection | Comment | Resource | User;

export type LikesEdge = {
  __typename?: 'LikesEdge';
  cursor: Scalars['String'];
  node?: Maybe<Like>;
};

export type LikesEdges = {
  __typename?: 'LikesEdges';
  edges?: Maybe<Array<Maybe<LikesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** The current user. Contains more information than just the `user` type */
export type Me = {
  __typename?: 'Me';
  /** The user's email */
  email?: Maybe<Scalars['String']>;
  /** Has the user confirmed their account? */
  isConfirmed?: Maybe<Scalars['Boolean']>;
  /** Is the user a witch or wizard? */
  isInstanceAdmin?: Maybe<Scalars['Boolean']>;
  /** The public info */
  user?: Maybe<User>;
  /** Would the user like to receive digest emails of updates? */
  wantsEmailDigest?: Maybe<Scalars['Boolean']>;
  /** Does the user want notifications? Which don't work yet. */
  wantsNotifications?: Maybe<Scalars['Boolean']>;
};

/** Cursors for pagination */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type RegistrationInput = {
  email: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  preferredUsername: Scalars['String'];
  primaryLanguageId?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  wantsEmailDigest?: Maybe<Scalars['Boolean']>;
  wantsNotifications?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
};

export type Resource = {
  __typename?: 'Resource';
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** The collection this resource is a part of */
  collection?: Maybe<Collection>;
  /** When the collection was created */
  createdAt?: Maybe<Scalars['String']>;
  /** The user who created the resource */
  creator?: Maybe<User>;
  /** Flags users have made about the resource, most recently created first */
  flags?: Maybe<FlagsEdges>;
  /** An avatar url */
  icon?: Maybe<Scalars['String']>;
  /** An instance-local UUID identifying the user */
  id?: Maybe<Scalars['String']>;
  /** Whether an instance admin has hidden the resource */
  isDisabled?: Maybe<Scalars['Boolean']>;
  /** Whether the resource is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the community is public */
  isPublic?: Maybe<Scalars['Boolean']>;
  /**
   * When the resource was last updated or a thread or a comment on it
   * was created or updated
   **/
  lastActivity?: Maybe<Scalars['String']>;
  /** What license is it available under? */
  license?: Maybe<Scalars['String']>;
  /** Users who like the resource, most recently liked first */
  likes?: Maybe<LikesEdges>;
  /** The current user's like of the resource, if any */
  myLike?: Maybe<Like>;
  /** A name field */
  name?: Maybe<Scalars['String']>;
  /** Languages the resources is available in */
  primaryLanguage?: Maybe<Language>;
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>;
  /** When the collection was last updated */
  updatedAt?: Maybe<Scalars['String']>;
  /** A link to an external resource */
  url?: Maybe<Scalars['String']>;
};

export type ResourceFlagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ResourceLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ResourceInput = {
  icon?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryLanguageId?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ResourcesEdge = {
  __typename?: 'ResourcesEdge';
  cursor: Scalars['String'];
  node?: Maybe<Resource>;
};

export type ResourcesEdges = {
  __typename?: 'ResourcesEdges';
  edges?: Maybe<Array<Maybe<ResourcesEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Confirm email. Returns a login token. */
  confirmEmail?: Maybe<AuthPayload>;
  /** Copy a resource */
  copyResource?: Maybe<Resource>;
  /** Create a collection */
  createCollection?: Maybe<Collection>;
  /** Create a community */
  createCommunity?: Maybe<Community>;
  /** Flag a user, community, collection, resource or comment, returning a flag id */
  createFlag?: Maybe<Flag>;
  /** Follow a community, collection or thread returning a follow id */
  createFollow?: Maybe<Follow>;
  /** Like a comment, collection, or resource returning a like id */
  createLike?: Maybe<Like>;
  /** Create a reply */
  createReply?: Maybe<Comment>;
  /** Create a resource */
  createResource?: Maybe<Resource>;
  /** Log in */
  createSession?: Maybe<AuthPayload>;
  /** Create a new thread */
  createThread?: Maybe<Comment>;
  /** Create a user */
  createUser?: Maybe<Me>;
  /** Delete more or less anything */
  delete?: Maybe<Scalars['Boolean']>;
  /** Deletes my account! */
  deleteSelf?: Maybe<Scalars['Boolean']>;
  /** Log out */
  deleteSession?: Maybe<Scalars['Boolean']>;
  /** Edit a comment */
  editComment?: Maybe<Comment>;
  /** Reset password */
  resetPassword?: Maybe<AuthPayload>;
  /** Reset password request */
  resetPasswordRequest?: Maybe<Scalars['Boolean']>;
  /** Close a flag */
  resolveFlag?: Maybe<Scalars['Boolean']>;
  /** Update a collection */
  updateCollection?: Maybe<Collection>;
  /** Update a community */
  updateCommunity?: Maybe<Community>;
  /** Update a profile */
  updateProfile?: Maybe<Me>;
  /** Update a resource */
  updateResource?: Maybe<Resource>;
};

export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String'];
};

export type RootMutationTypeCopyResourceArgs = {
  collectionId: Scalars['String'];
  resourceId: Scalars['String'];
};

export type RootMutationTypeCreateCollectionArgs = {
  collection: CollectionInput;
  communityId: Scalars['String'];
};

export type RootMutationTypeCreateCommunityArgs = {
  community: CommunityInput;
};

export type RootMutationTypeCreateFlagArgs = {
  contextId: Scalars['String'];
  message: Scalars['String'];
};

export type RootMutationTypeCreateFollowArgs = {
  contextId: Scalars['String'];
};

export type RootMutationTypeCreateLikeArgs = {
  contextId: Scalars['String'];
};

export type RootMutationTypeCreateReplyArgs = {
  comment: CommentInput;
  inReplyToId: Scalars['String'];
  threadId: Scalars['String'];
};

export type RootMutationTypeCreateResourceArgs = {
  collectionId: Scalars['String'];
  resource: ResourceInput;
};

export type RootMutationTypeCreateSessionArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RootMutationTypeCreateThreadArgs = {
  comment: CommentInput;
  contextId: Scalars['String'];
};

export type RootMutationTypeCreateUserArgs = {
  user: RegistrationInput;
};

export type RootMutationTypeDeleteArgs = {
  contextId: Scalars['String'];
};

export type RootMutationTypeDeleteSelfArgs = {
  iAmSure: Scalars['Boolean'];
};

export type RootMutationTypeEditCommentArgs = {
  comment: CommentInput;
  commentId: Scalars['String'];
};

export type RootMutationTypeResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type RootMutationTypeResetPasswordRequestArgs = {
  email: Scalars['String'];
};

export type RootMutationTypeResolveFlagArgs = {
  flagId: Scalars['String'];
};

export type RootMutationTypeUpdateCollectionArgs = {
  collection: CollectionInput;
  collectionId: Scalars['String'];
};

export type RootMutationTypeUpdateCommunityArgs = {
  community: CommunityInput;
  communityId: Scalars['String'];
};

export type RootMutationTypeUpdateProfileArgs = {
  profile: UpdateProfileInput;
};

export type RootMutationTypeUpdateResourceArgs = {
  resource: ResourceInput;
  resourceId: Scalars['String'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  activity?: Maybe<Activity>;
  /** Get a collection */
  collection?: Maybe<Collection>;
  /** Get list of collections, most recent activity first */
  collections?: Maybe<CollectionsNodes>;
  /** Get a comment */
  comment?: Maybe<Comment>;
  /** Get list of communities, most followed first */
  communities?: Maybe<CommunitiesNodes>;
  /** Get a community */
  community?: Maybe<Community>;
  /** Get list of languages we know about */
  countries?: Maybe<CountriesNodes>;
  country?: Maybe<Country>;
  flag?: Maybe<Flag>;
  follow?: Maybe<Follow>;
  /** A logical object for the local instance */
  instance?: Maybe<Instance>;
  language?: Maybe<Language>;
  /** Get list of languages we know about */
  languages?: Maybe<LanguagesNodes>;
  like?: Maybe<Like>;
  /** Get my user */
  me?: Maybe<Me>;
  /** Get a resource */
  resource?: Maybe<Resource>;
  searchCountry?: Maybe<CountriesNodes>;
  searchLanguage?: Maybe<LanguagesNodes>;
  /** Get a thread */
  thread?: Maybe<Thread>;
  /** Get an user */
  user?: Maybe<User>;
  /** Check if a user exists with a username */
  usernameAvailable?: Maybe<Scalars['Boolean']>;
};

export type RootQueryTypeActivityArgs = {
  activityId: Scalars['String'];
};

export type RootQueryTypeCollectionArgs = {
  collectionId: Scalars['String'];
};

export type RootQueryTypeCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeCommentArgs = {
  commentId: Scalars['String'];
};

export type RootQueryTypeCommunitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeCommunityArgs = {
  communityId: Scalars['String'];
};

export type RootQueryTypeCountriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeCountryArgs = {
  countryId: Scalars['String'];
};

export type RootQueryTypeFlagArgs = {
  flagId: Scalars['String'];
};

export type RootQueryTypeFollowArgs = {
  followId: Scalars['String'];
};

export type RootQueryTypeLanguageArgs = {
  languageId: Scalars['String'];
};

export type RootQueryTypeLanguagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type RootQueryTypeLikeArgs = {
  likeId: Scalars['String'];
};

export type RootQueryTypeResourceArgs = {
  resourceId: Scalars['String'];
};

export type RootQueryTypeSearchCountryArgs = {
  query: Scalars['String'];
};

export type RootQueryTypeSearchLanguageArgs = {
  query: Scalars['String'];
};

export type RootQueryTypeThreadArgs = {
  threadId: Scalars['String'];
};

export type RootQueryTypeUserArgs = {
  userId: Scalars['String'];
};

export type RootQueryTypeUsernameAvailableArgs = {
  username: Scalars['String'];
};

/** A thread is essentially a list of comments */
export type Thread = {
  __typename?: 'Thread';
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** Comments in the thread, most recently created first */
  comments?: Maybe<CommentsEdges>;
  /** The object the thread is attached to */
  context?: Maybe<ThreadContext>;
  /** When the thread was created */
  createdAt?: Maybe<Scalars['String']>;
  /** Users following the collection, most recently followed first */
  followers?: Maybe<FollowsEdges>;
  /** An instance-local UUID identifying the thread */
  id?: Maybe<Scalars['String']>;
  /** Whether an instance admin has hidden the thread */
  isHidden?: Maybe<Scalars['Boolean']>;
  /** Whether the thread is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the thread is publically visible */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** The last time the thread or a comment on it was created or updated */
  lastActivity?: Maybe<Scalars['String']>;
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>;
  /** When the thread was last updated */
  updatedAt?: Maybe<Scalars['String']>;
};

/** A thread is essentially a list of comments */
export type ThreadCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** A thread is essentially a list of comments */
export type ThreadFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** The thing the comment is about */
export type ThreadContext = Collection | Community | Flag | Resource;

export type ThreadsEdge = {
  __typename?: 'ThreadsEdge';
  cursor: Scalars['String'];
  node?: Maybe<Thread>;
};

export type ThreadsEdges = {
  __typename?: 'ThreadsEdges';
  edges?: Maybe<Array<Maybe<ThreadsEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UpdateProfileInput = {
  icon?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  primaryLanguageId?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  wantsEmailDigest?: Maybe<Scalars['Boolean']>;
  wantsNotifications?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
};

/** User profile information */
export type User = {
  __typename?: 'User';
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** Comments the user has made, most recently created first */
  comments?: Maybe<CommentsEdges>;
  /** When the user signed up */
  createdAt?: Maybe<Scalars['String']>;
  /** The collections a user is following, most recently followed first */
  followedCollections?: Maybe<FollowsEdges>;
  /** The communities a user is following, most recently followed first */
  followedCommunities?: Maybe<FollowsEdges>;
  /** The users a user is following, most recently followed first */
  followedUsers?: Maybe<FollowsEdges>;
  /** An avatar url */
  icon?: Maybe<Scalars['String']>;
  /** An instance-local UUID identifying the user */
  id?: Maybe<Scalars['ID']>;
  /** A header background image url */
  image?: Maybe<Scalars['String']>;
  /**
   * Activities of others the user is following, most recently created
   * first. Only available to the current user under `me`
   **/
  inbox?: Maybe<ActivitiesEdges>;
  /** Whether an instance admin has disabled the user's account */
  isDisabled?: Maybe<Scalars['Boolean']>;
  /** Whether the user is local to the instance */
  isLocal?: Maybe<Scalars['Boolean']>;
  /** Whether the user has a public profile */
  isPublic?: Maybe<Scalars['Boolean']>;
  /** The last time the user did anything */
  lastActivity?: Maybe<Scalars['String']>;
  /** The collections a user is following, most recently followed first */
  likes?: Maybe<LikesEdges>;
  /** Free text */
  location?: Maybe<Scalars['String']>;
  /** The current user's follow of this user, if any */
  myFollow?: Maybe<Follow>;
  /** The current user's like of this user, if any */
  myLike?: Maybe<Like>;
  /** A name field */
  name?: Maybe<Scalars['String']>;
  /** Activities of the user, most recently created first */
  outbox?: Maybe<ActivitiesEdges>;
  /** An instance-unique identifier shared with communities and collections */
  preferredUsername?: Maybe<Scalars['String']>;
  /** The language the user wishes to use moodlenet in */
  primaryLanguage?: Maybe<Language>;
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>;
  /** When the user last updated their profile */
  updatedAt?: Maybe<Scalars['String']>;
  /** A valid URL */
  website?: Maybe<Scalars['String']>;
};

/** User profile information */
export type UserCommentsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** User profile information */
export type UserFollowedCollectionsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** User profile information */
export type UserFollowedCommunitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** User profile information */
export type UserFollowedUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** User profile information */
export type UserInboxArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** User profile information */
export type UserLikesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

/** User profile information */
export type UserOutboxArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};
