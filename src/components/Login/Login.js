import React from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Spinner from 'react-bootstrap/Spinner';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';


    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
      ] = useSignInWithEmailAndPassword(auth);

      if(eUser || user ) {
        navigate(from, { replace: true });
    }

    
      if(eLoading || loading){
        return <>
            <div className='text-center mt-5'>
            <Spinner animation="grow" variant="info" />
            </div>
        </>;
      } 
    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto my-5">
                <div className='shadow-lg card p-5'>
                <h2 className='text-center text-info mb-3'>Login Please</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    {...register("mail", { required: "Email Address is required" })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    {...register("password", { required: "password is required" })}
                    />
                </Form.Group>
                <button className='btn btn-info btn-md w-100'>Login</button>
                </Form>
                <p className='my-2'>New to Site?? <Link className='text-info text-decoration-none'  to="/signup">Create Account</Link> </p>
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

export default Login;