import React from 'react'
import styles from '../../styles/input/InputDeleteBtn.module.css'

const InputDeleteBtn = ({ label, del, id }) => {
    return (
        <button
            id={id}
            className={styles.btn}
            onClick={del}
            type="button"
        >
            <div className={styles.btnLabel}>
                {label}
            </div>

        </button>
    )
}

export default InputDeleteBtn