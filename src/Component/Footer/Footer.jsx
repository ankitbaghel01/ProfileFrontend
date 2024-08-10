import React from 'react'
import './Footer.css'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='p-3 mr-3 md:p-20  md:mr-4 lg:p-20 lg:mr-4 '>
    

<div className='flex gap-8 p-3 mr-2 grid grid-cols-1 sm:grid-cols-4 w-full '>
  <div className='flex flex-col gap-y-12 sm:col-span-2 sm:border-r sm:border-dashed sm:border-green-400 sm:pr-4'>
    <p className='font-semibold text-white text-3xl md:text-5xl lg:text-5xl'>
      <span className='text-green-400'>Let’s</span> Work Together
    </p>
    <p className='text-white  max-w-md'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia impedit quis pariatur laudantium blanditiis. Deleniti laborum minus, sint velit officiis quo nam illo alias nihil hic, ipsa, unde architecto dolore. Illum rem voluptates laborum, enim magni pariatur nulla dignissimos repudiandae id amet mollitia ullam quis, quibusdam eligendi consectetur nobis sunt adipisci placeat culpa quasi recusandae molestias rerum! Reiciendis, rem numquam!
    </p>
    <div className='flex gap-4 text-2xl md:text-3xl lg:text-4xl '>
  <CiLinkedin className='text-white hover:text-green-400 cursor-pointer'/>
  <SlSocialInstagram className='text-white hover:text-green-400 cursor-pointer'/>
  <AiOutlineFacebook className='text-white hover:text-green-400 cursor-pointer'/>
  <TfiTwitter className='text-white hover:text-green-400 cursor-pointer'/>


    </div>
  </div>
  <div className='sm:col-span-1 sm:border-r sm:border-dashed sm:border-green-400 sm:pr-4 sm:pl-4'>
    <div className='flex flex-col gap-y-8'>
   
    <p className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold '>Navigation</p>
    <div className='flex flex-col gap-y-4'>
   
    <p className='text-white text-base  md:text-lg lg:text-lg cursor-pointer hover:text-green-400 '>About Us</p>
    <p className='text-white text-base  md:text-xl lg:text-lg cursor-pointer hover:text-green-400 '>Hackathons</p>
    <p className='text-white text-base  md:text-xl lg:text-lg cursor-pointer hover:text-green-400 '>FAQs</p>
    <p className='text-white text-base  md:text-xl lg:text-lg cursor-pointer hover:text-green-400 '>Blogs</p>


   </div>
    </div>
  </div>
  <div className='sm:col-span-1 sm:pl-4'>
  <div className='flex flex-col gap-y-8'>
   
   <p className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold '>Contact Us</p>
   <div className='flex flex-col gap-y-4'>
  
   <div className='flex gap-2'><CiPhone className='text-3xl text-white hover:text-green-400 cursor-pointer md:text-4xl lg:text-4xl	'/><p className='text-white font-semibold hover:text-green-400 cursor-pointer text-sm	 md:text-base	lg:text-base'>+91 9301961290 <br/>+91 7089106708</p></div>

   <div className='flex gap-2'><CiMail className='text-3xl text-white hover:text-green-400 cursor-pointer md:text-4xl lg:text-4xl	'/><p className='text-white font-semibold hover:text-green-400 cursor-pointer text-sm	 md:text-base	lg:text-base'>ankitbaghel3816@gmail.com</p></div>

   <div className='flex gap-2'>
    <GoLocation className='text-3xl text-white hover:text-green-400 cursor-pointer md:text-4xl lg:text-4xl	'/>
    <p className='text-white font-semibold hover:text-green-400 cursor-pointer text-sm	 md:text-base	lg:text-base'>Madan Mahal,Jabalpur,M.P.,India,482001</p></div>

  </div>
   </div>
  </div>

</div>


        </div>
        <div className='p-3 mr-3 md:p-20  md:mr-4 lg:p-20 lg:mr-4'>
        <div className='border-t text-white border-dashed  flex g-8 p-3 mr-2 sm:flex-col md:flex-row lg:flex-row  w-full justify-between'>
      <p>Copyright © 2024 All Rights Reserved.</p>
      <div className='flex gap-7 relative right-0'>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
        </div>
        </div>
      </div>
  )
}

export default Footer
