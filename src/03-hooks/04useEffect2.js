import React, {useEffect, useState} from 'react';

export default function App(props) {
    const [name,setName]= useState("charlie")

    useEffect(()=>{
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name ])

    return (
        <div>
            {name}
        </div>
    );
}
