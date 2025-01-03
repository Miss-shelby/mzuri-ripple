import React from 'react'
import Spinner from './_components/spinner'


const Loading = () => {
    return (
        <div className='flex w-full h-full items-center max-w-sm justify-center'>
            <Spinner/>
           
        </div>
    )
}

export default Loading