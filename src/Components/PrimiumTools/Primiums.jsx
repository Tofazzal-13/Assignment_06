import React, { use } from 'react';

const Primiums = ({ primiumPromise }) => {

    const primiums = use(primiumPromise)


    return (
        <div className='container mx-auto  md: my-10'>
            <div className='space-y-2 text-center'>
                <h2 className='text-2xl md:text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to <br />
                    <span>boost your productivity and creativity.</span> </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5 '>
                {
                    primiums.map(primium => <div>
                        <div className='card border border-[#F2F2F2] shadow-xs p-4 h-full m-4 md:m-0 rounded-2xl space-y-4 relative'>

                            {/* <div className='border rounded-3xl border-gray-400 text-center px-3 absolute top-2 right-2'>
                                <a href="">{primium.tagType}</a>
                            </div> */}

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


                            <button className='btn rounded-2xl bg-linear-to-r from-[#513BF9] to-[#9514FA] text-white hover:opacity-90 transition-opacity'>Buy Now</button>


                        </div>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default Primiums;


/*   {
    "id": "prod-01",
    "name": "Starter Plan",
    "description": "Essential tools for individuals and small projects getting started.",
    "price": 0,
    "period": "one-time",
    "tag": "Free Forever",
    "tagType": "new",
    "features": ["3 Projects", "Basic Analytics", "Community Support"],
    "icon": "rocket-launch"
  } */