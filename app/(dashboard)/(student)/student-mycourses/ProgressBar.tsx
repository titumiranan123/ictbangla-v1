import React from 'react';

const ProgressBar:React.FC<{percentage:number}> = ({percentage}) => {
    return (
        <div className='w-full border border-green-500 rounded-full h-3'>
            <div style={{width:`${percentage}%`}} className='bg-gradient-to-l to-green-400 via-green-40 from-red-500/70 h-full rounded-full transition-all duration-500'/>
        </div>
    );
};

export default ProgressBar;