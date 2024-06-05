import { useContext, useEffect, useState } from "react";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";
import CartItem from "../Components/CartItem/CartItem";

const Cart = () => {
    const { user } = useContext(carDoctorContext);
    const [orders, setOrders] = useState([]);
    const [isOrderFetching, setOrderFetching] = useState(true);
    const [isRefetch, setRefetch] = useState(false);

    //WE USED QUERY (req.query) in the backend to get specific user data.
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setOrderFetching(false);
                setRefetch(false);
            })
    }, [user, isRefetch])

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

                                            <CartItem
                                                key={order._id}
                                                order={order}
                                                handleRemoveOrders={handleRemoveOrders}
                                                handleOrderConfirm={handleOrderConfirm}
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