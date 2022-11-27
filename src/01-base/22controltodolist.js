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
        inputValue:"",
        list: [
            {id: 1, text: '111', isChecked:false},
            {id: 2, text: '222', isChecked:false},
            {id: 3, text: '333', isChecked:false},
        ]
    }
    myRef = React.createRef()

    render() {
        // var text='mark'
        var content = {
            textDecoration:'line-through',
            color:'blue'

        }
        return (
            <div>
                <h1>welcome react develop</h1>
                <input value={this.state.inputValue} onChange={
                    (evt)=>this.setState({
                        inputValue:evt.target.value
                    })
                }/>
                <button onClick={() => {
                    this.handleClick2()
                }}>add
                </button>
                <ul>
                    {
                        this.state.list.map((item, index) => <li key={item.id}>
                            <input type="checkbox" checked={item.isChecked} onChange={
                                ()=>this.checkItem(index)}/>
                            <span style={item.isChecked?content:null} dangerouslySetInnerHTML={
                                {
                                    __html:item.text
                                }
                            }></span>
                            <button onClick={() => {
                                this.delete(index)
                            }}>del
                            </button>
                        </li>)
                    }
                </ul>
                {this.state.list.length===0?<div>nothing need to do now</div>:null}
            </div>
        );
    }

    checkItem(index){
        console.log(index)
        let newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked
        this.setState({
            list:newList
        })
    }

    handleClick2 = () => {
        let newList = [...this.state.list]
        let newId = this.state.list.length + 1
        newList.push({
            id: newId,
            text: this.state.inputValue
        })
        this.setState({
            list: newList,
            inputValue:''
        })
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