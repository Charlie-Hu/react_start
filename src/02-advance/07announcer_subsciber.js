import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

var bus = {
    list:[],
    subscribe(callback){
        console.log(callback)
        this.list.push(callback)
    },

    publish(){
        this.list.forEach(callback=>{callback && callback()})
    }
}


bus.subscribe(()=>{console.log(1111)})
bus.subscribe(()=>{console.log(2222)})

setTimeout(()=>{bus.publish()},0)
