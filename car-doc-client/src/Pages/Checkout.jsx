import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";

const Checkout = () => {
    const { user } = useContext(carDoctorContext);
    const serviceData = useLoaderData();
    const { title, service_id, price, img } = serviceData;

    const handleCheckout = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const comment = form.comment.value;

        const orderInfo = {
            customerName: name,
            email,
            date,
            comment,
            serviceID: service_id,
            serviceName: title,
            price,
            img
        }

        console.log(orderInfo);

        // post orders using fetch

        fetch('http://localhost:5000/allOrders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="pt-20 px-8 lg:px-0">
            <div>
                <h2 className="text-xl md:text-3xl text-center font-bold">Checkout</h2>
            </div>
            <div className="max-w-xs md:max-w-lg mx-auto py-4">
                <img src={img} alt="service-image" />
                <p className="text-center text-xl my-4">Service Name : <span className="text-accent">{title}</span> </p>
            </div>
            <div >
                <form onSubmit={handleCheckout} className="space-y-4">
                    <div className=" space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input className="md:w-1/2 input input-bordered" type="text" name="name" defaultValue={user?.displayName} placeholder="Your Name" />
                            <input className="md:w-1/2 input input-bordered" type="date" name="date" required/>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input className="md:w-1/2 input input-bordered" type="email" name="email" defaultValue={user?.email} placeholder="Your Email" />
                            <input className="md:w-1/2 input input-bordered text-accent" type="text" name="price" disabled defaultValue={`$ ${price}`} />
                        </div>
                    </div>
                    <div>
                        <input className="w-full input input-bordered" type="text" name="comment" placeholder="Brief Comment" />
                    </div>
                    <div>
                        <input className="w-full btn btn-accent font-bold" type="submit" value="Confirm Order" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Checkout;