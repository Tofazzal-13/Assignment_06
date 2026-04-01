import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts);


    return (
        <div className='container mx-auto border border-gray-400  m-10 p-8 space-y-4'>
            <h2 className='text-2xl font-semibold'>Your Cart :</h2>
            {
                carts.map((cart) => (
                    <div key={cart.id}>

                        <div className='flex justify-between items-center border p-4 border-gray-300 rounded-3xl '>
                            <div className='flex gap-3 items-center'>
                                <div className='border border-[#F2F2F2] rounded-full w-10 h-10 p-2  justify-center items-center'>
                                    <img className='flex' src={cart.img} alt="" />
                                </div>
                                <div>
                                    <h3>{cart.name}</h3>
                                    <p>$ {cart.price}</p>
                                </div>
                            </div>
                            <div>
                                <button className='text-red-500'>Remove</button>
                            </div>
                        </div>
                        <div>
                            <p>Totol</p>
                            <h4>0</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;



/*     "id": "prod-01",
    "name": "Starter Plan",
    "description": "Essential tools for individuals and small projects getting started.",
    "price": 0,
    "period": "one-time",
    "tag": "Free Forever",
    "tagType": "new",
    "features": ["3 Projects", "Basic Analytics", "Community Support"],
    "icon": "rocket-launch",
    "img": "https://i.ibb.co.com/sJPR2SP3/2601192.png" */