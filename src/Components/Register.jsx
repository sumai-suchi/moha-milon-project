import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const navigate=useNavigate()

    const {createUser}=useContext(AuthContext)
   
   console.log(createUser)


    const handleRegister=e=>
        {
            e.preventDefault()
            const email=e.target.email.value
            const password=e.target.password.value
            const name=e.target.name.value
            console.log(email,password,name)

         

        createUser(email,password)
        .then((result)=>
        {
            console.log(result)
            e.target.reset()
            navigate('/')

        })
        .catch((error)=>
        {
           console.log('error',error)
        })
    
    
        }

  



    return (
        
        <div className="card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
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
                <button className="btn btn-primary">Register</button>
            </div>
        </form>
        <p className='ml-4 mb-4'>
           Already have an account ?please <Link to='/Login'>Login</Link>

        </p>
    </div>
       
    );
};

export default Register;