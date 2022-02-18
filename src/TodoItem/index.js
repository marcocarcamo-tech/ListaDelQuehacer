import React from 'react'
import './TodoItem.css';
function TodoItem(props) {
    const onComplete = props.onComplete;
    const onDelete = props.onDelete;
   
    return (
        <div className="TodoItem">
            <li className="TodoItem-list">
            <div className="TodoItem-circle">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                ✔
            </span>
            </div>
            
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                <p>✖</p>
            </span>
            </li>
        </div>
        
    );
}

export { TodoItem };