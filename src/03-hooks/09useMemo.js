import React, {Component, useEffect, useMemo, useState} from 'react';
import axios from "axios";

export default function Cinema() {
    const [cinemaList, setCinemaList] = useState([])
    const [myText, setMyText] = useState("")

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=283872',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16684901465142153890103297","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            setCinemaList(res.data.data.cinemas)
        })
    }, [])

    const getCinemaList = useMemo(()=>cinemaList.filter(item => item.name.toUpperCase().includes(myText.toUpperCase())
            || item.address.toUpperCase().includes(myText.toUpperCase())),[cinemaList,myText])

    return (
        <div>
            <input value={myText}
                   onChange={(event) => {
                       setMyText(event.target.value)
                   }}/>
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>)
            }
        </div>
    )
}
