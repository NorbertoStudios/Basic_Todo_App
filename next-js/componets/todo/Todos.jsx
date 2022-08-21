import React from 'react'
import Todo from './Todo'
import styles from '../../styles/todo/Todos.module.css'

const Todos = ({ todosList, onRemoveTodo, onChangeCompletedTodo, onMoveTodo }) => {

  return (
    <ul
      className={styles.todosList}
    >
      {todosList.map(todo => (
        <Todo
          {...todo.data()}
          key={todo.id}
          id={todo.id}
          onMove={onMoveTodo}
          onRemove={onRemoveTodo}
          onChangeCompleted={onChangeCompletedTodo}
        />
      ))}
    </ul>
  )
}

export default Todos