import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import  signing  from '../action/UserAction';

function SigninScreen(props) {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const userSignin = useSelector(state => state.UserSignInfo);
    console.log("userSignsss", userSignin);
    const {loading,UserInfo,error} = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (UserInfo) {
            props.history.push("/")
        }
    }, [UserInfo])

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(signing(email, password));
    }
    return (
        <div>
            <div className="Form">
                <form className="form-conatiner" onSubmit={submithandler}>
                    <ul>
                        <li><h2>Sign In</h2></li>
                        <li>
                             {loading && <div>loading...</div>} 
                             {error && <div className="danger">{error}</div>}
                        </li>
                        <li>
                            <label>Email</label>
                            <input type="email" name="email" id="email" onChange={(e) => SetEmail(e.target.value)} />
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => SetPassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="add_to_cart">Sign In</button>
                        </li>
                        <li>New to Amazon?</li>
                        <li>
                            <Link to='/register' className="add_to_cart">Create New Amazona Account</Link>
                        </li>
                    </ul>
                </form>

            </div>
        </div>

    )
}

export default SigninScreen;