import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0)
    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successfully")
    }
    const handleDelete = (cart) =>{
        const filteredArray = carts.filter(c => c.id !== cart.id)
        setCarts(filteredArray)
        toast.success("Delete from Cart")
        
    }


    return (
        <div className='container mx-auto border border-gray-400 rounded-2xl  m-10 p-8 space-y-4'>
            <h2 className='text-2xl font-semibold'>Your Cart :</h2>
            {
                carts.length === 0 ? <p className='text-center font-bold text-2xl'>Card is Empty 😎</p>:
                    <>
                        <div>
                            {
                                carts.map((cart) => (
                                    <div key={cart.id}>

                                        <div className='space-y-2'>
                                            <div className='flex justify-between items-center border p-4 border-gray-300 rounded-3xl '>
                                                <div className='flex gap-3 items-center'>
                                                    <div className='border border-[#F2F2F2] rounded-full w-10 h-10 p-2  justify-center items-center'>
                                                        <img className='flex' src={cart.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h3 className='font-bold'>{cart.name}</h3>
                                                        <p className='text-gray-500'>$ {cart.price}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button 
                                                    onClick={() => handleDelete(cart)}
                                                    className='text-red-500'>Remove</button>
                                                </div>
                                            </div>



                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p>Totol : </p>
                            <h4 className='text-xl font-bold'>${totalPrice.toFixed(2)}</h4>
                        </div>
                        <button onClick={handlePayment} className='btn rounded-full bg-linear-to-r from-[#513BF9] to-[#9514FA] text-white w-full '>Proceed to Checkout</button>

                    </>
            }
        </div>
    );
};

export default Cart;


