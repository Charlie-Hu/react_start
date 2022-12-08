import React, {Component} from 'react';
import axios from 'axios'
import './css/03comunication.css'

const Globalcontext = React.createContext()

class App extends Component {
    constructor() {
        super()
        this.state = {
            employeeList: [],
            info:''
        }
        axios.get(`./test.json`).then(
            res => {
                console.log(res.data.employees.employee)
                this.setState({
                    employeeList: res.data.employees.employee
                })
            }
        )
    }

    render() {
        return (
            <Globalcontext.Provider value={{
                userId:123,
                name:"Charlie",
                info:this.state.info,
                changInfo:(value)=>{
                    this.setState({
                        info:value
                    })
                }
            }}>
                <div>
                    {
                        this.state.employeeList.map(item => <Employee key={item.id} {...item}/>)
                    }
                    <EmployeeDetail/>
                </div>
            </Globalcontext.Provider>
        );
    }
}

class Employee extends Component {
    render() {
        let {photo, firstName, lastName, detail} = this.props
        return (
            <Globalcontext.Consumer>
                {
                    (value) => {
                        // console.log(value)
                        return (
                            <div className="Employee" onClick={
                                () =>
                                    // console.log(detail)
                                    value.changInfo(detail)
                                // this.props.onEvent(detail)
                            }>
                                <img src={photo} alt="plt"/>
                                <h4>{firstName} {lastName}</h4>
                            </div>
                        )
                    }
                }
            </Globalcontext.Consumer>
        )
    }
}

class EmployeeDetail extends Component {
    render() {
        return (
            <Globalcontext.Consumer>
                {
                    (value) => {
                        return (
                            <div className="EmployeeDetail">
                                <h4>detail of Employee</h4>
                                {value.info}
                            </div>
                        )
                    }
                }
            </Globalcontext.Consumer>
        )
    }
}


export default App;