import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const SignUP = () => {

    const { userRegistration } = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        form.reset()

        userRegistration(email, password)
            .then(user => console.log(user.user))
            .catch(err => console.log(err.message))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <form onSubmit={handleSignup}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:w-1/2 mr-5">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-1/2">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Please Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-orange-600 border-0" type="submit" value="Submit" />
                            </div>
                            <p>Already have and account? <Link to='/login' className=' text-orange-500 font-bold'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUP;