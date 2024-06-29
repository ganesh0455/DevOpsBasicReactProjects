import React, { useState } from 'react'
import "./todo.css";

function Todo() {
    const [todoName, setTodoName] = useState('');
    const [todoDes, setTodoDes] = useState('');
    const submitForm = async (event) => {
        event.preventDefault();
        const todoDetails = { todoName, todoDes };
        console.log("Todo", todoDetails);
        // const url = "https://apis.ccbp.in/login";
        // const options = {
        //   method: "POST",
        //   body: JSON.stringify(userDetails)
        // }
        // const response = await fetch(url, options);
        // const data = await response.json();
        // console.log(response);
        // if (response.ok === true) {
        //   this.onSubmitSuccess(data.jwt_token);
        // }
        // else {
        //   this.onSubmitFailure(data)
        // }
        setTodoName("");
        setTodoDes("");
      }

      const onTodoNameChage = (event) => {
        setTodoName(event.target.value);
      }
      const onTodoDesChage = (event) => {
        setTodoDes(event.target.value);
      }
  return (
    <form className='todo-main-container' onSubmit={submitForm}>
        <input
            className='todo-name'
            placeholder='Task name'
            value={todoName}
            onChange={onTodoNameChage}
        />
        <textarea
            className='todo-description'
            placeholder='Task description'
            value={todoDes}
            onChange={onTodoDesChage}
        />
        <button type='submit'>submit</button>
    </form>
  )
}

export default Todo