import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-black text-white h-[440px] '>
            <div className='flex justify-between px-32 flex-wrap pt-24'>
                <div className='w-[217px] h-[188px] '>
                    <h2 className='font-bold text-[24px] mb-4'>Exclusive</h2>
                    <h3 className='text-[20px] font-medium mb-4'>Subscribe</h3>
                    <p className='text-[16px] mb-4'>Get 10% off your first order</p>
                    <div className='flex w-[217px] h-[48px] justify-around border items-center'>
                        <input type="text" placeholder='Enter Your Email' className='w-[130px] text-[16px] bg-transparent focus:outline-none h-[24px]' />
                        <Image src='/images/send.png' alt='' width={24} height={24}></Image>
                    </div>
                </div>

                <div className='w-[175px] h-[180px] '>
                    <h2 className='font-medium text-[20px] mb-4'>Support</h2>
                    <p className='text-[16px] mb-4'>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
                    <p className='text-[16px] mb-4'>exclusive@gmail.com</p>
                    <p className='text-[16px] mb-4'>+88015-88888-9999</p>
                </div>

                <div className='w-[123px] h-[236px] '>
                    <h2 className='font-medium text-[20px] mb-4'>Account</h2>
                    <ul>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>My Account</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Login / Register</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Cart</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Wishlist</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Shop</Link>
                        </li>
                    </ul>
                </div>

                <div className='w-[109px] h-[196px] '>
                    <h2 className='font-medium text-[20px] mb-4'>Quick Link</h2>
                    <ul>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Privacy Policy</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Terms Of Use</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>FAQ</Link>
                        </li>
                        <li className='text-[16px] mb-4 font-normal '>
                            <Link href=''>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='w-[198px] h-[210px] '>
                    <h2 className='font-medium text-[20px] mb-4'>Download App</h2>
                    <p className='text-[12px] font-medium text-[#fafafa]'>Save $3 with App New User Only</p>
                    <div className='flex justify-between mt-3'>
                        <Image src='/images/qr.png' alt='' width={80} height={80}></Image>
                        <div className='flex flex-col items-center justify-between'>
                            <Image src='/images/googlelogo.png' alt='' width={104} height={30}></Image>
                            <Image src='/images/download-appstore.png' alt='' width={104} height={30}></Image>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <Image src='/images/facebook.png' alt='' width={11} height={18}></Image>
                        <Image src='/images/twitter.png' alt='' width={20} height={17}></Image>
                        <Image src='/images/insta.png' alt='' width={18} height={18}></Image>
                        <Image src='/images/likedin.png' alt='' width={18} height={18}></Image>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[1px] mt-12 bg-[#FFFFFF] opacity-40'></div>
            <p className='text-center text-[16px] text-[#ffffff] mt-4'> <i className="bi bi-c-circle"></i> Copyright Rimel 2022. All right reserved</p>
        </footer>
    )
}

export default Footer