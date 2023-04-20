import React, {useState} from 'react';
import store from "../redux/store";
import {connect} from "react-redux";

function City(props) {
    const [list] = useState(["perth", "sydney", "melbourne", "ADELAIDE"])
    return (
        <div>
            City:
            <ul>
                {
                    list.map(item => <li key={item} onClick={() => {
                        props.change(item)
                        props.history.push('/cinemas')
                    }}>{item}</li>)
                }
            </ul>

        </div>
    );
}
const MapDispatchToProps = {
    change(item){
        return{
            type:"changeCity",
            value:item
        }
    }
}
export default connect(null,MapDispatchToProps)(City);