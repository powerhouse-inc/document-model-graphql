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
  DateTime: string;
  Unknown: unknown;
};

export type AddModuleAction = {
  description: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type AddOperationAction = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  reducer?: InputMaybe<Scalars['String']>;
  schema?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
};

export type AddOperationErrorAction = {
  errorCode?: InputMaybe<Scalars['String']>;
  errorDescription?: InputMaybe<Scalars['String']>;
  errorName?: InputMaybe<Scalars['String']>;
  errorTemplate?: InputMaybe<Scalars['String']>;
  operationId: Scalars['ID'];
};

export type AddOperationExampleAction = {
  example: Scalars['String'];
  operationId: Scalars['ID'];
};

export type AddStateExampleAction = {
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

export type DeleteModuleAction = {
  id: Scalars['ID'];
};

export type DeleteOperationAction = {
  id: Scalars['ID'];
};

export type DeleteOperationErrorAction = {
  id: Scalars['ID'];
};

export type DeleteOperationExampleAction = {
  id: Scalars['ID'];
};

export type DeleteStateExampleAction = {
  id: Scalars['ID'];
};

export type DocumentModel = IDocument & {
  __typename?: 'DocumentModel';
  created: Scalars['DateTime'];
  data: DocumentModelData;
  documentType: Scalars['String'];
  lastModified: Scalars['DateTime'];
  name: Scalars['String'];
  operations: Array<IOperation>;
  revision: Scalars['Int'];
};

export type DocumentModelAction = AddModuleAction | AddOperationAction | AddOperationErrorAction | AddOperationExampleAction | AddStateExampleAction | DeleteModuleAction | DeleteOperationAction | DeleteOperationErrorAction | DeleteOperationExampleAction | DeleteStateExampleAction | MoveOperationAction | ReorderModuleOperationsAction | ReorderModulesAction | ReorderOperationErrorsAction | ReorderOperationExamplesAction | ReorderStateExamplesAction | SetAuthorNameAction | SetAuthorWebsiteAction | SetModelDescriptionAction | SetModelExtensionAction | SetModelIdAction | SetModelNameAction | SetModuleDescriptionAction | SetModuleNameAction | SetOperationDescriptionAction | SetOperationErrorCodeAction | SetOperationErrorDescriptionAction | SetOperationErrorNameAction | SetOperationErrorTemplateAction | SetOperationNameAction | SetOperationReducerAction | SetOperationSchemaAction | SetOperationTemplateAction | SetStateSchemaAction | UpdateOperationExampleAction | UpdateStateExampleAction;

export type DocumentModelData = {
  __typename?: 'DocumentModelData';
  author: Maybe<Author>;
  description: Maybe<Scalars['String']>;
  extension: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  modules: Array<Module>;
  name: Maybe<Scalars['String']>;
  state: Maybe<State>;
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

export type Module = {
  __typename?: 'Module';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  operations: Array<Operation>;
};

export type MoveOperationAction = {
  newModuleId: Scalars['ID'];
  operationId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addModule: Maybe<DocumentModelData>;
  addOperation: Maybe<DocumentModelData>;
  addOperationError: Maybe<DocumentModelData>;
  addOperationExample: Maybe<DocumentModelData>;
  addStateExample: Maybe<DocumentModelData>;
  deleteModule: Maybe<DocumentModelData>;
  deleteOperation: Maybe<DocumentModelData>;
  deleteOperationError: Maybe<DocumentModelData>;
  deleteOperationExample: Maybe<DocumentModelData>;
  deleteStateExample: Maybe<DocumentModelData>;
  loadState: Maybe<IDocument>;
  moveOperation: Maybe<DocumentModelData>;
  prune: Maybe<IDocument>;
  redo: Maybe<IDocument>;
  reorderModuleOperations: Maybe<DocumentModelData>;
  reorderModules: Maybe<DocumentModelData>;
  reorderOperationErrors: Maybe<DocumentModelData>;
  reorderOperationExamples: Maybe<DocumentModelData>;
  reorderStateExamples: Maybe<DocumentModelData>;
  setAuthorName: Maybe<DocumentModelData>;
  setAuthorWebsite: Maybe<DocumentModelData>;
  setModelDescription: Maybe<DocumentModelData>;
  setModelExtension: Maybe<DocumentModelData>;
  setModelId: Maybe<DocumentModelData>;
  setModelName: Maybe<DocumentModelData>;
  setModuleDescription: Maybe<DocumentModelData>;
  setModuleName: Maybe<DocumentModelData>;
  setName: Maybe<IDocument>;
  setOperationDescription: Maybe<DocumentModelData>;
  setOperationErrorCode: Maybe<DocumentModelData>;
  setOperationErrorDescription: Maybe<DocumentModelData>;
  setOperationErrorName: Maybe<DocumentModelData>;
  setOperationErrorTemplate: Maybe<DocumentModelData>;
  setOperationName: Maybe<DocumentModelData>;
  setOperationReducer: Maybe<DocumentModelData>;
  setOperationSchema: Maybe<DocumentModelData>;
  setOperationTemplate: Maybe<DocumentModelData>;
  setStateSchema: Maybe<DocumentModelData>;
  undo: Maybe<IDocument>;
  updateOperationExample: Maybe<DocumentModelData>;
  updateStateExample: Maybe<DocumentModelData>;
};


export type MutationAddModuleArgs = {
  input: AddModuleAction;
};


export type MutationAddOperationArgs = {
  input: AddOperationAction;
};


export type MutationAddOperationErrorArgs = {
  input: AddOperationErrorAction;
};


export type MutationAddOperationExampleArgs = {
  input: AddOperationExampleAction;
};


export type MutationAddStateExampleArgs = {
  input: AddStateExampleAction;
};


export type MutationDeleteModuleArgs = {
  input: DeleteModuleAction;
};


export type MutationDeleteOperationArgs = {
  input: DeleteOperationAction;
};


export type MutationDeleteOperationErrorArgs = {
  input: DeleteOperationErrorAction;
};


export type MutationDeleteOperationExampleArgs = {
  input: DeleteOperationExampleAction;
};


export type MutationDeleteStateExampleArgs = {
  input: DeleteStateExampleAction;
};


export type MutationLoadStateArgs = {
  input: LoadStateAction;
};


export type MutationMoveOperationArgs = {
  input: MoveOperationAction;
};


export type MutationPruneArgs = {
  input: PruneAction;
};


export type MutationRedoArgs = {
  input: RedoAction;
};


export type MutationReorderModuleOperationsArgs = {
  input: ReorderModuleOperationsAction;
};


export type MutationReorderModulesArgs = {
  input: ReorderModulesAction;
};


export type MutationReorderOperationErrorsArgs = {
  input: ReorderOperationErrorsAction;
};


export type MutationReorderOperationExamplesArgs = {
  input: ReorderOperationExamplesAction;
};


export type MutationReorderStateExamplesArgs = {
  input: ReorderStateExamplesAction;
};


export type MutationSetAuthorNameArgs = {
  input: SetAuthorNameAction;
};


export type MutationSetAuthorWebsiteArgs = {
  input: SetAuthorWebsiteAction;
};


export type MutationSetModelDescriptionArgs = {
  input: SetModelDescriptionAction;
};


export type MutationSetModelExtensionArgs = {
  input: SetModelExtensionAction;
};


export type MutationSetModelIdArgs = {
  input: SetModelIdAction;
};


export type MutationSetModelNameArgs = {
  input: SetModelNameAction;
};


export type MutationSetModuleDescriptionArgs = {
  input: SetModuleDescriptionAction;
};


export type MutationSetModuleNameArgs = {
  input: SetModuleNameAction;
};


export type MutationSetNameArgs = {
  input: SetNameAction;
};


export type MutationSetOperationDescriptionArgs = {
  input: SetOperationDescriptionAction;
};


export type MutationSetOperationErrorCodeArgs = {
  input: SetOperationErrorCodeAction;
};


export type MutationSetOperationErrorDescriptionArgs = {
  input: SetOperationErrorDescriptionAction;
};


export type MutationSetOperationErrorNameArgs = {
  input: SetOperationErrorNameAction;
};


export type MutationSetOperationErrorTemplateArgs = {
  input: SetOperationErrorTemplateAction;
};


export type MutationSetOperationNameArgs = {
  input: SetOperationNameAction;
};


export type MutationSetOperationReducerArgs = {
  input: SetOperationReducerAction;
};


export type MutationSetOperationSchemaArgs = {
  input: SetOperationSchemaAction;
};


export type MutationSetOperationTemplateArgs = {
  input: SetOperationTemplateAction;
};


export type MutationSetStateSchemaArgs = {
  input: SetStateSchemaAction;
};


export type MutationUndoArgs = {
  input: UndoAction;
};


export type MutationUpdateOperationExampleArgs = {
  input: UpdateOperationExampleAction;
};


export type MutationUpdateStateExampleArgs = {
  input: UpdateStateExampleAction;
};

export type Operation = IOperation & {
  __typename?: 'Operation';
  description: Maybe<Scalars['String']>;
  errors: Array<OperationError>;
  examples: Array<CodeExample>;
  hash: Scalars['String'];
  id: Scalars['ID'];
  index: Scalars['Int'];
  name: Maybe<Scalars['String']>;
  reducer: Maybe<Scalars['String']>;
  schema: Maybe<Scalars['String']>;
  template: Maybe<Scalars['String']>;
  timestamp: Scalars['DateTime'];
  type: Scalars['String'];
};

export type OperationError = {
  __typename?: 'OperationError';
  code: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  template: Maybe<Scalars['String']>;
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
  documentModel: Maybe<DocumentModel>;
};

export type Redo =
  | 'REDO';

export type RedoAction = {
  input: Scalars['Int'];
  type: Redo | `${Redo}`;
};

export type ReorderModuleOperationsAction = {
  moduleId: Scalars['ID'];
  order: Array<Scalars['ID']>;
};

export type ReorderModulesAction = {
  order: Array<Scalars['ID']>;
};

export type ReorderOperationErrorsAction = {
  operationId: Scalars['ID'];
  order: Array<Scalars['ID']>;
};

export type ReorderOperationExamplesAction = {
  operationId: Scalars['ID'];
  order: Array<Scalars['ID']>;
};

export type ReorderStateExamplesAction = {
  order: Array<Scalars['ID']>;
};

export type Set_Name =
  | 'SET_NAME';

export type SetAuthorNameAction = {
  authorName: Scalars['String'];
};

export type SetAuthorWebsiteAction = {
  authorWebsite: Scalars['String'];
};

export type SetModelDescriptionAction = {
  description: Scalars['String'];
};

export type SetModelExtensionAction = {
  extension: Scalars['String'];
};

export type SetModelIdAction = {
  id: Scalars['String'];
};

export type SetModelNameAction = {
  name: Scalars['String'];
};

export type SetModuleDescriptionAction = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetModuleNameAction = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

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

export type SetOperationDescriptionAction = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorCodeAction = {
  errorCode?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorDescriptionAction = {
  errorDescription?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorNameAction = {
  errorName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationErrorTemplateAction = {
  errorTemplate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type SetOperationNameAction = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type SetOperationReducerAction = {
  id: Scalars['ID'];
  reducer?: InputMaybe<Scalars['String']>;
};

export type SetOperationSchemaAction = {
  id: Scalars['ID'];
  schema?: InputMaybe<Scalars['String']>;
};

export type SetOperationTemplateAction = {
  id: Scalars['ID'];
  template?: InputMaybe<Scalars['String']>;
};

export type SetStateSchemaAction = {
  schema: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  examples: Array<CodeExample>;
  schema: Scalars['String'];
};

export type Undo =
  | 'UNDO';

export type UndoAction = {
  input: Scalars['Int'];
  type: Undo | `${Undo}`;
};

export type UpdateOperationExampleAction = {
  example: Scalars['String'];
  id: Scalars['ID'];
};

export type UpdateStateExampleAction = {
  id: Scalars['ID'];
  newExample: Scalars['String'];
};
