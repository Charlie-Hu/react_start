import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function App(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get("/test.json").then(res => {
            console.log(res.data)
            setList(res.data.employees.employee)
        })
    }, [])

    return (
        <div>
            {
                list.map(item => <li key={item.id}>{item.firstName} {item.lastName}</li>)
            }
        </div>
    );
}
