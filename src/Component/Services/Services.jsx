import React from 'react';
import './Services.css';
import { FaCode } from "react-icons/fa";
import ServiceCard from './ServiceCard/ServiceCard';
import { RiGroupLine } from "react-icons/ri";
import { IoBuildOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { RiPsychotherapyLine } from "react-icons/ri";
import { GiSpiderWeb } from "react-icons/gi";

const Services = () => {
  return (
    <div className='Services'>
      <div className='p-20 mr-4'>
      <h3 className="text-center text-white font-semibold text-4xl md:text-5xl lg:text-6xl">Our Services</h3>
        <p className='text-center text-white text-gray-500 p-6 text-lg'>Our Services is Top Level</p>
      </div>
    

<div className='relative left-14 '>

  <div className='flex g-8 p-3 mr-2 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 w-full'>
    <ServiceCard icon={GiSpiderWeb} title="Website Application" />
    <ServiceCard icon={CiMobile2} title="Mobile Application" />
    <ServiceCard icon={RiGroupLine} title=" Developer Community" />
  </div>
  <br/>
  <div className='flex g-8 p-3 mr-2 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3 w-full'>
    <ServiceCard icon={FaCode} title="Hackathons" />
    <ServiceCard icon={FaRegStar} title="Projects" />
    <ServiceCard icon={RiPsychotherapyLine} title="Other" />
  </div>
</div>
<br/>
<br/>
<br/>

    </div>
  );
}

export default Services;
