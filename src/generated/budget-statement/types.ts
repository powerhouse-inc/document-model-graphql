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
  Attachment: string;
  DateTime: string;
  Unknown: unknown;
};

export type Account = {
  __typename?: 'Account';
  address: Scalars['String'];
  lineItems: Array<LineItem>;
  name: Scalars['String'];
};

export type AddAccountInput = {
  address: Scalars['String'];
  lineItems?: InputMaybe<Array<LineItemInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type AddAuditReportInput = {
  report: Scalars['Attachment'];
  status: AuditReportStatus | `${AuditReportStatus}`;
  timestamp?: InputMaybe<Scalars['DateTime']>;
};

export type AddCommentInput = {
  author?: InputMaybe<CommentAuthorInput>;
  comment: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<BudgetStatus | `${BudgetStatus}`>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
};

export type AddLineItemInput = {
  accountId: Scalars['ID'];
  actual?: InputMaybe<Scalars['Float']>;
  budgetCap?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<LineItemCategory>;
  comment?: InputMaybe<Scalars['String']>;
  forecast?: InputMaybe<Array<LineItemForecast>>;
  group?: InputMaybe<LineItemGroup>;
  headcountExpense?: InputMaybe<Scalars['Boolean']>;
  payment?: InputMaybe<Scalars['Float']>;
};

export type AddVestingInput = {
  amount?: InputMaybe<Scalars['String']>;
  amountOld?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  vested?: InputMaybe<Scalars['Boolean']>;
};

export type AuditReport = {
  __typename?: 'AuditReport';
  report: Scalars['Attachment'];
  status: AuditReportStatus | `${AuditReportStatus}`;
  timestamp: Scalars['DateTime'];
};

export type AuditReportStatus =
  | 'Approved'
  | 'ApprovedWithComments'
  | 'Escalated'
  | 'NeedsAction';

export type BudgetStatement = IDocument & {
  __typename?: 'BudgetStatement';
  created: Scalars['DateTime'];
  data: BudgetStatementState;
  documentType: Scalars['String'];
  lastModified: Scalars['DateTime'];
  name: Scalars['String'];
  operations: Array<IOperation>;
  revision: Scalars['Int'];
};

export type BudgetStatementDataInput = {
  accounts?: InputMaybe<Array<Account>>;
  auditReports?: InputMaybe<Array<AuditReport>>;
  comments?: InputMaybe<Array<Comment>>;
  ftes?: InputMaybe<Ftes>;
  month?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Owner>;
  quoteCurrency?: InputMaybe<Scalars['String']>;
  vesting?: InputMaybe<Array<Vesting>>;
};

export type BudgetStatementInput = {
  created?: InputMaybe<Scalars['DateTime']>;
  data: BudgetStatementDataInput;
  documentType?: InputMaybe<Scalars['String']>;
  lastModified?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  revision?: InputMaybe<Scalars['Int']>;
};

export type BudgetStatementState = {
  __typename?: 'BudgetStatementState';
  accounts: Array<Account>;
  auditReports: Array<AuditReport>;
  comments: Array<Comment>;
  ftes: Maybe<Ftes>;
  month: Maybe<Scalars['String']>;
  owner: Maybe<Owner>;
  quoteCurrency: Maybe<Scalars['String']>;
  vesting: Array<Vesting>;
};

export type BudgetStatus =
  | 'Draft'
  | 'Escalated'
  | 'Final'
  | 'Review';

export type Comment = {
  __typename?: 'Comment';
  author: CommentAuthor;
  comment: Scalars['String'];
  key: Scalars['String'];
  status: BudgetStatus | `${BudgetStatus}`;
  timestamp: Scalars['DateTime'];
};

export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  id: Maybe<Scalars['String']>;
  ref: Maybe<Scalars['String']>;
  roleLabel: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

export type CommentAuthorInput = {
  id?: InputMaybe<Scalars['String']>;
  ref?: InputMaybe<Scalars['String']>;
  roleLabel?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type DeleteAccountInput = {
  account: Scalars['String'];
};

export type DeleteAuditReportInput = {
  report: Scalars['String'];
};

export type DeleteCommentInput = {
  comment: Scalars['String'];
};

export type DeleteLineItemInput = {
  accountId: Scalars['ID'];
  category?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
};

export type DeleteVestingInput = {
  vesting: Scalars['String'];
};

export type Ftes = {
  __typename?: 'Ftes';
  forecast: Array<FtesForecast>;
  value: Scalars['Float'];
};

export type FtesForecast = {
  __typename?: 'FtesForecast';
  month: Scalars['String'];
  value: Scalars['Float'];
};

export type FtesForecastInput = {
  month: Scalars['String'];
  value: Scalars['Float'];
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

export type LineItem = {
  __typename?: 'LineItem';
  actual: Maybe<Scalars['Float']>;
  budgetCap: Maybe<Scalars['Float']>;
  category: Maybe<LineItemCategory>;
  comment: Maybe<Scalars['String']>;
  forecast: Array<LineItemForecast>;
  group: Maybe<LineItemGroup>;
  headcountExpense: Scalars['Boolean'];
  payment: Maybe<Scalars['Float']>;
};

export type LineItemCategory = {
  __typename?: 'LineItemCategory';
  id: Scalars['String'];
  ref: Scalars['String'];
  title: Scalars['String'];
};

export type LineItemForecast = {
  __typename?: 'LineItemForecast';
  budgetCap: Scalars['Float'];
  month: Scalars['String'];
  value: Scalars['Float'];
};

export type LineItemGroup = {
  __typename?: 'LineItemGroup';
  color: Scalars['String'];
  id: Scalars['String'];
  ref: Scalars['String'];
  title: Scalars['String'];
};

export type LineItemInput = {
  actual?: InputMaybe<Scalars['Float']>;
  budgetCap?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<LineItemCategory>;
  comment?: InputMaybe<Scalars['String']>;
  forecast?: InputMaybe<Array<LineItemForecast>>;
  group?: InputMaybe<LineItemGroup>;
  headcountExpense?: InputMaybe<Scalars['Boolean']>;
  payment?: InputMaybe<Scalars['Float']>;
};

export type LineItemsSortInput = {
  category?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
};

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
  addAccount: Maybe<BudgetStatementState>;
  addAuditReport: Maybe<BudgetStatementState>;
  addComment: Maybe<BudgetStatementState>;
  addLineItem: Maybe<BudgetStatementState>;
  addVesting: Maybe<BudgetStatementState>;
  deleteAccount: Maybe<BudgetStatementState>;
  deleteAuditReport: Maybe<BudgetStatementState>;
  deleteComment: Maybe<BudgetStatementState>;
  deleteLineItem: Maybe<BudgetStatementState>;
  deleteVesting: Maybe<BudgetStatementState>;
  loadState: Maybe<IDocument>;
  prune: Maybe<IDocument>;
  redo: Maybe<IDocument>;
  setFtes: Maybe<BudgetStatementState>;
  setMonth: Maybe<BudgetStatementState>;
  setName: Maybe<IDocument>;
  setOwner: Maybe<BudgetStatementState>;
  setQuoteCurrency: Maybe<BudgetStatementState>;
  undo: Maybe<IDocument>;
  updateAccount: Maybe<BudgetStatementState>;
  updateComment: Maybe<BudgetStatementState>;
  updateLineItem: Maybe<BudgetStatementState>;
  updateVesting: Maybe<BudgetStatementState>;
};


export type MutationAddAccountArgs = {
  input: AddAccountInput;
};


export type MutationAddAuditReportArgs = {
  input: AddAuditReportInput;
};


export type MutationAddCommentArgs = {
  input: AddCommentInput;
};


export type MutationAddLineItemArgs = {
  input: AddLineItemInput;
};


export type MutationAddVestingArgs = {
  input: AddVestingInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteAuditReportArgs = {
  input: DeleteAuditReportInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteLineItemArgs = {
  input: DeleteLineItemInput;
};


export type MutationDeleteVestingArgs = {
  input: DeleteVestingInput;
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


export type MutationSetFtesArgs = {
  input: SetFtesInput;
};


export type MutationSetMonthArgs = {
  input: SetMonthInput;
};


export type MutationSetNameArgs = {
  input: SetNameAction;
};


export type MutationSetOwnerArgs = {
  input: SetOwnerInput;
};


export type MutationSetQuoteCurrencyArgs = {
  input: SetQuoteCurrencyInput;
};


export type MutationUndoArgs = {
  input: UndoAction;
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateLineItemArgs = {
  input: UpdateLineItemInput;
};


export type MutationUpdateVestingArgs = {
  input: UpdateVestingInput;
};

export type Operation = IOperation & {
  __typename?: 'Operation';
  hash: Scalars['String'];
  index: Scalars['Int'];
  timestamp: Scalars['DateTime'];
  type: Scalars['String'];
};

export type Owner = {
  __typename?: 'Owner';
  id: Maybe<Scalars['String']>;
  ref: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
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
  budgetStatement: Maybe<BudgetStatement>;
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

export type SetFtesInput = {
  forecast: Array<FtesForecastInput>;
  value: Scalars['Float'];
};

export type SetMonthInput = {
  month: Scalars['String'];
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

export type SetOwnerInput = {
  id?: InputMaybe<Scalars['String']>;
  ref?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SetQuoteCurrencyInput = {
  quoteCurrency: Scalars['String'];
};

export type SortAccountsInput = {
  accounts: Array<Scalars['String']>;
};

export type SortLineItemsInput = {
  accountId: Scalars['ID'];
  lineItems: Array<LineItemsSortInput>;
};

export type Undo =
  | 'UNDO';

export type UndoAction = {
  input: Scalars['Int'];
  type: Undo | `${Undo}`;
};

export type UpdateAccountInput = {
  address: Scalars['String'];
  lineItems?: InputMaybe<Array<LineItem>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  author?: InputMaybe<CommentAuthorInput>;
  comment?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  status?: InputMaybe<BudgetStatus | `${BudgetStatus}`>;
  timestamp?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateLineItemInput = {
  accountId: Scalars['ID'];
  actual?: InputMaybe<Scalars['Float']>;
  budgetCap?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  forecast?: InputMaybe<Array<LineItemForecast>>;
  group?: InputMaybe<Scalars['String']>;
  headcountExpense?: InputMaybe<Scalars['Boolean']>;
  payment?: InputMaybe<Scalars['Float']>;
};

export type UpdateVestingInput = {
  amount?: InputMaybe<Scalars['String']>;
  amountOld?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  vested?: InputMaybe<Scalars['Boolean']>;
};

export type Vesting = {
  __typename?: 'Vesting';
  amount: Scalars['String'];
  amountOld: Scalars['String'];
  comment: Scalars['String'];
  currency: Scalars['String'];
  date: Scalars['String'];
  key: Scalars['String'];
  vested: Scalars['Boolean'];
};
