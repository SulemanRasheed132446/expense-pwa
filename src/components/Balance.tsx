import React, { useContext } from 'react'
import { ExpenseContext } from '../provider/ExpenseProvider'

export const Balance = () => {
    const { transactionList } = useContext(ExpenseContext)!;
    const transactionAmountList = transactionList?.map(transaction => transaction.amount);
    const balance = transactionAmountList?.reduce((prev, curr) => prev + curr, 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}.00</h1>
        </>
    )
}
