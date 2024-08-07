import Link from "next/link";

const  NotFound =()=> {
    return (
      <main className='text-center space-y-6 mt-4'>
        <h1 className='text-3xl font-semibold'>
          This page could not be found :(
        </h1>
        <Link
          href='/dashboard/projects'
          className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        >
          Go back to all projects
        </Link>
      </main>
    );
  }
  
  export default NotFound;