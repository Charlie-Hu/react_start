import React, {Component, useContext, useEffect, useState} from 'react';
import axios from 'axios'
import './css/index.css'

const Globalcontext = React.createContext()

export default function App() {
    const [employeeList, setEmployeeList] = useState([])
    const [info, setInfo] = useState("")

    useEffect(() => {
        axios.get(`./test.json`).then(
            res => {
                console.log(res.data.employees.employee)
                setEmployeeList(res.data.employees.employee)
            }
        )
    }, [])
    return (
        <Globalcontext.Provider value={{
            userId: 123,
            name: "Charlie",
            info: info,
            changInfo: (value) => {
                setInfo(value)
            }
        }}>
            <div>
                {
                    employeeList.map(item => <Employee key={item.id} {...item}/>)
                }
                <EmployeeDetail/>
            </div>
        </Globalcontext.Provider>
    );

}

function Employee(props) {
    let {photo, firstName, lastName, detail} = props
    const value = useContext(Globalcontext)
    // console.log(context)
    return (
        <div className="Employee" onClick={
            () =>
                // console.log(detail)
                value.changInfo(detail)
            // this.props.onEvent(detail)
        }>
            <img src={photo} alt="plt"/>
            <h4>{firstName} {lastName}</h4>
        </div>
    )
}

function EmployeeDetail() {
    const value = useContext(Globalcontext)
    return (
        <div className="EmployeeDetail">
            <h4>detail of Employee</h4>
            {value.info}
        </div>
    )
}
