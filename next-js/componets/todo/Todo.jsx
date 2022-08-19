import React, { useState } from 'react'
import InputCheckBox from '../input/InputCheckBox'
import styles from '../../styles/todo/Todo.module.css'
import Image from 'next/image'

const Todo = ({ id, name, description, completed, onRemove, onChangeCompleted, onMove }) => {
  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    console.log(hover)
    setHover(!hover)
  }

  const showBtn = (hover ?
  <>
    <button
      onClick={() => onRemove(id)}
      className={styles.btn} >
      <Image
        src="/Basic_Todo_App/assets/icons/remove.png"
        alt="Remove icon"
        width={30}
        height={30} />
    </button >
    <button
      onClick={() => onMove(id)}
      className={styles.btn}>
      <Image
        src="/Basic_Todo_App/assets/icons/threedots.png"
        alt="Three Dots move icon"
        width={30}
        height={30} />
    </button>
    </> : <div className={styles.fillDiv}></div>
  )


  return (
    <div
      className={styles.listContainer}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    // className={`${styles.task} ${completed ? styles.completed : ''}`}
    >
      <InputCheckBox
        handle={e => onChangeCompleted(id)}
        selected={completed}
      />
      <a
        className={`${styles.listItem} ${completed ? styles.listItemCheck : ''}`}
      >
        {name}
      </a>
      {showBtn}

    </div>
  )
}

export default Todo