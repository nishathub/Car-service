import { useContext, useEffect, useState } from "react";
import { carDoctorContext } from "../AuthProvider/carDoctorContext";

const Cart = () => {
    const {user} = useContext(carDoctorContext);
    const [orders, setOrders] = useState([]);

    //WE USED QUERY (req.query) in the backend to get specific user data.
    useEffect(() => {
        fetch(`http://localhost:5000/allOrders?email=${user?.email}`)
        .then(res=> res.json())
        .then(data => {
            setOrders(data);
        })
    },[user])
    console.log(orders);
    return (
        <div>
            
        </div>
    );
};

export default Cart;