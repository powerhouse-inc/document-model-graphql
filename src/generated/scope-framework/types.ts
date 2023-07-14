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
};

export type AddElementInput = {
  __typename?: 'AddElementInput';
  components: Maybe<ElementComponents>;
  name: Maybe<Scalars['String']>;
  path: Scalars['String'];
  type: ScopeFrameworkElementType | `${ScopeFrameworkElementType}`;
};

export type ArticleComponent = {
  __typename?: 'ArticleComponent';
  content: Maybe<Scalars['String']>;
};

export type CoreComponent = {
  __typename?: 'CoreComponent';
  content: Maybe<Scalars['String']>;
};

export type ElementComponents = ArticleComponent | CoreComponent | ScopeComponent | SectionComponent | TypeSpecificationComponent;

export type Mutation = {
  __typename?: 'Mutation';
  addElement: Maybe<ScopeFrameworkState>;
  removeElement: Maybe<ScopeFrameworkState>;
  reorderElements: Maybe<ScopeFrameworkState>;
  setRootPath: Maybe<ScopeFrameworkState>;
  updateElementComponents: Maybe<ScopeFrameworkState>;
  updateElementName: Maybe<ScopeFrameworkState>;
  updateElementType: Maybe<ScopeFrameworkState>;
};


export type MutationAddElementArgs = {
  input: AddElementInput;
};


export type MutationRemoveElementArgs = {
  input: RemoveElementInput;
};


export type MutationReorderElementsArgs = {
  input: ReorderElementsInput;
};


export type MutationSetRootPathArgs = {
  input: SetRootPathInput;
};


export type MutationUpdateElementComponentsArgs = {
  input: UpdateElementComponentsInput;
};


export type MutationUpdateElementNameArgs = {
  input: UpdateElementNameInput;
};


export type MutationUpdateElementTypeArgs = {
  input: UpdateElementTypeInput;
};

export type RemoveElementInput = {
  __typename?: 'RemoveElementInput';
  id: Scalars['ID'];
};

export type ReorderElementsInput = {
  __typename?: 'ReorderElementsInput';
  order: Array<Scalars['ID']>;
  parentElementId: Scalars['ID'];
};

export type ScopeComponent = {
  __typename?: 'ScopeComponent';
  content: Maybe<Scalars['String']>;
};

export type ScopeFrameworkElement = {
  __typename?: 'ScopeFrameworkElement';
  components: Maybe<ElementComponents>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  path: Scalars['String'];
  type: Maybe<ScopeFrameworkElementType | `${ScopeFrameworkElementType}`>;
  version: Scalars['Int'];
};

export type ScopeFrameworkElementType =
  | 'Article'
  | 'Core'
  | 'Scope'
  | 'Section'
  | 'TypeSpecification';

export type ScopeFrameworkInput = AddElementInput | RemoveElementInput | ReorderElementsInput | SetRootPathInput | UpdateElementComponentsInput | UpdateElementNameInput | UpdateElementTypeInput;

export type ScopeFrameworkState = {
  __typename?: 'ScopeFrameworkState';
  elements: Array<ScopeFrameworkElement>;
  rootPath: Scalars['String'];
};

export type SectionComponent = {
  __typename?: 'SectionComponent';
  content: Maybe<Scalars['String']>;
};

export type SetRootPathInput = {
  __typename?: 'SetRootPathInput';
  newRootPath: Scalars['String'];
};

export type TypeSpecificationComponent = {
  __typename?: 'TypeSpecificationComponent';
  additionalLogic: Maybe<Scalars['String']>;
  category: Maybe<TypeSpecificationComponentCategory | `${TypeSpecificationComponentCategory}`>;
  documentIdentifierRules: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  overview: Maybe<Scalars['String']>;
  typeAuthority: Maybe<Scalars['String']>;
};

export type TypeSpecificationComponentCategory =
  | 'Accessory'
  | 'Immutable'
  | 'Primary'
  | 'Supporting';

export type UpdateElementComponentsInput = {
  __typename?: 'UpdateElementComponentsInput';
  components: Maybe<ElementComponents>;
  id: Scalars['ID'];
};

export type UpdateElementNameInput = {
  __typename?: 'UpdateElementNameInput';
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
};

export type UpdateElementTypeInput = {
  __typename?: 'UpdateElementTypeInput';
  id: Scalars['ID'];
  type: ScopeFrameworkElementType | `${ScopeFrameworkElementType}`;
};
