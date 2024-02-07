import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <>
            <header className='z-50'>
                {/* <div className="flex  flex-row justify-around w-full align-middle bg-gradient-to-r from-rose-500 to-rose-900 text-white">
                    <h1 className='text-sm'>Free shiping in orders over $50</h1>
                </div> */}
                <nav className="flex flex-row justify-around w-full p-1 border align-middle">
                    <div className='flex p-1 bg-gradient-to-r from-rose-600 to-amber-300 text-transparent bg-clip-text '>
                        <Link href='/' className='logo-font text-3xl'>Logo.com</Link>
                        <a>.Mx</a>
                    </div>
                    <Link href='/store' className='flex justify-center align-middle p-1 border border-white rounded-md hover:border-rose-400 w-1/12 '>
                        <img src='shop.svg' alt='cart' className='w-8 h-8 ' />
                        <h1 className='ms-2 pt-2'>Shop</h1>
                    </Link>
                    <form className='w-2/4 p-1 flex justify-center items-center'>
                        <input type="text" placeholder="Search ..." className="w-full rounded-s-md border border-rose-400 text-lg p-1 focus:outline-none focus:border-rose-700 focus:ring-1 focus:ring-rose-700" />
                        <button type="submit" className="bg-rose-400 border border-rose-400 text-white rounded-e-md text-lg p-1">
                            <img src="search.svg" alt="search" className='w-7 h-7' />
                        </button>
                    </form>
                    <a className='p-1 text-center pt-3 rounded-md  hover:bg-rose-400 hover:text-white w-1/12'>
                        Log in
                    </a>
                    <button className='flex p-2 border border-white rounded-md hover:border-rose-400 w-1/12'>
                        <img src='us.svg' alt='cart' className='w-8 h-8 ms-3' />
                        <h1 className='ms-3 pt-1'>English</h1>
                    </button>
                    <button className='p-1 border border-white rounded-md hover:border-rose-400 w-1/12 flex'>
                        <img src='cart.svg' alt='cart' className='w-9 h-9 ms-3' />
                        <span className='bg-red-600 text-white rounded-full w-6 h-6 text-center'>0</span>
                        <h1 className='ms-2 pt-2'>Cart</h1>
                    </button>
                </nav>
            </header>
        </>
    );
}