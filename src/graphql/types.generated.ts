import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `DateTime` scalar type represents a DateTime value as specified by
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
 **/
  DateTime: any,
  /** The `URI` type simply declares a reference to an external web URL, Holochain entry or other resource. */
  URI: any,
  /** A type which allows any arbitrary value to be set */
  AnyType: any,
  /** 
 * An opaque position marker for pagination. Paginated queries return
   * a PageInfo struct with start and end cursors (which are actually
   * lists of Cursor for ...reasons...). You can then issue queries
   * requesting results `before` the `start` or `after` the `end`
   * cursors to request the previous or next page respectively.
   * 
   * Is actually a string or integer. May be extended in future.
 **/
  Cursor: any,
  /** Represents an uploaded file. */
  Upload: any,
};

/** 
 * An action verb defining the kind of event, commitment, or intent.
 * It is recommended that the lowercase action verb should be used as the record ID
 * in order that references to `Action`s elsewhere in the system are easily readable.
 **/
export type Action = {
   __typename?: 'Action',
  id: Scalars['ID'],
  /** Denotes if a process input or output, or not related to a process. */
  inputOutput?: Maybe<Scalars['String']>,
  /** A unique verb which defines the action. */
  label: Scalars['String'],
  /** The action that should be included on the other direction of the process, for example accept with modify. */
  pairsWith?: Maybe<Scalars['String']>,
  /** 
 * The effect of an economic event on a resource, increment, decrement, no
   * effect, or decrement resource and increment 'to' resource.
 **/
  resourceEffect: Scalars['String'],
};

export type ActivitiesPage = {
   __typename?: 'ActivitiesPage',
  edges: Array<Activity>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** An event that appears in a feed */
export type Activity = {
   __typename?: 'Activity',
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The object of the user's verbing */
  context?: Maybe<ActivityContext>,
  /** When the activity was created */
  createdAt: Scalars['String'],
  /** An instance-local UUID identifying the activity */
  id: Scalars['String'],
  /** Whether the activity is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the activity is public */
  isPublic: Scalars['Boolean'],
  /** The user who performed the activity */
  user?: Maybe<User>,
  /** The verb describing the activity */
  verb: ActivityVerb,
};

/** Activity object */
export type ActivityContext = Collection | Comment | Community | Flag | Follow | Like | Resource | User;

/** Something a user does, in past tense */
export enum ActivityVerb {
  Created = 'CREATED',
  Updated = 'UPDATED'
}

/** A person or group or organization with economic agency. */
export type Agent = {
   __typename?: 'Agent',
  commitments?: Maybe<Array<Commitment>>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  intents?: Maybe<Array<Intent>>,
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  plans?: Maybe<Array<Plan>>,
  /** 
 * The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
 **/
  primaryLocation?: Maybe<SpatialThing>,
  processes?: Maybe<Array<Process>>,
  relationships?: Maybe<Array<AgentRelationship>>,
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>,
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>,
  roles?: Maybe<Array<AgentRelationshipRole>>,
};


/** A person or group or organization with economic agency. */
export type AgentCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentRelationshipsArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};

/** Query parameters for reading `Commitment`s related to an `Agent` */
export type AgentCommitmentSearchParams = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
};

export type AgentCreateParams = {
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`SpatialThing`) The main place an agent is located, often an address where
   * activities occur and mail can be sent. This is usually a mappable geographic
   * location.  It also could be a website address, as in the case of agents who
   * have no physical location.
 **/
  primaryLocation?: Maybe<Scalars['ID']>,
};

/** Query parameters for reading `EconomicEvent`s related to an `Agent` */
export type AgentEventSearchParams = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['DateTime']>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
};

/** Query parameters for reading `Intent`s related to an `Agent` */
export type AgentIntentSearchParams = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
};

/** Query parameters for reading `Plan`s related to an `Agent` */
export type AgentPlanSearchParams = {
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
};

/** Query parameters for reading `Process`es related to an `Agent` */
export type AgentProcessSearchParams = {
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
};

/** The role of an economic relationship that exists between 2 agents, such as member, trading partner. */
export type AgentRelationship = {
   __typename?: 'AgentRelationship',
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The object of a relationship between 2 agents.  For example, if Mary is a member of a group, then the group is the object. */
  object: Agent,
  /** A kind of relationship that exists between 2 agents. */
  relationship: AgentRelationshipRole,
  /** The subject of a relationship between 2 agents.  For example, if Mary is a member of a group, then Mary is the subject. */
  subject: Agent,
};

export type AgentRelationshipCreateParams = {
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`Agent`) The object of a relationship between 2 agents.  For example, if Mary
   * is a member of a group, then the group is the object.
 **/
  object: Scalars['ID'],
  /** 
 * (`AgentRelationshipRole`) The role of an economic relationship that exists
   * between 2 agents, such as member, trading partner.
 **/
  relationship: Scalars['ID'],
  /** 
 * (`Agent`) The subject of a relationship between 2 agents.  For example, if
   * Mary is a member of a group, then Mary is the subject.
 **/
  subject: Scalars['ID'],
};

export type AgentRelationshipResponse = {
   __typename?: 'AgentRelationshipResponse',
  agentRelationship: AgentRelationship,
};

/** A relationship role defining the kind of association one agent can have with another. */
export type AgentRelationshipRole = {
   __typename?: 'AgentRelationshipRole',
  id: Scalars['ID'],
  /** The human readable name of the role, from the object to the subject. */
  inverseRoleLabel?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The human readable name of the role, from the subject to the object. */
  roleLabel: Scalars['String'],
};

export type AgentRelationshipRoleCreateParams = {
  /** The human readable name of the role, inverse from the object to the subject. For example, 'has member'. */
  inverseRoleLabel?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The human readable name of the role, inverse from the object to the subject. For example, 'is member of'. */
  roleLabel: Scalars['String'],
};

export type AgentRelationshipRoleResponse = {
   __typename?: 'AgentRelationshipRoleResponse',
  agentRelationshipRole?: Maybe<AgentRelationshipRole>,
};

export type AgentRelationshipRoleUpdateParams = {
  id: Scalars['ID'],
  /** The human readable name of the role, inverse from the object to the subject. For example, 'has member'. */
  inverseRoleLabel?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The human readable name of the role, inverse from the object to the subject. For example, 'is member of'. */
  roleLabel?: Maybe<Scalars['String']>,
};

export type AgentRelationshipUpdateParams = {
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`Agent`) The object of a relationship between 2 agents.  For example, if Mary
   * is a member of a group, then the group is the object.
 **/
  object?: Maybe<Scalars['ID']>,
  /** 
 * (`AgentRelationshipRole`) The role of an economic relationship that exists
   * between 2 agents, such as member, trading partner.
 **/
  relationship?: Maybe<Scalars['ID']>,
  /** 
 * (`Agent`) The subject of a relationship between 2 agents.  For example, if
   * Mary is a member of a group, then Mary is the subject.
 **/
  subject?: Maybe<Scalars['ID']>,
};

/** Query parameters for reading `EconomicResource`s related to an `Agent` */
export type AgentResourceSearchParams = {
  page?: Maybe<Scalars['Int']>,
  resourceClassification?: Maybe<Scalars['URI']>,
  searchString?: Maybe<Scalars['String']>,
};

export type AgentUpdateParams = {
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`SpatialThing`) The main place an agent is located, often an address where
   * activities occur and mail can be sent. This is usually a mappable geographic
   * location.  It also could be a website address, as in the case of agents who
   * have no physical location.
 **/
  primaryLocation?: Maybe<Scalars['ID']>,
};

/** Any type of agreement among economic agents. */
export type Agreement = {
   __typename?: 'Agreement',
  commitments?: Maybe<Array<Commitment>>,
  /** The date and time the agreement was created. */
  created?: Maybe<Scalars['DateTime']>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  involvedAgents?: Maybe<Array<Agent>>,
  /** An informal or formal textual identifier for an agreement. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AgreementCreateParams = {
  /** The date and time the agreement was created. */
  created: Scalars['DateTime'],
  /** An informal or formal textual identifier for an agreement. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AgreementResponse = {
   __typename?: 'AgreementResponse',
  agreement?: Maybe<Agreement>,
};

export type AgreementUpdateParams = {
  /** The date and time the agreement was created. */
  created?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for an agreement. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};


/** 
 * A way to tie an economic event that is given in loose fulfilment for another
 * economic event, without commitments or expectations.
 * Supports the gift economy.
 **/
