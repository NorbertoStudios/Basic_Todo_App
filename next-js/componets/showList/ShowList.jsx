import React from 'react'
import styles from '../../styles/list/ShowList.module.css'
import InputDeleteBtn from '../input/InputDeleteBtn';
import InputCheckBox from '../input/InputCheckBox'

const ShowList = ({ listObject }) => {

    const [state, setState] = React.useState({ selections: [] });

    // This will select from the map and find a matching key to check against
    const handleChange = (e) => {
        console.log("showList is called")
        let key = e.currentTarget.id;
        let sel = state.selections
        let find = sel.indexOf(key)
        console.log(sel, find)
        if (find > -1) {
            sel.splice(find, 1)
        } else {
            sel.push(key)
        }

        setState({
            selections: sel,
        })
    }

    const handleDelete = (id) => {
        console.log(listObject);
        console.log(id);
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
        // console.log(e + " deleted");
        // e.persist();
        // // the id is the index of the array elements
        // let index = e.target;
        // // console.log(listText[index]);
        // console.log(index);
        // // make a separate copy of the array
        // let array = [...listText];
        // // delete item
        // array.splice(index, 1);
        // // save the new array in the old array
        // setListText(array);
    };


    return (
        <ul className={styles.list}>

            {listObject.map((item, i) => (

                <li className={styles.listContainer}
                    key={item.id}
                >
                    <InputCheckBox
                        handle={handleChange}
                        selected={state.selections.includes(item.id)}
                        // id={item.id}
                    />
                   <div
                        className={styles.listItem}
                        onClick={handleChange}
                        // id={item.id}
                    >
                        {item.name}
                    </div>

                    <InputDeleteBtn
                        label="Del"
                        del={() => handleDelete(item.id)}
                        // id={i}
                    />

                </li>
            ))}
        </ul>
    )
}

export default ShowList