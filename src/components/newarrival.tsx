import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Newarrival = () => {
    return (
        <section>
            <div className='w-[1170px] ml-[100px]'>
                <div className="flex text-[#DB4444] capitalize text-[16px] font-semibold mt-[100px] items-center gap-[20px]">
                    <div className="bg-[#DB4444] w-[20px] h-[40px]"></div>
                    <span>featured</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex justify-center items-center gap-[85px]">
                        <div className="text-[36px] font-semibold capitalize mt-[15px] h-[50px] flex items-center">
                            <p>new arrival</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-[1170px] m-auto justify-between mt-10 items-center">
                    {/* Left Section */}
                    <div className="w-[570px] h-[600px] bg-black relative">
                        <Image
                            src="/images/ps5.png"
                            alt=""
                            width={511}
                            height={511}
                            className="absolute bottom-0 flex items-start"
                        />
                        {/* Content Div */}
                        <div className="absolute bottom-8 left-8  text-white  ">
                            <h1 className=' w-[] h-[] text-[24px] font-semibold mb-3'>PlayStation 5</h1>
                            <p className='text-[14px] w-[242px] h-[42px] mb-3'>Black and White version of the PS5 coming out on sale.</p>
                            <Link href='' className='underline text-[16px] font-medium'>Shop Now</Link>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-[570px] h-[600px]">
                        {/* Upper Right Section */}
                        <div className="w-[570px] h-[286px] bg-[#0C0C0C] relative">
                            <Image
                                src="/images/women.png"
                                alt=""
                                width={432}
                                height={286}
                                className="absolute right-0"
                            />
                            {/* Content Div */}
                            <div className="absolute bottom-8 left-8 text-white  ">
                                <h1 className=' w-[] h-[] text-[24px] font-semibold mb-3'>Women&apos;s Collections</h1>
                                <p className='text-[14px] w-[255px] h-[42px] mb-3'>Featured woman collections that give you another vibe.</p>
                                <Link href='' className='underline text-[16px] font-medium'>Shop Now</Link>

                            </div>
                        </div>

                        {/* Lower Right Section */}
                        <div className="flex justify-between items-center mt-[28px]">
                            {/* Speaker Section */}
                            <div className="bg-[#1a1a1a] w-[270px] h-[284px] flex justify-center items-center relative">
                                <Image
                                    src="/images/speaker.png"
                                    alt=""
                                    width={210}
                                    height={222}
                                />
                                {/* Content Div */}
                                <div className="absolute bottom-8 left-8  text-white  ">
                                    <h1 className=' w-[] h-[] text-[24px] font-semibold mb-1'>Speakers</h1>
                                    <p className='text-[14px] w-[242px] h-[21px] mb-1'>Amazon wireless speakers</p>
                                    <Link href='' className='underline text-[16px] font-medium'>Shop Now</Link>
                                </div>

                            </div>

                            {/* Perfume Section */}
                            <div className="bg-[#1a1a1a] w-[270px] h-[284px] flex justify-center items-center relative">
                                <Image
                                    src="/images/perfume.png"
                                    alt=""
                                    width={210}
                                    height={222}
                                />
                                <div className="absolute bottom-8 left-8  text-white  ">
                                    <h1 className=' w-[] h-[] text-[24px] font-semibold mb-1'>Perfume</h1>
                                    <p className='text-[14px] w-[242px] h-[21px] mb-1'>GUCCI INTENSE OUD EDP</p>
                                    <Link href='' className='underline text-[16px] font-medium'>Shop Now</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Newarrival