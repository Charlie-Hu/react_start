import React, {useState} from 'react';

export default function App() {
    const [name,setName] = useState("charlie")
    const [age,setAge] = useState("25")
    return (
        <div>
            <button onClick={()=>{setName("doudou");setAge("26")}}>click</button>
            {name}-{age}
        </div>
    );
}