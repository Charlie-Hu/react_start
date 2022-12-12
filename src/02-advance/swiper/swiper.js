import React, {Component} from 'react';
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css/bundle'

class CSwiper extends Component {
    // state = {
    //     list: []
    // }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         list: ["111", "222", "333"]
        //     },
        // () =>
        new Swiper(".swiper", {
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            modules: [Navigation, Pagination],
            loop:this.props.loop
        })
        // )

        // }, 1000)
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
                <div className="swiper" style={{background: "grey"}}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        );
    }
}

export default CSwiper;