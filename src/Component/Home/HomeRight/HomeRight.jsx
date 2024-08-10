// HomeRight.jsx
import React from 'react';
import './HomeRight.css'
import CircleAnimation from './CircleAnimation/CircleAnimation';
import JumpCircle from './JumpCircle/JumpCircle';

const HomeRight = () => {
  return (
    <div className="flex">
   <img src='Screenshot (94).png' className='Howe-Image '/>
   <CircleAnimation className="absolute top-5 left-10"/>
  
   <JumpCircle/>
 
    </div>
  );
}

export default HomeRight;
