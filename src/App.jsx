import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpensePDF from './components/ExpensePDF';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const calculateTotal = () => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  };

  console.log(expenses); // Check if expenses are being added

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseSummary total={calculateTotal()} />
      <ExpensePDF expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
