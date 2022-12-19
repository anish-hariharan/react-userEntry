import React, {useState} from "react";
import style from './User.module.css'
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    let [name , setName] = useState('')
    let [age, setAge] = useState('')
    let [validName, setValidName] = useState(false)
    let [validAge, setValidAge] = useState(false)
    let [greater, setGreat] = useState()
    let [error, setError] = useState()

    const formSubmit = (e) => {
        e.preventDefault()
        name.trim().length === 0 ? setValidName(validName = true) : setValidName(validName = false);
        age.trim().length === 0 ? setValidAge(validAge = true) : setValidAge(validAge = false);
        Number(age) <= 0 ? setGreat(greater = true) : setGreat(greater = false);
        name.trim().length === 0 ? setError(error = true) : setError(error = false);

        if(validName || validAge){
            setError({
                title: "Error",
                msg: "Don't leave any blanks empty"
        })
        }else if(greater){
            setError({
                title: "Error",
                msg: "Don't give a negative age"
            })
        }else if(name.trim().length >= 10){
            setError({
                title: "Error",
                msg: "Don't give a too long name"
            })
        }
        else{
            props.getList({name: name, age: age})
            setName('')
            setAge('')
        }

    }

    const getName = (event) => {
        let value = event.target.value
        const regx = /^[a-z A-Z]*$/.test(value);
        if(regx){
            setName(name = event.target.value);
        }
        name.trim().length >= 0 && name.trim().length <= 10 ? setValidName(validName = false) : setValidName(validName = true)
    }

    const setBack = () => {
        setError(null);
    }

    const getAge = (e) => {
        age.trim().length >= 0 ? setValidAge(validAge = false) : setValidAge(validAge = true)
        setAge(age = e.target.value)
    }

    const cancel = () => {
        setName('')
        setAge('')
    }

    return(
        <>
            {error && <ErrorModal error={setBack} title={error.title} msg={error.msg}/>}
            <div className={style["form-container"]}>
                <Card>
                    <form className={style["form"]} onSubmit={formSubmit}>
                        <div className={style["mainCont"]}>
                            <div className={style["container"]}>
                                <div className={style["label"]}>
                                    <label htmlFor="UserName" className={!validName ? "" : style["lableFont"]}>UserName</label>
                                </div>
                                <div className={style["label-input"]}>
                                    <input className={!validName ? style["input"] : style["inputinvalid"]} id="UserName" type="text" onInput={getName} value={name}/>
                                </div>
                            </div>
                            <div className={style["container"]}>
                                <div className={style["label"]}>
                                    <label htmlFor="Age" className={!validAge ? "" : style["lableFont"]}>Age</label>
                                </div>
                                <div className={style["label-input"]}>
                                    <input max="100" className={!validAge ? style["input"] : style["inputinvalid"]} id="Age" type="number" onInput={getAge} value={age}/>
                                </div>
                            </div>
                        <div className={style["container-button"]}>
                            <Button type="submit">Add User</Button> <Button onClick={cancel}>Cancel</Button>
                        </div>
                    </div>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default AddUser;