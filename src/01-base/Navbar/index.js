import React, {Component} from 'react';
import kerwinPropType from 'prop-types'

console.log(123)

export default class Navbar extends Component {
    static proTypes = {
        itle: kerwinPropType.string,
        leftshow: kerwinPropType.bool
    }

    static defaultProps={
        title:'home',
        leftshow:false
    }

    render() {
        // console.log(this.props)
        let {title, leftshow} = this.props
        console.log({leftshow})
        return (
            <div>
                {leftshow && <button>back</button>}
                {title}
                <button>home</button>
            </div>
        );
    }
}
