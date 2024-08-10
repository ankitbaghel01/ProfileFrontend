import React from 'react';
import HomeLeft from './HomeLeft/HomeLeft.jsx';
import HomeRight from './HomeRight/HomeRight.jsx';
import CursorDetector from '../CursorDetector/CursorDetector.jsx';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Render ComponentOne on the left */}
      <div className="w-full md:w-1/2 mr-0 md:mr-6 mb-6 md:mb-0">
        <CursorDetector/>
        <HomeLeft />
      </div>
      {/* Render ComponentTwo on the right */}
      <div className="w-full md:w-1/2">
        <HomeRight />
      </div>
    </div>
  );
}

export default Home;
