"use client"

import { useState } from 'react';
function TextExpander({ children,collapsedNumber = 40 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (typeof children !== 'string') {
    console.error('TextExpander children should be a string');
    return null;
  }
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, collapsedNumber).join(' ') + '...';

  return (
    <span>
      {displayText}
      <button
        className='text-custom-green-200  leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;


