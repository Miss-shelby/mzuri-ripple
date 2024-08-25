import Spinner from '@/app/_components/spinner'
import React from 'react'


const Loading = () => {
  return (
    <div className='grid items-center justify-center'>
        <Spinner/>
        <p className='text-2xl text-custom-blue capitalize'> Loading projects......</p>
    </div>
  )
}

export default Loading