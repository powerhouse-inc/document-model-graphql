import { z } from 'zod'
import { Add_Account, Account, AccountInput, AddAccount, AddAccountInput, AddAccountOperation, AddAccountPayload, BaseOperation, BudgetStatement, BudgetStatementData, Delete_Account, DeleteAccount, DeleteAccountInput, DeleteAccountOperation, DeleteAccountPayload } from './graphql'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const Add_AccountSchema = z.nativeEnum(Add_Account);

export function AccountSchema(): z.ZodObject<Properties<Account>> {
  return z.object<Properties<Account>>({
    __typename: z.literal('Account').optional(),
    address: z.string(),
    name: z.string().nullish()
  })
}

export function AccountInputSchema(): z.ZodObject<Properties<AccountInput>> {
  return z.object<Properties<AccountInput>>({
    address: z.string(),
    name: z.string().nullish()
  })
}

export function AddAccountSchema(): z.ZodObject<Properties<AddAccount>> {
  return z.object<Properties<AddAccount>>({
    input: z.lazy(() => AddAccountInputSchema()),
    type: Add_AccountSchema
  })
}

export function AddAccountInputSchema(): z.ZodObject<Properties<AddAccountInput>> {
  return z.object<Properties<AddAccountInput>>({
    accounts: z.array(z.lazy(() => AccountInputSchema()))
  })
}

export function AddAccountOperationSchema(): z.ZodObject<Properties<AddAccountOperation>> {
  return z.object<Properties<AddAccountOperation>>({
    __typename: z.literal('AddAccountOperation').optional(),
    index: z.number(),
    input: AddAccountPayloadSchema(),
    type: z.string()
  })
}

export function AddAccountPayloadSchema(): z.ZodObject<Properties<AddAccountPayload>> {
  return z.object<Properties<AddAccountPayload>>({
    __typename: z.literal('AddAccountPayload').optional(),
    accounts: z.array(AccountSchema())
  })
}

export function BaseOperationSchema(): z.ZodObject<Properties<BaseOperation>> {
  return z.object<Properties<BaseOperation>>({
    __typename: z.literal('BaseOperation').optional(),
    index: z.number(),
    type: z.string()
  })
}

export function BudgetStatementSchema(): z.ZodObject<Properties<BudgetStatement>> {
  return z.object<Properties<BudgetStatement>>({
    __typename: z.literal('BudgetStatement').optional(),
    created: z.string().nullish(),
    data: BudgetStatementDataSchema().nullish(),
    documentType: z.string().nullish(),
    lastModified: z.string().nullish(),
    name: z.string().nullish(),
    operations: z.array(BudgetStatementOperationSchema().nullable()).nullish(),
    revision: z.number().nullish()
  })
}

export function BudgetStatementDataSchema(): z.ZodObject<Properties<BudgetStatementData>> {
  return z.object<Properties<BudgetStatementData>>({
    __typename: z.literal('BudgetStatementData').optional(),
    accounts: z.array(AccountSchema().nullable()).nullish()
  })
}

export function BudgetStatementOperationSchema() {
  return z.union([AddAccountOperationSchema(), DeleteAccountOperationSchema()])
}

export const Delete_AccountSchema = z.nativeEnum(Delete_Account);

export function DeleteAccountSchema(): z.ZodObject<Properties<DeleteAccount>> {
  return z.object<Properties<DeleteAccount>>({
    input: z.lazy(() => DeleteAccountInputSchema()),
    type: Delete_AccountSchema
  })
}

export function DeleteAccountInputSchema(): z.ZodObject<Properties<DeleteAccountInput>> {
  return z.object<Properties<DeleteAccountInput>>({
    accounts: z.array(z.string())
  })
}

export function DeleteAccountOperationSchema(): z.ZodObject<Properties<DeleteAccountOperation>> {
  return z.object<Properties<DeleteAccountOperation>>({
    __typename: z.literal('DeleteAccountOperation').optional(),
    index: z.number(),
    input: DeleteAccountPayloadSchema(),
    type: z.string()
  })
}

export function DeleteAccountPayloadSchema(): z.ZodObject<Properties<DeleteAccountPayload>> {
  return z.object<Properties<DeleteAccountPayload>>({
    __typename: z.literal('DeleteAccountPayload').optional(),
    accounts: z.array(z.string())
  })
}
