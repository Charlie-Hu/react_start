import React, {useEffect, useMemo, useState} from 'react';
import store from "../redux/store";
import getCinemaListAction from "../redux/action/getCinemaListAction";

function Search(props) {
    const [cinemas, setCinemas] = useState(store.getState().cinemas_reducer.list)
    const [mytext, setMytext] = useState("")
    
    useEffect(() => {
        if (store.getState().cinemas_reducer.list.length === 0) {
            store.dispatch(getCinemaListAction())
        } else {
            console.log("use cache")
        }

        var unsubscribe = store.subscribe(() => {
            console.log("subscribe:", store.getState().cinemas_reducer.list)
            setCinemas(store.getState().cinemas_reducer.list)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const getCinemaList = useMemo(() => cinemas.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()) ||
        item.address.toUpperCase().includes(mytext.toUpperCase())), [cinemas, mytext])
    return (
        <div>
            <input type={mytext} onChange={(e)=>{
                // console.log(mytext)
                setMytext(e.target.value)}}/>
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemaId} style={{padding: "10px"}}>
                        <dt>{item.name}</dt>
                        <dd style={{fontSize: "12px", color: "grey"}}>{item.address}</dd>
                    </dl>)
            }
        </div>
    );
}

export default Search;