export type Appreciation = {
   __typename?: 'Appreciation',
  /** The economic event this appreciation has been given in acknowledgement of. */
  appreciationOf: EconomicEvent,
  /** The economic event provided as a gift in this appreciation. */
  appreciationWith: EconomicEvent,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AppreciationCreateParams = {
  /** (`EconomicEvent`) The economic event this appreciation has been given in acknowledgement of. */
  appreciationOf: Scalars['ID'],
  /** (`EconomicEvent`) The economic event provided as a gift in this appreciation. */
  appreciationWith: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AppreciationResponse = {
   __typename?: 'AppreciationResponse',
  appreciation?: Maybe<Appreciation>,
};

export type AppreciationUpdateParams = {
  /** (`EconomicEvent`) The economic event this appreciation has been given in acknowledgement of. */
  appreciationOf?: Maybe<Scalars['ID']>,
  /** (`EconomicEvent`) The economic event provided as a gift in this appreciation. */
  appreciationWith?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  me: Me,
  token: Scalars['String'],
};

/** 
 * A claim for a future economic event(s) in reciprocity for an economic event that
 * already occurred. For example, a claim for payment for goods received.
 **/
export type Claim = {
   __typename?: 'Claim',
  /** Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The data on which the claim was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the claim is expected to be settled. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** 
 * The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The economic agent from whom the claim is initiated. */
  provider: Agent,
  /** The economic agent whom the claim is for. */
  receiver: Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** The economic event which already occurred which this claim has been made against. */
  triggeredBy: EconomicEvent,
};

export type ClaimCreateParams = {
  /** (`Action`) Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The data on which the claim was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the claim is expected to be settled. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Agent`) The economic agent from whom the claim is initiated. */
  provider: Scalars['ID'],
  /** (`Agent`) The economic agent whom the claim is for. */
  receiver: Scalars['ID'],
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which already occurred which this claim has been made against. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

export type ClaimResponse = {
   __typename?: 'ClaimResponse',
  claim?: Maybe<Claim>,
};

export type ClaimUpdateParams = {
  /** (`Action`) Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action?: Maybe<Scalars['ID']>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The data on which the claim was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the claim is expected to be settled. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Agent`) The economic agent from whom the claim is initiated. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the claim is for. */
  receiver?: Maybe<Scalars['ID']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which already occurred which this claim has been made against. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

/** A collection is the home of resources and discussion threads within a community */
export type Collection = {
   __typename?: 'Collection',
  /** A url for the collection, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The community the collection belongs to */
  community?: Maybe<Community>,
  /** When the collection was created */
  createdAt: Scalars['String'],
  /** The user who created the collection */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** Flags users have made about the collection, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Subscriptions users have to the collection */
  followers?: Maybe<FollowsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
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
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Likes users have made of the collection */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the collection, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of this collection, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this collection, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities on the collection, most recent first */
  outbox?: Maybe<ActivitiesPage>,
  /** An instance-unique identifier shared with users and communities */
  preferredUsername: Scalars['String'],
  /** The total number of resources in the collection, including private ones */
  resourceCount?: Maybe<Scalars['Int']>,
  /** The resources in the collection, most recently created last */
  resources?: Maybe<ResourcesPage>,
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * The threads created on the collection, most recently created
   * first. Does not include threads created on resources.
 **/
  threads?: Maybe<ThreadsPage>,
  /** When the collection was last updated */
  updatedAt: Scalars['String'],
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionResourcesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CollectionInput = {
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type CollectionsPage = {
   __typename?: 'CollectionsPage',
  edges: Array<Collection>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CollectionUpdateInput = {
  name: Scalars['String'],
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
  creator?: Maybe<User>,
  /** Flags users have made about the comment, most recently created first */
  flags?: Maybe<FlagsPage>,
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
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Users who like the comment, most recently liked first */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of this comment, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's like of this comment, if any */
  myLike?: Maybe<Like>,
  /** The thread this comment is part of */
  thread?: Maybe<Thread>,
  /** When the comment was last updated */
  updatedAt: Scalars['String'],
};


export type CommentFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommentLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CommentInput = {
  content: Scalars['String'],
};

export type CommentsPage = {
   __typename?: 'CommentsPage',
  edges: Array<Comment>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A planned economic flow that has been promised by an agent to another agent. */
export type Commitment = {
   __typename?: 'Commitment',
  /** Relates a commitment to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** The place where a commitment occurs. Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** This commitment is part of the exchange agreement. */
  clauseOf?: Maybe<Agreement>,
  /** The creation time of the commitment. */
  created?: Maybe<Scalars['DateTime']>,
  /** The commitment can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** 
 * The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: Maybe<Array<Fulfillment>>,
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Plan>,
  /** Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Process>,
  involvedAgents?: Maybe<Array<Agent>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Process>,
  /** The economic agent from whom the commitment is initiated. */
  provider: Agent,
  /** The economic agent whom the commitment is for. */
  receiver: Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** Exact economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<EconomicResource>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>,
};

export type CommitmentCreateParams = {
  /** (`Action`) Relates a commitment to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an commitment occurs.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** (`Agreement`) This commitment is part of the agreement. */
  clauseOf?: Maybe<Scalars['ID']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** (`Plan`) Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Scalars['ID']>,
  /** (`Process`) Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the commitment is initiated. */
  provider: Scalars['ID'],
  /** (`Agent`) The economic agent whom the commitment is for. */
  receiver: Scalars['ID'],
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Exact economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

export type CommitmentResponse = {
   __typename?: 'CommitmentResponse',
  commitment?: Maybe<Commitment>,
};

export type CommitmentUpdateParams = {
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an commitment occurs.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** (`Agreement`) This commitment is part of the agreement. */
  clauseOf?: Maybe<Scalars['ID']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** (`Plan`) Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Scalars['ID']>,
  /** (`Process`) Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the commitment is initiated. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the commitment is for. */
  receiver?: Maybe<Scalars['ID']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Exact economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

export type CommunitiesPage = {
   __typename?: 'CommunitiesPage',
  edges: Array<Community>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type Community = {
   __typename?: 'Community',
  /** A url for the community, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The total number of collections in the community, including private ones */
  collectionCount?: Maybe<Scalars['Int']>,
  /** The communities a user has joined, most recently joined first */
  collections?: Maybe<CollectionsPage>,
  /** When the community was created */
  createdAt: Scalars['String'],
  /** The user who created the community */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** Flags users have made about the community, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Users following the community, most recently followed first */
  followers?: Maybe<FollowsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** A header background image url */
  image?: Maybe<Content>,
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
  /** Total number of likes, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Likes users have given the community */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the community, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this community, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities in the community, most recently created first */
  outbox?: Maybe<ActivitiesPage>,
  /** An instance-unique identifier shared with users and collections */
  preferredUsername: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * Threads started on the community, in most recently updated
   * order. Does not include threads started on collections or
   * resources
 **/
  threads?: Maybe<ThreadsPage>,
  /** When the community was last updated */
  updatedAt: Scalars['String'],
};


export type CommunityCollectionsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CommunityInput = {
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type CommunityUpdateInput = {
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

/** An uploaded file, may contain metadata. */
export type Content = {
   __typename?: 'Content',
  id: Scalars['ID'],
  isPublic: Scalars['Boolean'],
  mediaType: Scalars['String'],
  metadata?: Maybe<FileMetadata>,
  mirror?: Maybe<ContentMirror>,
  upload?: Maybe<ContentUpload>,
  uploader?: Maybe<User>,
  url: Scalars['String'],
};

export type ContentMirror = {
   __typename?: 'ContentMirror',
  url?: Maybe<Scalars['String']>,
};

export type ContentUpload = {
   __typename?: 'ContentUpload',
  path?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
};



/** A thing that can be deleted */
export type DeleteContext = Collection | Comment | Community | Feature | Flag | Follow | Like | Resource | Thread | User;

/** A `Duration` represents an interval between two `DateTime` values. */
export type Duration = {
   __typename?: 'Duration',
  /** A number representing the duration, will be paired with a unit. */
  numericDuration: Scalars['Float'],
  /** A unit of measure. */
  unitType: TimeUnit,
};

/** 
 * An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 **/
export type EconomicEvent = {
   __typename?: 'EconomicEvent',
  /** Relates an economic event to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  appreciatedBy?: Maybe<Array<Appreciation>>,
  appreciationOf?: Maybe<Array<Appreciation>>,
  /** The place where an economic event occurs.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** The economic event can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: Maybe<Array<Fulfillment>>,
  /** The beginning of the economic event. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end of the economic event. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The date/time at which the economic event occurred. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** Defines the process to which this event is an input. */
  inputOf?: Maybe<Process>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Defines the process for which this event is an output. */
  outputOf?: Maybe<Process>,
  /** The economic agent from whom the actual economic event is initiated. */
  provider: Agent,
  /** This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Agreement>,
  /** The economic agent whom the actual economic event is for. */
  receiver: Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** Economic resource involved in the economic event. */
  resourceInventoriedAs?: Maybe<EconomicResource>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<Measure>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>,
  /** 
 * Additional economic resource on the economic event when needed by the
   * receiver. Used when a transfer or move, or sometimes other actions, requires
   * explicitly identifying an economic resource on the receiving side.
 **/
  toResourceInventoriedAs?: Maybe<EconomicResource>,
  trace?: Maybe<Array<ProductionFlowItem>>,
  track?: Maybe<Array<ProductionFlowItem>>,
  /** References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<EconomicEvent>,
};

export type EconomicEventCreateParams = {
  /** (`Action`) Relates an economic event to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an economic event occurs.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** The beginning of the economic event. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end of the economic event. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The date/time at which the economic event occurred. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** (`Process`) Defines the process to which this event is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process for which this event is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the actual economic event is initiated. */
  provider: Scalars['ID'],
  /** (`Agreement`) This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the actual economic event is for. */
  receiver: Scalars['ID'],
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Economic resource involved in the economic event. */
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * (`EconomicResource`) Additional economic resource on the economic event when
   * needed by the receiver. Used when a transfer or move, or sometimes other
   * actions, requires explicitly identifying an economic resource on the receiving side.
 **/
  toResourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** (`EconomicEvent`) References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

export type EconomicEventResponse = {
   __typename?: 'EconomicEventResponse',
  /** Details of the newly created event. */
  economicEvent: EconomicEvent,
  /** Details of any newly created `EconomicResource`, for events that create new resources. */
  economicResource?: Maybe<EconomicResource>,
};

export type EconomicEventUpdateParams = {
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Agreement`) This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Scalars['ID']>,
  /** (`EconomicEvent`) References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

/** A resource which is useful to people or the ecosystem. */
export type EconomicResource = {
   __typename?: 'EconomicResource',
  /** 
 * The current amount and unit of the economic resource for which the agent has
   * primary rights and responsibilities, sometimes thought of as ownership. This
   * can be either stored or derived from economic events affecting the resource.
 **/
  accountingQuantity?: Maybe<Measure>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  conformsTo: ResourceSpecification,
  /** Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<EconomicResource>,
  /** Used when a stock economic resource contains units also defined as economic resources. */
  contains?: Maybe<Array<EconomicResource>>,
  /** 
 * The current place an economic resource is located. Could be at any level of
   * granularity, from a town to an address to a warehouse location. Usually mappable.
 **/
  currentLocation?: Maybe<SpatialThing>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** 
 * Lot or batch of an economic resource, used to track forward or backwards to
   * all occurrences of resources of that lot. Note more than one resource can be
   * of the same lot.
 **/
  lot?: Maybe<ProductBatch>,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * The current amount and unit of the economic resource which is under direct
   * control of the agent.  It may be more or less than the accounting quantity.
   * This can be either stored or derived from economic events affecting the resource.
 **/
  onhandQuantity?: Maybe<Measure>,
  /** 
 * The agent currently with primary rights and responsibilites for the economic
   * resource. It is the agent that is associated with the accountingQuantity of
   * the economic resource.
 **/
  primaryAccountable?: Maybe<Agent>,
  /** 
 * References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
 **/
  stage?: Maybe<ProcessSpecification>,
  /** 
 * The state of the desired economic resource (pass or fail), after coming out of
   * a test or review process. Can be derived from the last event if a pass or fail event.
 **/
  state?: Maybe<Action>,
  trace?: Maybe<Array<EconomicEvent>>,
  track?: Maybe<Array<EconomicEvent>>,
  /** 
 * Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
 **/
  trackingIdentifier?: Maybe<Scalars['String']>,
  /** The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: Maybe<Unit>,
};

/** Input `EconomicResource` type used when sending events to setup initial resource recordings */
export type EconomicResourceCreateParams = {
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  conformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<Scalars['ID']>,
  /** 
 * (`SpatialThing`) The current place an economic resource is located.  Could be
   * at any level of granularity, from a town to an address to a warehouse
   * location.  Usually mappable.
 **/
  currentLocation?: Maybe<Scalars['ID']>,
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** 
 * (`ProductBatch`) Lot or batch of an economic resource, used to track forward
   * or backwards to all occurrences of resources of that lot. Note more than one
   * resource can be of the same lot.
 **/
  lot?: Maybe<Scalars['ID']>,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
 **/
  trackingIdentifier?: Maybe<Scalars['String']>,
};

export type EconomicResourceResponse = {
   __typename?: 'EconomicResourceResponse',
  economicResource: EconomicResource,
};

export type EconomicResourceUpdateParams = {
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** (`EconomicResource`) Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Unit`) The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: Maybe<Scalars['ID']>,
};

export type EventOrCommitment = Commitment | EconomicEvent;

/** A featured piece of content */
export type Feature = {
   __typename?: 'Feature',
  /** A url for the feature, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being featured */
  context?: Maybe<FeatureContext>,
  /** When the feature was created */
  createdAt: Scalars['String'],
  /** The user who featured */
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the feature */
  id: Scalars['String'],
  /** Whether the feature is local to the instance */
  isLocal: Scalars['Boolean'],
};

/** A thing that can be featured */
export type FeatureContext = Collection | Community;

export type FeaturesPage = {
   __typename?: 'FeaturesPage',
  edges: Array<Feature>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

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
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the flag */
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

export type FlagsPage = {
   __typename?: 'FlagsPage',
  edges: Array<Flag>,
  pageInfo: PageInfo,
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
  creator?: Maybe<User>,
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

export type FollowsPage = {
   __typename?: 'FollowsPage',
  edges: Array<Follow>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** 
 * Represents many-to-many relationships between commitments and economic events
 * that fully or partially satisfy one or more commitments.
 **/
export type Fulfillment = {
   __typename?: 'Fulfillment',
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: EconomicEvent,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Commitment,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
};

export type FulfillmentCreateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: Scalars['ID'],
  /** (`Commitment`) The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

export type FulfillmentResponse = {
   __typename?: 'FulfillmentResponse',
  fulfillment?: Maybe<Fulfillment>,
};

export type FulfillmentUpdateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: Maybe<Scalars['ID']>,
  /** (`Commitment`) The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

/** Mutation input structure for defining time durations. */
export type IDuration = {
  /** A number representing the duration, will be paired with a unit. */
  numericDuration: Scalars['Float'],
  /** A unit of measure. */
  unitType: TimeUnit,
};

/** Mutation input structure for defining measurements. Should be nulled if not present, rather than empty. */
export type IMeasure = {
  /** A number representing the quantity, will be paired with a unit. */
  hasNumericalValue: Scalars['Float'],
  /** (`Unit`) A unit of measure. */
  hasUnit?: Maybe<Scalars['ID']>,
};

export type Instance = {
   __typename?: 'Instance',
  description?: Maybe<Scalars['String']>,
  featuredCollections?: Maybe<FeaturesPage>,
  featuredCommunities?: Maybe<FeaturesPage>,
  hostname: Scalars['String'],
  /** A list of public activity on the local instance, most recent first */
  outbox?: Maybe<ActivitiesPage>,
};


export type InstanceOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

/** A planned economic flow which has not been committed to, which can lead to economic events (sometimes through commitments). */
export type Intent = {
   __typename?: 'Intent',
  /** Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The place where an intent would occur. Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<Measure>,
  /** The intent can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** 
 * The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the intent, such as a photo. */
  image?: Maybe<Scalars['URI']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** Defines the process to which this intent is an input. */
  inputOf?: Maybe<Process>,
  /** An informal or formal textual identifier for an intent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Defines the process to which this intent is an output. */
  outputOf?: Maybe<Process>,
  /** The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Agent>,
  publishedIn?: Maybe<Array<ProposedIntent>>,
  /** The economic agent whom the intent is for.  This implies that the intent is a request. */
  receiver?: Maybe<Agent>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** When a specific `EconomicResource` is known which can service the `Intent`, this defines that resource. */
  resourceInventoriedAs?: Maybe<EconomicResource>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<Measure>,
  satisfiedBy?: Maybe<Array<Satisfaction>>,
};

export type IntentCreateParams = {
  /** (`Action`) Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an intent occurs. Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<IMeasure>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  /** The uri to an image relevant to the intent, such as a photo. */
  image?: Maybe<Scalars['URI']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** (`Process`) Defines the process to which this intent is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** An informal or formal textual identifier for an intent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process to which this intent is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the intent is for.  This implies that the intent is a request. */
  receiver?: Maybe<Scalars['ID']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * (`EconomicResource`) When a specific `EconomicResource` is known which can
   * service the `Intent`, this defines that resource.
 **/
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
};

export type IntentResponse = {
   __typename?: 'IntentResponse',
  intent: Intent,
};

export type IntentUpdateParams = {
  /** (`Action`) Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action?: Maybe<Scalars['ID']>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an intent occurs. Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<IMeasure>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the intent, such as a photo. */
  image?: Maybe<Scalars['URI']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** (`Process`) Defines the process to which this intent is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** An informal or formal textual identifier for an intent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process to which this intent is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the intent is for.  This implies that the intent is a request. */
  receiver?: Maybe<Scalars['ID']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * (`EconomicResource`) When a specific `EconomicResource` is known which can
   * service the `Intent`, this defines that resource.
 **/
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
};

export type Language = {
   __typename?: 'Language',
  id?: Maybe<Scalars['String']>,
  languageType?: Maybe<Scalars['String']>,
  mainCountryId?: Maybe<Scalars['String']>,
  mainName?: Maybe<Scalars['String']>,
  nativeName?: Maybe<Scalars['String']>,
  parentLanguageId?: Maybe<Scalars['String']>,
  rtl?: Maybe<Scalars['Boolean']>,
  speakersMil?: Maybe<Scalars['Float']>,
  speakersNative?: Maybe<Scalars['Float']>,
  speakersNativeTotal?: Maybe<Scalars['Float']>,
  subName?: Maybe<Scalars['String']>,
};

export type LanguagesNodes = {
   __typename?: 'LanguagesNodes',
  nodes?: Maybe<Array<Maybe<Language>>>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
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
  creator?: Maybe<User>,
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
export type LikeContext = Collection | Comment | Community | Resource | User;

export type LikesPage = {
   __typename?: 'LikesPage',
  edges: Array<Like>,
  pageInfo: PageInfo,
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

/** 
 * Semantic meaning for measurements: binds a quantity to its measurement unit.
 * See http://www.qudt.org/pages/QUDToverviewPage.html
 **/
export type Measure = {
   __typename?: 'Measure',
  /** A number representing the quantity, will be paired with a unit. */
  hasNumericalValue: Scalars['Float'],
  /** A unit of measure. */
  hasUnit?: Maybe<Unit>,
};

/** A formal or informal group, or legal organization. */
export type Organization = {
   __typename?: 'Organization',
  commitments?: Maybe<Array<Commitment>>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  intents?: Maybe<Array<Intent>>,
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>,
  /** The name that this agent will be referred to by. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  plans?: Maybe<Array<Plan>>,
  /** 
 * The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
 **/
  primaryLocation?: Maybe<SpatialThing>,
  processes?: Maybe<Array<Process>>,
  relationships?: Maybe<Array<AgentRelationship>>,
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>,
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>,
  roles?: Maybe<Array<AgentRelationshipRole>>,
};


/** A formal or informal group, or legal organization. */
export type OrganizationCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};

export type OrganizationResponse = {
   __typename?: 'OrganizationResponse',
  agent: Organization,
};

/** Cursors for pagination */
export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Array<Scalars['Cursor']>>,
  hasNextPage?: Maybe<Scalars['Boolean']>,
  hasPreviousPage?: Maybe<Scalars['Boolean']>,
  startCursor?: Maybe<Array<Scalars['Cursor']>>,
};

/** A natural person. */
export type Person = {
   __typename?: 'Person',
  commitments?: Maybe<Array<Commitment>>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  intents?: Maybe<Array<Intent>>,
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>,
  /** The name that this agent will be referred to by. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  plans?: Maybe<Array<Plan>>,
  /** 
 * The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
 **/
  primaryLocation?: Maybe<SpatialThing>,
  processes?: Maybe<Array<Process>>,
  relationships?: Maybe<Array<AgentRelationship>>,
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>,
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>,
  roles?: Maybe<Array<AgentRelationshipRole>>,
};


/** A natural person. */
export type PersonCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>
};


/** A natural person. */
export type PersonEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>
};


/** A natural person. */
export type PersonIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>
};


/** A natural person. */
export type PersonInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>
};


/** A natural person. */
export type PersonPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>
};


/** A natural person. */
export type PersonProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>
};


/** A natural person. */
export type PersonRelationshipsArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A natural person. */
export type PersonRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A natural person. */
export type PersonRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};

export type PersonResponse = {
   __typename?: 'PersonResponse',
  agent: Person,
};

/** A logical collection of processes that constitute a body of planned work with defined deliverable(s). */
export type Plan = {
   __typename?: 'Plan',
  /** The time the plan was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The plan is able to be deleted or not. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** The time the plan is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  independentDemands?: Maybe<Array<Commitment>>,
  /** An informal or formal textual identifier for a plan. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  processes?: Maybe<Array<Process>>,
  /** This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scenario>,
};


/** A logical collection of processes that constitute a body of planned work with defined deliverable(s). */
export type PlanProcessesArgs = {
  filter?: Maybe<PlanProcessSearchParams>
};

export type PlanCreateParams = {
  /** The time the plan was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the plan is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** An informal or formal textual identifier for a plan. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** Query parameters for reading `Process`es related to a `Plan` */
export type PlanProcessSearchParams = {
  after?: Maybe<Scalars['DateTime']>,
  before?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
};

export type PlanResponse = {
   __typename?: 'PlanResponse',
  plan?: Maybe<Plan>,
};

export type PlanUpdateParams = {
  /** The time the plan was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the plan is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a plan. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type Process = {
   __typename?: 'Process',
  /** The definition or specification for a process. */
  basedOn?: Maybe<ProcessSpecification>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  committedInputs?: Maybe<Array<Commitment>>,
  committedOutputs?: Maybe<Array<Commitment>>,
  /** The process can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** 
 * The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  inputs?: Maybe<Array<EconomicEvent>>,
  intendedInputs?: Maybe<Array<Intent>>,
  intendedOutputs?: Maybe<Array<Intent>>,
  /** An informal or formal textual identifier for a process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** The process with its inputs and outputs is part of the scenario. */
  nestedIn?: Maybe<Scenario>,
  nextProcesses?: Maybe<Array<Process>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  outputs?: Maybe<Array<EconomicEvent>>,
  /** The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Plan>,
  previousProcesses?: Maybe<Array<Process>>,
  trace?: Maybe<Array<EconomicEvent>>,
  track?: Maybe<Array<EconomicEvent>>,
  unplannedEconomicEvents?: Maybe<Array<EconomicEvent>>,
  workingAgents?: Maybe<Array<Agent>>,
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedInputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessInputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedInputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessUnplannedEconomicEventsArgs = {
  action?: Maybe<Scalars['ID']>
};

export type ProcessCreateParams = {
  /** (`ProcessSpecification`) The definition or specification for a process. */
  basedOn?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Plan`) The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Scalars['ID']>,
};

export type ProcessResponse = {
   __typename?: 'ProcessResponse',
  process?: Maybe<Process>,
};

/** Specifies the kind of process. */
export type ProcessSpecification = {
   __typename?: 'ProcessSpecification',
  id: Scalars['ID'],
  /** An informal or formal textual identifier for the process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ProcessSpecificationCreateParams = {
  /** An informal or formal textual identifier for the process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ProcessSpecificationResponse = {
   __typename?: 'ProcessSpecificationResponse',
  processSpecification?: Maybe<ProcessSpecification>,
};

export type ProcessSpecificationUpdateParams = {
  id: Scalars['ID'],
  /** An informal or formal textual identifier for the process. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ProcessUpdateParams = {
  /** (`ProcessSpecification`) The definition or specification for a process. */
  basedOn?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a process. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Plan`) The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Scalars['ID']>,
};

/** 
 * A lot or batch, defining a resource produced at the same time in the same way.
 * From DataFoodConsortium vocabulary https://datafoodconsortium.gitbook.io/dfc-standard-documentation/.
 **/
export type ProductBatch = {
   __typename?: 'ProductBatch',
  /** The standard unique identifier of the batch. */
  batchNumber: Scalars['String'],
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars['DateTime']>,
};

export type ProductBatchCreateParams = {
  /** The standard unique identifier of the batch. */
  batchNumber: Scalars['String'],
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars['DateTime']>,
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars['DateTime']>,
};

export type ProductBatchResponse = {
   __typename?: 'ProductBatchResponse',
  productBatch: ProductBatch,
};

export type ProductBatchUpdateParams = {
  /** The standard unique identifier of the batch. */
  batchNumber?: Maybe<Scalars['String']>,
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars['DateTime']>,
};

export type ProductionFlowItem = EconomicResource | Process;

/** Published requests or offers, sometimes with what is expected in return. */
export type Proposal = {
   __typename?: 'Proposal',
  /** The date and time the proposal was created. */
  created?: Maybe<Scalars['DateTime']>,
  /** Location or area where the proposal is valid. */
  eligibleLocation?: Maybe<SpatialThing>,
  /** The beginning time of proposal publication. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end time of proposal publication. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a proposal. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  publishedTo?: Maybe<Array<ProposedTo>>,
  publishes?: Maybe<Array<ProposedIntent>>,
  /** 
 * This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
 **/
  unitBased?: Maybe<Scalars['Boolean']>,
};

export type ProposalCreateParams = {
  /** The date and time the proposal was created. */
  created?: Maybe<Scalars['DateTime']>,
  /** (`SpatialThing`) The location at which this proposal is eligible. */
  eligibleLocation?: Maybe<Scalars['ID']>,
  /** The beginning time of proposal publication. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end time of proposal publication. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a proposal. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
 **/
  unitBased?: Maybe<Scalars['Boolean']>,
};

export type ProposalResponse = {
   __typename?: 'ProposalResponse',
  proposal?: Maybe<Proposal>,
};

export type ProposalUpdateParams = {
  /** (`SpatialThing`) The location at which this proposal is eligible. */
  eligibleLocation?: Maybe<Scalars['ID']>,
  /** The beginning date/time of proposal publication. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end time of proposal publication. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a proposal. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
 **/
  unitBased?: Maybe<Scalars['Boolean']>,
};

/** 
 * Represents many-to-many relationships between Proposals and Intents, supporting
 * including intents in multiple proposals, as well as a proposal including
 * multiple intents.
 **/
export type ProposedIntent = {
   __typename?: 'ProposedIntent',
  id: Scalars['ID'],
  /** The published proposal which this intent is part of. */
  publishedIn: Proposal,
  /** The intent which is part of this published proposal. */
  publishes: Intent,
  /** This is a reciprocal intent of this proposal, not primary. Not meant to be used for intent matching. */
  reciprocal?: Maybe<Scalars['Boolean']>,
};

export type ProposedIntentResponse = {
   __typename?: 'ProposedIntentResponse',
  proposedIntent?: Maybe<ProposedIntent>,
};

/** An agent to which the proposal is to be published.  A proposal can be published to many agents. */
export type ProposedTo = {
   __typename?: 'ProposedTo',
  id: Scalars['ID'],
  /** The proposal that is published to a specific agent. */
  proposed: Proposal,
  /** The agent to which the proposal is published. */
  proposedTo: Agent,
};

export type ProposedToResponse = {
   __typename?: 'ProposedToResponse',
  proposedTo?: Maybe<ProposedTo>,
};

/** The specification of a resource inflow to, or outflow from, a recipe process. */
export type RecipeFlow = {
   __typename?: 'RecipeFlow',
  /** Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action: Action,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The resource definition referenced by this flow in the recipe. */
  recipeFlowResource?: Maybe<RecipeResource>,
  /** Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<RecipeProcess>,
  /** Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<RecipeProcess>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
};

export type RecipeFlowCreateParams = {
  /** (`Action`) Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action: Scalars['ID'],
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`RecipeResource`) The resource definition referenced by this flow in the recipe. */
  recipeFlowResource: Scalars['ID'],
  /** (`RecipeProcess`) Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<Scalars['ID']>,
  /** (`RecipeProcess`) Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * (`ProcessSpecification`) References the ProcessSpecification of the last
   * process the economic resource went through. Stage is used when the last
   * process is important for finding proper resources, such as where the
   * publishing process wants only documents that have gone through the editing process.
 **/
  stage?: Maybe<Scalars['ID']>,
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: Maybe<Scalars['String']>,
};

export type RecipeFlowResponse = {
   __typename?: 'RecipeFlowResponse',
  recipeFlow?: Maybe<RecipeFlow>,
};

export type RecipeFlowUpdateParams = {
  /** (`Action`) Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`RecipeResource`) The resource definition referenced by this flow in the recipe. */
  recipeFlowResource?: Maybe<Scalars['ID']>,
  /** (`RecipeProcess`) Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<Scalars['ID']>,
  /** (`RecipeProcess`) Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * (`ProcessSpecification`) References the ProcessSpecification of the last
   * process the economic resource went through. Stage is used when the last
   * process is important for finding proper resources, such as where the
   * publishing process wants only documents that have gone through the editing process.
 **/
  stage?: Maybe<Scalars['ID']>,
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: Maybe<Scalars['String']>,
};

/** Specifies a process in a recipe for use in planning from recipe. */
export type RecipeProcess = {
   __typename?: 'RecipeProcess',
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<Duration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a recipe process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** The standard specification or definition of a process. */
  processConformsTo: ProcessSpecification,
};

export type RecipeProcessCreateParams = {
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<IDuration>,
  /** An informal or formal textual identifier for a recipe process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** (`ProcessSpecification`) The standard specification or definition of a process. */
  processConformsTo: Scalars['ID'],
};

export type RecipeProcessResponse = {
   __typename?: 'RecipeProcessResponse',
  recipeProcess?: Maybe<RecipeProcess>,
};

export type RecipeProcessUpdateParams = {
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<IDuration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a recipe process. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** (`ProcessSpecification`) The standard specification or definition of a process. */
  processConformsTo: Scalars['ID'],
};

/** Specifies the resource as part of a recipe, for use in planning from recipe. */
export type RecipeResource = {
   __typename?: 'RecipeResource',
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a recipe resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** 
 * Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
 **/
  substitutable?: Maybe<Scalars['Boolean']>,
  /** The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Unit>,
  /** The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Unit>,
};

export type RecipeResourceCreateParams = {
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a recipe resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
 **/
  substitutable?: Maybe<Scalars['Boolean']>,
  /** (`Unit`) The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Scalars['ID']>,
  /** (`Unit`) The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Scalars['ID']>,
};

export type RecipeResourceResponse = {
   __typename?: 'RecipeResourceResponse',
  recipeResource?: Maybe<RecipeResource>,
};

export type RecipeResourceUpdateParams = {
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a recipe resource. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
 **/
  substitutable?: Maybe<Scalars['Boolean']>,
  /** (`Unit`) The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Scalars['ID']>,
  /** (`Unit`) The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Scalars['ID']>,
};

export type RegistrationInput = {
  email: Scalars['String'],
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
  /** The original author */
  author?: Maybe<Scalars['String']>,
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The collection this resource is a part of */
  collection?: Maybe<Collection>,
  /** A link to an external resource */
  content?: Maybe<Content>,
  /** When the resource was created */
  createdAt: Scalars['String'],
  /** The user who created the resource */
  creator?: Maybe<User>,
  /** Flags users have made about the resource, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
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
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Users who like the resource, most recently liked first */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the resource, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's like of the resource, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** When the resource was last updated */
  updatedAt: Scalars['String'],
};


export type ResourceFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type ResourceLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type ResourceInput = {
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type ResourcesPage = {
   __typename?: 'ResourcesPage',
  edges: Array<Resource>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** 
 * Specification of a kind of resource. Could define a material item, service, digital item, currency account, etc.
 * Used instead of a classification when more information is needed, particularly for recipes.
 **/
export type ResourceSpecification = {
   __typename?: 'ResourceSpecification',
  conformingResources?: Maybe<Array<EconomicResource>>,
  /** [UNSTABLE] The default unit used for quantifying this resource type. */
  defaultUnitOfEffort?: Maybe<Unit>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a type of resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ResourceSpecificationCreateParams = {
  /** (`Unit`) [UNSTABLE] The default unit used for quantifying this resource type. */
  defaultUnitOfEffort?: Maybe<Scalars['ID']>,
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a type of resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ResourceSpecificationResponse = {
   __typename?: 'ResourceSpecificationResponse',
  resourceSpecification?: Maybe<ResourceSpecification>,
};

export type ResourceSpecificationUpdateParams = {
  /** (`Unit`) [UNSTABLE] The default unit used for quantifying this resource type. */
  defaultUnitOfEffort?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a type of resource. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type RootMutationType = {
   __typename?: 'RootMutationType',
  updateAgentRelationship?: Maybe<AgentRelationshipResponse>,
  deleteProposedIntent?: Maybe<Scalars['Boolean']>,
  createProductBatch?: Maybe<ProductBatchResponse>,
  updateClaim?: Maybe<ClaimResponse>,
  deleteProcess?: Maybe<Scalars['Boolean']>,
  updateProcess?: Maybe<ProcessResponse>,
  deletePlan?: Maybe<Scalars['Boolean']>,
  createSettlement?: Maybe<SettlementResponse>,
  /** Registers a new organization (group agent) with the collaboration space */
  createOrganization?: Maybe<OrganizationResponse>,
  /** Reset password */
  resetPassword?: Maybe<AuthPayload>,
  /** Log in */
  createSession?: Maybe<AuthPayload>,
  updateUnit?: Maybe<UnitResponse>,
  createClaim?: Maybe<ClaimResponse>,
  /** Deletes my account! */
  deleteSelf?: Maybe<Scalars['Boolean']>,
  deleteClaim?: Maybe<Scalars['Boolean']>,
  deleteFulfillment?: Maybe<Scalars['Boolean']>,
  deleteSettlement?: Maybe<Scalars['Boolean']>,
  deleteAgreement?: Maybe<Scalars['Boolean']>,
  updateRecipeProcess?: Maybe<RecipeProcessResponse>,
  /** Flag a user, community, collection, resource or comment, returning the flag */
  createFlag?: Maybe<Flag>,
  createCommitment?: Maybe<CommitmentResponse>,
  /** Update organization profile details */
  updateOrganization?: Maybe<OrganizationResponse>,
  deleteProposal?: Maybe<Scalars['Boolean']>,
  createPlan?: Maybe<PlanResponse>,
  deleteSatisfaction?: Maybe<Scalars['Boolean']>,
  /** Create a new thread */
  createThread?: Maybe<Comment>,
  deleteProductBatch?: Maybe<Scalars['Boolean']>,
  deleteAppreciation?: Maybe<Scalars['Boolean']>,
  deleteRecipeFlow?: Maybe<Scalars['Boolean']>,
  /** Copy a resource */
  copyResource?: Maybe<Resource>,
  /** Erase record of a person and thus remove them from the collaboration space */
  deletePerson?: Maybe<Scalars['Boolean']>,
  createAppreciation?: Maybe<AppreciationResponse>,
  createSpatialThing?: Maybe<SpatialThingResponse>,
  createRecipeFlow?: Maybe<RecipeFlowResponse>,
  updateFulfillment?: Maybe<FulfillmentResponse>,
  /** Update a community */
  updateCommunity?: Maybe<Community>,
  updateEconomicResource?: Maybe<EconomicResourceResponse>,
  /** 
 * Send a proposal to another agent.
   * @param proposed the (`Proposal`) to send to an involved agent
   * @param proposedTo the (`Agent`) to include in the proposal
 **/
  proposeTo?: Maybe<ProposedToResponse>,
  createRecipeResource?: Maybe<RecipeResourceResponse>,
  deleteScenario?: Maybe<Scalars['Boolean']>,
  updateScenarioDefinition?: Maybe<ScenarioDefinitionResponse>,
  createResourceSpecification?: Maybe<ResourceSpecificationResponse>,
  updateProposal?: Maybe<ProposalResponse>,
  /** Follow a community, collection or a user by their canonical url returning the follow */
  createFollowByUrl?: Maybe<Follow>,
  createScenario?: Maybe<ScenarioResponse>,
  updateAppreciation?: Maybe<AppreciationResponse>,
  /** Close a flag */
  resolveFlag?: Maybe<Flag>,
  createRecipeProcess?: Maybe<RecipeProcessResponse>,
  updateScenario?: Maybe<ScenarioResponse>,
  deleteScenarioDefinition?: Maybe<Scalars['Boolean']>,
  /** Registers a new (human) person with the collaboration space */
  createPerson?: Maybe<PersonResponse>,
  updateRecipeResource?: Maybe<RecipeResourceResponse>,
  deleteRecipeResource?: Maybe<Scalars['Boolean']>,
  createFulfillment?: Maybe<FulfillmentResponse>,
  deleteIntent?: Maybe<Scalars['Boolean']>,
  /** Update profile details */
  updatePerson?: Maybe<PersonResponse>,
  createProcessSpecification?: Maybe<ProcessSpecificationResponse>,
  /** Update a profile */
  updateProfile?: Maybe<Me>,
  deleteAgentRelationshipRole?: Maybe<Scalars['Boolean']>,
  updateResourceSpecification?: Maybe<ResourceSpecificationResponse>,
  deleteResourceSpecification?: Maybe<Scalars['Boolean']>,
  deleteEconomicEvent?: Maybe<Scalars['Boolean']>,
  /** 
 * Include an existing intent as part of a proposal.
   * @param publishedIn the (`Proposal`) to include the intent in
   * @param publishes the (`Intent`) to include as part of the proposal
 **/
  proposeIntent?: Maybe<ProposedIntentResponse>,
  /** Create a resource */
  createResource?: Maybe<Resource>,
  /** Reply to an existing comment in a thread */
  createReply?: Maybe<Comment>,
  /** Confirm email. Returns a login token. */
  confirmEmail?: Maybe<AuthPayload>,
  /** Reset password request */
  resetPasswordRequest?: Maybe<Scalars['Boolean']>,
  updateAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>,
  updateProcessSpecification?: Maybe<ProcessSpecificationResponse>,
  updateAgreement?: Maybe<AgreementResponse>,
  createSatisfaction?: Maybe<SatisfactionResponse>,
  updateSettlement?: Maybe<SettlementResponse>,
  createEconomicEvent?: Maybe<EconomicEventResponse>,
  deleteAgentRelationship?: Maybe<Scalars['Boolean']>,
  updateSpatialThing?: Maybe<SpatialThingResponse>,
  updateProductBatch?: Maybe<ProductBatchResponse>,
  /** Feature a community, or collection, returning the feature */
  createFeature?: Maybe<Feature>,
  createAgreement?: Maybe<AgreementResponse>,
  updateSatisfaction?: Maybe<SatisfactionResponse>,
  /** Modify a comment */
  updateComment?: Maybe<Comment>,
  createAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>,
  /** Follow a community, collection or thread returning the follow */
  createFollow?: Maybe<Follow>,
  deleteSpatialThing?: Maybe<Scalars['Boolean']>,
  deleteProcessSpecification?: Maybe<Scalars['Boolean']>,
  createIntent?: Maybe<IntentResponse>,
  updateEconomicEvent?: Maybe<EconomicEventResponse>,
  /** Update a resource */
  updateResource?: Maybe<Resource>,
  createProposal?: Maybe<ProposalResponse>,
  deleteUnit?: Maybe<Scalars['Boolean']>,
  deleteProposedTo?: Maybe<Scalars['Boolean']>,
  /** Like a comment, collection, or resource returning the like */
  createLike?: Maybe<Like>,
  deleteCommitment?: Maybe<Scalars['Boolean']>,
  /** Update a collection */
  updateCollection?: Maybe<Collection>,
  /** Create a user */
  createUser?: Maybe<Me>,
  /** Fetch metadata from webpage */
  fetchWebMetadata?: Maybe<WebMetadata>,
  deleteEconomicResource?: Maybe<Scalars['Boolean']>,
  createScenarioDefinition?: Maybe<ScenarioDefinitionResponse>,
  createUnit?: Maybe<UnitResponse>,
  /** Create a collection */
  createCollection?: Maybe<Collection>,
  updateRecipeFlow?: Maybe<RecipeFlowResponse>,
  /** Create a community */
  createCommunity?: Maybe<Community>,
  /** Log out */
  deleteSession?: Maybe<Scalars['Boolean']>,
  /** Delete more or less anything */
  delete?: Maybe<DeleteContext>,
  createAgentRelationship?: Maybe<AgentRelationshipResponse>,
  updateCommitment?: Maybe<CommitmentResponse>,
  deleteRecipeProcess?: Maybe<Scalars['Boolean']>,
  updateIntent?: Maybe<IntentResponse>,
  createProcess?: Maybe<ProcessResponse>,
  updatePlan?: Maybe<PlanResponse>,
  /** Erase record of an organization and thus remove it from the collaboration space */
  deleteOrganization?: Maybe<Scalars['Boolean']>,
};


export type RootMutationTypeUpdateAgentRelationshipArgs = {
  relationship: AgentRelationshipUpdateParams
};


export type RootMutationTypeDeleteProposedIntentArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateProductBatchArgs = {
  productBatch: ProductBatchCreateParams
};


export type RootMutationTypeUpdateClaimArgs = {
  claim: ClaimUpdateParams
};


export type RootMutationTypeDeleteProcessArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateProcessArgs = {
  process: ProcessUpdateParams
};


export type RootMutationTypeDeletePlanArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateSettlementArgs = {
  settlement: SettlementCreateParams
};


export type RootMutationTypeCreateOrganizationArgs = {
  organization: AgentCreateParams
};


export type RootMutationTypeResetPasswordArgs = {
  password: Scalars['String'],
  token: Scalars['String']
};


export type RootMutationTypeCreateSessionArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RootMutationTypeUpdateUnitArgs = {
  unit?: Maybe<UnitUpdateParams>
};


export type RootMutationTypeCreateClaimArgs = {
  claim: ClaimCreateParams
};


export type RootMutationTypeDeleteSelfArgs = {
  iAmSure: Scalars['Boolean']
};


export type RootMutationTypeDeleteClaimArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteFulfillmentArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteSettlementArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteAgreementArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessUpdateParams>
};


export type RootMutationTypeCreateFlagArgs = {
  contextId: Scalars['String'],
  message: Scalars['String']
};


export type RootMutationTypeCreateCommitmentArgs = {
  commitment?: Maybe<CommitmentCreateParams>
};


export type RootMutationTypeUpdateOrganizationArgs = {
  organization: AgentUpdateParams
};


export type RootMutationTypeDeleteProposalArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreatePlanArgs = {
  plan: PlanCreateParams
};


export type RootMutationTypeDeleteSatisfactionArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateThreadArgs = {
  comment: CommentInput,
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteProductBatchArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteAppreciationArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteRecipeFlowArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCopyResourceArgs = {
  collectionId: Scalars['String'],
  resourceId: Scalars['String']
};


export type RootMutationTypeDeletePersonArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateAppreciationArgs = {
  appreciation: AppreciationCreateParams
};


export type RootMutationTypeCreateSpatialThingArgs = {
  spatialThing: SpatialThingCreateParams
};


export type RootMutationTypeCreateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowCreateParams>
};


export type RootMutationTypeUpdateFulfillmentArgs = {
  fulfillment: FulfillmentUpdateParams
};


export type RootMutationTypeUpdateCommunityArgs = {
  community: CommunityUpdateInput,
  communityId: Scalars['String'],
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>
};


export type RootMutationTypeUpdateEconomicResourceArgs = {
  resource: EconomicResourceUpdateParams
};


export type RootMutationTypeProposeToArgs = {
  proposed: Scalars['ID'],
  proposedTo: Scalars['ID']
};


export type RootMutationTypeCreateRecipeResourceArgs = {
  recipeResource?: Maybe<RecipeResourceCreateParams>
};


export type RootMutationTypeDeleteScenarioArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateScenarioDefinitionArgs = {
  plan: ScenarioDefinitionUpdateParams
};


export type RootMutationTypeCreateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationCreateParams>
};


export type RootMutationTypeUpdateProposalArgs = {
  proposal?: Maybe<ProposalUpdateParams>
};


export type RootMutationTypeCreateFollowByUrlArgs = {
  url: Scalars['String']
};


export type RootMutationTypeCreateScenarioArgs = {
  plan: ScenarioCreateParams
};


export type RootMutationTypeUpdateAppreciationArgs = {
  appreciation: AppreciationUpdateParams
};


export type RootMutationTypeResolveFlagArgs = {
  flagId: Scalars['String']
};


export type RootMutationTypeCreateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessCreateParams>
};


export type RootMutationTypeUpdateScenarioArgs = {
  plan: ScenarioUpdateParams
};


export type RootMutationTypeDeleteScenarioDefinitionArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreatePersonArgs = {
  person: AgentCreateParams
};


export type RootMutationTypeUpdateRecipeResourceArgs = {
  recipeResource?: Maybe<RecipeResourceUpdateParams>
};


export type RootMutationTypeDeleteRecipeResourceArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateFulfillmentArgs = {
  fulfillment: FulfillmentCreateParams
};


export type RootMutationTypeDeleteIntentArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdatePersonArgs = {
  person: AgentUpdateParams
};


export type RootMutationTypeCreateProcessSpecificationArgs = {
  processSpecification?: Maybe<ProcessSpecificationCreateParams>
};


export type RootMutationTypeUpdateProfileArgs = {
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>,
  profile: UpdateProfileInput
};


export type RootMutationTypeDeleteAgentRelationshipRoleArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationUpdateParams>
};


export type RootMutationTypeDeleteResourceSpecificationArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteEconomicEventArgs = {
  id: Scalars['String']
};


export type RootMutationTypeProposeIntentArgs = {
  publishedIn: Scalars['ID'],
  publishes: Scalars['ID'],
  reciprocal?: Maybe<Scalars['Boolean']>
};


export type RootMutationTypeCreateResourceArgs = {
  collectionId: Scalars['String'],
  content: UploadInput,
  icon?: Maybe<UploadInput>,
  resource: ResourceInput
};


export type RootMutationTypeCreateReplyArgs = {
  comment: CommentInput,
  inReplyToId: Scalars['String'],
  threadId: Scalars['String']
};


export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String']
};


export type RootMutationTypeResetPasswordRequestArgs = {
  email: Scalars['String']
};


export type RootMutationTypeUpdateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleUpdateParams>
};


export type RootMutationTypeUpdateProcessSpecificationArgs = {
  processSpecification?: Maybe<ProcessSpecificationUpdateParams>
};


export type RootMutationTypeUpdateAgreementArgs = {
  agreement?: Maybe<AgreementUpdateParams>
};


export type RootMutationTypeCreateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionCreateParams>
};


export type RootMutationTypeUpdateSettlementArgs = {
  s0ettlement: SettlementUpdateParams
};


export type RootMutationTypeCreateEconomicEventArgs = {
  event: EconomicEventCreateParams,
  newInventoriedResource?: Maybe<EconomicResourceCreateParams>
};


export type RootMutationTypeDeleteAgentRelationshipArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateSpatialThingArgs = {
  spatialThing: SpatialThingUpdateParams
};


export type RootMutationTypeUpdateProductBatchArgs = {
  productBatch: ProductBatchUpdateParams
};


export type RootMutationTypeCreateFeatureArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateAgreementArgs = {
  agreement?: Maybe<AgreementCreateParams>
};


export type RootMutationTypeUpdateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionUpdateParams>
};


export type RootMutationTypeUpdateCommentArgs = {
  comment: CommentInput,
  commentId: Scalars['String']
};


export type RootMutationTypeCreateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleCreateParams>
};


export type RootMutationTypeCreateFollowArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteSpatialThingArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteProcessSpecificationArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateIntentArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeUpdateEconomicEventArgs = {
  event: EconomicEventUpdateParams
};


export type RootMutationTypeUpdateResourceArgs = {
  content?: Maybe<UploadInput>,
  icon?: Maybe<UploadInput>,
  resource: ResourceInput,
  resourceId: Scalars['String']
};


export type RootMutationTypeCreateProposalArgs = {
  proposal?: Maybe<ProposalCreateParams>
};


export type RootMutationTypeDeleteUnitArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteProposedToArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateLikeArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteCommitmentArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateCollectionArgs = {
  collection: CollectionUpdateInput,
  collectionId: Scalars['String'],
  icon?: Maybe<UploadInput>
};


export type RootMutationTypeCreateUserArgs = {
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>,
  user: RegistrationInput
};


export type RootMutationTypeFetchWebMetadataArgs = {
  url: Scalars['String']
};


export type RootMutationTypeDeleteEconomicResourceArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateScenarioDefinitionArgs = {
  plan: ScenarioDefinitionCreateParams
};


export type RootMutationTypeCreateUnitArgs = {
  unit?: Maybe<UnitCreateParams>
};


export type RootMutationTypeCreateCollectionArgs = {
  collection: CollectionInput,
  communityId: Scalars['String'],
  icon?: Maybe<UploadInput>
};


export type RootMutationTypeUpdateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowUpdateParams>
};


export type RootMutationTypeCreateCommunityArgs = {
  community: CommunityInput,
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>
};


export type RootMutationTypeDeleteArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateAgentRelationshipArgs = {
  relationship: AgentRelationshipCreateParams
};


export type RootMutationTypeUpdateCommitmentArgs = {
  commitment?: Maybe<CommitmentUpdateParams>
};


export type RootMutationTypeDeleteRecipeProcessArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateIntentArgs = {
  intent?: Maybe<IntentUpdateParams>
};


export type RootMutationTypeCreateProcessArgs = {
  process: ProcessCreateParams
};


export type RootMutationTypeUpdatePlanArgs = {
  plan: PlanUpdateParams
};


export type RootMutationTypeDeleteOrganizationArgs = {
  id: Scalars['String']
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  /** Loads all organizations publicly registered within this collaboration space */
  allOrganizations?: Maybe<Array<Organization>>,
  /** Retrieves a follow by id */
  follow?: Maybe<Follow>,
  allProcesses?: Maybe<Array<Process>>,
  allSpatialThings?: Maybe<Array<SpatialThing>>,
  feature?: Maybe<Feature>,
  fulfillment?: Maybe<Fulfillment>,
  allRecipeResources?: Maybe<Array<RecipeResource>>,
  /** Get list of collections, most recent activity first */
  collections: CollectionsPage,
  /** Loads details of the currently authenticated REA agent */
  myAgent?: Maybe<Agent>,
  scenarioDefinition?: Maybe<ScenarioDefinition>,
  proposal?: Maybe<Proposal>,
  recipeProcess?: Maybe<RecipeProcess>,
  /** Retrieve all possible kinds of associations that agents may have with one another in this collaboration space */
  allAgentRelationshipRoles?: Maybe<Array<AgentRelationshipRole>>,
  action?: Maybe<Action>,
  /** Retrieve details of all the relationships between all agents registered in this collaboration space */
  allAgentRelationships?: Maybe<Array<AgentRelationship>>,
  spatialThing?: Maybe<SpatialThing>,
  /** Get a comment by its id */
  comment?: Maybe<Comment>,
  /** Get list of tags we know about */
  tags: TagsNodes,
  filteredEconomicEvents?: Maybe<Array<EconomicEvent>>,
  allActions?: Maybe<Array<Action>>,
  allCommitments?: Maybe<Array<Commitment>>,
  scenario?: Maybe<Scenario>,
  /** Find an organization (group) agent by its ID */
  organization?: Maybe<Organization>,
  tag?: Maybe<Tag>,
  settlement?: Maybe<Settlement>,
  unit?: Maybe<Unit>,
  spatialThings?: Maybe<Array<SpatialThingsPage>>,
  activity?: Maybe<Activity>,
  plan?: Maybe<Plan>,
  allProposals?: Maybe<Array<Proposal>>,
  allEconomicEvents?: Maybe<Array<EconomicEvent>>,
  /** Find an agent (person or organization) by their ID */
  agent?: Maybe<Agent>,
  recipeFlow?: Maybe<RecipeFlow>,
  economicEvent?: Maybe<EconomicEvent>,
  allRecipeProcesses?: Maybe<Array<RecipeProcess>>,
  /** Get a thread */
  thread?: Maybe<Thread>,
  /** Get a user */
  user?: Maybe<User>,
  /** Get my user */
  me?: Maybe<Me>,
  flag?: Maybe<Flag>,
  processSpecification?: Maybe<ProcessSpecification>,
  intent?: Maybe<Intent>,
  /** Find a person by their ID */
  person?: Maybe<Person>,
  allUnits?: Maybe<Array<Unit>>,
  productBatch?: Maybe<ProductBatch>,
  /** Fetch a like by ID */
  like?: Maybe<Like>,
  /** Get list of communities, most followed first */
  communities: CommunitiesPage,
  satisfaction?: Maybe<Satisfaction>,
  /** Retrieve details of an agent relationship role by its ID */
  agentRelationshipRole?: Maybe<AgentRelationshipRole>,
  agreement?: Maybe<Agreement>,
  allClaims?: Maybe<Array<Claim>>,
  /** Get a resource */
  resource?: Maybe<Resource>,
  allPlans?: Maybe<Array<Plan>>,
  allRecipeFlows?: Maybe<Array<RecipeFlow>>,
  allFulfillments?: Maybe<Array<Fulfillment>>,
  /** Check if a user exists with a username */
  usernameAvailable: Scalars['Boolean'],
  /** Loads all agents publicly registered within this collaboration space */
  allAgents?: Maybe<Array<Agent>>,
  allSatisfactions?: Maybe<Array<Satisfaction>>,
  /** Retrieve details of an agent relationship by its ID */
  agentRelationship?: Maybe<AgentRelationship>,
  /** Get list of languages we know about */
  languages: LanguagesNodes,
  allResourceSpecifications?: Maybe<Array<ResourceSpecification>>,
  recipeResource?: Maybe<RecipeResource>,
  /** Loads all people who have publicly registered with this collaboration space. */
  allPeople?: Maybe<Array<Person>>,
  allProductBatches?: Maybe<Array<ProductBatch>>,
  /** Get a community */
  community?: Maybe<Community>,
  commitment?: Maybe<Commitment>,
  economicResource?: Maybe<EconomicResource>,
  claim?: Maybe<Claim>,
  allScenarios?: Maybe<Array<Scenario>>,
  allIntents?: Maybe<Array<Intent>>,
  allSettlements?: Maybe<Array<Settlement>>,
  allScenarioDefinitions?: Maybe<Array<ScenarioDefinition>>,
  resourceSpecification?: Maybe<ResourceSpecification>,
  /** A logical object for the local instance */
  instance?: Maybe<Instance>,
  allProcessSpecifications?: Maybe<Array<ProcessSpecification>>,
  allEconomicResources?: Maybe<Array<EconomicResource>>,
  /** Get a collection by id */
  collection?: Maybe<Collection>,
  process?: Maybe<Process>,
  allAgreements?: Maybe<Array<Agreement>>,
};


export type RootQueryTypeAllOrganizationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFollowArgs = {
  followId: Scalars['String']
};


export type RootQueryTypeAllProcessesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllSpatialThingsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFeatureArgs = {
  featureId: Scalars['String']
};


export type RootQueryTypeFulfillmentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllRecipeResourcesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCollectionsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeScenarioDefinitionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProposalArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeProcessArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllAgentRelationshipRolesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeActionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllAgentRelationshipsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommentArgs = {
  commentId: Scalars['String']
};


export type RootQueryTypeTagsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeFilteredEconomicEventsArgs = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['ID']>,
  receiverId?: Maybe<Scalars['ID']>,
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  startDate?: Maybe<Scalars['String']>
};


export type RootQueryTypeAllCommitmentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenarioArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeOrganizationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTagArgs = {
  tagId: Scalars['String']
};


export type RootQueryTypeSettlementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUnitArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingsArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeActivityArgs = {
  activityId: Scalars['String']
};


export type RootQueryTypePlanArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllProposalsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllEconomicEventsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeFlowArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicEventArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllRecipeProcessesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeThreadArgs = {
  threadId: Scalars['String']
};


export type RootQueryTypeUserArgs = {
  userId: Scalars['String']
};


export type RootQueryTypeFlagArgs = {
  flagId: Scalars['String']
};


export type RootQueryTypeProcessSpecificationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeIntentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypePersonArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllUnitsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProductBatchArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeLikeArgs = {
  likeId: Scalars['String']
};


export type RootQueryTypeCommunitiesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeSatisfactionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentRelationshipRoleArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgreementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllClaimsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceArgs = {
  resourceId: Scalars['String']
};


export type RootQueryTypeAllPlansArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllRecipeFlowsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllFulfillmentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUsernameAvailableArgs = {
  username: Scalars['String']
};


export type RootQueryTypeAllAgentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllSatisfactionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentRelationshipArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeLanguagesArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeAllResourceSpecificationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeResourceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllPeopleArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllProductBatchesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommunityArgs = {
  communityId: Scalars['String']
};


export type RootQueryTypeCommitmentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeClaimArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllScenariosArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllIntentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllSettlementsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllScenarioDefinitionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceSpecificationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllProcessSpecificationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllEconomicResourcesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCollectionArgs = {
  collectionId: Scalars['String']
};


export type RootQueryTypeProcessArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAllAgreementsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};

/** 
 * Represents many-to-many relationships between intents and commitments or events
 * that partially or full satisfy one or more intents.
 **/
export type Satisfaction = {
   __typename?: 'Satisfaction',
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: EventOrCommitment,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Intent,
};

export type SatisfactionCreateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`Commitment`|`EconomicEvent`) A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: Scalars['ID'],
  /** (`Intent`) An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Scalars['ID'],
};

export type SatisfactionResponse = {
   __typename?: 'SatisfactionResponse',
  satisfaction?: Maybe<Satisfaction>,
};

export type SatisfactionUpdateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`Commitment`|`EconomicEvent`) A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy?: Maybe<Scalars['ID']>,
  /** (`Intent`) An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Scalars['ID']>,
};

/** An estimated or analytical logical collection of higher level processes used for budgeting, analysis, plan refinement, etc. */
export type Scenario = {
   __typename?: 'Scenario',
  /** The scenario definition for this scenario, for example yearly budget. */
  definedAs?: Maybe<ScenarioDefinition>,
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a scenario. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scenario>,
};

export type ScenarioCreateParams = {
  /** (`ScenarioDefinition`) The scenario definition for this scenario, for example yearly budget. */
  definedAs: Scalars['ID'],
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a scenario. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** The type definition of one or more scenarios, such as Yearly Budget. */
export type ScenarioDefinition = {
   __typename?: 'ScenarioDefinition',
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<Duration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a scenario definition. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ScenarioDefinitionCreateParams = {
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<IDuration>,
  /** An informal or formal textual identifier for a scenario definition. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ScenarioDefinitionResponse = {
   __typename?: 'ScenarioDefinitionResponse',
  scenarioDefinition?: Maybe<ScenarioDefinition>,
};

export type ScenarioDefinitionUpdateParams = {
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<IDuration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a scenario definition. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ScenarioResponse = {
   __typename?: 'ScenarioResponse',
  scenario?: Maybe<Scenario>,
};

export type ScenarioUpdateParams = {
  /** (`ScenarioDefinition`) The scenario definition for this scenario, for example yearly budget. */
  definedAs: Scalars['ID'],
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['AnyType']>>,
  /** An informal or formal textual identifier for a scenario. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scalars['ID']>,
};

export type ScopeContext = Collection | Community;

/** Represents many-to-many relationships between claim and economic events that fully or partially settle one or more claims. */
export type Settlement = {
   __typename?: 'Settlement',
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** The economic event fully or partially settling a claim. */
  settledBy: EconomicEvent,
  /** A claim which is fully or partially settled by an economic event. */
  settles: Claim,
};

export type SettlementCreateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event fully or partially settling a claim. */
  settledBy: Scalars['ID'],
  /** (`Claim`) A claim which is fully or partially settled by an economic event. */
  settles: Scalars['ID'],
};

export type SettlementResponse = {
   __typename?: 'SettlementResponse',
  settlement?: Maybe<Settlement>,
};

export type SettlementUpdateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event fully or partially settling a claim. */
  settledBy?: Maybe<Scalars['ID']>,
  /** (`Claim`) A claim which is fully or partially settled by an economic event. */
  settles?: Maybe<Scalars['ID']>,
};

/** A physical mappable location. */
export type SpatialThing = {
   __typename?: 'SpatialThing',
  agents?: Maybe<Array<Agent>>,
  /** Altitude. */
  alt?: Maybe<Scalars['Float']>,
  canonicalUrl?: Maybe<Scalars['String']>,
  commitments?: Maybe<Array<Commitment>>,
  displayUsername?: Maybe<Scalars['String']>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  economicResources?: Maybe<Array<EconomicResource>>,
  id: Scalars['ID'],
  inScopeOf?: Maybe<Array<ScopeContext>>,
  intents?: Maybe<Array<Intent>>,
  /** Latitude. */
  lat?: Maybe<Scalars['Float']>,
  /** Longitude. */
  long?: Maybe<Scalars['Float']>,
  /** An address that will be recognized as mappable by mapping software. */
  mappableAddress?: Maybe<Scalars['String']>,
  /** An informal or formal textual identifier for a location. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type SpatialThingCreateParams = {
  /** Altitude. */
  alt?: Maybe<Scalars['Float']>,
  /** Latitude. */
  lat?: Maybe<Scalars['Float']>,
  /** Longitude. */
  long?: Maybe<Scalars['Float']>,
  /** An address that will be recognized as mappable by mapping software. */
  mappableAddress?: Maybe<Scalars['String']>,
  /** An informal or formal textual identifier for a location. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type SpatialThingResponse = {
   __typename?: 'SpatialThingResponse',
  spatialThing?: Maybe<SpatialThing>,
};

export type SpatialThingsPage = {
   __typename?: 'SpatialThingsPage',
  edges?: Maybe<Array<Maybe<SpatialThing>>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type SpatialThingUpdateParams = {
  /** Altitude. */
  alt?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  /** Latitude. */
  lat?: Maybe<Scalars['Float']>,
  /** Longitude. */
  long?: Maybe<Scalars['Float']>,
  /** An address that will be recognized as mappable by mapping software. */
  mappableAddress?: Maybe<Scalars['String']>,
  /** An informal or formal textual identifier for a location. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type Tag = {
   __typename?: 'Tag',
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  label?: Maybe<Scalars['String']>,
  parentTagId?: Maybe<Scalars['Int']>,
};

export type TagsNodes = {
   __typename?: 'TagsNodes',
  nodes?: Maybe<Array<Maybe<Tag>>>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A thread is essentially a list of comments */
export type Thread = {
   __typename?: 'Thread',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Comments in the thread, most recently created first */
  comments?: Maybe<CommentsPage>,
  /** The object the thread is attached to */
  context?: Maybe<ThreadContext>,
  /** When the thread was created */
  createdAt: Scalars['String'],
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Users following the collection, most recently followed first */
  followers?: Maybe<FollowsPage>,
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
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A thread is essentially a list of comments */
export type ThreadFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

/** The thing the comment is about */
export type ThreadContext = Collection | Community | Flag | Resource;

export type ThreadsPage = {
   __typename?: 'ThreadsPage',
  edges: Array<Thread>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** Defines the unit of time measured in a temporal `Duration`. */
export enum TimeUnit {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Month = 'month',
  Second = 'second',
  Week = 'week',
  Year = 'year'
}

/** 
 * Defines a unit of measurement, along with its display symbol.
 * From OM2 vocabulary.
 **/
export type Unit = {
   __typename?: 'Unit',
  id: Scalars['ID'],
  /** A human readable label for the unit, can be language specific. */
  label: Scalars['String'],
  /** A standard display symbol for a unit of measure. */
  symbol: Scalars['String'],
};

export type UnitCreateParams = {
  /** A human readable label for the unit, can be language specific. */
  label: Scalars['String'],
  /** A standard display symbol for a unit of measure. */
  symbol: Scalars['String'],
};

export type UnitResponse = {
   __typename?: 'UnitResponse',
  unit?: Maybe<Unit>,
};

export type UnitUpdateParams = {
  id: Scalars['ID'],
  /** A human readable label for the unit, can be language specific. */
  label?: Maybe<Scalars['String']>,
  /** A standard display symbol for a unit of measure. */
  symbol?: Maybe<Scalars['String']>,
};

export type UpdateProfileInput = {
  location?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  wantsEmailDigest?: Maybe<Scalars['Boolean']>,
  wantsNotifications?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
};


export type UploadInput = {
  upload?: Maybe<Scalars['Upload']>,
  url?: Maybe<Scalars['String']>,
};


/** User profile information */
export type User = {
   __typename?: 'User',
  /** The communities a user is following, most recently followed first */
  communityFollows?: Maybe<FollowsPage>,
  /** When the user last updated their profile */
  updatedAt: Scalars['String'],
  /** Total number of things the user follows, including privately */
  followCount?: Maybe<Scalars['Int']>,
  /** A header background image url */
  image?: Maybe<Content>,
  /** Whether an instance admin has disabled the user's account */
  isDisabled: Scalars['Boolean'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** The current user's flag of this user, if any */
  myFlag?: Maybe<Flag>,
  /** Whether the user has a public profile */
  isPublic: Scalars['Boolean'],
  /** Free text */
  location?: Maybe<Scalars['String']>,
  /** The users a user is following, most recently followed first */
  userFollows?: Maybe<FollowsPage>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** An instance-local UUID identifying the user */
  id: Scalars['ID'],
  /** Total number of likes, including those we can't see */
  likeCount?: Maybe<Scalars['Int']>,
  /** The likes a user has created */
  likes?: Maybe<LikesPage>,
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Whether the user is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Activities of the user, most recently created first */
  outbox?: Maybe<ActivitiesPage>,
  /** A name field */
  name?: Maybe<Scalars['String']>,
  /** When the user signed up */
  createdAt: Scalars['String'],
  /** 
 * Activities of others the user is following, most recently created
   * first. Only available to the current user under `me`
 **/
  inbox?: Maybe<ActivitiesPage>,
  /** The collections a user is following, most recently followed first */
  collectionFollows?: Maybe<FollowsPage>,
  /** The likes a user has from other people */
  likers?: Maybe<LikesPage>,
  /** Subscriptions users have to the collection */
  follows?: Maybe<FollowsPage>,
  /** An instance-unique identifier shared with communities and collections */
  preferredUsername: Scalars['String'],
  /** Total number of followers, including private follows */
  followerCount?: Maybe<Scalars['Int']>,
  /** Comments the user has made, most recently created first */
  comments?: Maybe<CommentsPage>,
  /** The current user's follow of this user, if any */
  myFollow?: Maybe<Follow>,
  /** A valid URL */
  website?: Maybe<Scalars['String']>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** Subscriptions users have to the collection */
  followers?: Maybe<FollowsPage>,
  /** The current user's like of this user, if any */
  myLike?: Maybe<Like>,
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** The last time the user did anything */
  lastActivity?: Maybe<Scalars['String']>,
};


/** User profile information */
export type UserCommunityFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserUserFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserLikesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserInboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserCollectionFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserCommentsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type WebMetadata = {
   __typename?: 'WebMetadata',
  author?: Maybe<Scalars['String']>,
  embedCode?: Maybe<Scalars['String']>,
  embedType?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "EventOrCommitment",
        "possibleTypes": [
          {
            "name": "Commitment"
          },
          {
            "name": "EconomicEvent"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ProductionFlowItem",
        "possibleTypes": [
          {
            "name": "EconomicResource"
          },
          {
            "name": "Process"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ScopeContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FollowContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FlagContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LikeContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ThreadContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Resource"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ActivityContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Like"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FeatureContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Feature"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Like"
          },
          {
            "name": "Resource"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};

      export default result;
    


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RootQueryType: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Organization: ResolverTypeWrapper<Organization>,
  agentCommitmentSearchParams: AgentCommitmentSearchParams,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Commitment: ResolverTypeWrapper<Commitment>,
  Action: ResolverTypeWrapper<Action>,
  URI: ResolverTypeWrapper<Scalars['URI']>,
  SpatialThing: ResolverTypeWrapper<Omit<SpatialThing, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['ScopeContext']>> }>,
  Agent: ResolverTypeWrapper<Agent>,
  agentEventSearchParams: AgentEventSearchParams,
  EconomicEvent: ResolverTypeWrapper<Omit<EconomicEvent, 'trace' | 'track'> & { trace?: Maybe<Array<ResolversTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversTypes['ProductionFlowItem']>> }>,
  Appreciation: ResolverTypeWrapper<Appreciation>,
  Measure: ResolverTypeWrapper<Measure>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Unit: ResolverTypeWrapper<Unit>,
  Fulfillment: ResolverTypeWrapper<Fulfillment>,
  AnyType: ResolverTypeWrapper<Scalars['AnyType']>,
  Process: ResolverTypeWrapper<Process>,
  ProcessSpecification: ResolverTypeWrapper<ProcessSpecification>,
  Intent: ResolverTypeWrapper<Intent>,
  ProposedIntent: ResolverTypeWrapper<ProposedIntent>,
  Proposal: ResolverTypeWrapper<Proposal>,
  ProposedTo: ResolverTypeWrapper<ProposedTo>,
  ResourceSpecification: ResolverTypeWrapper<ResourceSpecification>,
  EconomicResource: ResolverTypeWrapper<EconomicResource>,
  ProductBatch: ResolverTypeWrapper<ProductBatch>,
  Satisfaction: ResolverTypeWrapper<Omit<Satisfaction, 'satisfiedBy'> & { satisfiedBy: ResolversTypes['EventOrCommitment'] }>,
  EventOrCommitment: ResolversTypes['Commitment'] | ResolversTypes['EconomicEvent'],
  Scenario: ResolverTypeWrapper<Scenario>,
  ScenarioDefinition: ResolverTypeWrapper<ScenarioDefinition>,
  Duration: ResolverTypeWrapper<Duration>,
  TimeUnit: TimeUnit,
  Plan: ResolverTypeWrapper<Plan>,
  planProcessSearchParams: PlanProcessSearchParams,
  Agreement: ResolverTypeWrapper<Agreement>,
  ProductionFlowItem: ResolversTypes['EconomicResource'] | ResolversTypes['Process'],
  agentIntentSearchParams: AgentIntentSearchParams,
  agentResourceSearchParams: AgentResourceSearchParams,
  agentPlanSearchParams: AgentPlanSearchParams,
  agentProcessSearchParams: AgentProcessSearchParams,
  AgentRelationship: ResolverTypeWrapper<AgentRelationship>,
  AgentRelationshipRole: ResolverTypeWrapper<AgentRelationshipRole>,
  ScopeContext: ResolversTypes['Collection'] | ResolversTypes['Community'],
  Collection: ResolverTypeWrapper<Collection>,
  Community: ResolverTypeWrapper<Community>,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  CollectionsPage: ResolverTypeWrapper<CollectionsPage>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  User: ResolverTypeWrapper<User>,
  FollowsPage: ResolverTypeWrapper<FollowsPage>,
  Follow: ResolverTypeWrapper<Omit<Follow, 'context'> & { context: ResolversTypes['FollowContext'] }>,
  FollowContext: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Thread'] | ResolversTypes['User'],
  Thread: ResolverTypeWrapper<Omit<Thread, 'context'> & { context?: Maybe<ResolversTypes['ThreadContext']> }>,
  CommentsPage: ResolverTypeWrapper<CommentsPage>,
  Comment: ResolverTypeWrapper<Comment>,
  FlagsPage: ResolverTypeWrapper<FlagsPage>,
  Flag: ResolverTypeWrapper<Omit<Flag, 'context'> & { context: ResolversTypes['FlagContext'] }>,
  FlagContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Resource'] | ResolversTypes['User'],
  Resource: ResolverTypeWrapper<Resource>,
  Content: ResolverTypeWrapper<Content>,
  FileMetadata: ResolverTypeWrapper<FileMetadata>,
  FileIntrinsics: ResolverTypeWrapper<FileIntrinsics>,
  ContentMirror: ResolverTypeWrapper<ContentMirror>,
  ContentUpload: ResolverTypeWrapper<ContentUpload>,
  LikesPage: ResolverTypeWrapper<LikesPage>,
  Like: ResolverTypeWrapper<Omit<Like, 'context'> & { context: ResolversTypes['LikeContext'] }>,
  LikeContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Resource'] | ResolversTypes['User'],
  ThreadContext: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Flag'] | ResolversTypes['Resource'],
  ActivitiesPage: ResolverTypeWrapper<ActivitiesPage>,
  Activity: ResolverTypeWrapper<Omit<Activity, 'context'> & { context?: Maybe<ResolversTypes['ActivityContext']> }>,
  ActivityContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Flag'] | ResolversTypes['Follow'] | ResolversTypes['Like'] | ResolversTypes['Resource'] | ResolversTypes['User'],
  ActivityVerb: ActivityVerb,
  ThreadsPage: ResolverTypeWrapper<ThreadsPage>,
  ResourcesPage: ResolverTypeWrapper<ResourcesPage>,
  Feature: ResolverTypeWrapper<Omit<Feature, 'context'> & { context?: Maybe<ResolversTypes['FeatureContext']> }>,
  FeatureContext: ResolversTypes['Collection'] | ResolversTypes['Community'],
  RecipeResource: ResolverTypeWrapper<RecipeResource>,
  RecipeProcess: ResolverTypeWrapper<RecipeProcess>,
  TagsNodes: ResolverTypeWrapper<TagsNodes>,
  Tag: ResolverTypeWrapper<Tag>,
  Settlement: ResolverTypeWrapper<Settlement>,
  Claim: ResolverTypeWrapper<Claim>,
  SpatialThingsPage: ResolverTypeWrapper<SpatialThingsPage>,
  RecipeFlow: ResolverTypeWrapper<RecipeFlow>,
  Me: ResolverTypeWrapper<Me>,
  Person: ResolverTypeWrapper<Person>,
  CommunitiesPage: ResolverTypeWrapper<CommunitiesPage>,
  LanguagesNodes: ResolverTypeWrapper<LanguagesNodes>,
  Language: ResolverTypeWrapper<Language>,
  Instance: ResolverTypeWrapper<Instance>,
  FeaturesPage: ResolverTypeWrapper<FeaturesPage>,
  RootMutationType: ResolverTypeWrapper<{}>,
  AgentRelationshipUpdateParams: AgentRelationshipUpdateParams,
  AgentRelationshipResponse: ResolverTypeWrapper<AgentRelationshipResponse>,
  ProductBatchCreateParams: ProductBatchCreateParams,
  ProductBatchResponse: ResolverTypeWrapper<ProductBatchResponse>,
  ClaimUpdateParams: ClaimUpdateParams,
  IMeasure: IMeasure,
  ClaimResponse: ResolverTypeWrapper<ClaimResponse>,
  ProcessUpdateParams: ProcessUpdateParams,
  ProcessResponse: ResolverTypeWrapper<ProcessResponse>,
  SettlementCreateParams: SettlementCreateParams,
  SettlementResponse: ResolverTypeWrapper<SettlementResponse>,
  AgentCreateParams: AgentCreateParams,
  OrganizationResponse: ResolverTypeWrapper<OrganizationResponse>,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  UnitUpdateParams: UnitUpdateParams,
  UnitResponse: ResolverTypeWrapper<UnitResponse>,
  ClaimCreateParams: ClaimCreateParams,
  RecipeProcessUpdateParams: RecipeProcessUpdateParams,
  IDuration: IDuration,
  RecipeProcessResponse: ResolverTypeWrapper<RecipeProcessResponse>,
  CommitmentCreateParams: CommitmentCreateParams,
  CommitmentResponse: ResolverTypeWrapper<CommitmentResponse>,
  AgentUpdateParams: AgentUpdateParams,
  PlanCreateParams: PlanCreateParams,
  PlanResponse: ResolverTypeWrapper<PlanResponse>,
  CommentInput: CommentInput,
  AppreciationCreateParams: AppreciationCreateParams,
  AppreciationResponse: ResolverTypeWrapper<AppreciationResponse>,
  SpatialThingCreateParams: SpatialThingCreateParams,
  SpatialThingResponse: ResolverTypeWrapper<SpatialThingResponse>,
  RecipeFlowCreateParams: RecipeFlowCreateParams,
  RecipeFlowResponse: ResolverTypeWrapper<RecipeFlowResponse>,
  FulfillmentUpdateParams: FulfillmentUpdateParams,
  FulfillmentResponse: ResolverTypeWrapper<FulfillmentResponse>,
  CommunityUpdateInput: CommunityUpdateInput,
  UploadInput: UploadInput,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  EconomicResourceUpdateParams: EconomicResourceUpdateParams,
  EconomicResourceResponse: ResolverTypeWrapper<EconomicResourceResponse>,
  ProposedToResponse: ResolverTypeWrapper<ProposedToResponse>,
  RecipeResourceCreateParams: RecipeResourceCreateParams,
  RecipeResourceResponse: ResolverTypeWrapper<RecipeResourceResponse>,
  ScenarioDefinitionUpdateParams: ScenarioDefinitionUpdateParams,
  ScenarioDefinitionResponse: ResolverTypeWrapper<ScenarioDefinitionResponse>,
  ResourceSpecificationCreateParams: ResourceSpecificationCreateParams,
  ResourceSpecificationResponse: ResolverTypeWrapper<ResourceSpecificationResponse>,
  ProposalUpdateParams: ProposalUpdateParams,
  ProposalResponse: ResolverTypeWrapper<ProposalResponse>,
  ScenarioCreateParams: ScenarioCreateParams,
  ScenarioResponse: ResolverTypeWrapper<ScenarioResponse>,
  AppreciationUpdateParams: AppreciationUpdateParams,
  RecipeProcessCreateParams: RecipeProcessCreateParams,
  ScenarioUpdateParams: ScenarioUpdateParams,
  PersonResponse: ResolverTypeWrapper<PersonResponse>,
  RecipeResourceUpdateParams: RecipeResourceUpdateParams,
  FulfillmentCreateParams: FulfillmentCreateParams,
  ProcessSpecificationCreateParams: ProcessSpecificationCreateParams,
  ProcessSpecificationResponse: ResolverTypeWrapper<ProcessSpecificationResponse>,
  UpdateProfileInput: UpdateProfileInput,
  ResourceSpecificationUpdateParams: ResourceSpecificationUpdateParams,
  ProposedIntentResponse: ResolverTypeWrapper<ProposedIntentResponse>,
  ResourceInput: ResourceInput,
  AgentRelationshipRoleUpdateParams: AgentRelationshipRoleUpdateParams,
  AgentRelationshipRoleResponse: ResolverTypeWrapper<AgentRelationshipRoleResponse>,
  ProcessSpecificationUpdateParams: ProcessSpecificationUpdateParams,
  AgreementUpdateParams: AgreementUpdateParams,
  AgreementResponse: ResolverTypeWrapper<AgreementResponse>,
  SatisfactionCreateParams: SatisfactionCreateParams,
  SatisfactionResponse: ResolverTypeWrapper<SatisfactionResponse>,
  SettlementUpdateParams: SettlementUpdateParams,
  EconomicEventCreateParams: EconomicEventCreateParams,
  EconomicResourceCreateParams: EconomicResourceCreateParams,
  EconomicEventResponse: ResolverTypeWrapper<EconomicEventResponse>,
  SpatialThingUpdateParams: SpatialThingUpdateParams,
  ProductBatchUpdateParams: ProductBatchUpdateParams,
  AgreementCreateParams: AgreementCreateParams,
  SatisfactionUpdateParams: SatisfactionUpdateParams,
  AgentRelationshipRoleCreateParams: AgentRelationshipRoleCreateParams,
  IntentCreateParams: IntentCreateParams,
  IntentResponse: ResolverTypeWrapper<IntentResponse>,
  EconomicEventUpdateParams: EconomicEventUpdateParams,
  ProposalCreateParams: ProposalCreateParams,
  CollectionUpdateInput: CollectionUpdateInput,
  RegistrationInput: RegistrationInput,
  WebMetadata: ResolverTypeWrapper<WebMetadata>,
  ScenarioDefinitionCreateParams: ScenarioDefinitionCreateParams,
  UnitCreateParams: UnitCreateParams,
  CollectionInput: CollectionInput,
  RecipeFlowUpdateParams: RecipeFlowUpdateParams,
  CommunityInput: CommunityInput,
  DeleteContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Feature'] | ResolversTypes['Flag'] | ResolversTypes['Follow'] | ResolversTypes['Like'] | ResolversTypes['Resource'] | ResolversTypes['Thread'] | ResolversTypes['User'],
  AgentRelationshipCreateParams: AgentRelationshipCreateParams,
  CommitmentUpdateParams: CommitmentUpdateParams,
  IntentUpdateParams: IntentUpdateParams,
  ProcessCreateParams: ProcessCreateParams,
  PlanUpdateParams: PlanUpdateParams,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  Int: Scalars['Int'],
  ID: Scalars['ID'],
  Organization: Organization,
  agentCommitmentSearchParams: AgentCommitmentSearchParams,
  DateTime: Scalars['DateTime'],
  Boolean: Scalars['Boolean'],
  String: Scalars['String'],
  Commitment: Commitment,
  Action: Action,
  URI: Scalars['URI'],
  SpatialThing: Omit<SpatialThing, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['ScopeContext']>> },
  Agent: Agent,
  agentEventSearchParams: AgentEventSearchParams,
  EconomicEvent: Omit<EconomicEvent, 'trace' | 'track'> & { trace?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>> },
  Appreciation: Appreciation,
  Measure: Measure,
  Float: Scalars['Float'],
  Unit: Unit,
  Fulfillment: Fulfillment,
  AnyType: Scalars['AnyType'],
  Process: Process,
  ProcessSpecification: ProcessSpecification,
  Intent: Intent,
  ProposedIntent: ProposedIntent,
  Proposal: Proposal,
  ProposedTo: ProposedTo,
  ResourceSpecification: ResourceSpecification,
  EconomicResource: EconomicResource,
  ProductBatch: ProductBatch,
  Satisfaction: Omit<Satisfaction, 'satisfiedBy'> & { satisfiedBy: ResolversParentTypes['EventOrCommitment'] },
  EventOrCommitment: ResolversParentTypes['Commitment'] | ResolversParentTypes['EconomicEvent'],
  Scenario: Scenario,
  ScenarioDefinition: ScenarioDefinition,
  Duration: Duration,
  TimeUnit: TimeUnit,
  Plan: Plan,
  planProcessSearchParams: PlanProcessSearchParams,
  Agreement: Agreement,
  ProductionFlowItem: ResolversParentTypes['EconomicResource'] | ResolversParentTypes['Process'],
  agentIntentSearchParams: AgentIntentSearchParams,
  agentResourceSearchParams: AgentResourceSearchParams,
  agentPlanSearchParams: AgentPlanSearchParams,
  agentProcessSearchParams: AgentProcessSearchParams,
  AgentRelationship: AgentRelationship,
  AgentRelationshipRole: AgentRelationshipRole,
  ScopeContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'],
  Collection: Collection,
  Community: Community,
  Cursor: Scalars['Cursor'],
  CollectionsPage: CollectionsPage,
  PageInfo: PageInfo,
  User: User,
  FollowsPage: FollowsPage,
  Follow: Omit<Follow, 'context'> & { context: ResolversParentTypes['FollowContext'] },
  FollowContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Thread'] | ResolversParentTypes['User'],
  Thread: Omit<Thread, 'context'> & { context?: Maybe<ResolversParentTypes['ThreadContext']> },
  CommentsPage: CommentsPage,
  Comment: Comment,
  FlagsPage: FlagsPage,
  Flag: Omit<Flag, 'context'> & { context: ResolversParentTypes['FlagContext'] },
  FlagContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Resource'] | ResolversParentTypes['User'],
  Resource: Resource,
  Content: Content,
  FileMetadata: FileMetadata,
  FileIntrinsics: FileIntrinsics,
  ContentMirror: ContentMirror,
  ContentUpload: ContentUpload,
  LikesPage: LikesPage,
  Like: Omit<Like, 'context'> & { context: ResolversParentTypes['LikeContext'] },
  LikeContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Resource'] | ResolversParentTypes['User'],
  ThreadContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Resource'],
  ActivitiesPage: ActivitiesPage,
  Activity: Omit<Activity, 'context'> & { context?: Maybe<ResolversParentTypes['ActivityContext']> },
  ActivityContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Follow'] | ResolversParentTypes['Like'] | ResolversParentTypes['Resource'] | ResolversParentTypes['User'],
  ActivityVerb: ActivityVerb,
  ThreadsPage: ThreadsPage,
  ResourcesPage: ResourcesPage,
  Feature: Omit<Feature, 'context'> & { context?: Maybe<ResolversParentTypes['FeatureContext']> },
  FeatureContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'],
  RecipeResource: RecipeResource,
  RecipeProcess: RecipeProcess,
  TagsNodes: TagsNodes,
  Tag: Tag,
  Settlement: Settlement,
  Claim: Claim,
  SpatialThingsPage: SpatialThingsPage,
  RecipeFlow: RecipeFlow,
  Me: Me,
  Person: Person,
  CommunitiesPage: CommunitiesPage,
  LanguagesNodes: LanguagesNodes,
  Language: Language,
  Instance: Instance,
  FeaturesPage: FeaturesPage,
  RootMutationType: {},
  AgentRelationshipUpdateParams: AgentRelationshipUpdateParams,
  AgentRelationshipResponse: AgentRelationshipResponse,
  ProductBatchCreateParams: ProductBatchCreateParams,
  ProductBatchResponse: ProductBatchResponse,
  ClaimUpdateParams: ClaimUpdateParams,
  IMeasure: IMeasure,
  ClaimResponse: ClaimResponse,
  ProcessUpdateParams: ProcessUpdateParams,
  ProcessResponse: ProcessResponse,
  SettlementCreateParams: SettlementCreateParams,
  SettlementResponse: SettlementResponse,
  AgentCreateParams: AgentCreateParams,
  OrganizationResponse: OrganizationResponse,
  AuthPayload: AuthPayload,
  UnitUpdateParams: UnitUpdateParams,
  UnitResponse: UnitResponse,
  ClaimCreateParams: ClaimCreateParams,
  RecipeProcessUpdateParams: RecipeProcessUpdateParams,
  IDuration: IDuration,
  RecipeProcessResponse: RecipeProcessResponse,
  CommitmentCreateParams: CommitmentCreateParams,
  CommitmentResponse: CommitmentResponse,
  AgentUpdateParams: AgentUpdateParams,
  PlanCreateParams: PlanCreateParams,
  PlanResponse: PlanResponse,
  CommentInput: CommentInput,
  AppreciationCreateParams: AppreciationCreateParams,
  AppreciationResponse: AppreciationResponse,
  SpatialThingCreateParams: SpatialThingCreateParams,
  SpatialThingResponse: SpatialThingResponse,
  RecipeFlowCreateParams: RecipeFlowCreateParams,
  RecipeFlowResponse: RecipeFlowResponse,
  FulfillmentUpdateParams: FulfillmentUpdateParams,
  FulfillmentResponse: FulfillmentResponse,
  CommunityUpdateInput: CommunityUpdateInput,
  UploadInput: UploadInput,
  Upload: Scalars['Upload'],
  EconomicResourceUpdateParams: EconomicResourceUpdateParams,
  EconomicResourceResponse: EconomicResourceResponse,
  ProposedToResponse: ProposedToResponse,
  RecipeResourceCreateParams: RecipeResourceCreateParams,
  RecipeResourceResponse: RecipeResourceResponse,
  ScenarioDefinitionUpdateParams: ScenarioDefinitionUpdateParams,
  ScenarioDefinitionResponse: ScenarioDefinitionResponse,
  ResourceSpecificationCreateParams: ResourceSpecificationCreateParams,
  ResourceSpecificationResponse: ResourceSpecificationResponse,
  ProposalUpdateParams: ProposalUpdateParams,
  ProposalResponse: ProposalResponse,
  ScenarioCreateParams: ScenarioCreateParams,
  ScenarioResponse: ScenarioResponse,
  AppreciationUpdateParams: AppreciationUpdateParams,
  RecipeProcessCreateParams: RecipeProcessCreateParams,
  ScenarioUpdateParams: ScenarioUpdateParams,
  PersonResponse: PersonResponse,
  RecipeResourceUpdateParams: RecipeResourceUpdateParams,
  FulfillmentCreateParams: FulfillmentCreateParams,
  ProcessSpecificationCreateParams: ProcessSpecificationCreateParams,
  ProcessSpecificationResponse: ProcessSpecificationResponse,
  UpdateProfileInput: UpdateProfileInput,
  ResourceSpecificationUpdateParams: ResourceSpecificationUpdateParams,
  ProposedIntentResponse: ProposedIntentResponse,
  ResourceInput: ResourceInput,
  AgentRelationshipRoleUpdateParams: AgentRelationshipRoleUpdateParams,
  AgentRelationshipRoleResponse: AgentRelationshipRoleResponse,
  ProcessSpecificationUpdateParams: ProcessSpecificationUpdateParams,
  AgreementUpdateParams: AgreementUpdateParams,
  AgreementResponse: AgreementResponse,
  SatisfactionCreateParams: SatisfactionCreateParams,
  SatisfactionResponse: SatisfactionResponse,
  SettlementUpdateParams: SettlementUpdateParams,
  EconomicEventCreateParams: EconomicEventCreateParams,
  EconomicResourceCreateParams: EconomicResourceCreateParams,
  EconomicEventResponse: EconomicEventResponse,
  SpatialThingUpdateParams: SpatialThingUpdateParams,
  ProductBatchUpdateParams: ProductBatchUpdateParams,
  AgreementCreateParams: AgreementCreateParams,
  SatisfactionUpdateParams: SatisfactionUpdateParams,
  AgentRelationshipRoleCreateParams: AgentRelationshipRoleCreateParams,
  IntentCreateParams: IntentCreateParams,
  IntentResponse: IntentResponse,
  EconomicEventUpdateParams: EconomicEventUpdateParams,
  ProposalCreateParams: ProposalCreateParams,
  CollectionUpdateInput: CollectionUpdateInput,
  RegistrationInput: RegistrationInput,
  WebMetadata: WebMetadata,
  ScenarioDefinitionCreateParams: ScenarioDefinitionCreateParams,
  UnitCreateParams: UnitCreateParams,
  CollectionInput: CollectionInput,
  RecipeFlowUpdateParams: RecipeFlowUpdateParams,
  CommunityInput: CommunityInput,
  DeleteContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Feature'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Follow'] | ResolversParentTypes['Like'] | ResolversParentTypes['Resource'] | ResolversParentTypes['Thread'] | ResolversParentTypes['User'],
  AgentRelationshipCreateParams: AgentRelationshipCreateParams,
  CommitmentUpdateParams: CommitmentUpdateParams,
  IntentUpdateParams: IntentUpdateParams,
  ProcessCreateParams: ProcessCreateParams,
  PlanUpdateParams: PlanUpdateParams,
};

export type ActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inputOutput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pairsWith?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceEffect?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ActivitiesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivitiesPage'] = ResolversParentTypes['ActivitiesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['ActivityContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  verb?: Resolver<ResolversTypes['ActivityVerb'], ParentType, ContextType>,
};

export type ActivityContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityContext'] = ResolversParentTypes['ActivityContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Flag' | 'Follow' | 'Like' | 'Resource' | 'User', ParentType, ContextType>
};

export type AgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, AgentCommitmentsArgs>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, AgentEconomicEventsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, AgentIntentsArgs>,
  inventoriedEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, AgentInventoriedEconomicResourcesArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, AgentPlansArgs>,
  primaryLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, AgentProcessesArgs>,
  relationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, AgentRelationshipsArgs>,
  relationshipsAsObject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, AgentRelationshipsAsObjectArgs>,
  relationshipsAsSubject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, AgentRelationshipsAsSubjectArgs>,
  roles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType>,
};

export type AgentRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationship'] = ResolversParentTypes['AgentRelationship']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  object?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  relationship?: Resolver<ResolversTypes['AgentRelationshipRole'], ParentType, ContextType>,
  subject?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
};

export type AgentRelationshipResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationshipResponse'] = ResolversParentTypes['AgentRelationshipResponse']> = {
  agentRelationship?: Resolver<ResolversTypes['AgentRelationship'], ParentType, ContextType>,
};

export type AgentRelationshipRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationshipRole'] = ResolversParentTypes['AgentRelationshipRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inverseRoleLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  roleLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type AgentRelationshipRoleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationshipRoleResponse'] = ResolversParentTypes['AgentRelationshipRoleResponse']> = {
  agentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRole']>, ParentType, ContextType>,
};

export type AgreementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agreement'] = ResolversParentTypes['Agreement']> = {
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  involvedAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AgreementResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgreementResponse'] = ResolversParentTypes['AgreementResponse']> = {
  agreement?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType>,
};

export interface AnyTypeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AnyType'], any> {
  name: 'AnyType'
}

