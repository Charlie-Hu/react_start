import React, {useState} from 'react';

export default function App(props) {

    const[count,setCount]=useState(0)
    var number=0
    return (
        <div>
            <button onClick={()=>{setCount(count+1);number++}}>one more</button>
            {count}-{number}
        </div>
    );
}
