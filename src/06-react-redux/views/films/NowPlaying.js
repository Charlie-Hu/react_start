import React, {useEffect, useState} from 'react';
import axios from "axios";

function NowPlaying(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4507762",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670384481255949986070529"}',
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
            {list.map(item => <li key={item.filmId} onClick={() => {
                handleChange(item.filmId)
            }}>{item.name}</li>)}
        </div>
    );
}

export default NowPlaying;