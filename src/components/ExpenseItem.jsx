import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <tr>
      <td>{expense.description}</td>
      <td>₹{expense.amount.toFixed(2)}</td>
      <td>{expense.category}</td>
    </tr>
  );
};

export default ExpenseItem;
