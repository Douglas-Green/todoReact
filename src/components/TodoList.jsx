/** @format */

import React, { useState, useRef } from "react";
import "./TodoList.css";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([
    "Buy groceries",
    "Clean the house",
    "Cook dinner",
  ]);
  const inputRef = useRef(null);

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText(""); // Clear input field after submission
    }
  };

  const handleFocus = () => {
    inputRef.current.placeholder = "";
  };

  const handleBlur = () => {
    inputRef.current.placeholder = "Type To-Do Here";
  };

  const handleRemove = index => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div
      id='todo-container'
      className='container'>
      <h1>To-Do List</h1>
      <p className='description'>
        A simple To-Do List app to help you keep track of your tasks.
      </p>
      <form
        onSubmit={handleSubmit}
        className='form'>
        <input
          id='todo-input'
          type='text'
          value={inputText}
          onChange={handleChange}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder='Type To-Do Here'
        />
        <button
          id='submit-btn'
          type='submit'>
          Add Item
        </button>
      </form>
      <ul className='list'>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>
              {item}
              <button
                id='remove-btn'
                onClick={() => handleRemove(index)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No items in the list.</li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
