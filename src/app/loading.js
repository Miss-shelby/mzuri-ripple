import React from 'react'
import Spinner from './_components/spinner'


const Loading = () => {
    return (
        <div className='flex w-full h-full items-center justify-center'>
            <Spinner/>
           
        </div>
    )
}

export default Loading