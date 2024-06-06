import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { carDoctorContext } from "../../AuthProvider/carDoctorContext";
import { FaUser } from "react-icons/fa";




const Navbar = () => {
    const { user, isLoading, isAdmin, logoutUser } = useContext(carDoctorContext);
    const currentLocation = useLocation();
    const location = currentLocation.pathname;

    const handleLogout = () => {
        logoutUser()
            .then(() => console.log('user logged out'))
            .catch(error => console.error(error))
    }

    // I have used scrollLink for focusing homepage sections scroll behave
    // need to install react-scroll
    // offset is set to act as margin top
    // active class and spy are used to style active nav
    const homeNavLinks =
        <>
            <li><ScrollLink to="home-banner" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>Home</ScrollLink></li>
            <li><ScrollLink to="home-about" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>About</ScrollLink></li>
            <li><ScrollLink to="services-component" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>Services</ScrollLink></li>
            <li><ScrollLink to="contact-card" smooth={true} duration={500} offset={-60} activeClass="active" spy={true}>Contact</ScrollLink></li>
            <li><ScrollLink to="features-section" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>Features</ScrollLink></li>
            <li><ScrollLink to="testimonial" smooth={true} duration={500} offset={-50} activeClass="active" spy={true}>Testimonial</ScrollLink></li>
        </>

    const navLinks =
        <>
            <li><Link to={'/'}>Home</Link></li>
        </>;
    const adminNavLinks =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>AddService</Link></li>
            <li><Link to={'/'}>Inventory</Link></li>
            <li><Link to={'/cart'}>Order</Link></li>
        </>;

        const navBarDisplay = () => {
            if(isAdmin){
                return adminNavLinks;
            } else if(!isAdmin && location === '/'){
                return homeNavLinks;
            }
            
            return navLinks
        };

        const adminStyle = {
            color: 'yellow',
        }
    const userDropdown =
        <>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost ">
                    <p style={isAdmin ? adminStyle : ''}><FaUser /></p>
                    
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] py-4 shadow bg-base-300 rounded-box w-52">
                    <p className='text-lg text-center mb-2'>{user?.displayName} <span className='text-xs text-yellow-300' hidden={!isAdmin}>[Admin]</span></p>
                    <p className='text-center mb-2'>{user?.email}</p>
                    <li onClick={handleLogout} className="text-error font-bold btn btn-xs mt-4"><a>Logout</a></li>
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
                            {navBarDisplay()}
                            <button className="mt-2 btn btn-sm btn-outline w-20 text-xs text-white">Search</button>
                        </ul>
                    </div>
                    <div className="bg-gray-300 p-1 rounded-lg">
                        <Link><img className="w-8 md:w-16" src="/logo.svg" alt="company-logo" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navBarDisplay()}
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
                                        <button hidden={isAdmin ? true : false}><Link to={'/cart'} className="btn btn-ghost text-lg"> <RiShoppingBagLine /></Link></button>
                                        <button className="hidden lg:inline-flex btn btn-ghost text-lg text-white"><CiSearch /></button>
                                        {/* <Link to={'/'} className="btn btn-outline btn-accent">Appointment</Link> */}
                                        {userDropdown}
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