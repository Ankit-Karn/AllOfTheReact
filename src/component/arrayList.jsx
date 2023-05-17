import React, { useState } from 'react';
export default function Arraylist() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <h1>Delete Name</h1>
            <div>
                <div>
                    <input type="text"
                        value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleAddTodo}>Add</button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}