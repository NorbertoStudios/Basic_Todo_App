import React from 'react'
import styles from '../../styles/input/InputDeleteBtn.module.css'

const InputDeleteBtn = ({ label, del, id }) => {
    return (
        <button
            className={styles.btn}
            onClick={() => del(id)}
            type="button"
        >
            <div className={styles.btnLabel}>
                {label}
            </div>

        </button>
    )
}

export default InputDeleteBtn