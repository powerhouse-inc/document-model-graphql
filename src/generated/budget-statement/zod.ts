import { z } from 'zod'
import { Account, AddAccountInput, AddAuditReportInput, AddCommentInput, AddLineItemInput, AddVestingInput, AuditReport, AuditReportStatus, BudgetStatement, BudgetStatementDataInput, BudgetStatementInput, BudgetStatementState, BudgetStatus, Comment, CommentAuthor, CommentAuthorInput, DeleteAccountInput, DeleteAuditReportInput, DeleteCommentInput, DeleteLineItemInput, DeleteVestingInput, Ftes, FtesForecast, FtesForecastInput, Load_State, LineItem, LineItemCategory, LineItemForecast, LineItemGroup, LineItemInput, LineItemsSortInput, LoadStateAction, LoadStateActionInput, LoadStateActionStateInput, Operation, Owner, Prune, PruneAction, PruneActionInput, Redo, RedoAction, Set_Name, SetFtesInput, SetMonthInput, SetNameAction, SetNameOperation, SetOwnerInput, SetQuoteCurrencyInput, SortAccountsInput, SortLineItemsInput, Undo, UndoAction, UpdateAccountInput, UpdateCommentInput, UpdateLineItemInput, UpdateVestingInput, Vesting } from './'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function AccountSchema(): z.ZodObject<Properties<Account>> {
  return z.object<Properties<Account>>({
    __typename: z.literal('Account').optional(),
    address: z.string(),
    lineItems: z.array(LineItemSchema()),
    name: z.string()
  })
}

export function AddAccountInputSchema(): z.ZodObject<Properties<AddAccountInput>> {
  return z.object<Properties<AddAccountInput>>({
    address: z.string(),
    lineItems: z.array(z.lazy(() => LineItemInputSchema())).nullish(),
    name: z.string().nullish()
  })
}

export function AddAuditReportInputSchema(): z.ZodObject<Properties<AddAuditReportInput>> {
  return z.object<Properties<AddAuditReportInput>>({
    report: z.string(),
    status: AuditReportStatusSchema,
    timestamp: z.string().datetime().nullish()
  })
}

export function AddCommentInputSchema(): z.ZodObject<Properties<AddCommentInput>> {
  return z.object<Properties<AddCommentInput>>({
    author: z.lazy(() => CommentAuthorInputSchema().nullish()),
    comment: z.string(),
    key: z.string().nullish(),
    status: BudgetStatusSchema.nullish(),
    timestamp: z.string().datetime().nullish()
  })
}

export function AddLineItemInputSchema(): z.ZodObject<Properties<AddLineItemInput>> {
  return z.object<Properties<AddLineItemInput>>({
    accountId: z.string(),
    actual: z.number().nullish(),
    budgetCap: z.number().nullish(),
    category: LineItemCategorySchema().nullish(),
    comment: z.string().nullish(),
    forecast: z.array(LineItemForecastSchema()).nullish(),
    group: LineItemGroupSchema().nullish(),
    headcountExpense: z.boolean().nullish(),
    payment: z.number().nullish()
  })
}

export function AddVestingInputSchema(): z.ZodObject<Properties<AddVestingInput>> {
  return z.object<Properties<AddVestingInput>>({
    amount: z.string().nullish(),
    amountOld: z.string().nullish(),
    comment: z.string().nullish(),
    currency: z.string().nullish(),
    date: z.string().nullish(),
    key: z.string().nullish(),
    vested: z.boolean().nullish()
  })
}

export function AuditReportSchema(): z.ZodObject<Properties<AuditReport>> {
  return z.object<Properties<AuditReport>>({
    __typename: z.literal('AuditReport').optional(),
    report: z.string(),
    status: AuditReportStatusSchema,
    timestamp: z.string().datetime()
  })
}

export const AuditReportStatusSchema = z.enum(['Approved', 'ApprovedWithComments', 'Escalated', 'NeedsAction']);

export function BudgetStatementSchema(): z.ZodObject<Properties<BudgetStatement>> {
  return z.object<Properties<BudgetStatement>>({
    __typename: z.literal('BudgetStatement').optional(),
    created: z.string().datetime(),
    data: BudgetStatementStateSchema(),
    documentType: z.string(),
    lastModified: z.string().datetime(),
    name: z.string(),
    operations: z.array(definedNonNullAnySchema),
    revision: z.number()
  })
}

