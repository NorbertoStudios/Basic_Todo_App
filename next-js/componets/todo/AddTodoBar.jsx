import React, { useState } from 'react'
import styles from '../../styles/todo/AddTodoBar.module.css'
import { v4 as uuid } from 'uuid';

const AddTodoBar = ({ onSubmit }) => {
  const [todokName, setTodokName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!!todokName) {
      const newTodo = {
        id: uuid(),
        name: todokName,
        description: "",
        completed: false,
      }

      onSubmit(newTodo)
      setTodokName('')
    }
  }


  return (
    <form
      className={styles.inputLayout}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.box}
        type="text"
        value={todokName}
        placeholder="Write a new todo"
        onChange={event => setTodokName(event.target.value)}
      />
      <button type='submit' className={styles.btn}>Add</button>

    </form>
  )
}

export default AddTodoBar