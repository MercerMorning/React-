import React, { useContext } from "react";
import Context from "./context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid black',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

export default function TodoItem({ todo, index, onChange }) {
    let { removeTodo } = useContext(Context)
    let classes = [];

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type='checkbox' style={styles.input} onChange={() => onChange(todo.id)} checked={todo.completed}/>
                <strong>{index}</strong>
                {todo.title}
            </span>
                <button onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
        )

}