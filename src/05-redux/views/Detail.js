import React, {useEffect} from 'react';
import store from "../redux/store";

function Detail(props) {

    useEffect(() => {
        console.log(props.match.params.myId)
        store.dispatch({
            type: "tabbar_hide"
        })
        return () => {
            store.dispatch({
                type:"tabbar_show"
            })
        }
    }, [])
    return (
        <div>
            Detail
        </div>
    );
}

export default Detail;