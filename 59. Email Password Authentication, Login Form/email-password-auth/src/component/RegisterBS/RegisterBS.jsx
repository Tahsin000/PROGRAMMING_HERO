import React, { useState } from 'react';
import app from '../../firebase.init/firebase.init';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth';
import { Link } from 'react-router-dom';

const RegisterBS = () => {
  const auth = getAuth(app);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleBS = event =>{

      // 1. prevent page refresh
      event.preventDefault();
      setError('');
      setSuccess('');

      // 2. collect form data
      const email = event.target.email.value;
      const password = event.target.password.value;
      const name = event.target.name.value;
      console.log(name, email, password);
      
      // validate
      if (!/(?=.*[A-Z])/.test(password)){
        setError('Please add at least one uppercase');
        return;
      } 
      else if (!/((?=.*[0-9].*[0-9]))/.test(password)){
        setError('Please add at least two number');
        return;
      }
      // 3. create user in fb
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const LoggedUser = result.user;
        console.log(LoggedUser);
        setSuccess('User has been created successfully')
        event.target.reset();
        SendVerificationEmail(result.user);
        updateUserData(result.user, name);
        setError('')
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message)
      });
  }

  const SendVerificationEmail = (user)=>{
    sendEmailVerification(user)
    .then(result =>{
      console.log(result);
      alert('Please Verify your email address')
    })
  }

  const updateUserData = (user , name) =>{
    updateProfile(user, {
      displayName: name
    })
    .then(()=>{
      console.log("username updated")
      setError('')
    })
    .catch(error =>{
      setError(error.message);
    })
  }
  return (
      <div>
          <form onSubmit={handleBS}>
          <h2 className="text-center mb-3">Please Complete Your Registration</h2>
            <div class="form-group">
              <label for="exampleInputEmail1">Display name</label>
              <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" name="name"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <p><small>Already have an accound? please <Link to="/login">Login</Link></small></p>

            {
              error && <p className='alert alert-danger'>{error}</p>
            }
            {
              success && <p className='alert alert-success'>{success}</p>
            }
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
    );
};

export default RegisterBS;