export type AppreciationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Appreciation'] = ResolversParentTypes['Appreciation']> = {
  appreciationOf?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  appreciationWith?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AppreciationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppreciationResponse'] = ResolversParentTypes['AppreciationResponse']> = {
  appreciation?: Resolver<Maybe<ResolversTypes['Appreciation']>, ParentType, ContextType>,
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>,
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ClaimResolvers<ContextType = any, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  receiver?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  triggeredBy?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
};

export type ClaimResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimResponse'] = ResolversParentTypes['ClaimResponse']> = {
  claim?: Resolver<Maybe<ResolversTypes['Claim']>, ParentType, ContextType>,
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, CollectionFlagsArgs>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, CollectionFollowersArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, CollectionLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, CollectionOutboxArgs>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  resourceCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  resources?: Resolver<Maybe<ResolversTypes['ResourcesPage']>, ParentType, ContextType, CollectionResourcesArgs>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  threads?: Resolver<Maybe<ResolversTypes['ThreadsPage']>, ParentType, ContextType, CollectionThreadsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CollectionsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsPage'] = ResolversParentTypes['CollectionsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, CommentFlagsArgs>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  inReplyTo?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>,
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, CommentLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CommentsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentsPage'] = ResolversParentTypes['CommentsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommitmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Commitment'] = ResolversParentTypes['Commitment']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  clauseOf?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  fulfilledBy?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasPointInTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  independentDemandOf?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>,
  inputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  involvedAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  receiver?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfies?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType>,
};

