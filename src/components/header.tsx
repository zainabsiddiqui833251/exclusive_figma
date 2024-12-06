import React from 'react'
import Image from 'next/image'  

const Header = () => {
    return (
        <header className='w-full h-[390px] flex items-center'>
            <div>
                <div className='w-[217px] mt-[50px] ml-[100px]'>
                    <ul className='capitalize text-[20px] font-normal'>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>woman's fashion<i className="bi bi-chevron-right font-bold"></i></li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>men's fashion<i className="bi bi-chevron-right font-bold"></i></li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>electronics</li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>home & lifestyle</li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>medicine</li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>sports & outdoor</li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>baby's & toys</li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>groceries & pets</li>
                        <li className='mb-[16px] w-[217px] h-[24px] flex justify-between items-center'>health & beauty</li>
                    </ul>
                </div>
            </div>
            <div className='h-full w-[1px] bg-black opacity-30 ml-[20px]'>

            </div>
            <div className='ml-[40px] mt-[40px] h-fit'>
                <Image src='/images/Frame 560.png' alt='' width={892} height={500} className='h-fit'></Image>
            </div>
        </header>
    )
}

export default Header