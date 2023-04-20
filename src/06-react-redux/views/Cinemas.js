import React, {useEffect, useMemo, useState} from 'react';
import getCinemaListAction from "../redux/action/getCinemaListAction";
import cinemas_reducer from "../redux/reducer/cinemas_reducer";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";

function Cinemas(props) {
    const{list,getCinemaListAction} = props
    useEffect(() => {
        if (props.list.length === 0) {
            // store.dispatch(getCinemaListAction())
            props.getCinemaListAction()
        }
    }, [list,getCinemaListAction])

    return (
        <div>
            <div style={{overflow: "hidden"}}>
                <div onClick={() => {
                    props.history.push("/city")
                }} style={{float: "left"}}>{props.city}</div>
                <div style={{float: "right"}} onClick={() => {
                    props.history.push("/cinemas/search")
                }}>
                    search
                </div>
            </div>
            {
                props.list.map(item =>
                    <dl key={item.cinemaId} style={{padding: "10px"}}>
                        <dt>{item.name}</dt>
                        <dd style={{fontSize: "12px", color: "grey"}}>{item.address}</dd>
                    </dl>)
            }
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        list:state.cinemas_reducer.list,
        city:state.city_reducer.city
    }
}
const mapDispatchToProps={
    getCinemaListAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Cinemas);