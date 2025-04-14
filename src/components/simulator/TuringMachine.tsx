import React from 'react';

interface TuringMachineProps {
  tape: string[];
  headPos: number;
  currentState: string;
}

const TuringMachine: React.FC<TuringMachineProps> = ({ tape, headPos, currentState }) => {
  const visibleCells = 9; 
  const halfVisible = Math.floor(visibleCells / 2);
  
  const startIndex = Math.max(0, headPos - halfVisible);
  const displayTape = tape.slice(startIndex, startIndex + visibleCells);
  
  while (displayTape.length < visibleCells) {
    displayTape.push('_');
  }
  
  const relativeHead = headPos - startIndex;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="flex">
          {displayTape.map((cell, index) => (
            <div 
              key={index} 
              className={`
                tape-cell 
                ${index === relativeHead ? 'active' : ''}
              `}
            >
              {cell === '_' ? '' : cell}
            </div>
          ))}
        </div>
        
        {/* Head pointer */}
        <div 
          className="absolute top-full left-0 w-12 flex justify-center"
          style={{ 
            transform: `translateX(${relativeHead * 48}px)`,
          }}
        >
          <div className="flex flex-col items-center">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L15.7942 10H0.205771L8 0Z" fill="#3B82F6"/>
            </svg>
            <div className="px-2 py-1 bg-blue-500 text-white text-xs rounded font-mono">
              {currentState}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-xs text-gray-500">
        Position: {headPos}
      </div>
    </div>
  );
};

export default TuringMachine;
