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

export type AddChangeLogItemInput = {
  __typename?: 'AddChangeLogItemInput';
  content: Scalars['String'];
  id: Scalars['ID'];
  insertBefore: Maybe<Scalars['ID']>;
};

export type AddModuleInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AddOperationErrorInput = {
  errorCode?: InputMaybe<Scalars['String']>;
  errorDescription?: InputMaybe<Scalars['String']>;
  errorName?: InputMaybe<Scalars['String']>;
  errorTemplate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  operationId: Scalars['ID'];
};

export type AddOperationExampleInput = {
  example: Scalars['String'];
  id: Scalars['ID'];
  operationId: Scalars['ID'];
};

export type AddOperationInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  moduleId: Scalars['ID'];
  name: Scalars['String'];
  reducer?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
};

export type AddStateExampleInput = {
  example: Scalars['String'];
  id: Scalars['ID'];
  insertBefore?: InputMaybe<Scalars['ID']>;
};

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
  website: Maybe<Scalars['String']>;
};

export type CodeExample = {
  __typename?: 'CodeExample';
  id: Scalars['ID'];
  value: Scalars['String'];
};

export type DeleteChangeLogItemInput = {
  __typename?: 'DeleteChangeLogItemInput';
  id: Scalars['ID'];
};

export type DeleteModuleInput = {
  id: Scalars['ID'];
};

export type DeleteOperationErrorInput = {
  id: Scalars['ID'];
};

export type DeleteOperationExampleInput = {
  id: Scalars['ID'];
};

export type DeleteOperationInput = {
  id: Scalars['ID'];
};

export type DeleteStateExampleInput = {
  id: Scalars['ID'];
};

export type DocumentModelInput = AddChangeLogItemInput | AddModuleInput | AddOperationErrorInput | AddOperationExampleInput | AddOperationInput | AddStateExampleInput | DeleteChangeLogItemInput | DeleteModuleInput | DeleteOperationErrorInput | DeleteOperationExampleInput | DeleteOperationInput | DeleteStateExampleInput | MoveOperationInput | ReorderChangeLogItemsInput | ReorderModuleOperationsInput | ReorderModulesInput | ReorderOperationErrorsInput | ReorderOperationExamplesInput | ReorderStateExamplesInput | SetAuthorNameInput | SetAuthorWebsiteInput | SetInitialStateInput | SetModelDescriptionInput | SetModelExtensionInput | SetModelIdInput | SetModelNameInput | SetModuleDescriptionInput | SetModuleNameInput | SetOperationDescriptionInput | SetOperationErrorCodeInput | SetOperationErrorDescriptionInput | SetOperationErrorNameInput | SetOperationErrorTemplateInput | SetOperationNameInput | SetOperationReducerInput | SetOperationSchemaInput | SetOperationTemplateInput | SetStateSchemaInput | UpdateChangeLogItemInput | UpdateOperationExampleInput | UpdateStateExampleInput;

export type DocumentModelState = {
  __typename?: 'DocumentModelState';
  author: Author;
  description: Scalars['String'];
  extension: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  specifications: Array<DocumentSpecification>;
};

export type DocumentSpecification = {
  __typename?: 'DocumentSpecification';
  changeLog: Array<Scalars['String']>;
  modules: Array<Module>;
  state: State;
  version: Scalars['Int'];
};

export type Module = {
  __typename?: 'Module';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  operations: Array<Operation>;
};

