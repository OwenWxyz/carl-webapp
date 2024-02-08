'use client'
import { File, Layout, Upload, UserCog } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function SideNav({ closeSideBar }) {
  const menuList = [
    {
      id: 1,
      name: 'Courses',
      icon: Layout,
      path: '/courses',
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files',
    },
    {
      id: 3,
      name: 'Manage Students',
      icon: UserCog,
      path: '/students',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b flex items-center'>
        <Link href={'/'}>
          <Image
            src='/carl-logo.png'
            width={50}
            height={50}
            alt='logo'
            style={{ minWidth: '50px' }}
          />
        </Link>
        <div style={{ maxWidth: 'calc(100%)', overflow: 'hidden' }}>
          {' '}
          {/* Adjust the value according to your needs */}
          <h1 className='text-3xl font-extrabold sm:text-5xl md:text-3xl ml-3'>
            <span className='text-primary'>CARL.ai{'\n'}</span>
          </h1>
        </div>
      </div>

      <div className='flex flex-col float-left w-full'>
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <button
              key={index}
              className={`flex gap-2 p-4 px-6
                hover:bg-gray-100 w-full
                text-gray-500
                ${activeIndex == index ? 'bg-blue-50 text-primary' : null}`}
              onClick={() => {
                setActiveIndex(index)
                closeSideBar()
              }}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav
