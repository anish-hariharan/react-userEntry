import React from "react";
import styles from './UsersItem.module.css'

const UsersItem = (props) => {

    return(
        <div className={styles["container"]}>
            <div className={styles["name"]}>
                <h3 className={styles["nameshow"]}>
                    {`${props.name}`}
                </h3>
            </div>
            <div className={styles["age"]}>
                <h3 className={styles["ageshow"]}>
                    {`${props.age}`}
                </h3>
            </div>
        </div>
    )
}

export default UsersItem;