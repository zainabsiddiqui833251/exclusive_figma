import React from 'react'
import Image from 'next/image'

const card_data3 = [
    {
        id: 1,
        image: '/images/dogfood.png',
        title: 'Breed Dry Dog Food',
        price: '$100',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
    },
    {
        id: 2,
        image: '/images/camera2.png',
        title: 'CANON EOS DSLR Camera',
        price: '$360',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
    },
    {
        id: 1,
        image: '/images/laptop.png',
        title: 'ASUS FHD Gaming Laptop',
        price: '$700',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
    },
    {
        id: 1,
        image: '/images/curology.png',
        title: 'Curology Product Set ',
        price: '$500',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
    },
    {
        id: 1,
        image: '/images/kidscar.png',
        title: 'Kids Electric Car',
        price: '$960',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
        tag: 'new',
        color1: '#FB1314',
        color2: '#db4444',
    },
    {
        id: 1,
        image: '/images/shoes.png',
        title: 'Jr. Zoom Soccer Cleats',
        price: '$1160',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
        color1: '#EEFF61',
        color2: '#bd4444',
    },
    {
        id: 7,
        image: '/images/gameconsole.png',
        title: 'GP11 Shooter USB Gamepad',
        price: '$660',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
        tag: 'new',
        color1: '#db4444',
        color2: '#000000',
    },
    {
        id: 8,
        image: '/images/jacket.png',
        title: 'Quilted Satin Jacket',
        price: '$660',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (65)',
        color1: '#184A48',
        color2: '#DB4444',
    },
]

const Ourproducts = () => {
    return (
        <section>
            <div className="ml-[100px] w-[1170px]">
                <div className="flex text-[#DB4444] capitalize text-[16px] font-semibold mt-[100px] items-center gap-[20px]">
                    <div className="bg-[#DB4444] w-[20px] h-[40px]"></div>
                    <span>our products</span>
                </div>
            </div>
            <div className="flex items-center justify-between w-[1155px] m-auto">
                <div className="flex justify-center items-center gap-[85px]">
                    <div className="text-[36px] font-semibold capitalize mt-[15px] h-[50px] flex items-center">
                        <p>explore our products</p>
                    </div>
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-[8px] ml-auto h-[50px]">
                    <div
                        className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center text-[32px] font-bold cursor-pointer"
                    >
                        <i className="bi bi-arrow-left-short"></i>
                    </div>
                    <div
                        className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center text-[32px] font-bold cursor-pointer"
                    >
                        <i className="bi bi-arrow-right-short"></i>
                    </div>
                </div>
            </div>
            <div className="cardlist flex mt-[20px] w-[1170px] ml-[100px] justify-between flex-wrap overflow-x-auto">
                {card_data3.map((card, index) => (
                    <div
                        key={index}
                        className="card relative w-[270px] overflow-y-hidden h-[350px] group"
                    >
                        {/* "New" Tag */}
                        {card.tag === 'new' && (
                            <div className="absolute top-2 left-2 w-[51px] h-[26px] flex justify-center items-center text-[12px] bg-[#00FF66] text-white py-1 px-3 rounded-lg font-bold z-10">
                                New
                            </div>
                        )}

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
                        <div className="pt-4">
                            <h1 className="text-[16px] font-medium">{card.title}</h1>
                            <h2 className="text-[16px] font-medium flex">
                                <span className="text-[#DB4444] mr-4">{card.price}</span>{' '}
                                <p
                                    className="text-[14px] text-[#FFAD33]"
                                    dangerouslySetInnerHTML={{ __html: card.ratings }}
                                />
                            </h2>
                            {/* Color Circles */}
                            {(card.color1 || card.color2) && (
                                <div className="flex gap-2 mt-2">
                                    {card.color1 && (
                                        <div
                                            className="w-[15px] h-[15px] rounded-full border-black border-[0.5px] "
                                            style={{ backgroundColor: card.color1 }}
                                        ></div>
                                    )}
                                    {card.color2 && (
                                        <div
                                            className="w-[15px] h-[15px] rounded-full border-black border-[0.5px] "
                                            style={{ backgroundColor: card.color2 }}
                                        ></div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button className="capitalize w-[234px] h-[56px] text-[16px] bg-[#db4444] text-white block m-auto my-8">
                view all products
            </button>

        </section>
    )
}

export default Ourproducts
