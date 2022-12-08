import React, {Component} from 'react';
import axios from 'axios'
import './css/03comunication.css'

var worker = {
    list:[],
    subscribe(callback){
        console.log(callback)
        this.list.push(callback)
    },

    publish(info){
        this.list.forEach(callback=>{callback && callback(info)})
    }
}

class App extends Component {
    constructor(){
        super()
        this.state={
            employeeList:[],
        }
        axios.get(`./test.json`).then(
            res=>{
                console.log(res.data.employees.employee)
                this.setState({
                    employeeList:res.data.employees.employee
                })
            }
        )

    }

    render() {
        return (
            <div>
                {
                    this.state.employeeList.map(item=><Employee key={item.id} {...item}/>)
                }
                <EmployeeDetail/>
            </div>

        );
    }
}

class Employee extends Component {
    render() {
        let {photo,firstName,lastName,detail} = this.props
        return(
            <div className="Employee" onClick={()=>worker.publish(detail)}>
                <img src={photo} alt="plt"/>
                <h4>{firstName} {lastName}</h4>
            </div>
        )
    }
}
class EmployeeDetail extends Component{
    constructor() {
        super();
        this.state={
            info:""
        }
        worker.subscribe((info)=> this.setState({
            info:info
        }))
    }
    render() {
        return(
            <div className="EmployeeDetail">
                <h4>detail of Employee</h4>
                {this.state.info}
            </div>
        ) 
    }
}


export default App;