import React, {useCallback, useState} from 'react';

export default function App() {
    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])
    const handleAdd = useCallback(
        () => {
            console.log(text)
            setList([...list, text])
            setText("")
        },[list,text]
    )
    const handleDel = useCallback(
        (index) => {
            var newList = [...list]
            newList.splice(index, 1)
            setList(newList)
            // console.log(index)
            // setList(list.splice(index,1))
        }, [list])

    return (
        <div>
            <input type="text" onChange={(event) => setText(event.target.value)} value={text}/>
            <button onClick={() => handleAdd()}>add</button>
            <ul>
                {
                    list.map((item, index) => <li key={item}>{item}
                        <button onClick={() => handleDel(index)}>del</button>
                    </li>)
                }
            </ul>
            {list.length === 0 && <div>no thing need to do</div>}
        </div>
    );


}
