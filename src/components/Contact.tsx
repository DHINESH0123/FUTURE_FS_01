import { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import LoadingOverlay from './LoadingOverlay';

// Contact section with information and certifications
const Contact = () => {
  const [showLoader, setShowLoader] = useState(false);

  // Handle email contact with loading animation
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLoader(true);
    
    // Show loader for 1 second, then open email client
    setTimeout(() => {
      setShowLoader(false);
      window.location.href = 'mailto:dinesh0021@gmail.com';
    }, 1000);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-12">
            Let's collaborate on exciting projects and bring innovative ideas to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Contact Information Card */}
            <div className="p-6 rounded-xl animated-card card-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-600">
                {/* Email */}
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-800" />
                  <a 
                    href="mailto:dinesh0021@gmail.com" 
                    className="hover:text-black"
                  >
                    dinesh0021@gmail.com
                  </a>
                </p>
                
                {/* Phone */}
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-800" />
                  <span>+91 7305241434</span>
                </p>
                
                {/* LinkedIn */}
                <p className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-3 text-gray-800" />
                  <a 
                    href="https://www.linkedin.com/in/dhinesh-shanmugam-711531264/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                
                {/* GitHub */}
                <p className="flex items-center">
                  <Github className="w-5 h-5 mr-3 text-gray-800" />
                  <a 
                    href="https://github.com/DHINESH0123" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-xl animated-card card-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Data Analytics with Python</p>
                  <p className="text-sm text-gray-500">NPTEL Certification</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Blockchain and its Applications</p>
                  <p className="text-sm text-gray-500">NPTEL Certification</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">React.js & Java</p>
                  <p className="text-sm text-gray-500">Currently Learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Conversation Button */}
          <a 
            href="mailto:dinesh0021@gmail.com"
            onClick={handleEmailClick}
            className="primary-btn inline-block mt-12 font-semibold py-3 px-10 rounded-lg shadow-lg"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* Loading Overlay */}
      {showLoader && <LoadingOverlay />}
    </>
  );
};

export default Contact;
