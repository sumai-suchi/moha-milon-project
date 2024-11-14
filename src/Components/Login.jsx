import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {

    const navigate=useNavigate()
    const {signInUser,signInWithGoogle}=useContext(AuthContext)
   
    const handleLogin=e=>
        {

            e.preventDefault()
            const email=e.target.email.value
            const password=e.target.password.value
            console.log(email,password)


            //user signin

            signInUser(email,password)
            .then((result)=>
            {
                console.log(result.user)
                e.target.reset()
                navigate('/')
            })
            .catch(error=>
            {
                console.log('error',error)
            }
            )
    
    
        }

        const handleGoogleLogin=()=>
        {
            signInWithGoogle()
            .then(result=>
            {
                console.log(result.user)
                navigate('/')
            }
            )
            .catch(error=>
            {
                console.log('Error',error.message)
            }
            )
        }

    return (
       
        <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
        <p className='ml-4 mb-4'>
            New to this website ?please <Link to='/Register'>register</Link>

        </p>

        <button onClick={handleGoogleLogin} className='btn btn-ghost'>Google</button>
    </div>

    );
};

export default Login;