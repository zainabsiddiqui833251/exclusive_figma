import React from 'react'

const Nav2 = () => {
    return (
        <nav className='w-full  bg-white text-black '>
            <div className='w-[1170px]  ml-[19px] mt-[10px] flex justify-between items-center' >
                <div className='flex justify-center items-center h-[38px] w-[675px] gap-x-[190px]'>
                    <div className='font-bold text-[24px] capitalize '>
                        <h1>exclusive</h1>
                    </div>
                    <div className='text-[16px] font-medium'>
                        <ul className='flex gap-x-[48px]'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='#'>Contact</a>
                            </li>
                            <li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#'>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-[347px]  h-[38px] flex justify-between items-center'>
                    <div className='w-[243px] h-[38px] bg-[#F5F5F5]'>
                        <input type='text' placeholder='what are you looking for?' className='h-[30px] hover:outline-none focus:outline-none bg-transparent p-5 capitalize text-[12px] w-[211px]' />
                        <button className='w-[30px] font-extrabold'><i className="bi bi-search font-extrabold"></i></button>
                    </div>
                    <div className='text-[18px] font-extrabold'>
                        <i className="bi bi-heart font-extrabold"></i>
                    </div>
                    <div className='text-[18px] font-extrabold'>
                        <i className="bi bi-cart3 font-extrabold"></i>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav2