import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import '@/styles/portfolio.css';

// Main portfolio page that combines all sections
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navigation Header */}
      <Header />
      
      {/* Main Content - Added top padding to account for fixed header */}
      <main className="pt-20">
        {/* Hero Section - Introduction */}
        <Hero />
        
        {/* About Section - Key strengths and interests */}
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <About />
        
        {/* Experience Section - Education and work experience */}
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Experience />
        
        {/* Skills Section - Technical and soft skills */}
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Skills />
        
        {/* Projects Section - Featured projects */}
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Projects />
        
        {/* Contact Section - Get in touch information */}
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
