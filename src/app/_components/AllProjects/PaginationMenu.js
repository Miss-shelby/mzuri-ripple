'use client';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { useState, useEffect } from 'react';
import Food$Craft from './Food';
import Music from './Music';
import Games from './Game';
import Film from './Film';
import Design from './Design';
import Arts from './Arts';
import All from './All';

const MenuPagination = ({ links, isLoading, allProjects, error }) => {
  const [section, setSection] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const itemsPerPage = isMobile ? 3 : 6;
  const totalPages = Math.ceil(links.length / itemsPerPage);

  useEffect(() => {
    console.log('runnnning>>>>>>');
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

console.log(isMobile);

    window.addEventListener('resize', handleResize);
console.log("end>>>>>>>");

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(isMobile);
  
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Paginate menu items
  const paginatedLinks = links.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="w-full overflow-hidden relative flex items-center">
        <button
          onClick={handlePrev}
          className={`px-3 py-1  text-black rounded-md disabled:opacity-50 ${
            isMobile ? 'block' : 'hidden md:hidden'
          }`}
          disabled={currentPage === 0}
        >
          <GrFormPrevious size={20} />
        </button>

        {/* Menu List */}
        <ul className="flex gap-4 overflow-hidden">
          {paginatedLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setSection(link.name)}
              className={`cursor-pointer list-none flex-none lg:text-lg md:text-base text-sm font-medium ${
                section === link.name ? 'border-b-2 border-[#0069D9]' : ''
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Next Button - Always Visible on Mobile */}
        <button
          onClick={handleNext}
          className={`px-3 py-1  text-black rounded-md disabled:opacity-50 ${
            isMobile ? 'block' : 'hidden md:hidden'
          }`}
          disabled={currentPage === totalPages - 1}
        >
          <MdNavigateNext size={20} />
        </button>
      </div>

      {/* Section Content */}
      <div>
        {section === 'All' && <All allProjects={allProjects} error={error} isLoading={isLoading} />}
        {section === 'Art & Illustration' && <Arts />}
        {section === 'Design & Tech' && <Design />}
        {section === 'Film' && <Film />}
        {section === 'Music' && <Music />}
        {section === 'Food & Craft' && <Food$Craft />}
        {section === 'Game' && <Games />}
      </div>
    </>
  );
};

export default MenuPagination;
