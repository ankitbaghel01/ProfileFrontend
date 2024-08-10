import React from 'react'

const ProjectCard = () => {
  return (
    <div className="relative group w-80 mr-5 h-80 m-4 overflow-hidden rounded-md border-2 border-gray-200">
      <img
        src="download.jpg"
        alt="Placeholder"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-end justify-center p-4 bg-black bg-opacity-50 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
      
        <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque perspiciatis reiciendis aperiam expedita fugit inventore quo numquam maiores placeat!</p>
      </div>
    </div>
  ) 
}

export default ProjectCard
