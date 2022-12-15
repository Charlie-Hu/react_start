import React, {useRef, useState} from 'react';

export default function App(){

    const myText = useRef()
    const [list,setList] = useState(["aa","bb","cc"])
    const handleAdd=()=>{
        console.log(myText.current.value)
        setList([...list,myText.current.value])
        myText.current.value="" 
    }
    const handleDel=(index)=>{
        var newList=[...list]
        newList.splice(index,1)
        setList(newList)
        // console.log(index)
        // setList(list.splice(index,1))
    }

    return (
        <div>
            <input type="text" ref={myText}/>
            <button onClick={()=>handleAdd()}>add</button>
            <ul>
                {
                    list.map((item,index)=><li key={item}>{item} <button onClick={()=>handleDel(index)}>del</button></li>)
                }
            </ul>
            {list.length===0 && <div>no thing need to do</div>}
        </div>
    );


}
