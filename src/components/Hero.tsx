import { useState } from 'react';
import profileImage from '@/assets/DHINESH.jpg';
import LoadingOverlay from './LoadingOverlay';

const Hero = () => {
  const [showLoader, setShowLoader] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLoader(true);
    
    setTimeout(() => {
      setShowLoader(false);
      // In a real scenario, you would have the actual PDF file
      // For now, this is a placeholder
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual resume PDF path
      link.download = 'Dinesh_Shanmugam_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <>
      <section id="home" className="pt-24 pb-12 sm:pt-20 sm:pb-16 min-h-screen flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <img 
              src={profileImage}
              alt="Dinesh Shanmugam Profile" 
              className="w-40 h-45 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
            DHINESH SHANMUGAM
          </h1>
          
          <p className="text-lg sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2">AI & Data Science Enthusiast</p>
          <p className="text-base sm:text-xl font-medium text-gray-600 mb-6 sm:mb-8">Full-Stack Developer</p>
          
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Passionate about building intelligent applications that bridge technology and creativity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, 'projects')}
              className="primary-btn font-semibold py-3 px-8 rounded-lg shadow-md cursor-pointer"
            >
              View My Projects
            </a>
            <a 
              href="#" 
              onClick={handleResumeDownload}
              className="secondary-btn font-semibold py-3 px-8 rounded-lg shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
      
      {showLoader && <LoadingOverlay />}
    </>
  );
};

export default Hero;
