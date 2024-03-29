import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { setUser, login, providerLogin, loading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    useTitle('Login')

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
            if(loading){
                <progress className="progress w-56"></progress>
            }
            const currentUser = {
                email: user.email
            }
            //Get jwt token
            fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('User-Token', data.token);
                navigate(from, {replace: true})
                form.reset()
            })
            
        })
        .catch(error => {
            console.log(error.message);
        })   
    }

    const handleGooglesignIn = event =>{

        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
            navigate(from, {replace: true})
        }).catch(error => console.error(error))

    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Please login here. And get more information about us.</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-info" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center pb-3'>Or you can login with</p>
                <div className='text-center mb-3'>
                   <button onClick={handleGooglesignIn} className="btn btn-outline btn-info w-32">Google</button>
                </div>
                <p className='text-center'>Have an account? <Link className='text-info font-bold' to='/signup'>Sign Up</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;