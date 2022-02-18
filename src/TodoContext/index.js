import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: Todos,
        saveItem: saveTodos,
        loading, 
        error
      } = useLocalStorage('TodoS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = Todos.filter(todo => todo.completed === true).length;
      const totalTodos = Todos.length;
    
      let searchTodos = Todos.length;
    
      if (!searchValue.length >= 1) {
        searchTodos = Todos;
      } else {
        searchTodos = Todos.filter(Todo => {
          const TodoText = Todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return TodoText.includes(searchText);
        });
      }
    
      
    
      const completeTodos = (text) => {
        const TodoIndex = Todos.findIndex(Todo => Todo.text === text);
    
        const newItem = [...Todos];
        newItem[TodoIndex].completed = !newItem[TodoIndex].completed;
    
        saveTodos(newItem);
      };

      const addTodos = (text) => {
        
    
        const newItem = [...Todos];
        newItem.push({
          completed: false,
          text,
        });
    
        saveTodos(newItem);
      };
    
      const deleteTodos = (text) => {
        const TodoIndex = Todos.findIndex(Todo => Todo.text === text)
        const newItem = [...Todos];
        newItem.splice(TodoIndex, 1);
        //debugger;
        saveTodos(newItem);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue ,
            setSearchValue,
            searchTodos,
            addTodos,  
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }} >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };