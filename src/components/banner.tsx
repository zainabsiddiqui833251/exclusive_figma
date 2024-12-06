import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className='border w-[1170px] m-auto h-[500px] mt-[80px] ml-[100px]'>
            <Image src='/images/Frame 600.png' alt='' width={1170} height={500} />
        </section>
    )
}

export default Banner