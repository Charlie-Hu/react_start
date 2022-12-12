import React, {useState} from 'react';

export default function App(){
    const [text,setText] = useState("")
    const [list,setList] = useState(["aa","bb","cc"])
    const handleAdd=()=>{
        console.log(text)
        setList([...list,text])
        setText("")
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
            <input type="text" onChange={(event)=>setText(event.target.value)} value={text}/>
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