export type MoveOperationInput = {
  newModuleId: Scalars['ID'];
  operationId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addChangeLogItemInput: DocumentModelState;
  addModule: DocumentModelState;
  addOperation: DocumentModelState;
  addOperationError: DocumentModelState;
  addOperationExample: DocumentModelState;
  addStateExample: DocumentModelState;
  deleteChangeLogItemInput: DocumentModelState;
  deleteModule: DocumentModelState;
  deleteOperation: DocumentModelState;
  deleteOperationError: DocumentModelState;
  deleteOperationExample: DocumentModelState;
  deleteStateExample: DocumentModelState;
  moveOperation: DocumentModelState;
  releaseNewVersion: DocumentModelState;
  reorderChangeLogItemsInput: DocumentModelState;
  reorderModuleOperations: DocumentModelState;
  reorderModules: DocumentModelState;
  reorderOperationErrors: DocumentModelState;
  reorderOperationExamples: DocumentModelState;
  reorderStateExamples: DocumentModelState;
  setAuthorName: DocumentModelState;
  setAuthorWebsite: DocumentModelState;
  setInitialState: DocumentModelState;
  setModelDescription: DocumentModelState;
  setModelExtension: DocumentModelState;
  setModelId: DocumentModelState;
  setModelName: DocumentModelState;
  setModuleDescription: DocumentModelState;
  setModuleName: DocumentModelState;
  setOperationDescription: DocumentModelState;
  setOperationErrorCode: DocumentModelState;
  setOperationErrorDescription: DocumentModelState;
  setOperationErrorName: DocumentModelState;
  setOperationErrorTemplate: DocumentModelState;
  setOperationName: DocumentModelState;
  setOperationReducer: DocumentModelState;
  setOperationSchema: DocumentModelState;
  setOperationTemplate: DocumentModelState;
  setStateSchema: DocumentModelState;
  updateChangeLogItemInput: DocumentModelState;
  updateOperationExample: DocumentModelState;
  updateStateExample: DocumentModelState;
};


export type MutationAddChangeLogItemInputArgs = {
  input?: InputMaybe<AddChangeLogItemInput>;
};


export type MutationAddModuleArgs = {
  input: AddModuleInput;
};


export type MutationAddOperationArgs = {
  input: AddOperationInput;
};


export type MutationAddOperationErrorArgs = {
  input: AddOperationErrorInput;
};


export type MutationAddOperationExampleArgs = {
  input: AddOperationExampleInput;
};


export type MutationAddStateExampleArgs = {
  input: AddStateExampleInput;
};


export type MutationDeleteChangeLogItemInputArgs = {
  input?: InputMaybe<DeleteChangeLogItemInput>;
};


export type MutationDeleteModuleArgs = {
  input: DeleteModuleInput;
};


export type MutationDeleteOperationArgs = {
  input: DeleteOperationInput;
};


export type MutationDeleteOperationErrorArgs = {
  input: DeleteOperationErrorInput;
};


export type MutationDeleteOperationExampleArgs = {
  input: DeleteOperationExampleInput;
};


export type MutationDeleteStateExampleArgs = {
  input: DeleteStateExampleInput;
};


export type MutationMoveOperationArgs = {
  input: MoveOperationInput;
};


export type MutationReorderChangeLogItemsInputArgs = {
  input?: InputMaybe<ReorderChangeLogItemsInput>;
};


export type MutationReorderModuleOperationsArgs = {
  input: ReorderModuleOperationsInput;
};


export type MutationReorderModulesArgs = {
  input: ReorderModulesInput;
};


export type MutationReorderOperationErrorsArgs = {
  input: ReorderOperationErrorsInput;
};


export type MutationReorderOperationExamplesArgs = {
  input: ReorderOperationExamplesInput;
};


export type MutationReorderStateExamplesArgs = {
  input: ReorderStateExamplesInput;
};


export type MutationSetAuthorNameArgs = {
  input: SetAuthorNameInput;
};


export type MutationSetAuthorWebsiteArgs = {
  input: SetAuthorWebsiteInput;
};


export type MutationSetInitialStateArgs = {
  input: SetInitialStateInput;
};


export type MutationSetModelDescriptionArgs = {
  input: SetModelDescriptionInput;
};


export type MutationSetModelExtensionArgs = {
  input: SetModelExtensionInput;
};


export type MutationSetModelIdArgs = {
  input: SetModelIdInput;
};


export type MutationSetModelNameArgs = {
  input: SetModelNameInput;
};


export type MutationSetModuleDescriptionArgs = {
  input: SetModuleDescriptionInput;
};


export type MutationSetModuleNameArgs = {
  input: SetModuleNameInput;
};


export type MutationSetOperationDescriptionArgs = {
  input: SetOperationDescriptionInput;
};