export type CommitmentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitmentResponse'] = ResolversParentTypes['CommitmentResponse']> = {
  commitment?: Resolver<Maybe<ResolversTypes['Commitment']>, ParentType, ContextType>,
};

export type CommunitiesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunitiesPage'] = ResolversParentTypes['CommunitiesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  collectionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  collections?: Resolver<Maybe<ResolversTypes['CollectionsPage']>, ParentType, ContextType, CommunityCollectionsArgs>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, CommunityFlagsArgs>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, CommunityFollowersArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, CommunityLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, CommunityOutboxArgs>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  threads?: Resolver<Maybe<ResolversTypes['ThreadsPage']>, ParentType, ContextType, CommunityThreadsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  mediaType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  metadata?: Resolver<Maybe<ResolversTypes['FileMetadata']>, ParentType, ContextType>,
  mirror?: Resolver<Maybe<ResolversTypes['ContentMirror']>, ParentType, ContextType>,
  upload?: Resolver<Maybe<ResolversTypes['ContentUpload']>, ParentType, ContextType>,
  uploader?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ContentMirrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentMirror'] = ResolversParentTypes['ContentMirror']> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ContentUploadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentUpload'] = ResolversParentTypes['ContentUpload']> = {
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DeleteContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteContext'] = ResolversParentTypes['DeleteContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Feature' | 'Flag' | 'Follow' | 'Like' | 'Resource' | 'Thread' | 'User', ParentType, ContextType>
};

