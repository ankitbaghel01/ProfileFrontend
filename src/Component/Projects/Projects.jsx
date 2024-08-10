import React from 'react'
import './Project.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className='Project'>
<div className='p-20 mr-4'>
<div className='flex g-8 p-3 mr-2 grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 w-full'>
  <p className='font-semibold font-medium text-4xl md:text-5xl lg:text-6xl'>Highlights of Our Projects</p>
  <div className=''>
  <p className=' font-semibold text-gray-500 justify-end '>Build real world projects with og coders and experience god level hackathon vibes!

</p>
<br/>
<p className='font-semibold text-gray-600 justify-end underline cursor-pointer hover:text-green-600'>
  <a href="#" class="cmnhober-rotate d-inline-flex gap-1 cus-border bb-700 n700-color fw_600 aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="1500">
    See all projects
  
  </a>
</p>


</div>
</div>


  </div>
  <div className='relative left-5 md:left-10 lg:left-15 '>

<div className='flex g-8 p-3 mr-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-1 lg:grid-cols-3 sm:gap-6 sm:grid-cols-1 w-full'>
  <ProjectCard/>
  <ProjectCard/>
  <ProjectCard/>

  </div>
 
</div>
    </div>
  )
}

export default Projects
