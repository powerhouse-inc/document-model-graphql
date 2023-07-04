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

export type AddModuleInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AddOperationErrorInput = {
  errorCode?: InputMaybe<Scalars['String']>;
  errorDescription?: InputMaybe<Scalars['String']>;
  errorName?: InputMaybe<Scalars['String']>;
  errorTemplate?: InputMaybe<Scalars['String']>;
  operationId: Scalars['ID'];
};

export type AddOperationExampleInput = {
  example: Scalars['String'];
  operationId: Scalars['ID'];
};

export type AddOperationInput = {
  description?: InputMaybe<Scalars['String']>;
  moduleId: Scalars['ID'];
  name: Scalars['String'];
  reducer?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
};

export type AddStateExampleInput = {
  example: Scalars['String'];
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

export type DocumentModelInput = AddModuleInput | AddOperationErrorInput | AddOperationExampleInput | AddOperationInput | AddStateExampleInput | DeleteModuleInput | DeleteOperationErrorInput | DeleteOperationExampleInput | DeleteOperationInput | DeleteStateExampleInput | MoveOperationInput | ReorderModuleOperationsInput | ReorderModulesInput | ReorderOperationErrorsInput | ReorderOperationExamplesInput | ReorderStateExamplesInput | SetAuthorNameInput | SetAuthorWebsiteInput | SetModelDescriptionInput | SetModelExtensionInput | SetModelIdInput | SetModelNameInput | SetModuleDescriptionInput | SetModuleNameInput | SetOperationDescriptionInput | SetOperationErrorCodeInput | SetOperationErrorDescriptionInput | SetOperationErrorNameInput | SetOperationErrorTemplateInput | SetOperationNameInput | SetOperationReducerInput | SetOperationSchemaInput | SetOperationTemplateInput | SetStateSchemaInput | UpdateOperationExampleInput | UpdateStateExampleInput;

export type DocumentModelState = {
  __typename?: 'DocumentModelState';
  author: Author;
  description: Scalars['String'];
  extension: Scalars['String'];
  id: Scalars['String'];
  modules: Array<Module>;
  name: Scalars['String'];
  state: State;
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
  addModule: Maybe<DocumentModelState>;
  addOperation: Maybe<DocumentModelState>;
  addOperationError: Maybe<DocumentModelState>;
  addOperationExample: Maybe<DocumentModelState>;
  addStateExample: Maybe<DocumentModelState>;
  deleteModule: Maybe<DocumentModelState>;
  deleteOperation: Maybe<DocumentModelState>;
  deleteOperationError: Maybe<DocumentModelState>;
  deleteOperationExample: Maybe<DocumentModelState>;
  deleteStateExample: Maybe<DocumentModelState>;
  moveOperation: Maybe<DocumentModelState>;
  reorderModuleOperations: Maybe<DocumentModelState>;
  reorderModules: Maybe<DocumentModelState>;
  reorderOperationErrors: Maybe<DocumentModelState>;
  reorderOperationExamples: Maybe<DocumentModelState>;
  reorderStateExamples: Maybe<DocumentModelState>;
  setAuthorName: Maybe<DocumentModelState>;
  setAuthorWebsite: Maybe<DocumentModelState>;
  setModelDescription: Maybe<DocumentModelState>;
  setModelExtension: Maybe<DocumentModelState>;
  setModelId: Maybe<DocumentModelState>;
  setModelName: Maybe<DocumentModelState>;
  setModuleDescription: Maybe<DocumentModelState>;
  setModuleName: Maybe<DocumentModelState>;
  setOperationDescription: Maybe<DocumentModelState>;
  setOperationErrorCode: Maybe<DocumentModelState>;
  setOperationErrorDescription: Maybe<DocumentModelState>;
  setOperationErrorName: Maybe<DocumentModelState>;
  setOperationErrorTemplate: Maybe<DocumentModelState>;
  setOperationName: Maybe<DocumentModelState>;
  setOperationReducer: Maybe<DocumentModelState>;
  setOperationSchema: Maybe<DocumentModelState>;
  setOperationTemplate: Maybe<DocumentModelState>;
  setStateSchema: Maybe<DocumentModelState>;
  updateOperationExample: Maybe<DocumentModelState>;
  updateStateExample: Maybe<DocumentModelState>;
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
  schema: Scalars['String'];
};

export type UpdateOperationExampleInput = {
  example: Scalars['String'];
  id: Scalars['ID'];
};

export type UpdateStateExampleInput = {
  id: Scalars['ID'];
  newExample: Scalars['String'];
};