export type DurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Duration'] = ResolversParentTypes['Duration']> = {
  numericDuration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  unitType?: Resolver<ResolversTypes['TimeUnit'], ParentType, ContextType>,
};

export type EconomicEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicEvent'] = ResolversParentTypes['EconomicEvent']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  appreciatedBy?: Resolver<Maybe<Array<ResolversTypes['Appreciation']>>, ParentType, ContextType>,
  appreciationOf?: Resolver<Maybe<Array<ResolversTypes['Appreciation']>>, ParentType, ContextType>,
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  fulfills?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasPointInTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  inputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  realizationOf?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType>,
  receiver?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfies?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType>,
  toResourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType>,
  track?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType>,
  triggeredBy?: Resolver<Maybe<ResolversTypes['EconomicEvent']>, ParentType, ContextType>,
};

export type EconomicEventResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicEventResponse'] = ResolversParentTypes['EconomicEventResponse']> = {
  economicEvent?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  economicResource?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
};

export type EconomicResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicResource'] = ResolversParentTypes['EconomicResource']> = {
  accountingQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  classifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  conformsTo?: Resolver<ResolversTypes['ResourceSpecification'], ParentType, ContextType>,
  containedIn?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  contains?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType>,
  currentLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  lot?: Resolver<Maybe<ResolversTypes['ProductBatch']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  onhandQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  primaryAccountable?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
  state?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  track?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  trackingIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  unitOfEffort?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export type EconomicResourceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicResourceResponse'] = ResolversParentTypes['EconomicResourceResponse']> = {
  economicResource?: Resolver<ResolversTypes['EconomicResource'], ParentType, ContextType>,
};

