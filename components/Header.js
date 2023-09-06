import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassCircleIcon, GlobeAltIcon, Bars3Icon,UserCircleIcon,UsersIcon} from '@heroicons/react/24/outline'



export default function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10' >
      {/* <h1>i am a header</h1> */}
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image src="https://links.papareact.com/qd3" 
        height={60}
        width={60}
        alt='icon'
        objectFit='contains'
        objectPosition='left'

        />
      </div>
      {/* middle search */}
      <div>
        <div className='flex items-center md:border-2 rounded-full py-2 '>
        <input type="text" placeholder='Start your search'
        className='pl-5 text-sm text-gray-600 bg-transparent outline-none flex-grow'
        />
        <MagnifyingGlassCircleIcon className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2'  />
        </div>
      </div>
      {/* right */}
      <div className='flex items-center space-x-4
      justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/ >
            <div className='flex items-center cursor-pointer space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className='h-6' />
                <UserCircleIcon className='h-6'/>
            </div>
      </div>
    </header>
  )
}
