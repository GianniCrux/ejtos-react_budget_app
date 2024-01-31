import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const adjustAllocation = (name, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currency} {props.cost}</td>
        <td>
                <button
                    onClick={() => adjustAllocation(props.name, 10)}
                    className="btn btn-success rounded-circle"
                >
                    <FaPlus />
                </button>
            </td>
            <td>
                <button
                    onClick={() => adjustAllocation(props.name, -10)}
                    className="btn btn-danger rounded-circle"
                >
                    <FaMinus />
                </button>
            </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;