export type EventOrCommitmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventOrCommitment'] = ResolversParentTypes['EventOrCommitment']> = {
  __resolveType: TypeResolveFn<'Commitment' | 'EconomicEvent', ParentType, ContextType>
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['FeatureContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type FeatureContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeatureContext'] = ResolversParentTypes['FeatureContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community', ParentType, ContextType>
};

export type FeaturesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeaturesPage'] = ResolversParentTypes['FeaturesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FileIntrinsicsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileIntrinsics'] = ResolversParentTypes['FileIntrinsics']> = {
  bitsPerPixel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  bitsPerSample?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  blockAlign?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  byteRate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  colorPlanes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  numColorPalette?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  numFrames?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type FileMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileMetadata'] = ResolversParentTypes['FileMetadata']> = {
  heightPx?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  intrinsics?: Resolver<Maybe<ResolversTypes['FileIntrinsics']>, ParentType, ContextType>,
  numAudioChannels?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sampleRateHz?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  widthPx?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type FlagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flag'] = ResolversParentTypes['Flag']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['FlagContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isResolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type FlagContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlagContext'] = ResolversParentTypes['FlagContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Resource' | 'User', ParentType, ContextType>
};

export type FlagsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlagsPage'] = ResolversParentTypes['FlagsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Flag']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['FollowContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type FollowContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowContext'] = ResolversParentTypes['FollowContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Thread' | 'User', ParentType, ContextType>
};

