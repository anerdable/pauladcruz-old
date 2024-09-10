import React from 'react';
import './SquigglyArrow.css';

const SquigglyArrow: React.FC = () => {
  return (
    <div className="arrow-container">
      <svg
        className="squiggly-arrow"
        width="350"
        height="150"
        viewBox="0 0 350 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 100
             C 90 20, 250 20, 250 100
             C 250 140, 200 140, 200 100
             C 200 50, 300 80, 300 80"
          stroke="var(--soft-peach)"
          strokeWidth="4"
          fill="transparent"
          className="arrow-path"
        />
      </svg>
    </div>
  );
};

export default SquigglyArrow;
