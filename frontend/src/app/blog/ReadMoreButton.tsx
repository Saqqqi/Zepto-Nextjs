
"use client"
import React from 'react';
import Link from 'next/link';


const ReadMoreButton = ({ blogData }) => {
  const handleClick = () => {
    console.log('Button clicked');
    console.log('Blog Data:', blogData);
    // Perform any desired action here
  };

  return (
    <div className="read-more" onClick={handleClick}>
      <Link href={`#`}>
        <div>Read More</div>
      </Link>
    </div>
  );
};

export default ReadMoreButton;
