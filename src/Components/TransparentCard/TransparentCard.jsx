import React, { use } from 'react';
import TransCard from '../TransCard/TransCard';

const TransparentCard = ({transparentPromise}) => {
    const transparentData = use(transparentPromise)
    
    
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='text-center space-y-4'>
                <h2 className='text-5xl font-extrabold '>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-6 md:my-10'>
             {
                transparentData.map((cardsData) => 
                   <TransCard key={cardsData.id}  cardsData = {cardsData}></TransCard>
                    
                )
            }
           </div>
        </div>
    );
};

export default TransparentCard;
