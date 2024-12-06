import React from 'react'
import Link from 'next/link'

const Nav1 = () => {
    return (
        <nav className='w-full h-[48px] bg-black text-white capitalize text-[18px] flex justify-center items-center'>
            <div className='flex w-[859px] justify-center items-center'>
                <p className='flex justify-center items-center '>summer sale for all swim suits and free express delivery - OFF 50%! &#8200; <Link href='' className='underline font-medium'>ShopNow</Link></p>
            </div>
            <p>English &#8200; <i className="bi bi-chevron-down"></i></p>

        </nav>
    )
}

export default Nav1