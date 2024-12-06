import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <section>
            <div className='flex justify-between flex-wrap w-[943px] h-[161px] m-auto my-[80px] items-center gap-[20px]'>
                <div className='w-[249px] h-[161px] flex flex-col justify-center items-center'>
                    <Image src='/images/services.png' alt='' width={80} height={80}></Image>
                    <h3 className='text-[20px] font-semibold mt-2'>FREE AND FAST DELIVERY</h3>
                    <p className='text-[14px]'>Free delivery for all orders over $140</p>
                </div>
                <div className='w-[249px] h-[161px] flex flex-col justify-center items-center'>
                    <Image src='/images/services (1).png' alt='' width={80} height={80}></Image>
                    <h3 className='text-[20px] font-semibold mt-2'>24/7 CUSTOMER SERVICE</h3>
                    <p className='text-[14px]'>Friendly 24/7 customer support</p>
                </div>
                <div className='w-[249px] h-[161px] flex flex-col justify-center items-center'>
                    <Image src='/images/services (2).png' alt='' width={80} height={80}></Image>
                    <h3 className='text-[20px] font-semibold mt-2'>MONEY BACK GUARANTEE</h3>
                    <p className='text-[14px]'>We reurn money within 30 days</p>
                </div>
            </div>
        </section>
    )
}

export default Services