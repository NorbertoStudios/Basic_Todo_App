import React from 'react'
import styles from '../../styles/input/InputButton.module.css'

const InputButton = ({ label, getInput }) => {
    return (
        <button 
            className={styles.btn}
            onClick={getInput}
            type="button"
        >
            {label}
        </button>
    )
}

export default InputButton