import React from 'react';

const TransCard = ({ cardsData }) => {
    
    const isPopular = cardsData.tagType === 'popular';

    return (
        <div className="relative h-full">
            
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-[#FFF4E5] text-[#FF8A00] text-xs font-bold px-4 py-1 rounded-full shadow-sm border border-orange-100">
                        {cardsData.tag}
                    </span>
                </div>
            )}

            
            <div className={`p-8 space-y-6 rounded-2xl h-full flex flex-col justify-between transition-all duration-300 border
                ${isPopular 
                    ? 'bg-[#8B2CFF] text-white border-transparent shadow-2xl scale-105 z-10' 
                    : 'bg-white text-[#101727] border-gray-100'
                }`}
            >
                <div className="space-y-4">
                    
                    <div>
                        <h2 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-[#101727]'}`}>
                            {cardsData.name}
                        </h2>
                        <p className={`${isPopular ? 'text-purple-100' : 'text-[#627382]'} text-sm`}>
                            {cardsData.description}
                        </p>
                    </div>

                    
                    <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-[#101727]'}`}>
                            ${cardsData.price}
                        </span>
                        <span className={`text-sm ${isPopular ? 'text-purple-200' : 'text-[#627382]'}`}>
                            /{cardsData.period}
                        </span>
                    </div>

                   
                    <div className="space-y-3 pt-2">
                        {cardsData.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className={`${isPopular ? 'text-white' : 'text-[#30B868]'} font-bold`}>
                                    ✔
                                </span>
                                <span className={`text-sm ${isPopular ? 'text-white' : 'text-[#627382]'}`}>
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="pt-6">
                    <button className={`w-full py-3 rounded-full font-semibold transition-all
                        ${isPopular 
                            ? 'bg-white text-[#8B2CFF] hover:bg-gray-100' 
                            : 'bg-[#8B2CFF] text-white hover:opacity-90'
                        }`}
                    >
                        {cardsData.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransCard;