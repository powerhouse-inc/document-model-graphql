export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Address: `${string}:0x${string}`;
  Attachment: string;
  DateTime: string;
  Unknown: unknown;
};

export type Action = IAction & {
  __typename?: 'Action';
  type: Scalars['String'];
};

export type BaseAction = LoadStateAction | PruneAction | RedoAction | SetNameAction | UndoAction;

export type DocumentFile = {
  __typename?: 'DocumentFile';
  data: Scalars['String'];
  extension: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
};

export type IAction = {
  type: Scalars['String'];
};

export type IDocument = {
  created: Scalars['DateTime'];
  documentType: Scalars['String'];
  lastModified: Scalars['DateTime'];
  name: Scalars['String'];
  operations: Array<IOperation>;
  revision: Scalars['Int'];
};

export type IOperation = {
  hash: Scalars['String'];
  index: Scalars['Int'];
  timestamp: Scalars['DateTime'];
  type: Scalars['String'];
};

export type Load_State =
  | 'LOAD_STATE';

export type LoadStateAction = {
  input: LoadStateActionInput;
  type: Load_State | `${Load_State}`;
};

export type LoadStateActionInput = {
  operations: Scalars['Int'];
  state: LoadStateActionStateInput;
};

export type LoadStateActionStateInput = {
  data?: InputMaybe<Scalars['Unknown']>;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  loadState: Maybe<IDocument>;
  prune: Maybe<IDocument>;
  redo: Maybe<IDocument>;
  setName: Maybe<IDocument>;
  undo: Maybe<IDocument>;
};


export type MutationLoadStateArgs = {
  input: LoadStateAction;
};


export type MutationPruneArgs = {
  input: PruneAction;
};


export type MutationRedoArgs = {
  input: RedoAction;
};


export type MutationSetNameArgs = {
  input: SetNameAction;
};


export type MutationUndoArgs = {
  input: UndoAction;
};

export type Operation = IOperation & {
  __typename?: 'Operation';
  hash: Scalars['String'];
  index: Scalars['Int'];
  timestamp: Scalars['DateTime'];
  type: Scalars['String'];
};

export type Prune =
  | 'PRUNE';

export type PruneAction = {
  input: PruneActionInput;
  type: Prune | `${Prune}`;
};

export type PruneActionInput = {
  end?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  document: Maybe<IDocument>;
};

export type Redo =
  | 'REDO';

export type RedoAction = {
  input: Scalars['Int'];
  type: Redo | `${Redo}`;
};

export type Set_Name =
  | 'SET_NAME';

export type SetNameAction = {
  input: Scalars['String'];
  type: Set_Name | `${Set_Name}`;
};

export type SetNameOperation = IOperation & {
  __typename?: 'SetNameOperation';
  hash: Scalars['String'];
  index: Scalars['Int'];
  input: Scalars['String'];
  timestamp: Scalars['DateTime'];
  type: Scalars['String'];
};

export type Undo =
  | 'UNDO';

export type UndoAction = {
  input: Scalars['Int'];
  type: Undo | `${Undo}`;
};
