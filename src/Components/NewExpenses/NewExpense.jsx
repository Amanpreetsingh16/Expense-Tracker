import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddData }) {
  const [isEditing, setIsEditing] = useState(false);

  const dataSaveHandle = (savedData) => {
    const savedFormData = { ...savedData, id: Math.random() };
    onAddData(savedFormData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
        {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && <ExpenseForm onSaveExpenseData={dataSaveHandle} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;

