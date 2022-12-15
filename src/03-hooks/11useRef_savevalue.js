import React, {useRef, useState} from 'react';

export default function App(props) {

    const[count,setCount]=useState(0)
    var number= useRef(0)
    console.log(number)
    return (
        <div>
            <button onClick={()=>{setCount(count+1);number.current++}}>one more</button>
            {count}-{number.current}
        </div>
    );
}
