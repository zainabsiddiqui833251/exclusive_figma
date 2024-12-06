'use client'
import Image from 'next/image';
import React, { useRef } from 'react';

const card_data = [
    {
        image: '/images/img1.png',
        title: 'HAVIT HV-G92 Gamepad',
        new_price: '$120',
        old_price: '$160',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (88)',
        discount: '-40%',
    },
    {
        image: '/images/img2.png',
        title: 'AK-900 Wired Keyboard',
        new_price: '$960',
        old_price: '$1160',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> (75)',
        discount: '-35%',
    },
    {
        image: '/images/img3.png',
        title: 'IPS LCD Gaming Monitor',
        new_price: '$370',
        old_price: '$400',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> (99)',
        discount: '-30%',
    },
    {
        image: '/images/img4.png',
        title: 'S-Series Comfort Chair',
        new_price: '$375',
        old_price: '$400',
        ratings: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i>',
        discount: '-25%',
    },
    {
        image: '/images/img4.png',
        title: 'S-Series Comfort Chair',
        new_price: '$375',
        old_price: '$400',
        ratings: '<i class="bi bi-star-half"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>',
        discount: '-25%',
    },
];

const Flashsales = () => {
    const cardListRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (cardListRef.current) {
            cardListRef.current.scrollBy({
                left: -300, // Adjust this value as needed
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (cardListRef.current) {
            cardListRef.current.scrollBy({
                left: 300, // Adjust this value as needed
                behavior: 'smooth',
            });
        }
    };

    return (
        <section>
            <div className="ml-[100px] w-[1170px]">
                {/* Title Section */}
                <div className="flex text-[#DB4444] capitalize text-[16px] font-semibold mt-[100px] items-center gap-[20px]">
                    <div className="bg-[#DB4444] w-[20px] h-[40px]"></div>
                    <span>today's</span>
                </div>

                {/* Flash Sales Section */}
                <div className="flex items-center justify-between">
                    <div className="flex justify-center items-center gap-[85px]">
                        <div className="text-[36px] font-semibold capitalize mt-[15px] h-[50px] flex items-center">
                            <p>flash sales</p>
                        </div>
                        <div className="flex items-center capitalize h-[50px]">
                            <h1 className="text-[32px] font-bold mx-4 leading-none">
                                <span className="text-[12px] font-medium">days</span> <br />
                                03
                            </h1>
                            <span className="text-[36px] text-[#DB4444]">:</span>
                            <h1 className="text-[32px] font-bold mx-4 leading-none">
                                <span className="text-[12px] font-medium">hours</span> <br />
                                23
                            </h1>
                            <span className="text-[36px] text-[#DB4444]">:</span>
                            <h1 className="text-[32px] font-bold mx-4 leading-none">
                                <span className="text-[12px] font-medium">minutes</span> <br />
                                19
                            </h1>
                            <span className="text-[36px] text-[#DB4444]">:</span>
                            <h1 className="text-[32px] font-bold mx-4 leading-none">
                                <span className="text-[12px] font-medium">seconds</span> <br />
                                56
                            </h1>
                        </div>
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex items-center gap-[8px] ml-auto h-[50px]">
                        <div
                            className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center text-[32px] font-bold cursor-pointer"
                            onClick={scrollLeft}
                        >
                            <i className="bi bi-arrow-left-short"></i>
                        </div>
                        <div
                            className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center text-[32px] font-bold cursor-pointer"
                            onClick={scrollRight}
                        >
                            <i className="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="cardlist flex ml-[100px] mt-[20px] gap-[20px] overflow-x-auto"
                ref={cardListRef}
            >
                {card_data.map((card, index) => (
                    <div
                        key={index}
                        className="card relative w-[270px] overflow-y-hidden h-[350px] group"
                    >
                        {/* Discount Tag */}
                        <div className="absolute top-3 left-3 rounded-lg w-[55px] h-[26px] text-center bg-[#DB4444] text-white px-2 py-1 text-[12px] font-bold z-10">
                            {card.discount}
                        </div>

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
                        <div className="p-4">
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
            <button className="capitalize w-[234px] h-[56px] text-[16px] bg-[#db4444] text-white block m-auto my-8">
                view all products
            </button>
            <div className='w-[85%] m-auto h-[1px] bg-black opacity-30'></div>
        </section>
    );
};

export default Flashsales;
