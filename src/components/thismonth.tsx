import React from 'react'
import Image from 'next/image';

const card_data1 =[
    {
        id: 1,
        image: '/images/Frame 605.png',
        title: 'The north coat',
        new_price: '$260',
        old_price: '$360',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
    },
    {
        id: 2,
        image: '/images/Frame 606.png',
        title: 'Gucci duffle bag',
        new_price: '$960',
        old_price: '$1160',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill-half"></i> (65)',
    },
    {
        id: 3,
        image: '/images/Frame 610.png',
        title: 'RGB liquid CPU Cooler',
        new_price: '$160',
        old_price: '$170',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill-half"></i> (65)',
    },
    {
        id: 4,
        image: '/images/Frame 612.png',
        title: 'Small BookSelf',
        new_price: '$360',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
    }
]
const Thismonth = () => {
    return (
        <section className='mt-[100px] ml-[100px] w-[1170px]'>
            <div>
                <div className="">
                    <div className="flex text-[#DB4444] capitalize text-[16px] font-semibold mt-[100px] items-center gap-[20px]">
                        <div className="bg-[#DB4444] w-[20px] h-[40px]"></div>
                        <span>This Month</span>
                    </div>
                </div>
                <div className="flex items-center justify-between ">
                    <div className="flex justify-center items-center gap-[85px]">
                        <div className="text-[36px] font-semibold capitalize mt-[15px] h-[50px] flex items-center">
                            <p>browse by category</p>
                        </div>
                    </div>

                    <div>
                        <button className='w-[159px] h-[56px] bg-[#db4444] text-white text-[16px] font-medium capitalize'>view all</button>
                    </div>
                </div>
                <div
                    className="cardlist flex  mt-[20px] justify-between overflow-x-auto"
                    
                >
                    {card_data1.map((card, index) => (
                        <div
                            key={index}
                            className="card relative w-[270px] overflow-y-hidden h-[350px] group"
                        >
                            

                            {/* Image Section */}
                            <div className="w-full h-[250px] flex justify-center bg-[#F5F5F5] items-center relative">
                                <Image src={card.image} alt={card.title} width={190} height={180} />

                                {/* Heart and Eye Icons */}
                                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
                                    <button className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center hover:bg-gray-200">
                                        <i className="bi bi-heart text-[16px]"></i>
                                    </button>
                                    <button className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center hover:bg-gray-200">
                                        <i className="bi bi-eye text-[16px]"></i>
                                    </button>
                                </div>

                                {/* Hover Add to Cart Button */}
                                <div className="absolute bottom-0 left-0 w-full bg-black h-[41px] text-white flex justify-center items-center text-[14px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Add to Cart
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className=" pt-4">
                                <h1 className="text-[16px] font-medium">{card.title}</h1>
                                <h2 className="text-[16px] font-medium">
                                    <span className="text-[#DB4444] mr-4">{card.new_price}</span>{' '}
                                    <del className="text-gray-500">{card.old_price}</del>
                                </h2>
                                <h2
                                    className="text-[14px] text-[#FFAD33]"
                                    dangerouslySetInnerHTML={{ __html: card.ratings }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Thismonth