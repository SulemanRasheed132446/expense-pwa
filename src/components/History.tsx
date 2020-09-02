import React, { useContext } from 'react'
import { ExpenseContext } from '../provider/ExpenseProvider'
import { TransactionList } from './TransactionList';

export const History = () => {
    const {
        transactionList
    } = useContext(ExpenseContext);
    return (
        <>
            <h3>History</h3>
            <TransactionList
                transactionList={transactionList!}
            />
        </>
    )
}
