import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Login = () => {
    const {loginHandler}= useAuth();
    const [error, setError] = useState('');
    const [isPassShow, setIsPassShow] = useState(false);
    const naviGate = useNavigate();


    const loginFormHandler = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginHandler(email,password)
        .then(result=>{
            console.log(result)
            form.reset();
            naviGate('/');
        })
        .catch(err=>{
            console.log(err.message);
            setError('Something Was Wrong')
        })
    }
    return (
        <div className="mx-12 border-t sm:mx-20 md:mx-32 py-12">
            <div className="flex flex-col items-center bg-slate-50 py-10 sm:justify-center">
                <div className="w-full px-10 py-8 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={loginFormHandler}>
                        <h4 className="mb-3 text-2xl">Login</h4>
                        <input name="email" type="email" placeholder="Email" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="password" type={isPassShow ? 'text' : 'password'} placeholder="password" required className="w-full border-b border-l p-2 mb-2" />
                        <p className="text-red-500 pl-2">{error ? error : ""}</p>
                        <p onClick={() => setIsPassShow(!isPassShow)} className="text-sky-500 hover:cursor-pointer pl-2 mb-2">{isPassShow ? "Hide Password" : "Show Password"}</p>
                        <button type="submit" className="btn btn-info w-full text-white mt-3">Register</button>
                    </form>
                    <div className="mt-4 text-grey-600">
                        I have no account
                        <span>
                            <Link to='/register' className="text-sky-500 ml-1 hover:underline">
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;