import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { carDoctorContext } from "../../AuthProvider/carDoctorContext";
import { FaUser } from "react-icons/fa";




const Navbar = () => {
    const { user, isLoading, logoutUser } = useContext(carDoctorContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('user logged out'))
            .catch(error => console.error(error))
    }

    // I have used scrollLink for focusing homepage sections scroll behave
    // need to install react-scroll
    // offset is set to act as margin top
    // active class and spy are used to style active nav
    const links =
    <>
    <li><ScrollLink to="home-banner" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>Home</ScrollLink></li>
    <li><ScrollLink to="home-about" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>About</ScrollLink></li>
    <li><ScrollLink to="services-component" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>Services</ScrollLink></li>
    <li><ScrollLink to="contact-card" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>Contact</ScrollLink></li>
    <li><ScrollLink to="features-section" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>Features</ScrollLink></li>
    <li><ScrollLink to="testimonial" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>Testimonial</ScrollLink></li>
</>
    const userDropdown =
        <>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost ">
                    <p><FaUser /></p>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                    <li onClick={handleLogout} className="text-error font-bold"><a>Logout</a></li>
                </ul>
            </div>
        </>

    return (
        <div className="fixed w-full z-50">
            <div className="navbar bg-base-200 max-w-6xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            <button className="mt-2 btn btn-sm btn-outline w-20 text-xs text-white">Search</button>
                        </ul>
                    </div>
                    <div className="bg-gray-300 p-1 rounded-lg">
                        <Link><img className="w-8 md:w-16" src="/logo.svg" alt="company-logo" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        isLoading ?
                            <p>Loading</p>
                            :
                            <div>
                                {user ?
                                    <div>
                                        {userDropdown}
                                        <Link to={'/'} className="btn btn-ghost text-lg"><RiShoppingBagLine /></Link>
                                        <button className="hidden lg:inline-flex btn btn-ghost text-lg text-white"><CiSearch /></button>
                                        <Link to={'/'} className="btn btn-outline btn-accent">Appointment</Link>
                                    </div>
                                    :
                                    <div>
                                        <Link to={'/login'}><button className="btn btn-outline btn-accent">Login</button></Link>
                                    </div>
                                }
                            </div>
                    }
                    {/* <div>
                        <Link><button className="btn btn-outline btn-accent">Login</button></Link>
                    </div>
                    <div>
                        <Link to={'/'} className="btn btn-ghost text-lg"><RiShoppingBagLine /></Link>
                        <button className="hidden lg:inline-flex btn btn-ghost text-lg text-white"><CiSearch /></button>
                        <Link to={'/'} className="btn btn-outline btn-accent">Appointment</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;