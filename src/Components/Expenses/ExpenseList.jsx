import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({filteredList}) {
    if (filteredList.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
      }
    
      return (
        <ul className='expenses-list'>
          {filteredList.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      );
}

export default ExpenseList