import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Register = () => {
    const { createUserHandler, userUpdate } = useAuth();
    const [error, setError] = useState('');
    const [isPassShow, setIsPassShow] = useState(false);
    const naviGate = useNavigate();

    const registerFormHandler = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const photoUrl = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        const user = { name, email,phone, photoUrl };
        if (password !== confirmPassword) {
            return setError("your password don't match");
        }
        createUserHandler(email, password)
            .then(result => {
                userUpdate(name, photoUrl)
                    .then(() => {
                        fetch(`${import.meta.env.VITE_api}/user`,{
                            method:"PUT",
                            headers:{
                                "content-type":"application/json"
                            },
                            body:JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                form.reset();
                                naviGate('/');
                            })
                            .catch((err) => {
                                console.log(err);
                                setError("Some thing was Wrong");
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                        setError("Some thing was Wrong");
                    })
                console.log(result.user);
            })
            .catch((err) => {
                console.log(err);
                setError("Some thing was Wrong");
            })
        console.log(user);
    }
    return (
        <div className="mx-12 border-t sm:mx-20 md:mx-32 py-12">
            <div className="flex flex-col items-center bg-slate-50 py-10 sm:justify-center">
                <div className="w-full px-10 py-8 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={registerFormHandler}>
                        <h4 className="mb-3 text-2xl">Create An Account</h4>
                        <input name="name" type="text" placeholder="Name" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="email" type="email" placeholder="Email" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="phone" type="number" placeholder="Phone" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="photo" type="url" placeholder="Photo Url" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="password" type={isPassShow ? 'text' : 'password'} placeholder="password" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="confirmPassword" type={isPassShow ? 'text' : 'password'} placeholder="Confirm password" required className="w-full border-b border-l p-2 mb-2" />
                        <p className="text-red-500 pl-2">{error ? error : ""}</p>
                        <p onClick={() => setIsPassShow(!isPassShow)} className="text-sky-500 pl-2  hover:cursor-pointer mb-2">{isPassShow ? "Hide Password" : "Show Password"}</p>
                        <button type="submit" className="btn btn-info w-full text-white mt-3">Register</button>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?
                        <span>
                            <Link to='/login' className="text-sky-500 ml-1 hover:underline">
                                Login
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;