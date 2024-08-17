import Image from 'next/image'
import React, { useReducer, useState } from 'react'
import AllProjects from './AllProjects/page';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const search = "/bi_search.png";
const FilterProjects = ({allProjects}) => { 
    const [searchInput,setSearchInput] = useState('')
    const [filteredProjects, setFilteredProjects] = useState([]);
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()


    const handleSearchInput =(e)=>{
      const params = new URLSearchParams(searchParams)
      
    
      
        const value = e.target.value?.toLowerCase();
        setSearchInput(value);


        if (value === '') {
          params.delete('query');
            setFilteredProjects([]);
          } else {
            params.set("query",value)
            console.log(params,'url');
            router.push(`${pathname}?${params.toString()}`)
            const filtered = allProjects.filter((project) =>
              project?.title.toLowerCase().startsWith(value)
            );
            setFilteredProjects(filtered);
          }
    }


    
    
    
  return (
    <div>
    <div className="mt-[32px] flex items-center">
    <input
      placeholder="Search Projects by title"
      type="text" value={searchInput} onChange={handleSearchInput}
      className="shadow-xl bg-[#F1F1F1] focus:outline-none text-[#242323] w-[25rem] pl-4 py-2 rounded-[3px]"
    />
    <button className="btn btn-square bg-[#0069D9] ml-[20px] w-9 h-9 min-h-9 rounded-[4px]" onClick={handleSearchInput}>
      <Image src={search} height={15} width={15} alt="search icon" />
    </button>
  </div>
  <ul className={`transition-all duration-1000 ease-in-out ${filteredProjects.length > 0 ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'} bg-white shadow-xl rounded-sm h-auto z-50 w-[25rem] overflow-hidden`}>
        {filteredProjects.map((project) => (
          <li className='mt-4 px-4 hover:bg-[#e8e6e6] cursor-pointer rounded-sm' key={project.id}>
            <Link href={`/explore/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterProjects