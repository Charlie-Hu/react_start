import React, {Component} from 'react';

// class Tabbar extends Component {
//     // state = {
//     //     list: [
//     //         {
//     //             id: 1,
//     //             text: 'Movie',
//     //         },
//     //         {
//     //             id: 2,
//     //             text: 'Cinema',
//     //         },
//     //         {
//     //             id: 3,
//     //             text: 'UserInfo',
//     //         }
//     //     ],
//     //     // current: 0
//     // }
//
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.props.list.map((item, index) =>
//                         <li key={item.id} className={this.props.current === index ? "active" : ""}
//                             onClick={() => this.clickEvent(index)}> {item.text}</li>)}
//                 </ul>
//             </div>
//         );
//     }
//
//     clickEvent(index){
//         // this.setState({
//         //     current: index
//         // })
//         this.props.myevent(index)
//     }
// }
const Tabbar=(props)=>{

    // function  clickEvent(index){
    //     props.myevent(index)
    // }

    return(
            <div>
                <ul>
                    {
                        props.list.map((item, index) =>
                        <li key={item.id} className={props.current === index ? "active" : ""}
                            onClick={() => props.myevent(index)}> {item.text}</li>)
                    }
                </ul>
            </div>
        );
}

export default Tabbar;