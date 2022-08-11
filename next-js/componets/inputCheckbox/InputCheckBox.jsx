import React from 'react';
import styles from '../../styles/list/ShowList.module.css'

const InputCheckBox = ({ selected, handle }) => {
    return (
        <input
            className={styles.listCheckbox}
            checked={selected}
            onChange={handle}
            type="checkbox" />
    )
}

export default InputCheckBox