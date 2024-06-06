import { useState } from "react";


const CartItem = ({ order, handleRemoveOrders, handleOrderConfirm, isAdmin }) => {
    const { _id, img, date, price, serviceName, status, email } = order;



    // dynamically set status message
    const statusMessage = () => {
        if (status === 'pending') {
            return <p className="text-warning">Pending</p>
        } else if (status === 'Confirm') {
            return <p className="text-accent">Confirmed</p>
        } else if (status === 'Cancel') {
            return <p className="text-error">Cancelled</p>
        }
    };


    return (
        <div className="overflow-x-auto mb-4 bg-base-300">
            <table className="table">

                <tbody className="">
                    {/* row 1 */}
                    <tr className="flex items-center justify-between">
                        <th hidden={isAdmin ? true : false} className="w-12 md:w-fit">
                            <button disabled={isAdmin ? true : false} onClick={() => handleRemoveOrders(_id)} className="text-lg btn btn-error btn-sm btn-circle">X</button>
                        </th>
                        <td hidden={isAdmin ? false : true} className="">
                            <span className=" text-wrap">{email}</span>
                        </td>
                        
                        <td className="w-12 md:w-32 hidden md:inline-flex ">
                            <div className="avatar">
                                <div className=" w-12 h-12 md:w-24 md:h-24">
                                    <img className="" src={img ? img : "https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"} alt="service-image" />
                                </div>
                            </div>
                        </td>
                        <td className="w-22 md:w-32 ">
                            <span>{serviceName}</span>
                        </td>
                        <td className="w-28 md:w-fit p-2 "> <span>{date}</span> <br />
                            <span className="md:hidden text-accent">$ {price}</span>
                        </td>
                        <td className="hidden md:inline-flex">$ {price}</td>
                        <th>
                            {
                                // put event listener on parent element to get dynamic command 
                                isAdmin ?
                                    <div>
                                        {
                                            status === 'pending' ?
                                                <div onClick={(event) => handleOrderConfirm(event, _id)} className="flex flex-col gap-2">
                                                    <button className="btn btn-xs btn-primary">Confirm</button>
                                                    <button className="btn btn-xs btn-error">Cancel</button>
                                                </div>
                                                :
                                                <div>
                                                    <div className="rounded-lg py-2 px-4 font-normal bg-black mb-1">
                                                       {statusMessage()}
                                                    </div>
                                                    <div onClick={(event) => handleOrderConfirm(event, _id)} className="flex flex-col gap-2">
                                                        <button className="btn btn-xs btn-success btn-outline tracking-wider">Confirm</button>
                                                        <button className="btn btn-xs btn-error btn-outline tracking-wider">Cancel</button>
                                                    </div>
                                                </div>
                                        }

                                    </div>
                                    :
                                    <div>{statusMessage()}</div>

                            }
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CartItem;