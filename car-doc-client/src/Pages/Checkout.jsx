import { useLoaderData, useParams } from "react-router-dom";

const Checkout = () => {
    const {serviceID} = useParams();
    const serviceData = useLoaderData();
    console.log(serviceData);
    return (
        <div className="py-20">
            <p>Service ID : {serviceID}</p>
            <p>Service Name : {serviceData.title}</p>
        </div>
    );
};

export default Checkout;