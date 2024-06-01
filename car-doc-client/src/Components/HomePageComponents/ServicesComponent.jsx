import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesComponent = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetch('services.json')
                .then(res => res.json())
                .then(data => {
                    setServices(data);
                    setLoading(false);
                })
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [])

    return (
        <div className="space-y-8 md:space-y-12 px-4">
            <div className="text-center space-y-2 md:space-y-4">
                <h2 className="text-error text-xl tracking-wider ">Service</h2>
                <h4 className="text-xl md:text-3xl font-bold">Our Service Area</h4>
                <p className="lg:max-w-lg mx-auto capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 "> 
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}>
                        </ServiceCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-error btn-sm md:btn-md">More Services</button>
            </div>
        </div>
    );
};

export default ServicesComponent;