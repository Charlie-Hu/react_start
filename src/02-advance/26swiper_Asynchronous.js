import React, {Component} from 'react';
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css/bundle'

class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["111", "222", "333"]
            }, () => new Swiper(".swiper", {
                pagination: {
                    el: '.swiper-pagination',
                },
                modules: [Navigation, Pagination]
            }))

        }, 1000)
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     new Swiper(".swiper", {
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //         modules: [Navigation, Pagination]
    //     })
    // }

    render() {
        return (
            <div>
                <div className="swiper" style={{background: "grey", height: "200px"}}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map(item => <div className="swiper-slide" key={item}>{item}</div>)
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default App;