import axios from 'axios';
import {useState} from "react";
import {useHistory} from "react-router-dom";
// import Cookies from "js-cookie";

export default function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // console.log(username)

    function handleSubmit(event,props) {
        event.preventDefault();
        axios.defaults.xsrfCookieName = 'csrftoken';
        // axios.defaults.xsrfHeaderName = 'X-CSRFToken';
        axios.post('/login/', {
            usr: username,
            pwd: password
        })
            .then(response => {
                if (response.data.success) {
                    console.log("success",response.data)
                    localStorage.setItem('token', response.data.token);
                    if(response.data.token){
                        console.log(props)
                        props.history.push('/centre');
                        window.location.reload()
                    }
                }else{
                    console.log("plz login")
                }
            });
    }

    return (
        <div>
            <form onSubmit={(event)=>handleSubmit(event,props)}>
                <label>
                    <input type="hidden" name="_csrf" value={props.csrfToken} />
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
