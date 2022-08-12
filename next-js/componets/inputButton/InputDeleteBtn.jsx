import React from 'react'
import styles from '../../styles/input/InputDeleteBtn.module.css'

const InputDeleteBtn = ({ label }) => {
    return (
        <button
            className={styles.btn}
            //   onClick={getInput}
            type="button"
        >
            <div className={styles.btnLabel}>
                {label}
            </div>

        </button>
    )
}

export default InputDeleteBtn