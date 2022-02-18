import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodos,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue)
        setOpenModal(false);
    }
    return (
        <div className='TodoForm-container'>
            <form onSubmit={onSubmit}>
            <label >Crea un nuevo Quehacer</label>
            <textarea
                className='TodoForm-textarea' 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Preparar el almuerzo de la semana'
            />
            <div className='Button-container'>
                <button className='Button'
                    type='button'
                    onClick={onCancel}
                >
                    Canelar
                </button>
                <button className='Button'
                type='submit'
                >
                    Crear 
                </button>
            </div>
        </form>
        </div>
        
    );
}

export { TodoForm };