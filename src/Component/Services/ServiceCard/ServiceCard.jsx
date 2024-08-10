import React from 'react';
import { FaCode } from "react-icons/fa";

const ServiceCard = ({ icon: Icon, title }) => {
  return (
    <div className='ServiceCard mr-5'>
      <Icon className='text-white text-4xl text-green-400' />
      <p className='text-white font-semibold  text-xl md:text-2xl lg:text-3xl'>{title}</p>
    </div>
  );
}

export default ServiceCard;
