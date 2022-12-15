import React, {Component, useContext, useEffect, useReducer, useState} from 'react';
import axios from 'axios'
import './css/index.css'

const Globalcontext = React.createContext()

const initialState = {
    employeeList:[],
    info: ""
}

const reducer = (prevState,action) => {
    const newState={...prevState}
    switch (action.type){
        case"resData":
            newState.employeeList=action.value
            return newState
        case"Employee":
            newState.info=action.value
            return newState
        default:
            return prevState
    }
}


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(`./test.json`).then(
            res => {
                console.log(res.data)
                dispatch({
                    type:"resData",
                    value:res.data.employees.employee
                })
            }
        )
    }, [])
    return (
        <Globalcontext.Provider value={
            {
                state,
                dispatch
            }
        }>
            <div>
                {
                    state.employeeList.map(item => <Employee key={item.id} {...item}/>)
                }
                <EmployeeDetail/>
            </div>
        </Globalcontext.Provider>
    );

}

function Employee(props) {
    let {photo, firstName, lastName, detail} = props
    const {dispatch} = useContext(Globalcontext)
    return (
        <div className="Employee" onClick={
            () => {
                dispatch({
                    type:"Employee",
                    value:detail
                })
            }
        }>
            <img src={photo} alt="plt"/>
            <h4>{firstName} {lastName}</h4>
        </div>
    )
}

function EmployeeDetail() {
    const {state} = useContext(Globalcontext)
    return (
        <div className="EmployeeDetail">
            <h4>detail of Employee</h4>
            {state.info}
        </div>
    )
}
