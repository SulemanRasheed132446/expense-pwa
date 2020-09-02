import React from 'react'
import { Balance } from './Balance'
import { IncomeExpense } from './IncomeExpense'

export const Header = () => {
    return (
        <>
            <h2>Expense Tracker</h2>
            <div className="container">
                <Balance />
                <IncomeExpense />
            </div>
        </>
    )
}