export function BudgetStatementDataInputSchema(): z.ZodObject<Properties<BudgetStatementDataInput>> {
  return z.object<Properties<BudgetStatementDataInput>>({
    accounts: z.array(AccountSchema()).nullish(),
    auditReports: z.array(AuditReportSchema()).nullish(),
    comments: z.array(CommentSchema()).nullish(),
    ftes: FtesSchema().nullish(),
    month: z.string().nullish(),
    owner: OwnerSchema().nullish(),
    quoteCurrency: z.string().nullish(),
    vesting: z.array(VestingSchema()).nullish()
  })
}

export function BudgetStatementInputSchema(): z.ZodObject<Properties<BudgetStatementInput>> {
  return z.object<Properties<BudgetStatementInput>>({
    created: z.string().datetime().nullish(),
    data: z.lazy(() => BudgetStatementDataInputSchema()),
    documentType: z.string().nullish(),
    lastModified: z.string().datetime().nullish(),
    name: z.string().nullish(),
    revision: z.number().nullish()
  })
}

export function BudgetStatementStateSchema(): z.ZodObject<Properties<BudgetStatementState>> {
  return z.object<Properties<BudgetStatementState>>({
    __typename: z.literal('BudgetStatementState').optional(),
    accounts: z.array(AccountSchema()),
    auditReports: z.array(AuditReportSchema()),
    comments: z.array(CommentSchema()),
    ftes: FtesSchema().nullable(),
    month: z.string().nullable(),
    owner: OwnerSchema().nullable(),
    quoteCurrency: z.string().nullable(),
    vesting: z.array(VestingSchema())
  })
}

export const BudgetStatusSchema = z.enum(['Draft', 'Escalated', 'Final', 'Review']);

export function CommentSchema(): z.ZodObject<Properties<Comment>> {
  return z.object<Properties<Comment>>({
    __typename: z.literal('Comment').optional(),
    author: CommentAuthorSchema(),
    comment: z.string(),
    key: z.string(),
    status: BudgetStatusSchema,
    timestamp: z.string().datetime()
  })
}

export function CommentAuthorSchema(): z.ZodObject<Properties<CommentAuthor>> {
  return z.object<Properties<CommentAuthor>>({
    __typename: z.literal('CommentAuthor').optional(),
    id: z.string().nullable(),
    ref: z.string().nullable(),
    roleLabel: z.string().nullable(),
    username: z.string().nullable()
  })
}

export function CommentAuthorInputSchema(): z.ZodObject<Properties<CommentAuthorInput>> {
  return z.object<Properties<CommentAuthorInput>>({
    id: z.string().nullish(),
    ref: z.string().nullish(),
    roleLabel: z.string().nullish(),
    username: z.string().nullish()
  })
}

export function DeleteAccountInputSchema(): z.ZodObject<Properties<DeleteAccountInput>> {
  return z.object<Properties<DeleteAccountInput>>({
    account: z.string()
  })
}

export function DeleteAuditReportInputSchema(): z.ZodObject<Properties<DeleteAuditReportInput>> {
  return z.object<Properties<DeleteAuditReportInput>>({
    report: z.string()
  })
}

export function DeleteCommentInputSchema(): z.ZodObject<Properties<DeleteCommentInput>> {
  return z.object<Properties<DeleteCommentInput>>({
    comment: z.string()
  })
}

export function DeleteLineItemInputSchema(): z.ZodObject<Properties<DeleteLineItemInput>> {
  return z.object<Properties<DeleteLineItemInput>>({
    accountId: z.string(),
    category: z.string().nullish(),
    group: z.string().nullish()
  })
}

export function DeleteVestingInputSchema(): z.ZodObject<Properties<DeleteVestingInput>> {
  return z.object<Properties<DeleteVestingInput>>({
    vesting: z.string()
  })
}

export function FtesSchema(): z.ZodObject<Properties<Ftes>> {
  return z.object<Properties<Ftes>>({
    __typename: z.literal('Ftes').optional(),
    forecast: z.array(FtesForecastSchema()),
    value: z.number()
  })
}

export function FtesForecastSchema(): z.ZodObject<Properties<FtesForecast>> {
  return z.object<Properties<FtesForecast>>({
    __typename: z.literal('FtesForecast').optional(),
    month: z.string(),
    value: z.number()
  })
}