export type FollowsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowsPage'] = ResolversParentTypes['FollowsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Follow']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FulfillmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fulfillment'] = ResolversParentTypes['Fulfillment']> = {
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  fulfilledBy?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  fulfills?: Resolver<ResolversTypes['Commitment'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
};

export type FulfillmentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentResponse'] = ResolversParentTypes['FulfillmentResponse']> = {
  fulfillment?: Resolver<Maybe<ResolversTypes['Fulfillment']>, ParentType, ContextType>,
};

export type InstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Instance'] = ResolversParentTypes['Instance']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  featuredCollections?: Resolver<Maybe<ResolversTypes['FeaturesPage']>, ParentType, ContextType>,
  featuredCommunities?: Resolver<Maybe<ResolversTypes['FeaturesPage']>, ParentType, ContextType>,
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, InstanceOutboxArgs>,
};

export type IntentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Intent'] = ResolversParentTypes['Intent']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  availableQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasPointInTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  inputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  provider?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  publishedIn?: Resolver<Maybe<Array<ResolversTypes['ProposedIntent']>>, ParentType, ContextType>,
  receiver?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfiedBy?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType>,
};

export type IntentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntentResponse'] = ResolversParentTypes['IntentResponse']> = {
  intent?: Resolver<ResolversTypes['Intent'], ParentType, ContextType>,
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  languageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mainCountryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nativeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parentLanguageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rtl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  speakersMil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  speakersNative?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  speakersNativeTotal?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  subName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type LanguagesNodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguagesNodes'] = ResolversParentTypes['LanguagesNodes']> = {
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['LikeContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LikeContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeContext'] = ResolversParentTypes['LikeContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Resource' | 'User', ParentType, ContextType>
};

export type LikesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikesPage'] = ResolversParentTypes['LikesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isConfirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isInstanceAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  wantsEmailDigest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  wantsNotifications?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type MeasureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Measure'] = ResolversParentTypes['Measure']> = {
  hasNumericalValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  hasUnit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, OrganizationCommitmentsArgs>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, OrganizationEconomicEventsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, OrganizationIntentsArgs>,
  inventoriedEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, OrganizationInventoriedEconomicResourcesArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, OrganizationPlansArgs>,
  primaryLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, OrganizationProcessesArgs>,
  relationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, OrganizationRelationshipsArgs>,
  relationshipsAsObject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, OrganizationRelationshipsAsObjectArgs>,
  relationshipsAsSubject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, OrganizationRelationshipsAsSubjectArgs>,
  roles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType>,
};

export type OrganizationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationResponse'] = ResolversParentTypes['OrganizationResponse']> = {
  agent?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<Array<ResolversTypes['Cursor']>>, ParentType, ContextType>,
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  startCursor?: Resolver<Maybe<Array<ResolversTypes['Cursor']>>, ParentType, ContextType>,
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, PersonCommitmentsArgs>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, PersonEconomicEventsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, PersonIntentsArgs>,
  inventoriedEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, PersonInventoriedEconomicResourcesArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, PersonPlansArgs>,
  primaryLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, PersonProcessesArgs>,
  relationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, PersonRelationshipsArgs>,
  relationshipsAsObject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, PersonRelationshipsAsObjectArgs>,
  relationshipsAsSubject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, PersonRelationshipsAsSubjectArgs>,
  roles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType>,
};

export type PersonResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonResponse'] = ResolversParentTypes['PersonResponse']> = {
  agent?: Resolver<ResolversTypes['Person'], ParentType, ContextType>,
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  independentDemands?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, PlanProcessesArgs>,
  refinementOf?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
};

export type PlanResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanResponse'] = ResolversParentTypes['PlanResponse']> = {
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>,
};

export type ProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Process'] = ResolversParentTypes['Process']> = {
  basedOn?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
  classifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  committedInputs?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, ProcessCommittedInputsArgs>,
  committedOutputs?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, ProcessCommittedOutputsArgs>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  inputs?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, ProcessInputsArgs>,
  intendedInputs?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, ProcessIntendedInputsArgs>,
  intendedOutputs?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, ProcessIntendedOutputsArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nestedIn?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
  nextProcesses?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputs?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, ProcessOutputsArgs>,
  plannedWithin?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>,
  previousProcesses?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  track?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  unplannedEconomicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, ProcessUnplannedEconomicEventsArgs>,
  workingAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
};

export type ProcessResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessResponse'] = ResolversParentTypes['ProcessResponse']> = {
  process?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
};

export type ProcessSpecificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessSpecification'] = ResolversParentTypes['ProcessSpecification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ProcessSpecificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessSpecificationResponse'] = ResolversParentTypes['ProcessSpecificationResponse']> = {
  processSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
};

export type ProductBatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBatch'] = ResolversParentTypes['ProductBatch']> = {
  batchNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expiryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  productionDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
};

export type ProductBatchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBatchResponse'] = ResolversParentTypes['ProductBatchResponse']> = {
  productBatch?: Resolver<ResolversTypes['ProductBatch'], ParentType, ContextType>,
};

export type ProductionFlowItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductionFlowItem'] = ResolversParentTypes['ProductionFlowItem']> = {
  __resolveType: TypeResolveFn<'EconomicResource' | 'Process', ParentType, ContextType>
};

export type ProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = {
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  eligibleLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  publishedTo?: Resolver<Maybe<Array<ResolversTypes['ProposedTo']>>, ParentType, ContextType>,
  publishes?: Resolver<Maybe<Array<ResolversTypes['ProposedIntent']>>, ParentType, ContextType>,
  unitBased?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type ProposalResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalResponse'] = ResolversParentTypes['ProposalResponse']> = {
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType>,
};

export type ProposedIntentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedIntent'] = ResolversParentTypes['ProposedIntent']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  publishedIn?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>,
  publishes?: Resolver<ResolversTypes['Intent'], ParentType, ContextType>,
  reciprocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type ProposedIntentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedIntentResponse'] = ResolversParentTypes['ProposedIntentResponse']> = {
  proposedIntent?: Resolver<Maybe<ResolversTypes['ProposedIntent']>, ParentType, ContextType>,
};

export type ProposedToResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedTo'] = ResolversParentTypes['ProposedTo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  proposed?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>,
  proposedTo?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
};

export type ProposedToResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedToResponse'] = ResolversParentTypes['ProposedToResponse']> = {
  proposedTo?: Resolver<Maybe<ResolversTypes['ProposedTo']>, ParentType, ContextType>,
};

export type RecipeFlowResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeFlow'] = ResolversParentTypes['RecipeFlow']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  recipeFlowResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType>,
  recipeInputOf?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType>,
  recipeOutputOf?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
};

export type RecipeFlowResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeFlowResponse'] = ResolversParentTypes['RecipeFlowResponse']> = {
  recipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlow']>, ParentType, ContextType>,
};

export type RecipeProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeProcess'] = ResolversParentTypes['RecipeProcess']> = {
  hasDuration?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  processClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  processConformsTo?: Resolver<ResolversTypes['ProcessSpecification'], ParentType, ContextType>,
};

export type RecipeProcessResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeProcessResponse'] = ResolversParentTypes['RecipeProcessResponse']> = {
  recipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType>,
};

export type RecipeResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeResource'] = ResolversParentTypes['RecipeResource']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  substitutable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  unitOfEffort?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
  unitOfResource?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export type RecipeResourceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeResourceResponse'] = ResolversParentTypes['RecipeResourceResponse']> = {
  recipeResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType>,
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, ResourceFlagsArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, ResourceLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ResourcesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourcesPage'] = ResolversParentTypes['ResourcesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Resource']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ResourceSpecificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSpecification'] = ResolversParentTypes['ResourceSpecification']> = {
  conformingResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType>,
  defaultUnitOfEffort?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ResourceSpecificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSpecificationResponse'] = ResolversParentTypes['ResourceSpecificationResponse']> = {
  resourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
};

