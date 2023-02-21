import React from 'react';
import TodoInput from './components/TodoInput';
import TodolistsEdit2 from './components/TodolistsEdit2';
import TodoContext2 from './context/TodoContext2';

const App3 = () => {
    return (
        <div>
            <TodoContext2>
                <TodoInput />
                <TodolistsEdit2 />
            </TodoContext2>
        </div>
    );
};

export default App3;