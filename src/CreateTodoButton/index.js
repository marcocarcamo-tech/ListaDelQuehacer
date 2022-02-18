import React from 'react'
import './CreateTodoButton.css'
function CreateTodoButton({setOpenModal, openModal}) {

    const onClickButton = () => {
        setOpenModal(!openModal);
    }
    return ( 
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí se abre el modal')}
            >
                +
            </button>
    );
}

export { CreateTodoButton };