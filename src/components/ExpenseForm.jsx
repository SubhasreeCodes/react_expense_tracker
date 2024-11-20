import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Miscellaneous');
  const [income, setIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const expense = {
      id: uuidv4(),
      description,
      amount: parseFloat(amount),
      category,
    };

    addExpense(expense);
    setTotalExpenses((prev) => prev + expense.amount);
    setDescription('');
    setAmount('');
    setCategory('Miscellaneous');
  };

  const balance = income - totalExpenses;

  return (
    <div>
      <h2>Monthly Income: ₹{income}</h2>
      <h2>Total Expenses: ₹{totalExpenses}</h2>
      <h2>Balance: ₹{balance >= 0 ? balance : 'Insufficient funds'}</h2>
      
      <input
        type="number"
        placeholder="Enter Monthly Income"
        value={income}
        onChange={(e) => setIncome(parseFloat(e.target.value))}
        style={{ marginBottom: '10px', width: '200px' }}
      />
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
