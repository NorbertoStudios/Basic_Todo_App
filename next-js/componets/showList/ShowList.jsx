import React from 'react'
import styles from '../../styles/list/ShowList.module.css'
import InputDeleteBtn from '../inputButton/InputDeleteBtn';
import InputCheckBox from '../InputCheckbox/InputCheckBox'

const ShowList = ({ listObject, handleDelete }) => {

    const [state, setState] = React.useState({ selections: [] });

    // This will select from the map and find a matching key to check against
    const handleChange = (e) => {
        let key = e.currentTarget.id;
        let sel = state.selections
        let find = sel.indexOf(key)
        if (find > -1) {
            sel.splice(find, 1)
        } else {
            sel.push(key)
        }

        setState({
            selections: sel,
        })
    }

   

    const getId = (item, i) => (
        item + '_' + i
    )

    return (
        <ul className={styles.list}>

            {listObject.map((item, i) => (
                <div className={styles.listContainer}
                    key={getId(item, i)}
                >
                    <InputCheckBox
                        handle={handleChange}
                        selected={state.selections.includes(getId(item, i))}
                    />
                    <li
                        className={styles.listItem}
                        onClick={handleChange}
                        id={getId(item, i)}
                    >
                        {item}


                    </li>
                    <InputDeleteBtn
                        label="Del"
                        del={handleDelete}
                        id={i}
                    />

                </div>
            ))}
        </ul>
    )
}

export default ShowList