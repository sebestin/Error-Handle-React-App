import React, { useRef, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrrorModal";
import classes from "./Adduser.module.css";
const AddUser=(props)=>
{
    const nameInputref=useRef();
    const ageInputRef=useRef();
    //const [enteredUserName,setUserName]=useState("");
    //const [enteredAge,setAge]=useState("");
    const [error,setError]=useState("");
    //const userNameChangeHandler=(event)=>
    //{
    //        setUserName(event.target.value)
    //}
    //const ageChangeHandler=(event)=>
    //{
    //        setAge(event.target.value)
    //}

    const addUserHandler=(event)=>
    {
            event.preventDefault();
            const enteredUserName=nameInputref.current.value;
            const enteredAge=ageInputRef.current.value;
            //console.log(nameInputref.current.value);
            if(enteredUserName.trim().length===0 ||enteredAge.trim().length===0)
            {
                setError({
                    title:"Invalid Input",
                    message:"please Enter valid name And age(non-empty value)"
                })
                return;
            }
            if(+enteredAge<1)
            {
                setError({
                    title:"Invalid Age",
                    message:"please Enter a valid age(>0)"
                })
                return;
            }
            const datta={
                name:enteredUserName,
                age:enteredAge,
                id:Math.random().toString()
            }
            props.onAdduser(datta);
            //setUserName("");
            //setAge("");
    }
    const errorHandler=()=>
    {
        setError(null);
        //setUserName("");
        //setAge("");
    }
    return(
        <>
        {/*<React.Fragment>*/}            {/*This is in-built in react*/}
        {/*<Wrapper>*/}             {/*this is made by user*/}
                {error && (
                        <ErrorModel title={error.title}
                            message={error.message}
                            onConfirm={errorHandler}></ErrorModel>
                )
                }
        <Card className={classes.input}>
        <form>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" 
                //onChange={userNameChangeHandler} 
                //value={enteredUserName} 
                ref={nameInputref}/>
                <label htmlFor="age">Age(years)</label>
                <input id="age" type="number" 
                //onChange={ageChangeHandler} 
                //value={enteredAge} 
                ref={ageInputRef}/>
               {/* <button type="submit" onClick={addUserHandler}>AddUser</button>*/}
               <Button type="submit" onClick={addUserHandler}>AddUser</Button>
                
        </form>
        </Card>
        {/*</Wrapper>*/}
        {/*</React.Fragment>*/}
        </>
    )
}
export default AddUser;

{/*Fragment are a modern syntax for adding multiple element to a React component without Wrapping it in a n extra node dom*/}