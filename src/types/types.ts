export type TransactionListState = {
    type: TRANSACTION_TYPE
    amount: number
    title: string
    id: number
}

export enum TRANSACTION_TYPE {
    EXPENSE = "Expense",
    INCOME = "Income",
}
export enum ACTION {
    REMOVE_TRANSACTION = "remove transaction",
    ADD_INCOME = "add income",
    ADD_Expense = "add expense",
}

export type action_input = {
    type: ACTION,
    payload: {
        amount?: number
        title?: string
        id?: number
    }
};

export type InputAddTransaction = {
    amount: string
    title: string
}