import React, {useEffect, useMemo, useState} from 'react';
import store from "../redux/store";
import getCinemaListAction from "../redux/action/getCinemaListAction";
import cinemas_reducer from "../redux/reducer/cinemas_reducer";

function Cinemas(props) {
    const [city] = useState(store.getState().city_reducer.city)
    const [cinemas, setCinemas] = useState(store.getState().cinemas_reducer.list)


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

    return (
        <div>
            <div style={{overflow: "hidden"}}>
                <div onClick={() => {
                    props.history.push("/city")
                }} style={{float: "left"}}>{city}</div>
                <div style={{float: "right"}} onClick={() => {
                    props.history.push("/cinemas/search")
                }}>
                    search
                </div>
            </div>
            {
                cinemas.map(item =>
                    <dl key={item.cinemaId} style={{padding: "10px"}}>
                        <dt>{item.name}</dt>
                        <dd style={{fontSize: "12px", color: "grey"}}>{item.address}</dd>
                    </dl>)
            }
        </div>
    );
}

export default Cinemas;