import React from "react";
import styles from "./UsersList.module.css"
import Card from "../UI/Card";
import UsersItem from "./UsersItem";

const UsersList = (props) => {

    return(
        <div className={styles["UsersList"]}>
            <Card>
                <div className={styles["container"]}>
                    {props.data.length === 0 ? <p className={styles["info"]}>no data to show!</p> : 
                        props.data.map((value) => (<UsersItem key={Math.floor(Math.random() * 100)}
                        name={value.name}
                        age={value.age}/>))}
                </div>
            </Card>
        </div>
    )
}

export default UsersList;