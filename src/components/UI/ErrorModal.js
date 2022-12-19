import React from "react";
import styles from './ErrorModal.module.css'
import Button from "./Button";

const ErrorModal = (props) => {

    const clicked = () => {
        props.error()
    }


    return(
        <div className={styles["backdrop"]}>
        <div className={styles["msgCont"]}>
            <div className={styles["header"]}>
                <header>{props.title}</header>
            </div>
            <div className={styles["section"]}>
                <section>{props.msg}</section>
            </div>
            <div className={styles["footer"]}>
                <footer><Button onClick={clicked}>Okay</Button></footer>
            </div>
        </div>
        </div>
    )
}

export default ErrorModal;