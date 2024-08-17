'use client'
import { useAuth } from '@/app/_components/Providers/Providers'
import React from 'react'


const Page = () => {
    const {authUser} = useAuth()

  return (
    <div className='pt-4 text-custom-black'>

    <h2 className="font-semibold text-2xl text-accent-400 mb-7 capitalize"> Welcome,  {authUser?.full_name} </h2>
    </div>
  )
}

export default Page