export function FtesForecastInputSchema(): z.ZodObject<Properties<FtesForecastInput>> {
  return z.object<Properties<FtesForecastInput>>({
    month: z.string(),
    value: z.number()
  })
}

export const Load_StateSchema = z.enum(['LOAD_STATE']);

export function LineItemSchema(): z.ZodObject<Properties<LineItem>> {
  return z.object<Properties<LineItem>>({
    __typename: z.literal('LineItem').optional(),
    actual: z.number().nullable(),
    budgetCap: z.number().nullable(),
    category: LineItemCategorySchema().nullable(),
    comment: z.string().nullable(),
    forecast: z.array(LineItemForecastSchema()),
    group: LineItemGroupSchema().nullable(),
    headcountExpense: z.boolean(),
    payment: z.number().nullable()
  })
}

export function LineItemCategorySchema(): z.ZodObject<Properties<LineItemCategory>> {
  return z.object<Properties<LineItemCategory>>({
    __typename: z.literal('LineItemCategory').optional(),
    id: z.string(),
    ref: z.string(),
    title: z.string()
  })
}

export function LineItemForecastSchema(): z.ZodObject<Properties<LineItemForecast>> {
  return z.object<Properties<LineItemForecast>>({
    __typename: z.literal('LineItemForecast').optional(),
    budgetCap: z.number(),
    month: z.string(),
    value: z.number()
  })
}

export function LineItemGroupSchema(): z.ZodObject<Properties<LineItemGroup>> {
  return z.object<Properties<LineItemGroup>>({
    __typename: z.literal('LineItemGroup').optional(),
    color: z.string(),
    id: z.string(),
    ref: z.string(),
    title: z.string()
  })
}

export function LineItemInputSchema(): z.ZodObject<Properties<LineItemInput>> {
  return z.object<Properties<LineItemInput>>({
    actual: z.number().nullish(),
    budgetCap: z.number().nullish(),
    category: LineItemCategorySchema().nullish(),
    comment: z.string().nullish(),
    forecast: z.array(LineItemForecastSchema()).nullish(),
    group: LineItemGroupSchema().nullish(),
    headcountExpense: z.boolean().nullish(),
    payment: z.number().nullish()
  })
}

export function LineItemsSortInputSchema(): z.ZodObject<Properties<LineItemsSortInput>> {
  return z.object<Properties<LineItemsSortInput>>({
    category: z.string().nullish(),
    group: z.string().nullish()
  })
}

export function LoadStateActionSchema(): z.ZodObject<Properties<LoadStateAction>> {
  return z.object<Properties<LoadStateAction>>({
    input: z.lazy(() => LoadStateActionInputSchema()),
    type: Load_StateSchema
  })
}

export function LoadStateActionInputSchema(): z.ZodObject<Properties<LoadStateActionInput>> {
  return z.object<Properties<LoadStateActionInput>>({
    operations: z.number(),
    state: z.lazy(() => LoadStateActionStateInputSchema())
  })
}

export function LoadStateActionStateInputSchema(): z.ZodObject<Properties<LoadStateActionStateInput>> {
  return z.object<Properties<LoadStateActionStateInput>>({
    data: z.unknown().nullish(),
    name: z.string()
  })
}

export function OperationSchema(): z.ZodObject<Properties<Operation>> {
  return z.object<Properties<Operation>>({
    __typename: z.literal('Operation').optional(),
    hash: z.string(),
    index: z.number(),
    timestamp: z.string().datetime(),
    type: z.string()
  })
}

export function OwnerSchema(): z.ZodObject<Properties<Owner>> {
  return z.object<Properties<Owner>>({
    __typename: z.literal('Owner').optional(),
    id: z.string().nullable(),
    ref: z.string().nullable(),
    title: z.string().nullable()
  })
}

export const PruneSchema = z.enum(['PRUNE']);

export function PruneActionSchema(): z.ZodObject<Properties<PruneAction>> {
  return z.object<Properties<PruneAction>>({
    input: z.lazy(() => PruneActionInputSchema()),
    type: PruneSchema
  })
}

export function PruneActionInputSchema(): z.ZodObject<Properties<PruneActionInput>> {
  return z.object<Properties<PruneActionInput>>({
    end: z.number().nullish(),
    start: z.number().nullish()
  })
}

export const RedoSchema = z.enum(['REDO']);

export function RedoActionSchema(): z.ZodObject<Properties<RedoAction>> {
  return z.object<Properties<RedoAction>>({
    input: z.number(),
    type: RedoSchema
  })
}

