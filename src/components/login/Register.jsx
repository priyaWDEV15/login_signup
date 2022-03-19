import React from "react";
import { useForm } from "react-hook-form";
import "./style.scss";
import loginImg from "./images/login.svg";
import {Link} from 'react-router-dom';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = data  =>{
    console.log(data);
  }
  const handleError = (errors) => {};

  const registerOptions = {
    username: { required: "Name is required" },
    email: { 
      required: "Email is required",
      pattern:{
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "This is not a valid email",
      }
    },
    password: {
      required: "Password is required",
        minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <div>
    <div className="container">
      
      <form onSubmit={handleSubmit(handleRegistration)}  className="ui form">
        <h1>Register</h1>
        <br />
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            {...register('username',registerOptions.username)}
          />
          <small>
          <p>{errors?.username && errors.username.message}</p>
        </small>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Email"{...register('email',registerOptions.email)} />
          <small>
          <p>{errors?.email && errors.email.message}</p>
        </small>
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            {...register('password', registerOptions.password)}
          />
          <small>
          <p>{errors?.password && errors.password.message}</p>
        </small>
        </div>
        <button className=" fluid ui inverted blue button">Register</button>
        <br />
        <div>
        Already signed up  ? <Link to='/'>Login</Link> instead.
        </div>
      </form>
    </div>
  </div>
  );
}
export default Register;
