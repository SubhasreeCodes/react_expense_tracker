import React from 'react';
import html2pdf from 'html2pdf.js';

const ExpensePDF = ({ expenses }) => {
  const generatePDF = () => {
    const element = document.getElementById('expense-list');

    if (!element || expenses.length === 0) {
      alert('No expenses to display for PDF generation.');
      return;
    }

    const options = {
      margin: 1,
      filename: 'expenses.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Create the PDF and stream it in a new window
    html2pdf()
      .from(element)
      .set(options)
      .output('blob')
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        window.open(url); // Open the PDF in a new tab
      });
  };

  return (
    <div>
      {expenses.length > 0 ? (
        <button onClick={generatePDF}>View PDF</button>
      ) : (
        <p>No expenses to display.</p>
      )}
      <div id="expense-list" style={{ display: 'block' }}>
        <h1>Expense Report</h1>
        <table border={1}>
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
      </div>
    </div>
  );
};

export default ExpensePDF;
