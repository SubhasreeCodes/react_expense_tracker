import React from 'react';


const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>₹{expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No expenses added.</p>
      )}
    </div>
  );
};

export default ExpenseList;
