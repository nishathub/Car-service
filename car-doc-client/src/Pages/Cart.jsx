import { useContext, useEffect, useState } from "react";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";

const Cart = () => {
    const { user } = useContext(carDoctorContext);
    const [orders, setOrders] = useState([]);
    const [isOrderFetching, setOrderFetching] = useState(true);

    //WE USED QUERY (req.query) in the backend to get specific user data.
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setOrderFetching(false);
            })
    }, [user])

    const handleRemoveOrders = id => {
        console.log(id);
        fetch(`http://localhost:5000/allOrders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!isOrderFetching) {
                    const remainOrders = orders.filter(order => order._id !== id);
                    setOrders(remainOrders);
                }
            })
    }
    console.log(orders);

    return (
        <div className="pt-20">
            <div className="py-8">
                <h2 className="text-3xl text-center">Cart Details</h2>
            </div>
            <div>
                {isOrderFetching ?
                    <p>Loading</p>
                    :
                    <div>
                        {
                            !orders.length ?
                                <div className="text-center h-screen"> <p className="text-error text-3xl">Cart is empty!</p>
                                    <p className="mt-4 text-xl">Add some services to keep your vehicle smooth</p> </div>
                                :
                                <div>
                                    {/* table header  */}
                                    <div className="overflow-x-auto mb-4 bg-base-300">
                                        <table className="table">
                                            <thead>
                                                <tr className="flex justify-between text-gray-300 tracking-wider">
                                                    <th>Delete</th>
                                                    <th className="hidden md:inline-flex">Image</th>
                                                    <th>Service</th>
                                                    <th className="hidden md:inline-flex">Date</th>
                                                    <th className="hidden md:inline-flex">Price</th>
                                                    <th className=" md:hidden">Date & Price</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                        </table>

                                    </div>
                                    {/* dynamic cart items  */}
                                    {
                                        orders.map(order =>

                                            <div key={order._id} className="overflow-x-auto mb-4 bg-base-300">
                                                <table className="table">

                                                    <tbody className="">
                                                        {/* row 1 */}
                                                        <tr className="flex items-center justify-between">
                                                            <th className="w-12 md:w-fit">
                                                                <button onClick={() => handleRemoveOrders(order._id)} className="text-lg btn btn-error btn-sm btn-circle">X</button>
                                                            </th>
                                                            <td className="w-12 md:w-32 hidden md:inline-flex ">
                                                                <div className="avatar">
                                                                    <div className=" w-12 h-12 md:w-24 md:h-24">
                                                                        <img className="" src={order.img ? order.img : "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"} alt="service-image" />
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="w-28 md:w-32 ">
                                                                <span>{order.serviceName}</span>
                                                            </td>
                                                            <td className="w-22 md:w-fit p-2"> <span>{order.date}</span> <br />
                                                                <span className="md:hidden text-accent">$ {order.price}</span>
                                                            </td>
                                                            <td className="hidden md:inline-flex">$ {order.price}</td>
                                                            <th>
                                                                <button className="btn btn-ghost btn-xs">details</button>
                                                            </th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )
                                    }
                                </div>
                        }
                    </div>}
            </div>


        </div>
    );
};

export default Cart;