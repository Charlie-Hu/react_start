import React, {useState} from 'react';
import store from "../redux/store";

function City(props) {
    const [list] = useState(["perth", "sydney", "melbourne", "ADELAIDE"])
    return (
        <div>
            City:
            <ul>
                {
                    list.map(item => <li key={item} onClick={() => {
                        store.dispatch({
                            type: "changeCity",
                            value: item
                        })
                        props.history.push('/cinemas')
                    }}>{item}</li>)
                }
            </ul>

        </div>
    );
}

export default City;