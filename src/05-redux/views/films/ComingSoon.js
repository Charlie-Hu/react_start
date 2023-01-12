import React, {useEffect, useState} from 'react';
import axios from "axios";

function ComingSoon(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=410500&pageNum=1&pageSize=10&type=2&k=9145816",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16719553361158090686726145","bc":"410500"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films)
            setList(res.data.data.films)
        })
    }, [])
    const handleChange = (id) => {
        // console.log(id)
        props.history.push("/detail/"+id)
        // props.history.push({pathname: "/detail", query: {id: id}})
    }

    return (
        <div>
            {
                list.map(item => <li key={item.filmId} onClick={() => {
                    handleChange(item.filmId)
                }}>{item.name}</li>)
            }
        </div>
    );
}

export default ComingSoon;