import { useContext, useEffect, useState } from "react";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";
import CartItem from "../Components/CartItem/CartItem";
// import axios from 'axios';

const Cart = () => {
    const { user, isAdmin, isLoading } = useContext(carDoctorContext);
    const [orders, setOrders] = useState([]);
    const [isOrderFetching, setOrderFetching] = useState(true);
    const [isRefetch, setRefetch] = useState(false);

    //WE USED QUERY (req.query) in the backend to get specific user data.
    // For admin, fetch all order, for others, only theirs ;
    const URL = isAdmin ? `http://localhost:5000/allOrders` : `http://localhost:5000/allOrders?email=${user?.email}`;
    useEffect(() => {
        if (!isLoading) { // this conditioning is very crucial to avoid unnecessary fetching empty data 
            fetch(URL,{
                credentials: 'include',
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                    setOrderFetching(false); // only after fetching data, we make it false
                    setRefetch(false); // necessary for admin status command
                })
        }
    }, [user, isRefetch, isLoading, URL])

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

    // according to command, we will perform action (cancel/confirm)

    const handleOrderConfirm = (event, id) => {
        console.log(id);
        const newStatus = {
            status: event.target.textContent
        };
        console.log(newStatus);
        fetch(`http://localhost:5000/allOrders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setRefetch(true);

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }


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
                            orders.length === 0 ?
                                <div className="text-center h-screen">
                                    <p className="text-error text-3xl">Cart is empty!</p>
                                    <p className="mt-4 text-xl">Add some services to keep your vehicle smooth</p>
                                </div>
                                :
                                <div>
                                    <div>
                                        {isAdmin &&
                                            <div>
                                                <p className="text-yellow-400 font-bold text-right my-4">You are Admin</p>
                                            </div>}
                                    </div>
                                    {/* table header  */}
                                    <div className="overflow-x-auto mb-4 bg-base-300">
                                        <table className="table">
                                            <thead>
                                                <tr className="flex justify-between text-gray-300 tracking-wider">
                                                    <th hidden={isAdmin}>Delete</th>
                                                    <th hidden={isAdmin ? false : true}>Email</th>
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

                                            <CartItem
                                                key={order._id}
                                                order={order}
                                                handleRemoveOrders={handleRemoveOrders}
                                                handleOrderConfirm={handleOrderConfirm}
                                                isAdmin={isAdmin}
                                            ></CartItem>
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