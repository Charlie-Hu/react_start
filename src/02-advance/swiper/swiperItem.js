import React, {Component} from 'react';

class SwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>

        );
    }
}

export default SwiperItem;