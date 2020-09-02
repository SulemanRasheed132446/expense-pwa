import React, { useContext } from 'react'
import { TRANSACTION_TYPE } from '../types/types'
import { ExpenseContext } from '../provider/ExpenseProvider'
type Props = {
    transactionType: TRANSACTION_TYPE
    amount: number
    title: string
    id: number
}
export const Transaction: React.FC<Props> = ({
    transactionType,
    amount,
    title,
    id
}) => {

    const { removeTransaction } = useContext(ExpenseContext)!;
    return (
        <li className={transactionType === TRANSACTION_TYPE.INCOME ? "plus" : "minus"}>
            {title} <span>{amount}$</span>
            <button
                className="delete-btn"
                onClick={() => removeTransaction!(id)}
            >x</button>
        </li>
    )
}
