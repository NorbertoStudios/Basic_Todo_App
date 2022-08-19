import React from 'react'
import styles from '../../styles/input/InputBox.module.css'

const InputBox = ({ onInputChange, textValue }) => {
    return (
        <input className={styles.box}
            type="text"
            name="inputBox"
            value={textValue}
            onChange={onInputChange}
        />
    )
}

export default InputBox
