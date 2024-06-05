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
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(!isOrderFetching){
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
                {
                    orders.map(order =>

                        <div key={order._id} className="overflow-x-auto mb-4 bg-base-300">
                            <table className="table">
                                {/* head */}

                                <tbody className="">
                                    {/* row 1 */}
                                    <tr className="flex items-center justify-between">
                                        <th className="w-12">
                                            <button onClick={()=> handleRemoveOrders(order._id)} className="text-lg btn btn-error btn-sm ">X</button>
                                        </th>
                                        <td className="w-12 hidden md:inline-flex">
                                            <div className="avatar">
                                                <div className=" w-12 h-12 md:w-24 md:h-24">
                                                    <img className="" src={order.img ? order.img : "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"} alt="service-image" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="w-32">
                                            <span>{order.serviceName}</span>
                                        </td>
                                        <td className="w-32 p-2"> <span>{order.date}</span> <br />
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

        </div>
    );
};

export default Cart;