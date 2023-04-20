import React, {useEffect} from 'react';
// import store from "../redux/store";
import {connect} from "react-redux";
import {show,hide} from "../redux/actionCreator/TabbarActionCreator"

function Detail(props) {
    let {show,hide,match} = props
    useEffect(() => {
        console.log(props)
        // console.log(props.match.params.myId)
        // store.dispatch({
        //     type: "tabbar_hide"
        // })
        props.hide()
        return () => {
            props.show()
            // store.dispatch({
            //     type:"tabbar_show"
            // })
        }
    }, [match.params.myId,show,hide])
    return (
        <div>
            Detail
        </div>
    );
}

export default connect(null,{
    show,
    hide
})(Detail);