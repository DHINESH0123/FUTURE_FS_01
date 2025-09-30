import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <Header />
      <main className="pt-20">
        <Hero />
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <About />
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Experience />
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Skills />
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Projects />
        <hr className="max-w-5xl mx-auto border-gray-200" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
