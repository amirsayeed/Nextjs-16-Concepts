import Link from 'next/link'
import React from 'react'

const DashBoardLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-12 gap-5 min-h-screen'>
        <div className='col-span-3 border-r-2'>
            <Link href={"/"} className='text-lg font-semibold'>
                {" "}
                🐳 Dev-Story
            </Link>
            <div className='flex flex-col gap-5 mt-10'>
            <Link href={"/dashboard/add-story"} className='py-2 px-4 w-full bg-gray-600 rounded'>Add Story</Link>
            <Link href={"/dashboard/my-profile"} className='py-2 px-4 w-full bg-gray-600 rounded'>My Profile</Link>
            <Link href={"/dashboard/settings"} className='py-2 px-4 w-full bg-gray-600 rounded'>Settings</Link>
        </div>
        </div>
        
      <div className='col-span-9'>
        {children}
      </div>
    </div>
  )
}

export default DashBoardLayout
