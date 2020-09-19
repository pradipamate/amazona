import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import  register  from '../action/UserAction';

function RegisterScreen(props) {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmpassword, SetConfirmpassword] = useState('');
    const userRegister = useSelector(state => state.UserRegisterInfo);
    console.log("userSignsss", userRegister);
    const {loading,UserInfo,error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if (UserInfo) {
            props.history.push("/")
        }
    }, [UserInfo])

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(register(name,email,password,confirmpassword));
    }
    return (
        <div>
            <div className="Form">
                <form className="form-conatiner" onSubmit={submithandler}>
                    <ul>
                        <li><h2>Register Account</h2></li>
                        <li>
                             {loading && <div>loading...</div>} 
                             {error && <div>{error}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={(e) => SetName(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={(e) => SetEmail(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => SetPassword(e.target.value)} />
                        </li>
                        <li>
                            <label htmlFor="confirmpassword">ConfirmPassword</label>
                            <input type="password" name="confirmpassword" id="password" onChange={(e) => SetConfirmpassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="add_to_cart">Register</button>
                        </li>
                        <li>Already have an account?
                            <Link to="/signin">Sign-In</Link>
                        </li>
                    </ul>
                </form>

            </div>
        </div>

    )
}

export default RegisterScreen;