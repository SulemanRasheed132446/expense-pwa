import React, { useReducer, createContext } from 'react'
import { TransactionListState, InputAddTransaction, ACTION } from '../types/types'
import { reducer } from '../utils/reducer'

type ContextProps = {
    transactionList: TransactionListState[]
    addExpense: ({ title, amount }: InputAddTransaction) => void
    addIncome: ({ title, amount }: InputAddTransaction) => void
    removeTransaction: (id: number) => void
}


export const ExpenseContext = createContext<Partial<ContextProps>>({})
export const ExpenseProvider: React.FC = ({ children }) => {
    const [transactionList, dispatch] = useReducer(reducer, []);

    const addExpense = ({ title, amount }: InputAddTransaction) => {
        dispatch({
            type: ACTION.ADD_Expense,
            payload: {
                title,
                amount: Number(amount)
            }
        })
    }
    const addIncome = ({ title, amount }: InputAddTransaction) => {

        dispatch({
            type: ACTION.ADD_INCOME,
            payload: {
                title,
                amount: Number(amount)
            }
        })
    }

    const removeTransaction = (id: number) => {
        dispatch({
            type: ACTION.REMOVE_TRANSACTION,
            payload: {
                id
            }
        })
    }
    return (
        <ExpenseContext.Provider value={{
            transactionList,
            removeTransaction,
            addExpense,
            addIncome
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}
