import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const Login = () => {

    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()

        userLogin(email, password)
            .then(user => {

                navigate(from, { replace: true })
                // console.log(user.user.email);
            })
            .catch(err => console.log(err.message))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleLogin}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:w-1/2 mr-5">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Please Login</h1>
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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-orange-600 border-0" type="submit" value="Submit" />
                            </div>
                            <p>New in doctor-cars? <Link to='/signup' className=' text-orange-500 font-bold'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;