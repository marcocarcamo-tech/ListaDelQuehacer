import React from 'react';
import { TodoContext} from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import "./App.css";


function AppUI() {

    const {
        error, 
        loading, 
        searchTodos, 
        completeTodos, 
        deleteTodos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
    

    //React solo nos permite enviar una etiqueta
    //por componente, con esta podemos enviar
    //varias etiqietas en jsx.
        <React.Fragment>
        <h1 className="main-title">Lista del Todo 📋</h1>
            <TodoCounter/>
            <TodoSearch />
            
            <TodoList >
            {error && <TodosError error ={ error }/>}
            {loading && <TodosLoading />}  
            {(!loading && !searchTodos.length) && <EmptyTodos />}      
            {searchTodos.map(Todo => (
                <TodoItem 
                    key={Todo.text} 
                    text={Todo.text}
                    completed={Todo.completed}
                    onComplete={() => completeTodos(Todo.text)}
                    onDelete={() => deleteTodos(Todo.text)} 
                />
            ))}
            </TodoList>

            {openModal && (
                <Modal>
                <TodoForm />
                </Modal>
            )}
        
            
            
        
            <CreateTodoButton
                setOpenModal={setOpenModal}    
                openModal={openModal}
            />      
            </React.Fragment>
            );
}

export { AppUI };