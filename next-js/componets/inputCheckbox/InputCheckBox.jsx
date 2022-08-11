import React from 'react';
import styles from '../../styles/list/ShowList.module.css'

const InputCheckBox = ({ selected, handle }) => {
    // const [c, setC] = React.useState(false);
    // setC(check);
    return (
        <input
            className={styles.listCheckbox}
            checked={selected}
            onChange={handle}
            type="checkbox" />
    )
}

export default InputCheckBox