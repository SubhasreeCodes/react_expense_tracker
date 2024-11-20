import React from 'react';

const ExpenseSummary = ({ total }) => {
  return (
    <div className="expense-summary">
      <h2>Total Expenses: ₹{total.toFixed(2)}</h2>
    </div>
  );
};

export default ExpenseSummary;
