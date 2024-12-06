import React from 'react'
import Image from 'next/image'

const Category = () => {
    return (
        <section>
            <div className="ml-[100px] w-[1170px]">
                <div className="flex text-[#DB4444] capitalize text-[16px] font-semibold mt-[100px] items-center gap-[20px]">
                    <div className="bg-[#DB4444] w-[20px] h-[40px]"></div>
                    <span>categories</span>
                </div>
            </div>
            <div className="flex items-center justify-between w-[1155px] m-auto">
                <div className="flex justify-center items-center gap-[85px]">
                    <div className="text-[36px] font-semibold capitalize mt-[15px] h-[50px] flex items-center">
                        <p>browse by category</p>
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
            <div className="flex justify-between items-center w-[1155px] text-[16px] m-auto my-8">
                <div className="w-[170px] hover:bg-[#db4444]  h-[145px] border-[0.5px] flex flex-col justify-center items-center">
                    <Image src="/images/phone.png" alt="" width={56} height={56}></Image>
                    <p>Phones</p>
                </div>
                <div className="w-[170px] hover:bg-[#db4444]  h-[145px] border-[0.5px] flex flex-col justify-center items-center">
                    <Image src="/images/computer.png" alt="" width={56} height={56}></Image>
                    <p>Computers</p>
                </div>
                <div className="w-[170px] hover:bg-[#db4444]  h-[145px] border-[0.5px] flex flex-col justify-center items-center">
                    <Image src="/images/watch.png" alt="" width={56} height={56}></Image>
                    <p>SmartWatch</p>
                </div>
                <div className="w-[170px] hover:bg-[#db4444]  h-[145px] border-[0.5px] flex flex-col justify-center items-center">
                    <Image src="/images/Camera.png" alt="" width={56} height={56}></Image>
                    <p>Camera</p>
                </div>
                <div className="w-[170px] hover:bg-[#db4444]  h-[145px] border-[0.5px] flex flex-col justify-center items-center">
                    <Image src="/images/headphones.png" alt="" width={56} height={56}></Image>
                    <p>HeadPhones</p>
                </div>
                <div className="w-[170px] hover:bg-[#db4444]  h-[145px] border-[0.5px] flex flex-col justify-center items-center">
                    <Image src="/images/gamepad.png" alt="" width={56} height={56}></Image>
                    <p>Gaming</p>
                </div>
            </div>
            <div className='w-[86%] m-auto h-[1px] my-8 bg-black opacity-30'></div>
        </section>
    )
}

export default Category