import React, {Component} from 'react';
import axios from "axios";
class App extends Component {
    state={
        type:0
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={()=>this.setState({
                        type:0
                    })}>film</li>
                    <li onClick={()=>this.setState({
                        type:1
                    })}>upcoming</li>
                </ul>
                <Film type={this.state.type}></Film>
            </div>
        );
    }
}

class Film extends Component{
    state={
        list:[]
    }
    componentDidMount() {
        console.log(this.props.type)
        if(this.props.type===0){
            console.log("film")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=410500&pageNum=1&pageSize=10&type=1&k=6024744",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670384481255949986070529","bc":"410500"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{console.log(res.data)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
        else{
            console.log("upcoming")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=211000&pageNum=1&pageSize=10&type=2&k=769878",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670384481255949986070529","bc":"410500"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{console.log(res.data)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.type===0){
            console.log("film")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=410500&pageNum=1&pageSize=10&type=1&k=6024744",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670384481255949986070529","bc":"410500"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{console.log(res.data)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
        else{
            console.log("upcoming")
            axios({
                url:"https://m.maizuo.com/gateway?cityId=211000&pageNum=1&pageSize=10&type=2&k=769878",
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670384481255949986070529","bc":"410500"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{console.log(res.data)
                this.setState({
                    list:res.data.data.films
                })
            })
        }
    }

    render(){
        return(
            <ul>
                {
                    this.state.list.map(item=><li key={item.filmId}>{item.name}</li>)
                }
            </ul>
        )
    }

}

export default App;