export const Set_NameSchema = z.enum(['SET_NAME']);

export function SetFtesInputSchema(): z.ZodObject<Properties<SetFtesInput>> {
  return z.object<Properties<SetFtesInput>>({
    forecast: z.array(z.lazy(() => FtesForecastInputSchema())),
    value: z.number()
  })
}

export function SetMonthInputSchema(): z.ZodObject<Properties<SetMonthInput>> {
  return z.object<Properties<SetMonthInput>>({
    month: z.string()
  })
}

export function SetNameActionSchema(): z.ZodObject<Properties<SetNameAction>> {
  return z.object<Properties<SetNameAction>>({
    input: z.string(),
    type: Set_NameSchema
  })
}

export function SetNameOperationSchema(): z.ZodObject<Properties<SetNameOperation>> {
  return z.object<Properties<SetNameOperation>>({
    __typename: z.literal('SetNameOperation').optional(),
    hash: z.string(),
    index: z.number(),
    input: z.string(),
    timestamp: z.string().datetime(),
    type: z.string()
  })
}

export function SetOwnerInputSchema(): z.ZodObject<Properties<SetOwnerInput>> {
  return z.object<Properties<SetOwnerInput>>({
    id: z.string().nullish(),
    ref: z.string().nullish(),
    title: z.string().nullish()
  })
}

export function SetQuoteCurrencyInputSchema(): z.ZodObject<Properties<SetQuoteCurrencyInput>> {
  return z.object<Properties<SetQuoteCurrencyInput>>({
    quoteCurrency: z.string()
  })
}

export function SortAccountsInputSchema(): z.ZodObject<Properties<SortAccountsInput>> {
  return z.object<Properties<SortAccountsInput>>({
    accounts: z.array(z.string())
  })
}

export function SortLineItemsInputSchema(): z.ZodObject<Properties<SortLineItemsInput>> {
  return z.object<Properties<SortLineItemsInput>>({
    accountId: z.string(),
    lineItems: z.array(z.lazy(() => LineItemsSortInputSchema()))
  })
}

export const UndoSchema = z.enum(['UNDO']);

export function UndoActionSchema(): z.ZodObject<Properties<UndoAction>> {
  return z.object<Properties<UndoAction>>({
    input: z.number(),
    type: UndoSchema
  })
}

export function UpdateAccountInputSchema(): z.ZodObject<Properties<UpdateAccountInput>> {
  return z.object<Properties<UpdateAccountInput>>({
    address: z.string(),
    lineItems: z.array(LineItemSchema()).nullish(),
    name: z.string().nullish()
  })
}

export function UpdateCommentInputSchema(): z.ZodObject<Properties<UpdateCommentInput>> {
  return z.object<Properties<UpdateCommentInput>>({
    author: z.lazy(() => CommentAuthorInputSchema().nullish()),
    comment: z.string().nullish(),
    key: z.string(),
    status: BudgetStatusSchema.nullish(),
    timestamp: z.string().datetime().nullish()
  })
}

export function UpdateLineItemInputSchema(): z.ZodObject<Properties<UpdateLineItemInput>> {
  return z.object<Properties<UpdateLineItemInput>>({
    accountId: z.string(),
    actual: z.number().nullish(),
    budgetCap: z.number().nullish(),
    category: z.string().nullish(),
    comment: z.string().nullish(),
    forecast: z.array(LineItemForecastSchema()).nullish(),
    group: z.string().nullish(),
    headcountExpense: z.boolean().nullish(),
    payment: z.number().nullish()
  })
}

export function UpdateVestingInputSchema(): z.ZodObject<Properties<UpdateVestingInput>> {
  return z.object<Properties<UpdateVestingInput>>({
    amount: z.string().nullish(),
    amountOld: z.string().nullish(),
    comment: z.string().nullish(),
    currency: z.string().nullish(),
    date: z.string().nullish(),
    key: z.string(),
    vested: z.boolean().nullish()
  })
}

export function VestingSchema(): z.ZodObject<Properties<Vesting>> {
  return z.object<Properties<Vesting>>({
    __typename: z.literal('Vesting').optional(),
    amount: z.string(),
    amountOld: z.string(),
    comment: z.string(),
    currency: z.string(),
    date: z.string(),
    key: z.string(),
    vested: z.boolean()
  })
}
