import React, {Component} from 'react';
import axios from 'axios'
import './css/03comunication.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            employeeList:[],
            info:""
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
                    this.state.employeeList.map(item=><Employee key={item.id} {...item}
                                                                onEvent={(value)=>this.setState({
                                                                    info:value
                    })}/>)
                }
                <EmployeeDetail value={this.state.info}/>
            </div>

        );
    }
}

class Employee extends Component {
    render() {
        let {photo,firstName,lastName,detail} = this.props
        return(
            <div className="Employee" onClick={()=>this.props.onEvent(detail)}>
                <img src={photo} alt="plt"/>
                <h4>{firstName} {lastName}</h4>
            </div>
        )
    }
}
class EmployeeDetail extends Component{
    render() {
        return(
            <div className="EmployeeDetail">
                <h4>detail of Employee</h4>
                {this.props.value}
            </div>
        )
    }
}


export default App;