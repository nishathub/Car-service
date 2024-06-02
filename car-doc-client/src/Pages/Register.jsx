import { Link } from "react-router-dom";

const Register = () => {

    const loginImage = '../../public/images/login/login.svg';

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const logEmail = form.email.value;
        const logPassword = form.password.value;
        console.log(logEmail, logPassword);
    }
    return (
        <div className="pt-32 grid grid-cols-1 md:grid-cols-2 justify-center gap-8 items-center">
            <div className="flex justify-center md:justify-end">
                <img className="h-40 md:h-80" src={loginImage} alt="" />
            </div>
            <div className="w-10/12 mx-auto md:max-w-sm border border-gray-500 p-8 space-y-4">
                <h2 className="md:text-3xl text-accent text-center mb-8">Register</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label font-bold">Name</label>
                        <input className="input input-bordered w-full" type="text" name="name" placeholder="Your name" />
                    </div>
                    <div>
                        <label className="label font-bold">Email</label>
                        <input className="input input-bordered w-full" type="email" name="email" placeholder="Your email" />
                    </div>
                    <div>
                        <label className="label font-bold">Password</label>
                        <input className="input input-bordered w-full" type="password" name="password" placeholder="Your password" />
                    </div>
                    <div>
                        <input className="btn btn-accent btn-block" type="submit" value="Create account" />
                    </div>
                </form>
                <h4 className="text-center">Or Sign in with</h4>
                <div className="flex gap-2 justify-center">
                    <button className="btn btn-circle btn-primary">F</button>
                    <button className="btn btn-circle btn-info">In</button>
                    <button className="btn btn-circle btn-success">G</button>
                </div>
                <h4 className="text-center">Do not have an account? <Link to={'/login'}> <span className="text-accent">Log in</span></Link></h4>
            </div>
        </div>
    );
};

export default Register;