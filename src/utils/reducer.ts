import { TransactionListState, action_input, ACTION, TRANSACTION_TYPE } from "../types/types";

export const reducer = (transactionList: TransactionListState[], action: action_input): TransactionListState[] => {
    switch (action.type) {
        case ACTION.ADD_Expense:
            return [
                ...transactionList,
                {
                    title: action.payload.title!,
                    amount: -(action.payload.amount!),
                    id: generateId(),
                    type: TRANSACTION_TYPE.EXPENSE
                }
            ];
        case ACTION.ADD_INCOME:
            return [
                ...transactionList,
                {
                    title: action.payload.title!,
                    amount: action.payload.amount!,
                    id: generateId(),
                    type: TRANSACTION_TYPE.INCOME
                }
            ];
        case ACTION.REMOVE_TRANSACTION:
            return transactionList.filter(transaction => transaction.id !== action.payload.id);
        default:
            return transactionList;
    }
}

const generateId = () => Math.ceil(Math.random() * 100000)