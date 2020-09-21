import React from 'react';

export default function TodoItem(props){
   // styles to checkedbox
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    };

    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.checked} 
                onChange={()=>props.chackbox(props.id)}/>
                
            <p style={ props.checked ? completedStyle : null }>{props.task}</p>
        </div>
    );
};