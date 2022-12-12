import React, {Component} from 'react';
import CSwiper from "./swiper/swiper";
import SwiperItem from "./swiper/swiperItem";
import axios from "axios";

class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=211000&pageNum=1&pageSize=10&type=2&k=769878",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670384481255949986070529","bc":"410500"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data)
            this.setState({
                list: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                <CSwiper loop={true}>
                    {/*<div className="swiper-slide">1</div>*/}
                    {/*<div className="swiper-slide">2</div>*/}
                    {/*<div className="swiper-slide">3</div>*/}
                    {/*<SwiperItem>111</SwiperItem>*/}
                    {/*<SwiperItem>222</SwiperItem>*/}
                    {/*<SwiperItem>333</SwiperItem>*/}
                    {
                        this.state.list.map(item => <SwiperItem key={item.filmId}>
                            <div>{item.name}</div>
                            <img src={item.poster}
                                 alt="{item.name}" style={{width: "100%"}}/></SwiperItem>)
                            }
                        </CSwiper>
                        </div>
                        );
                    }
                    }

                    export default App;