export type RootMutationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootMutationType'] = ResolversParentTypes['RootMutationType']> = {
  updateAgentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationshipResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateAgentRelationshipArgs, 'relationship'>>,
  deleteProposedIntent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposedIntentArgs, 'id'>>,
  createProductBatch?: Resolver<Maybe<ResolversTypes['ProductBatchResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateProductBatchArgs, 'productBatch'>>,
  updateClaim?: Resolver<Maybe<ResolversTypes['ClaimResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateClaimArgs, 'claim'>>,
  deleteProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProcessArgs, 'id'>>,
  updateProcess?: Resolver<Maybe<ResolversTypes['ProcessResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProcessArgs, 'process'>>,
  deletePlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeletePlanArgs, 'id'>>,
  createSettlement?: Resolver<Maybe<ResolversTypes['SettlementResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSettlementArgs, 'settlement'>>,
  createOrganization?: Resolver<Maybe<ResolversTypes['OrganizationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateOrganizationArgs, 'organization'>>,
  resetPassword?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeResetPasswordArgs, 'password' | 'token'>>,
  createSession?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSessionArgs, 'email' | 'password'>>,
  updateUnit?: Resolver<Maybe<ResolversTypes['UnitResponse']>, ParentType, ContextType, RootMutationTypeUpdateUnitArgs>,
  createClaim?: Resolver<Maybe<ResolversTypes['ClaimResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateClaimArgs, 'claim'>>,
  deleteSelf?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSelfArgs, 'iAmSure'>>,
  deleteClaim?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteClaimArgs, 'id'>>,
  deleteFulfillment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteFulfillmentArgs, 'id'>>,
  deleteSettlement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSettlementArgs, 'id'>>,
  deleteAgreement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgreementArgs, 'id'>>,
  updateRecipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcessResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeProcessArgs>,
  createFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFlagArgs, 'contextId' | 'message'>>,
  createCommitment?: Resolver<Maybe<ResolversTypes['CommitmentResponse']>, ParentType, ContextType, RootMutationTypeCreateCommitmentArgs>,
  updateOrganization?: Resolver<Maybe<ResolversTypes['OrganizationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateOrganizationArgs, 'organization'>>,
  deleteProposal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposalArgs, 'id'>>,
  createPlan?: Resolver<Maybe<ResolversTypes['PlanResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePlanArgs, 'plan'>>,
  deleteSatisfaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSatisfactionArgs, 'id'>>,
  createThread?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateThreadArgs, 'comment' | 'contextId'>>,
  deleteProductBatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProductBatchArgs, 'id'>>,
  deleteAppreciation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAppreciationArgs, 'id'>>,
  deleteRecipeFlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeFlowArgs, 'id'>>,
  copyResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeCopyResourceArgs, 'collectionId' | 'resourceId'>>,
  deletePerson?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeletePersonArgs, 'id'>>,
  createAppreciation?: Resolver<Maybe<ResolversTypes['AppreciationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateAppreciationArgs, 'appreciation'>>,
  createSpatialThing?: Resolver<Maybe<ResolversTypes['SpatialThingResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSpatialThingArgs, 'spatialThing'>>,
  createRecipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlowResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeFlowArgs>,
  updateFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateFulfillmentArgs, 'fulfillment'>>,
  updateCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCommunityArgs, 'community' | 'communityId'>>,
  updateEconomicResource?: Resolver<Maybe<ResolversTypes['EconomicResourceResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateEconomicResourceArgs, 'resource'>>,
  proposeTo?: Resolver<Maybe<ResolversTypes['ProposedToResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeProposeToArgs, 'proposed' | 'proposedTo'>>,
  createRecipeResource?: Resolver<Maybe<ResolversTypes['RecipeResourceResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeResourceArgs>,
  deleteScenario?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteScenarioArgs, 'id'>>,
  updateScenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinitionResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateScenarioDefinitionArgs, 'plan'>>,
  createResourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecificationResponse']>, ParentType, ContextType, RootMutationTypeCreateResourceSpecificationArgs>,
  updateProposal?: Resolver<Maybe<ResolversTypes['ProposalResponse']>, ParentType, ContextType, RootMutationTypeUpdateProposalArgs>,
  createFollowByUrl?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFollowByUrlArgs, 'url'>>,
  createScenario?: Resolver<Maybe<ResolversTypes['ScenarioResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateScenarioArgs, 'plan'>>,
  updateAppreciation?: Resolver<Maybe<ResolversTypes['AppreciationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateAppreciationArgs, 'appreciation'>>,
  resolveFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootMutationTypeResolveFlagArgs, 'flagId'>>,
  createRecipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcessResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeProcessArgs>,
  updateScenario?: Resolver<Maybe<ResolversTypes['ScenarioResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateScenarioArgs, 'plan'>>,
  deleteScenarioDefinition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteScenarioDefinitionArgs, 'id'>>,
  createPerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePersonArgs, 'person'>>,
  updateRecipeResource?: Resolver<Maybe<ResolversTypes['RecipeResourceResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeResourceArgs>,
  deleteRecipeResource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeResourceArgs, 'id'>>,
  createFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFulfillmentArgs, 'fulfillment'>>,
  deleteIntent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteIntentArgs, 'id'>>,
  updatePerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdatePersonArgs, 'person'>>,
  createProcessSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecificationResponse']>, ParentType, ContextType, RootMutationTypeCreateProcessSpecificationArgs>,
  updateProfile?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProfileArgs, 'profile'>>,
  deleteAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgentRelationshipRoleArgs, 'id'>>,
  updateResourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecificationResponse']>, ParentType, ContextType, RootMutationTypeUpdateResourceSpecificationArgs>,
  deleteResourceSpecification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteResourceSpecificationArgs, 'id'>>,
  deleteEconomicEvent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteEconomicEventArgs, 'id'>>,
  proposeIntent?: Resolver<Maybe<ResolversTypes['ProposedIntentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeProposeIntentArgs, 'publishedIn' | 'publishes'>>,
  createResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateResourceArgs, 'collectionId' | 'content' | 'resource'>>,
  createReply?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateReplyArgs, 'comment' | 'inReplyToId' | 'threadId'>>,
  confirmEmail?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeConfirmEmailArgs, 'token'>>,
  resetPasswordRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeResetPasswordRequestArgs, 'email'>>,
  updateAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRoleResponse']>, ParentType, ContextType, RootMutationTypeUpdateAgentRelationshipRoleArgs>,
  updateProcessSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecificationResponse']>, ParentType, ContextType, RootMutationTypeUpdateProcessSpecificationArgs>,
  updateAgreement?: Resolver<Maybe<ResolversTypes['AgreementResponse']>, ParentType, ContextType, RootMutationTypeUpdateAgreementArgs>,
  createSatisfaction?: Resolver<Maybe<ResolversTypes['SatisfactionResponse']>, ParentType, ContextType, RootMutationTypeCreateSatisfactionArgs>,
  updateSettlement?: Resolver<Maybe<ResolversTypes['SettlementResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateSettlementArgs, 's0ettlement'>>,
  createEconomicEvent?: Resolver<Maybe<ResolversTypes['EconomicEventResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateEconomicEventArgs, 'event'>>,
  deleteAgentRelationship?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgentRelationshipArgs, 'id'>>,
  updateSpatialThing?: Resolver<Maybe<ResolversTypes['SpatialThingResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateSpatialThingArgs, 'spatialThing'>>,
  updateProductBatch?: Resolver<Maybe<ResolversTypes['ProductBatchResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProductBatchArgs, 'productBatch'>>,
  createFeature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFeatureArgs, 'contextId'>>,
  createAgreement?: Resolver<Maybe<ResolversTypes['AgreementResponse']>, ParentType, ContextType, RootMutationTypeCreateAgreementArgs>,
  updateSatisfaction?: Resolver<Maybe<ResolversTypes['SatisfactionResponse']>, ParentType, ContextType, RootMutationTypeUpdateSatisfactionArgs>,
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCommentArgs, 'comment' | 'commentId'>>,
  createAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRoleResponse']>, ParentType, ContextType, RootMutationTypeCreateAgentRelationshipRoleArgs>,
  createFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFollowArgs, 'contextId'>>,
  deleteSpatialThing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSpatialThingArgs, 'id'>>,
  deleteProcessSpecification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProcessSpecificationArgs, 'id'>>,
  createIntent?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateIntentArgs>,
  updateEconomicEvent?: Resolver<Maybe<ResolversTypes['EconomicEventResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateEconomicEventArgs, 'event'>>,
  updateResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateResourceArgs, 'resource' | 'resourceId'>>,
  createProposal?: Resolver<Maybe<ResolversTypes['ProposalResponse']>, ParentType, ContextType, RootMutationTypeCreateProposalArgs>,
  deleteUnit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteUnitArgs, 'id'>>,
  deleteProposedTo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposedToArgs, 'id'>>,
  createLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateLikeArgs, 'contextId'>>,
  deleteCommitment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteCommitmentArgs, 'id'>>,
  updateCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCollectionArgs, 'collection' | 'collectionId'>>,
  createUser?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateUserArgs, 'user'>>,
  fetchWebMetadata?: Resolver<Maybe<ResolversTypes['WebMetadata']>, ParentType, ContextType, RequireFields<RootMutationTypeFetchWebMetadataArgs, 'url'>>,
  deleteEconomicResource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteEconomicResourceArgs, 'id'>>,
  createScenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinitionResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateScenarioDefinitionArgs, 'plan'>>,
  createUnit?: Resolver<Maybe<ResolversTypes['UnitResponse']>, ParentType, ContextType, RootMutationTypeCreateUnitArgs>,
  createCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateCollectionArgs, 'collection' | 'communityId'>>,
  updateRecipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlowResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeFlowArgs>,
  createCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateCommunityArgs, 'community'>>,
  deleteSession?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  delete?: Resolver<Maybe<ResolversTypes['DeleteContext']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteArgs, 'contextId'>>,
  createAgentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationshipResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateAgentRelationshipArgs, 'relationship'>>,
  updateCommitment?: Resolver<Maybe<ResolversTypes['CommitmentResponse']>, ParentType, ContextType, RootMutationTypeUpdateCommitmentArgs>,
  deleteRecipeProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeProcessArgs, 'id'>>,
  updateIntent?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeUpdateIntentArgs>,
  createProcess?: Resolver<Maybe<ResolversTypes['ProcessResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateProcessArgs, 'process'>>,
  updatePlan?: Resolver<Maybe<ResolversTypes['PlanResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdatePlanArgs, 'plan'>>,
  deleteOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteOrganizationArgs, 'id'>>,
};

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = {
  allOrganizations?: Resolver<Maybe<Array<ResolversTypes['Organization']>>, ParentType, ContextType, RootQueryTypeAllOrganizationsArgs>,
  follow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootQueryTypeFollowArgs, 'followId'>>,
  allProcesses?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, RootQueryTypeAllProcessesArgs>,
  allSpatialThings?: Resolver<Maybe<Array<ResolversTypes['SpatialThing']>>, ParentType, ContextType, RootQueryTypeAllSpatialThingsArgs>,
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<RootQueryTypeFeatureArgs, 'featureId'>>,
  fulfillment?: Resolver<Maybe<ResolversTypes['Fulfillment']>, ParentType, ContextType, RootQueryTypeFulfillmentArgs>,
  allRecipeResources?: Resolver<Maybe<Array<ResolversTypes['RecipeResource']>>, ParentType, ContextType, RootQueryTypeAllRecipeResourcesArgs>,
  collections?: Resolver<ResolversTypes['CollectionsPage'], ParentType, ContextType, RootQueryTypeCollectionsArgs>,
  myAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  scenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType, RootQueryTypeScenarioDefinitionArgs>,
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RootQueryTypeProposalArgs>,
  recipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType, RootQueryTypeRecipeProcessArgs>,
  allAgentRelationshipRoles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType, RootQueryTypeAllAgentRelationshipRolesArgs>,
  action?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType, RootQueryTypeActionArgs>,
  allAgentRelationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, RootQueryTypeAllAgentRelationshipsArgs>,
  spatialThing?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType, RootQueryTypeSpatialThingArgs>,
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootQueryTypeCommentArgs, 'commentId'>>,
  tags?: Resolver<ResolversTypes['TagsNodes'], ParentType, ContextType, RootQueryTypeTagsArgs>,
  filteredEconomicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, RootQueryTypeFilteredEconomicEventsArgs>,
  allActions?: Resolver<Maybe<Array<ResolversTypes['Action']>>, ParentType, ContextType>,
  allCommitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, RootQueryTypeAllCommitmentsArgs>,
  scenario?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType, RootQueryTypeScenarioArgs>,
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RootQueryTypeOrganizationArgs>,
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<RootQueryTypeTagArgs, 'tagId'>>,
  settlement?: Resolver<Maybe<ResolversTypes['Settlement']>, ParentType, ContextType, RootQueryTypeSettlementArgs>,
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RootQueryTypeUnitArgs>,
  spatialThings?: Resolver<Maybe<Array<ResolversTypes['SpatialThingsPage']>>, ParentType, ContextType, RootQueryTypeSpatialThingsArgs>,
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootQueryTypeActivityArgs, 'activityId'>>,
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RootQueryTypePlanArgs>,
  allProposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType, RootQueryTypeAllProposalsArgs>,
  allEconomicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, RootQueryTypeAllEconomicEventsArgs>,
  agent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RootQueryTypeAgentArgs>,
  recipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlow']>, ParentType, ContextType, RootQueryTypeRecipeFlowArgs>,
  economicEvent?: Resolver<Maybe<ResolversTypes['EconomicEvent']>, ParentType, ContextType, RootQueryTypeEconomicEventArgs>,
  allRecipeProcesses?: Resolver<Maybe<Array<ResolversTypes['RecipeProcess']>>, ParentType, ContextType, RootQueryTypeAllRecipeProcessesArgs>,
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<RootQueryTypeThreadArgs, 'threadId'>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootQueryTypeUserArgs, 'userId'>>,
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>,
  flag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootQueryTypeFlagArgs, 'flagId'>>,
  processSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType, RootQueryTypeProcessSpecificationArgs>,
  intent?: Resolver<Maybe<ResolversTypes['Intent']>, ParentType, ContextType, RootQueryTypeIntentArgs>,
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RootQueryTypePersonArgs>,
  allUnits?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType, RootQueryTypeAllUnitsArgs>,
  productBatch?: Resolver<Maybe<ResolversTypes['ProductBatch']>, ParentType, ContextType, RootQueryTypeProductBatchArgs>,
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<RootQueryTypeLikeArgs, 'likeId'>>,
  communities?: Resolver<ResolversTypes['CommunitiesPage'], ParentType, ContextType, RootQueryTypeCommunitiesArgs>,
  satisfaction?: Resolver<Maybe<ResolversTypes['Satisfaction']>, ParentType, ContextType, RootQueryTypeSatisfactionArgs>,
  agentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRole']>, ParentType, ContextType, RootQueryTypeAgentRelationshipRoleArgs>,
  agreement?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType, RootQueryTypeAgreementArgs>,
  allClaims?: Resolver<Maybe<Array<ResolversTypes['Claim']>>, ParentType, ContextType, RootQueryTypeAllClaimsArgs>,
  resource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootQueryTypeResourceArgs, 'resourceId'>>,
  allPlans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, RootQueryTypeAllPlansArgs>,
  allRecipeFlows?: Resolver<Maybe<Array<ResolversTypes['RecipeFlow']>>, ParentType, ContextType, RootQueryTypeAllRecipeFlowsArgs>,
  allFulfillments?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType, RootQueryTypeAllFulfillmentsArgs>,
  usernameAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<RootQueryTypeUsernameAvailableArgs, 'username'>>,
  allAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType, RootQueryTypeAllAgentsArgs>,
  allSatisfactions?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType, RootQueryTypeAllSatisfactionsArgs>,
  agentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationship']>, ParentType, ContextType, RootQueryTypeAgentRelationshipArgs>,
  languages?: Resolver<ResolversTypes['LanguagesNodes'], ParentType, ContextType, RootQueryTypeLanguagesArgs>,
  allResourceSpecifications?: Resolver<Maybe<Array<ResolversTypes['ResourceSpecification']>>, ParentType, ContextType, RootQueryTypeAllResourceSpecificationsArgs>,
  recipeResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType, RootQueryTypeRecipeResourceArgs>,
  allPeople?: Resolver<Maybe<Array<ResolversTypes['Person']>>, ParentType, ContextType, RootQueryTypeAllPeopleArgs>,
  allProductBatches?: Resolver<Maybe<Array<ResolversTypes['ProductBatch']>>, ParentType, ContextType, RootQueryTypeAllProductBatchesArgs>,
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootQueryTypeCommunityArgs, 'communityId'>>,
  commitment?: Resolver<Maybe<ResolversTypes['Commitment']>, ParentType, ContextType, RootQueryTypeCommitmentArgs>,
  economicResource?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType, RootQueryTypeEconomicResourceArgs>,
  claim?: Resolver<Maybe<ResolversTypes['Claim']>, ParentType, ContextType, RootQueryTypeClaimArgs>,
  allScenarios?: Resolver<Maybe<Array<ResolversTypes['Scenario']>>, ParentType, ContextType, RootQueryTypeAllScenariosArgs>,
  allIntents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, RootQueryTypeAllIntentsArgs>,
  allSettlements?: Resolver<Maybe<Array<ResolversTypes['Settlement']>>, ParentType, ContextType, RootQueryTypeAllSettlementsArgs>,
  allScenarioDefinitions?: Resolver<Maybe<Array<ResolversTypes['ScenarioDefinition']>>, ParentType, ContextType, RootQueryTypeAllScenarioDefinitionsArgs>,
  resourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType, RootQueryTypeResourceSpecificationArgs>,
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>,
  allProcessSpecifications?: Resolver<Maybe<Array<ResolversTypes['ProcessSpecification']>>, ParentType, ContextType, RootQueryTypeAllProcessSpecificationsArgs>,
  allEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, RootQueryTypeAllEconomicResourcesArgs>,
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootQueryTypeCollectionArgs, 'collectionId'>>,
  process?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType, RootQueryTypeProcessArgs>,
  allAgreements?: Resolver<Maybe<Array<ResolversTypes['Agreement']>>, ParentType, ContextType, RootQueryTypeAllAgreementsArgs>,
};

export type SatisfactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Satisfaction'] = ResolversParentTypes['Satisfaction']> = {
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfiedBy?: Resolver<ResolversTypes['EventOrCommitment'], ParentType, ContextType>,
  satisfies?: Resolver<ResolversTypes['Intent'], ParentType, ContextType>,
};

export type SatisfactionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SatisfactionResponse'] = ResolversParentTypes['SatisfactionResponse']> = {
  satisfaction?: Resolver<Maybe<ResolversTypes['Satisfaction']>, ParentType, ContextType>,
};

export type ScenarioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Scenario'] = ResolversParentTypes['Scenario']> = {
  definedAs?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AnyType']>>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  refinementOf?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
};

export type ScenarioDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScenarioDefinition'] = ResolversParentTypes['ScenarioDefinition']> = {
  hasDuration?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ScenarioDefinitionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScenarioDefinitionResponse'] = ResolversParentTypes['ScenarioDefinitionResponse']> = {
  scenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType>,
};

export type ScenarioResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScenarioResponse'] = ResolversParentTypes['ScenarioResponse']> = {
  scenario?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
};

export type ScopeContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScopeContext'] = ResolversParentTypes['ScopeContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community', ParentType, ContextType>
};

export type SettlementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Settlement'] = ResolversParentTypes['Settlement']> = {
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  settledBy?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  settles?: Resolver<ResolversTypes['Claim'], ParentType, ContextType>,
};

export type SettlementResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettlementResponse'] = ResolversParentTypes['SettlementResponse']> = {
  settlement?: Resolver<Maybe<ResolversTypes['Settlement']>, ParentType, ContextType>,
};

export type SpatialThingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpatialThing'] = ResolversParentTypes['SpatialThing']> = {
  agents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
  alt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  economicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['ScopeContext']>>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType>,
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  long?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mappableAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SpatialThingResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpatialThingResponse'] = ResolversParentTypes['SpatialThingResponse']> = {
  spatialThing?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
};

export type SpatialThingsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpatialThingsPage'] = ResolversParentTypes['SpatialThingsPage']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpatialThing']>>>, ParentType, ContextType>,
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>,
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parentTagId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type TagsNodesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsNodes'] = ResolversParentTypes['TagsNodes']> = {
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ThreadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, ThreadCommentsArgs>,
  context?: Resolver<Maybe<ResolversTypes['ThreadContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, ThreadFollowersArgs>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ThreadContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadContext'] = ResolversParentTypes['ThreadContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Flag' | 'Resource', ParentType, ContextType>
};

export type ThreadsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadsPage'] = ResolversParentTypes['ThreadsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Thread']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type UnitResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitResponse'] = ResolversParentTypes['UnitResponse']> = {
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export interface UriScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URI'], any> {
  name: 'URI'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  communityFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserCommunityFollowsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserUserFollowsArgs>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  likeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likes?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, UserLikesArgs>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, UserOutboxArgs>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  inbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, UserInboxArgs>,
  collectionFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserCollectionFollowsArgs>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, UserLikersArgs>,
  follows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserFollowsArgs>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, UserCommentsArgs>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserFollowersArgs>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  lastActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WebMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebMetadata'] = ResolversParentTypes['WebMetadata']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  embedCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  embedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Action?: ActionResolvers<ContextType>,
  ActivitiesPage?: ActivitiesPageResolvers<ContextType>,
  Activity?: ActivityResolvers<ContextType>,
  ActivityContext?: ActivityContextResolvers,
  Agent?: AgentResolvers<ContextType>,
  AgentRelationship?: AgentRelationshipResolvers<ContextType>,
  AgentRelationshipResponse?: AgentRelationshipResponseResolvers<ContextType>,
  AgentRelationshipRole?: AgentRelationshipRoleResolvers<ContextType>,
  AgentRelationshipRoleResponse?: AgentRelationshipRoleResponseResolvers<ContextType>,
  Agreement?: AgreementResolvers<ContextType>,
  AgreementResponse?: AgreementResponseResolvers<ContextType>,
  AnyType?: GraphQLScalarType,
  Appreciation?: AppreciationResolvers<ContextType>,
  AppreciationResponse?: AppreciationResponseResolvers<ContextType>,
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  Claim?: ClaimResolvers<ContextType>,
  ClaimResponse?: ClaimResponseResolvers<ContextType>,
  Collection?: CollectionResolvers<ContextType>,
  CollectionsPage?: CollectionsPageResolvers<ContextType>,
  Comment?: CommentResolvers<ContextType>,
  CommentsPage?: CommentsPageResolvers<ContextType>,
  Commitment?: CommitmentResolvers<ContextType>,
  CommitmentResponse?: CommitmentResponseResolvers<ContextType>,
  CommunitiesPage?: CommunitiesPageResolvers<ContextType>,
  Community?: CommunityResolvers<ContextType>,
  Content?: ContentResolvers<ContextType>,
  ContentMirror?: ContentMirrorResolvers<ContextType>,
  ContentUpload?: ContentUploadResolvers<ContextType>,
  Cursor?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  DeleteContext?: DeleteContextResolvers,
  Duration?: DurationResolvers<ContextType>,
  EconomicEvent?: EconomicEventResolvers<ContextType>,
  EconomicEventResponse?: EconomicEventResponseResolvers<ContextType>,
  EconomicResource?: EconomicResourceResolvers<ContextType>,
  EconomicResourceResponse?: EconomicResourceResponseResolvers<ContextType>,
  EventOrCommitment?: EventOrCommitmentResolvers,
  Feature?: FeatureResolvers<ContextType>,
  FeatureContext?: FeatureContextResolvers,
  FeaturesPage?: FeaturesPageResolvers<ContextType>,
  FileIntrinsics?: FileIntrinsicsResolvers<ContextType>,
  FileMetadata?: FileMetadataResolvers<ContextType>,
  Flag?: FlagResolvers<ContextType>,
  FlagContext?: FlagContextResolvers,
  FlagsPage?: FlagsPageResolvers<ContextType>,
  Follow?: FollowResolvers<ContextType>,
  FollowContext?: FollowContextResolvers,
  FollowsPage?: FollowsPageResolvers<ContextType>,
  Fulfillment?: FulfillmentResolvers<ContextType>,
  FulfillmentResponse?: FulfillmentResponseResolvers<ContextType>,
  Instance?: InstanceResolvers<ContextType>,
  Intent?: IntentResolvers<ContextType>,
  IntentResponse?: IntentResponseResolvers<ContextType>,
  Language?: LanguageResolvers<ContextType>,
  LanguagesNodes?: LanguagesNodesResolvers<ContextType>,
  Like?: LikeResolvers<ContextType>,
  LikeContext?: LikeContextResolvers,
  LikesPage?: LikesPageResolvers<ContextType>,
  Me?: MeResolvers<ContextType>,
  Measure?: MeasureResolvers<ContextType>,
  Organization?: OrganizationResolvers<ContextType>,
  OrganizationResponse?: OrganizationResponseResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Person?: PersonResolvers<ContextType>,
  PersonResponse?: PersonResponseResolvers<ContextType>,
  Plan?: PlanResolvers<ContextType>,
  PlanResponse?: PlanResponseResolvers<ContextType>,
  Process?: ProcessResolvers<ContextType>,
  ProcessResponse?: ProcessResponseResolvers<ContextType>,
  ProcessSpecification?: ProcessSpecificationResolvers<ContextType>,
  ProcessSpecificationResponse?: ProcessSpecificationResponseResolvers<ContextType>,
  ProductBatch?: ProductBatchResolvers<ContextType>,
  ProductBatchResponse?: ProductBatchResponseResolvers<ContextType>,
  ProductionFlowItem?: ProductionFlowItemResolvers,
  Proposal?: ProposalResolvers<ContextType>,
  ProposalResponse?: ProposalResponseResolvers<ContextType>,
  ProposedIntent?: ProposedIntentResolvers<ContextType>,
  ProposedIntentResponse?: ProposedIntentResponseResolvers<ContextType>,
  ProposedTo?: ProposedToResolvers<ContextType>,
  ProposedToResponse?: ProposedToResponseResolvers<ContextType>,
  RecipeFlow?: RecipeFlowResolvers<ContextType>,
  RecipeFlowResponse?: RecipeFlowResponseResolvers<ContextType>,
  RecipeProcess?: RecipeProcessResolvers<ContextType>,
  RecipeProcessResponse?: RecipeProcessResponseResolvers<ContextType>,
  RecipeResource?: RecipeResourceResolvers<ContextType>,
  RecipeResourceResponse?: RecipeResourceResponseResolvers<ContextType>,
  Resource?: ResourceResolvers<ContextType>,
  ResourcesPage?: ResourcesPageResolvers<ContextType>,
  ResourceSpecification?: ResourceSpecificationResolvers<ContextType>,
  ResourceSpecificationResponse?: ResourceSpecificationResponseResolvers<ContextType>,
  RootMutationType?: RootMutationTypeResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  Satisfaction?: SatisfactionResolvers<ContextType>,
  SatisfactionResponse?: SatisfactionResponseResolvers<ContextType>,
  Scenario?: ScenarioResolvers<ContextType>,
  ScenarioDefinition?: ScenarioDefinitionResolvers<ContextType>,
  ScenarioDefinitionResponse?: ScenarioDefinitionResponseResolvers<ContextType>,
  ScenarioResponse?: ScenarioResponseResolvers<ContextType>,
  ScopeContext?: ScopeContextResolvers,
  Settlement?: SettlementResolvers<ContextType>,
  SettlementResponse?: SettlementResponseResolvers<ContextType>,
  SpatialThing?: SpatialThingResolvers<ContextType>,
  SpatialThingResponse?: SpatialThingResponseResolvers<ContextType>,
  SpatialThingsPage?: SpatialThingsPageResolvers<ContextType>,
  Tag?: TagResolvers<ContextType>,
  TagsNodes?: TagsNodesResolvers<ContextType>,
  Thread?: ThreadResolvers<ContextType>,
  ThreadContext?: ThreadContextResolvers,
  ThreadsPage?: ThreadsPageResolvers<ContextType>,
  Unit?: UnitResolvers<ContextType>,
  UnitResponse?: UnitResponseResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  URI?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  WebMetadata?: WebMetadataResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
