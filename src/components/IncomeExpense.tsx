import React, { useContext } from 'react'
import { ExpenseContext } from '../provider/ExpenseProvider'

export const IncomeExpense = () => {
    const { transactionList } = useContext(ExpenseContext);
    const transactionAmountList = transactionList?.map(transaction => transaction.amount);
    const incomeList = transactionAmountList?.filter(transaction => transaction > 0);
    const expenseList = transactionAmountList?.filter(transaction => transaction < 0);

    const income = incomeList?.reduce((curr, prev) => curr + prev, 0)
    const expense = expenseList?.reduce((curr, prev) => curr + prev, 0)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expense}.00</p>
            </div>
        </div>
    )
}
