import React, { useState, useEffect } from 'react';
import './Modal.css'
function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 10000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts or the modal becomes visible before the timeout
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array ensures that this effect runs only once when component mounts

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={` abstract fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50   ${isModalVisible ? '' : 'hidden'}`}>
      <div className=" Modal bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2 lg:w-1/2 xl:w-1/4 sm:w-auto">
        {/* Modal content */}
        <div className="relative">
          {/* Modal header */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
           Contect Us
            </h3>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Modal body */}
          <form>
            {/* Form fields */}
            <div className="grid gap-4 mb-6 grid-cols-2">
              <div className="col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3" placeholder="Type product name" required />
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="name" id="name" className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3" placeholder="Type product name" required />
              </div>
              <div className="col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                <textarea name="description" id="description" rows="4" className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3" placeholder="Type product description" required></textarea>
              </div>
              {/* Add more input fields as needed */}
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
            Send 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
