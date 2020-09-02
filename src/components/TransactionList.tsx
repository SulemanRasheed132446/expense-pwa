import React from 'react'
import { TransactionListState } from '../types/types'
import { Transaction } from './Transaction'
type Props = {
    transactionList: TransactionListState[]
}
export const TransactionList: React.FC<Props> = ({ transactionList }) => {
    return (
        <ul id="list" className="list">
            {
                transactionList?.map(transaction => (

                    <Transaction
                        title={transaction.title}
                        amount={transaction.amount}
                        id={transaction.id}
                        transactionType={transaction.type}
                        key={transaction.id}
                    />
                ))
            }
        </ul>
    )
}