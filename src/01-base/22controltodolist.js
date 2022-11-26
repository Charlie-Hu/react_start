import React, {Component} from 'react';

class App extends Component {
    // state = {
    //     // mytext: 'marked'
    //     myShow:true
    // }
    // constructor() {
    //     super();
    //     this.state = {
    //         myShow:true,
    //         myName:"贝贝"
    //     }
    // }
    state = {
        list: [
            {id: 1, text: '111'},
            {id: 2, text: '222'},
            {id: 3, text: '333'}
        ]
    }
    myRef = React.createRef()

    render() {
        // var text='mark'
        return (
            <div>
                <h1>welcome react develop</h1>
                <input ref={this.myRef}/>
                <button onClick={() => {
                    this.handleClick2()
                }}>add
                </button>
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={item.id}>
                            {/*{item.text}*/}
                            <span dangerouslySetInnerHTML={
                                {
                                    __html:item.text
                                }
                            }></span>
                            <button onClick={() => {
                                this.delete(index)
                            }}>delete
                            </button>
                        </li>)
                    }
                </ul>
                {this.state.list.length===0?<div>nothing need to do now</div>:null}
            </div>
        );
    }

    handleClick2 = () => {
        let newList = [...this.state.list]
        let newId = this.state.list.length + 1
        newList.push({
            id: newId,
            text: this.myRef.current.value
        })
        this.setState(
            {list: newList}
        )
        this.myRef.current.value = ''
    }

    delete = (index) => {
        console.log(index)
        let newList = [...this.state.list]
        newList.splice(index, 1)
        this.setState(
            {list: newList}
        )
    }
}

export default App;