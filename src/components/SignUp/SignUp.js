import React, { useRef } from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [signInWithGoogle, guser, gloading] = useSignInWithGoogle(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // get navigate
    const navigate = useNavigate();
    //react firebase hooks create new user
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    
      if(user){
        navigate('/')
    }
    //get user sign value and submit
    const registerHandleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/')
        

    }

    
      if(loading || gloading){
        return <>
            <div className='text-center mt-5'>
            <Spinner animation="grow" variant="info" />
            </div>
        </>;
      } 
    
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto my-5">
                <div className='shadow-lg card p-5'>
                <h2 className='text-center text-info mb-3'>Create Account</h2>
                <Form onSubmit={registerHandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" 
                    ref={nameRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    ref={emailRef}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    ref={passwordRef}
                    />
                </Form.Group>
                <button className='btn btn-info btn-md w-100'>Sign Up</button>
                </Form>
                <p className='my-2'>Already have an account?? <Link className='text-info text-decoration-none'  to="/login">Login</Link> </p>
                <div className='d-flex justify-center align-items-center my-3'>
                <div className='left-horizontal'></div>
                <div className='px-2'>or</div>
                <div className='right-horizontal'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-info btn-md w-100'>Login With Google</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;