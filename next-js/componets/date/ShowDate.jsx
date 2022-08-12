import React from 'react'
import styles from '../../styles/date/ShowDate.module.css'

const ShowDate = () => {
    const date = new Date();
    const dayOfWeekName = date.toLocaleString("default", {
        weekday: "long",
    });
    const currentDate = date.toLocaleString("default", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    return (
        <div className={styles.dateContainer}>
            <div className={styles.weekName}>{dayOfWeekName}</div>
            <div className={styles.currentDate}>{currentDate}</div>
        </div>
    )
}

export default ShowDate