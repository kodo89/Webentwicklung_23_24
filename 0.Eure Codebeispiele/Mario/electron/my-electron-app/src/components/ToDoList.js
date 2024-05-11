import { event } from "jquery";
import React from "react";
import { flexColumn, flexRow, rootCss, flexCenter } from "./Styles";
import { cx } from "@emotion/css";

export default function ToDoList(props){
    const todos = props.todos;

    return(
        <div className={cx(rootCss, flexColumn)}>


            <TodoEntryList 
                todos={todos} 
                onDoneChanged={props.onDoneChanged} 
                filterFunction={(todo => !todo.done)}
                                onToDoDelete={props.onToDoDelete}
            ></TodoEntryList>



            {/* {todos.filter(todo => !todo.done).map((todo) => (
                <div key={todo.id} className={cx(flexRow, flexCenter)}>
                    
                    <input 
                    type="checkbox"
                    checked={todo.done}
                    onChange={event => {
                        const checked = event.target.checked
                        props.onDoneChanged && props.onDoneChanged(checked, todo.id); // index --> übergeben um welches todo es sich eigentlich handelt
                    }}>


                    </input>
                    <span style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.text}</span>
                </div> // warum will react einen key haben? Weil React beim Rendern den DOM überprüft was hat sich geändert --> damit braucht React eine eindeutige Kennung in einer Liste, war das Element schon im DOM oder ist das neu?
            ))} */}

            <hr style={{ width: '100%' }} />

            <TodoEntryList 
                todos={todos} 
                onDoneChanged={props.onDoneChanged} 
                filterFunction={(todo => todo.done)}
                onToDoDelete={props.onToDoDelete}
            ></TodoEntryList>
            


        </div>
    );
}

function TodoEntryList(props) {
    const todos = props.todos;
    return <>
        {todos.filter(props.filterFunction).map((todo) => (
            <div key={todo.id} className={cx(flexRow, flexCenter)}>
                    
                <input 
                type="checkbox"
                checked={todo.done}
                onChange={event => {
                        const checked = event.target.checked
                        props.onDoneChanged && props.onDoneChanged(checked, todo.id); // index --> übergeben um welches todo es sich eigentlich handelt
                }}>
                </input>
                    <span style={{textDecoration: todo.done ? "line-through" : "none"}}>{todo.text}</span>

                    <div style={{flex: 1}}></div>
                    <button onClick={() => props.onToDoDelete && props.onToDoDelete(todo.id)}>Delete</button>

            </div> // warum will react einen key haben? Weil React beim Rendern den DOM überprüft was hat sich geändert --> damit braucht React eine eindeutige Kennung in einer Liste, war das Element schon im DOM oder ist das neu?
            ))}
    </>
}
