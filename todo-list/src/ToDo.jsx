import React, { useState, useEffect } from 'react';

const ToDo = () => {
    const [text, setText] = useState(''); // input field
    const [todoList, setTodoList] = useState([]); // storgae data for view the record
    const [btnFlag, setbtnFlag] = useState(true); // true - Add List / false - Update List
    const [updateId, setUpdateId] = useState(null); // storge the update id to update the todo list..

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todo_details'));
        if (storedTodos) {
            setTodoList(storedTodos);
        }
    }, []);

    const handleAddTodo = () => {
        if (text.trim() === '') return;

        const newTodo = {
            id: todoList.length + 1,
            content: text,
            completed: false,
        };

        const updatedTodos = [...todoList, newTodo];
        setTodoList(updatedTodos);
        localStorage.setItem('todo_details', JSON.stringify(updatedTodos));

        setText('');
    };

    const handleEdit = (list) => {
        setbtnFlag(false);
        setUpdateId(list.id);
        setText(list.content);
    };

    const handleUpdateTodo = () => {

        const updatedList = todoList.map((item) => {
            if (item.id === updateId) {
                return { ...item, content: text };
            }
            return item;
        });

        setTodoList(updatedList);
        localStorage.setItem('todo_details', JSON.stringify(updatedList));

        // reset states
        setbtnFlag(true);
        setUpdateId(null);
        setText('');
    };

    const handleDelete = (listId) => {
        const deleteList = todoList.filter((list) => list.id !== listId);
        setTodoList(deleteList);
        localStorage.setItem('todo_details', JSON.stringify(deleteList));
    };

    // const handleCheckboxChange = (listId) => {
    //     let updatedList = todoList.map((item) => {
    //         if (item.id === listId) {
    //             return { ...item, completed: !item.completed };
    //         }
    //         return item;
    //     });

    //     const fndInd = updatedList.findIndex((list) => list.completed === true);
    //     if (fndInd !== -1) {
    //         const completedItem = updatedList.splice(fndInd, 1)[0];
    //         updatedList = [...updatedList, completedItem];
    //     }

    //     const falCase = updatedList.filter((list) => !list.completed);
    //     const truCase = updatedList.filter((list) => list.completed);
    //     falCase.sort((a, b) => a.id - b.id);

    //     const finalArr = [...falCase, ...truCase]
    //     setTodoList(finalArr);

    //     localStorage.setItem('todo_details', JSON.stringify(finalArr));
    // };

    const handleCheckboxChange = (listId) => {
        const updatedList = todoList.map(item =>
            item.id === listId ? { ...item, completed: !item.completed } : item
        );

        updatedList.sort((a, b) => a.completed - b.completed || a.id - b.id);
        console.log(updatedList);
        setTodoList(updatedList);
        localStorage.setItem('todo_details', JSON.stringify(updatedList));
    };


    return (
        <div className="p-4 w-[50%] mx-auto">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo..."
                className="w-full py-2 px-4 border rounded focus:outline-none focus:border-blue-500"
            />

            {btnFlag &&
                <button
                    onClick={handleAddTodo}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add List
                </button>
            }

            {!btnFlag &&

                <button
                    onClick={handleUpdateTodo}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Update List
                </button>

            }

            {todoList.map((todo) => (
                <div className='flex justify-between mb-3'>
                    <div key={todo.id} className={`py-2 ${todo.completed ? 'line-through ' : ''}`}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleCheckboxChange(todo.id)}
                        />
                        {todo.content}

                    </div>
                    <div>
                        <button className='bg-blue-500 p-2 rounded mr-3' onClick={() => handleEdit(todo)}>Edit</button>
                        <button className='bg-red-500 p-2 rounded mr-3' onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ToDo;
