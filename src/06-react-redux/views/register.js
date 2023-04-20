import axios from 'axios';
import {useState} from "react";
import {useHistory} from "react-router-dom";
// import Cookies from "js-cookie";

export default function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log(username)

    function handleSubmit(event, props) {
        event.preventDefault();
        axios.post('/register/', {
            user: username,
            pwd: password,
        }).then(response => {
            if (response.data.success) {
                console.log('register successful')
                props.history.push('/login')
            }
            {
                console.log("err")
            }
        })
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event, props)}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