export type MutationSetOperationErrorCodeArgs = {
  input: SetOperationErrorCodeInput;
};


export type MutationSetOperationErrorDescriptionArgs = {
  input: SetOperationErrorDescriptionInput;
};


export type MutationSetOperationErrorNameArgs = {
  input: SetOperationErrorNameInput;
};


export type MutationSetOperationErrorTemplateArgs = {
  input: SetOperationErrorTemplateInput;
};


export type MutationSetOperationNameArgs = {
  input: SetOperationNameInput;
};


export type MutationSetOperationReducerArgs = {
  input: SetOperationReducerInput;
};


export type MutationSetOperationSchemaArgs = {
  input: SetOperationSchemaInput;
};


export type MutationSetOperationTemplateArgs = {
  input: SetOperationTemplateInput;
};


export type MutationSetStateSchemaArgs = {
  input: SetStateSchemaInput;
};


export type MutationUpdateChangeLogItemInputArgs = {
  input?: InputMaybe<UpdateChangeLogItemInput>;
};


export type MutationUpdateOperationExampleArgs = {
  input: UpdateOperationExampleInput;
};


export type MutationUpdateStateExampleArgs = {
  input: UpdateStateExampleInput;
};

export type Operation = {
  __typename?: 'Operation';
  description: Maybe<Scalars['String']>;
  errors: Array<OperationError>;
  examples: Array<CodeExample>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  reducer: Maybe<Scalars['String']>;
  schema: Maybe<Scalars['String']>;
  template: Maybe<Scalars['String']>;
};

export type OperationError = {
  __typename?: 'OperationError';
  code: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  template: Maybe<Scalars['String']>;
};

export type ReorderChangeLogItemsInput = {
  __typename?: 'ReorderChangeLogItemsInput';
  order: Array<Scalars['ID']>;
};

export type ReorderModuleOperationsInput = {
  moduleId: Scalars['ID'];
  order: Array<Scalars['ID']>;
};

export type ReorderModulesInput = {
  order: Array<Scalars['ID']>;
};

export type ReorderOperationErrorsInput = {
  operationId: Scalars['ID'];
  order: Array<Scalars['ID']>;
};

export type ReorderOperationExamplesInput = {
  operationId: Scalars['ID'];
  order: Array<Scalars['ID']>;
};

export type ReorderStateExamplesInput = {
  order: Array<Scalars['ID']>;
};

export type SetAuthorNameInput = {
  authorName: Scalars['String'];
};

export type SetAuthorWebsiteInput = {
  authorWebsite: Scalars['String'];
};

export type SetInitialStateInput = {
  initialValue: Scalars['String'];
};

export type SetModelDescriptionInput = {
  description: Scalars['String'];
};

export type SetModelExtensionInput = {
  extension: Scalars['String'];
};

export type SetModelIdInput = {
  id: Scalars['String'];
};

export type SetModelNameInput = {
  name: Scalars['String'];
};

export type SetModuleDescriptionInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetModuleNameInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type SetOperationDescriptionInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorCodeInput = {
  errorCode?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorDescriptionInput = {
  errorDescription?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorNameInput = {
  errorName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorTemplateInput = {
  errorTemplate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationNameInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type SetOperationReducerInput = {
  id: Scalars['ID'];
  reducer?: InputMaybe<Scalars['String']>;
};

export type SetOperationSchemaInput = {
  id: Scalars['ID'];
  schema?: InputMaybe<Scalars['String']>;
};

export type SetOperationTemplateInput = {
  id: Scalars['ID'];
  template?: InputMaybe<Scalars['String']>;
};

export type SetStateSchemaInput = {
  schema: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  examples: Array<CodeExample>;
  initialValue: Scalars['String'];
  schema: Scalars['String'];
};

export type UpdateChangeLogItemInput = {
  __typename?: 'UpdateChangeLogItemInput';
  id: Scalars['ID'];
  newContent: Scalars['String'];
};

export type UpdateOperationExampleInput = {
  example: Scalars['String'];
  id: Scalars['ID'];
};

export type UpdateStateExampleInput = {
  id: Scalars['ID'];
  newExample: Scalars['String'];
};
