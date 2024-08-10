import React from 'react';
import './HomeLeft.css'; // Import CSS file for styling
import { RiStarLine } from 'react-icons/ri'; // Import the star icon from react-icons
import ShiningText from './ShiningText.jsx'; // Import the ShiningText component
import ContectButton from '../ContectButton/ContectButton.jsx';

const HomeLeft = () => {
  return (
    <div className="p-8 m-8 LeftHome">
      <div className="p-4 Box-Engineer flex flex-row md:flex-row items-center">
        {/* Content inside the box */}
         <img src='star_1828884.png' alt='star' style={{width:'20px'}}/>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white ml-2 mt-2 md:mt-0">Empower Your Work </h3>
      </div>

<div className='Home-text font-black  text-gray-900 text-5xl dark:text-white p-5'> 
<h1>Launch Your StartUp with Us</h1>
<div className='p-5'>
<ShiningText/>
</div>
</div>
  <p className='tracking-tight text-gray-500 md:text-lg dark:text-gray-400'>We Help you to Launch you Dream StartUp.</p>
 <div className='p-4'>
 <ContectButton/>
 </div>
    </div>
  );
}

export default HomeLeft;
