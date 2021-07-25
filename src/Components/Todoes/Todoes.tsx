import React, { useState } from 'react';
import ShearModal from './../ShearModal/ShearModal';

// interface ITodoList {
//     title: string,
//     email?: string,
//     number: string
// }

interface ITodoList {
    title: string,
    lastDate?: string,
    status: string
}

const Todoes = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [todoList, setTodoList] = useState<ITodoList[]>([])
    
    return (
        <div className="container py-5 main">
            <button className="btn btn-primary btn-sm ms-auto" onClick={handleShow}>
                Add Contact
            </button>
            <ShearModal show={show} handleClose={handleClose} todoList={todoList} setTodoList={setTodoList} />

        </div>
    );
};

export default Todoes;