import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const enteredValue = parseInt(event.target.value, 10);

        if (enteredValue < totalExpenses) {
            alert("Error: The budget cannot be lower than the total spending.");
            return;
        }

        if (enteredValue > 20000) {
            alert("Error: The budget cannot exceed £20,000.");
            return;
        }

        setNewBudget(enteredValue);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} {newBudget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                min={totalExpenses} // Set the minimum allowed value
                max="20000"  // Set the maximum allowed value
            />
        </div>
    );
};

export default Budget;