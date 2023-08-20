import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../../Context/context';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import { AppRoute } from '../../../App';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const { state, dispatch } = useContext(GlobalContext);

    const loginUser = (e) => {
        e.preventDefault();

        const payload = { email, password };

        axios
            .post(`${AppRoute}api/login`, payload)
            .then((json) => {
                Cookies.set('token', json.data.token);
                dispatch({
                    type: 'USER_LOGIN',
                    token: json.data.token,
                });
            })
            .catch((err) => console.log(err));
    };

    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username };

        axios.post(`${AppRoute}api/signup`, payload)
            .then((json) => console.log(json.data))
            .catch(err => console.log(err));
    };

    const [loginMsgVisible, setLoginMsgVisible] = useState(true);
    const [frontboxMoving, setFrontboxMoving] = useState(false);
    const [signupMsgVisible, setSignupMsgVisible] = useState(false);
    const [signupHidden, setSignupHidden] = useState(false); // Set this to true to show signup form initially
    const [loginHidden, setLoginHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            handleSwitch1Click();
        }, 1000);

        setTimeout(() => {
            handleSwitch2Click();
        }, 3456);
    }, []);

    const handleSwitch1Click = () => {
        setLoginMsgVisible(!loginMsgVisible);
        setFrontboxMoving(true);
        setSignupMsgVisible(!signupMsgVisible);
        setSignupHidden(!signupHidden); // Toggle signupHidden state
        setLoginHidden(!loginHidden);
    };

    const handleSwitch2Click = () => {
        setLoginMsgVisible(!loginMsgVisible);
        setFrontboxMoving(false);
        setSignupMsgVisible(!signupMsgVisible);
        setSignupHidden(!signupHidden); // Toggle signupHidden state
        setLoginHidden(!loginHidden);
    };

    return (
        <div className="login-container">
            <div className="login-body">
                <div className={`backbox`}>
                    <div className={`loginMsg ${loginMsgVisible ? 'visibility' : ''}`}>
                        <div className="textcontent">
                            <p className="title">Don't have an account?</p>
                            <p>Sign up to save all your graph.</p>
                            <button id="switch1" onClick={handleSwitch1Click}>Sign Up</button>
                        </div>
                    </div>
                    <div className={`signupMsg ${signupMsgVisible ? 'visibility' : ''}`}>
                        <div className="textcontent">
                            <p className="title">Have an account?</p>
                            <p>Log in to see all your collection.</p>
                            <button id="switch2" onClick={handleSwitch2Click}>LOG IN</button>
                        </div>
                    </div>
                </div>
                <div className={`frontbox ${frontboxMoving ? 'moving' : ''}`}>
                    <div className={`login ${loginHidden ? 'hide' : ''}`}>
                        <h2>LOG IN</h2>
                        <form className="inputbox" onSubmit={loginUser}>
                            <input
                                type="text"
                                name="email"
                                placeholder="  EMAIL"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="  PASSWORD"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button>LOG IN</button>
                        </form>
                    </div>
                    <div className={`signup ${signupHidden ? 'hide' : ''}`}>
                        <h2>SIGN UP</h2>
                        <form className="inputbox" onSubmit={SignupUser}>
                            <input type="text" name="fullname" placeholder="  FULLNAME" />
                            <input
                                type="text"
                                name="email"
                                placeholder="  EMAIL"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                name="username"
                                placeholder="  USERNAME"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="  PASSWORD"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button>SIGN UP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
