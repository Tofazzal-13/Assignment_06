import React, { use } from 'react';
import PremiumCard from '../PremiumCard/PremiumCard';


const Primiums = ({ primiumPromise, carts, setCarts }) => {

    const primiums = use(primiumPromise)
    


    return (
        <div className='container mx-auto  md: my-10 space-y-4'>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 '>
                {
                    primiums.map((primium) =>
                        <PremiumCard key={primium.id} primium = {primium} carts={carts} setCarts={setCarts}></PremiumCard>

                    )
                }
            </div>
        </div>
    );
};

export default Primiums;

