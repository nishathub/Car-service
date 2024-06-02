import { SlCalender } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const ContactCard = () => {
    return (
        <div>
            <h2 className="text-error text-xl text-center tracking-wider mb-4">Get in Touch</h2>

            <div className="bg-base-300 lg:h-60 grid lg:grid-cols-3 items-center justify-items-center gap-4 py-8">
                <div className="w-80 p-4 flex gap-4 items-center bg-base-100 rounded-lg">
                    <div className="text-accent"><SlCalender /></div>
                    <div>
                        <p>We are open monday-friday</p>
                        <p className="text-lg font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="w-80 p-4 flex gap-4 items-center bg-base-100 rounded-lg">
                    <div className="text-accent"><FaPhoneAlt /></div>
                    <div>
                        <p>Hava a question?</p>
                        <p className="text-lg font-bold">+2546 342 2398</p>
                    </div>
                </div>
                <div className="w-80 p-4 flex gap-4 items-center bg-base-100 rounded-lg">
                    <div className="text-accent"><FaLocationDot /></div>
                    <div>
                        <p>Need a repair? out address</p>
                        <p className="text-lg font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;