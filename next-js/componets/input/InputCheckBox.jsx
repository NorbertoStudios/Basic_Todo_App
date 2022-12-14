import React from 'react';
import styles from '../../styles/input/InputCheckBox.module.css'

const InputCheckBox = ({ selected, handle, id }) => {
    return (
        <input
            className={styles.listCheckbox}
            checked={selected}
            onChange={handle}
            id={id}
            type="checkbox" />
    )
}

export default InputCheckBox