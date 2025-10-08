import { useState } from 'react';
import profileImage from '@/assets/profile.jpg';
import LoadingOverlay from './LoadingOverlay';

// Hero section with introduction and call-to-action buttons
const Hero = () => {
  const [showLoader, setShowLoader] = useState(false);

  // Handle resume download with loading animation
  const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLoader(true);
    
    // Show loader for 1 second, then open Google Drive link
    setTimeout(() => {
      setShowLoader(false);
      window.open('https://drive.google.com/file/d/1JnFsDoHfL1BXOwYJpE1_cfSGp-LVGWCK/view?usp=sharing', '_blank');
    }, 1000);
  };

  return (
    <>
      <section id="home" className="pt-20 pb-16 min-h-screen flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src={profileImage} 
              alt="Dhinesh Shanmugam Profile" 
              className="w-40 h-45 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            DHINESH SHANMUGAM
          </h1>
          
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            AI & Data Science Enthusiast
          </p>
          <p className="text-xl font-medium text-gray-600 mb-8">
            Full-Stack Developer
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            Passionate about building intelligent applications that bridge technology and creativity.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#projects" 
              className="primary-btn font-semibold py-3 px-8 rounded-lg shadow-md"
            >
              View My Projects
            </a>
            <a 
              href="https://drive.google.com/file/d/1JnFsDoHfL1BXOwYJpE1_cfSGp-LVGWCK/view?usp=sharing"
              onClick={handleDownloadResume}
              className="secondary-btn font-semibold py-3 px-8 rounded-lg shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Loading Overlay */}
      {showLoader && <LoadingOverlay />}
    </>
  );
};

export default Hero;
