import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
    const links =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/'}>Service</Link></li>
            <li><Link to={'/'}>Blog</Link></li>
            <li><Link to={'/'}>Contact</Link></li>

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
                    <Link to={'/'} className="btn btn-ghost text-lg"><RiShoppingBagLine /></Link>
                    <button className="hidden lg:inline-flex btn btn-ghost text-lg text-white"><CiSearch /></button>
                    <Link to={'/'} className="btn btn-outline btn-accent">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;