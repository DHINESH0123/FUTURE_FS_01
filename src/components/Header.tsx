import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Navigation component with sticky header and mobile menu
const Header = () => {
  // State to control mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to control header shadow on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 header-bg transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gray-800">DHINESH S</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-black transition duration-150 font-medium nav-link">Home</a>
          <a href="#about" className="text-gray-600 hover:text-black transition duration-150 font-medium nav-link">About</a>
          <a href="#experience" className="text-gray-600 hover:text-black transition duration-150 font-medium nav-link">Experience</a>
          <a href="#skills" className="text-gray-600 hover:text-black transition duration-150 font-medium nav-link">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-black transition duration-150 font-medium nav-link">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-black transition duration-150 font-medium nav-link">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 hover:text-black"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden pb-4 transition-all duration-300 bg-white">
          <a href="#home" onClick={closeMobileMenu} className="block py-2 px-6 text-gray-800 hover:bg-gray-100 nav-link">Home</a>
          <a href="#about" onClick={closeMobileMenu} className="block py-2 px-6 text-gray-800 hover:bg-gray-100 nav-link">About</a>
          <a href="#experience" onClick={closeMobileMenu} className="block py-2 px-6 text-gray-800 hover:bg-gray-100 nav-link">Experience</a>
          <a href="#skills" onClick={closeMobileMenu} className="block py-2 px-6 text-gray-800 hover:bg-gray-100 nav-link">Skills</a>
          <a href="#projects" onClick={closeMobileMenu} className="block py-2 px-6 text-gray-800 hover:bg-gray-100 nav-link">Projects</a>
          <a href="#contact" onClick={closeMobileMenu} className="block py-2 px-6 text-gray-800 hover:bg-gray-100 nav-link">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
