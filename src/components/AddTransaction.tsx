import React, { useState, useContext } from 'react'
import { TRANSACTION_TYPE } from '../types/types'
import { ExpenseContext } from '../provider/ExpenseProvider';

export const AddTransaction = () => {
    const [title, settitle] = useState("");
    const [amount, setAmount] = useState("1");
    const [type, setType] = useState(TRANSACTION_TYPE.INCOME);
    const {
        addIncome,
        addExpense
    } = useContext(ExpenseContext)!;

    const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        settitle(e.currentTarget.value);
    }
    const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.currentTarget.value);
    }
    const typeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        switch (e.currentTarget.value) {
            case TRANSACTION_TYPE.EXPENSE:
                setType(TRANSACTION_TYPE.EXPENSE);
                break;
            case TRANSACTION_TYPE.INCOME:
                setType(TRANSACTION_TYPE.INCOME);
                break;
        }
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        switch (type) {
            case TRANSACTION_TYPE.EXPENSE:
                addExpense!({ title, amount });
                break;
            case TRANSACTION_TYPE.INCOME:
                addIncome!({ title, amount });
                break;
        }
        setAmount("1");
        settitle("");
        setType(TRANSACTION_TYPE.INCOME);
    }



    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        placeholder="Enter text..."
                        value={title}
                        onChange={titleHandler}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Title
                        <br />
                    </label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount..."
                        min="1" value={amount}
                        onChange={amountHandler}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="type">
                        Title
                    </label>
                    <br></br>
                    <select
                        id="type" className="type"
                        onChange={typeHandler}
                        value={type}
                        required
                    >
                        <option value={TRANSACTION_TYPE.INCOME} >{TRANSACTION_TYPE.INCOME}</option>
                        <option value={TRANSACTION_TYPE.EXPENSE} >{TRANSACTION_TYPE.EXPENSE}</option>

                    </select>
                </div>
                <button className="btn">Add transaction</button>
            </form>
            <button className="btn" >Notify me</button>

        </>
    )
}
