"use client";

import { useState } from 'react';

function TextExpander({ children, collapsedNumber = 40 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDisplayText = () => {
    if (typeof children === 'string') {
      return isExpanded ? children : children.split(' ').slice(0, collapsedNumber).join(' ') + '...';
    } else if (typeof children === 'object' && children.props.dangerouslySetInnerHTML) {
      const htmlContent = children.props.dangerouslySetInnerHTML.__html;
      if (isExpanded) {
        return <span dangerouslySetInnerHTML={{ __html: htmlContent }} />;
      } else {
        const partialHtmlContent = htmlContent.split(' ').slice(0, collapsedNumber).join(' ') + '...';
        return <span dangerouslySetInnerHTML={{ __html: partialHtmlContent }} />;
      }
    }
    console.error('TextExpander children should be a string or have dangerouslySetInnerHTML prop');
    return null;
  };

  return (
    <span>
      {getDisplayText()}
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
