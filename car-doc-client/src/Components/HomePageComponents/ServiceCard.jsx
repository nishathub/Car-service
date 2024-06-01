import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="border border-gray-500 max-w-xs md:max-w-sm p-6 rounded-md space-y-2 md:space-y-0">
            <div className="md:h-60">
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className="flex items-end justify-between">
                <div className="space-y-4">
                    <h4 className="font-bold">{title}</h4>
                    <h4 className="text-accent">$ {price}</h4>
                </div>
                <div>
                    <Link><button className="text-error text-2xl hover:text-5xl duration-500">&rarr;</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;