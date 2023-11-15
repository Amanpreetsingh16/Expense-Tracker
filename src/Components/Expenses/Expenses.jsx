import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import FilterExpense from "./FilterExpense";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses({ expense }) {
    const [filterYear, setFilterYear]= useState('2023')
    const filterChangeHandler=selectedYear=>{
        setFilterYear(selectedYear);
    }

    const filteredExpenses = expense.filter(expenseFilter => {
      return expenseFilter.date.getFullYear().toString() === filterYear;
    });
  return (
    <div>
      <Card className="expenses">
        <FilterExpense select={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList filteredList={filteredExpenses}/>
        {/* {filteredExpenses.length>0  ? filteredExpenses.map((expenseObj,idx)=>{
          return(
            <ExpenseItem 
            key={idx}
            title={expenseObj.title}
            amount={expenseObj.amount}
            date={expenseObj.date}/>
          )
        }):<p style={{color:'white',fontWeight: 'bold'}}>No expenses found</p> } */}
        {/* <ExpenseItem
          title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
        />
        <ExpenseItem
          title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
        />
        <ExpenseItem
          title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
