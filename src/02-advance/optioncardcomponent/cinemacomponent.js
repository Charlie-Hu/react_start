import React, {Component} from 'react';
import axios from "axios";

class Cinema extends Component {
    constructor() {
        super()
        this.state = {
            cinemaList: [],
            constCinema: []
        }


        // axios.get('https://m.maizuo.com/gateway?cityId=621100&ticketFlag=1&k=1991688').then(res=>{}).catch(err=>{console.log('err')})
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=283872',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16684901465142153890103297","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            // console.log(res.data.data.cinemas)
            this.setState({
                cinemaList: res.data.data.cinemas,
                constCinema: res.data.data.cinemas
            })
        })


    }

    render() {
        return (
            <div>
                <input onInput={
                    this.autoInput
                }/>
                {this.state.cinemaList.map(item =>
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                    </dl>)}
            </div>
        );
    }

    autoInput = (event) => {
        // console.log(event.target.value)
        var newList = this.state.constCinema.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase())
            || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        // console.log(newList)
        this.setState({
            cinemaList: newList
        })
    }
}

export default Cinema;