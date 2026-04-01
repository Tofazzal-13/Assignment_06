import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PremiumCard = ({ primium, carts, setCarts }) => {

    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true)
        const isFound = carts.find(cart => cart.id === primium.id)
        if(isFound){
            toast.error("cart already in cart")
            return
        }
        
        setCarts([...carts, primium])
        toast.success("add to cart")
    }

    return (
        <div>
            <div className='card border border-[#F2F2F2] shadow-xs p-4 h-full m-4 md:m-0 rounded-2xl space-y-4 relative'>


                <div className={`border rounded-3xl text-center px-3 absolute top-2 right-2 text-xs font-medium py-0.5
                            ${primium.tagType === 'popular' ? 'bg-orange-100 text-orange-600 border-orange-200' : ''}
                            ${primium.tagType === 'new' ? 'bg-blue-100 text-blue-600 border-blue-200' : ''}
                            ${primium.tagType === 'best seller' ? 'bg-green-100 text-green-600 border-green-200' : ''}
                        `}>
                    <p className='font-bold'>{primium.tagType}</p>
                </div>

                <div className='border border-[#F2F2F2] rounded-full w-10 h-10 p-2  justify-center items-center'>
                    <img className=' flex ' src={primium.img} alt="" />
                </div>
                <div className='space-y-3'>
                    <h2 className='text-[#101727] font-bold text-2xl'>{primium.name}</h2>
                    <p className='text-[#627382]'>{primium.description}</p>
                    <h4><span className='font-bold text-xl'>$ {primium.price}</span> <span className='text-[#627382] text-xs'> /   {primium.period}</span></h4>
                    <div className='space-y-1'>
                        <p className='text-[#627382]'><span className='text-[#30B868]'>✔</span>   {primium.features[0]}</p>
                        <p className='text-[#627382]'><span className='text-[#30B868]'>✔</span> {primium.features[1]}</p>
                        <p className='text-[#627382]'><span className='text-[#30B868]'>✔</span> {primium.features[2]}</p>
                    </div>
                </div>


                <button onClick={handleBuy}
                    className={`btn rounded-2xl transition-all duration-300 border-none text-white font-semibold 
                         ${isBuy
                            ? 'bg-linear-to-r from-[#30B868] to-[#109968]' // Green Gradient jokhon "Added to Cart" hobe
                            : 'bg-linear-to-r from-[#513BF9] to-[#9514FA] hover:opacity-90' // Purple Gradient jokhon "Buy Now" thakle
                        }`}>
                    {isBuy ? "Add to Cart" : "Buy Now"}
                </button>


            </div>
        </div>
    );
};

export default PremiumCard;