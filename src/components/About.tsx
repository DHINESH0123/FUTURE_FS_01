// About section with key strengths and interests
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        {/* Introduction */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg">
            AI & Data Science enthusiast with strong problem-solving skills and a passion for full-stack development. 
            I'm dedicated to professional growth and building real-world applications that make a difference.
          </p>
        </div>
        
        {/* Key Strengths and Interests Cards */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Key Strengths Card */}
          <div className="p-6 rounded-xl animated-card card-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Key Strengths</h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>Problem-solving & Critical thinking</li>
              <li>Creative solution development</li>
              <li>Team collaboration & Leadership</li>
              <li>Commitment to excellence</li>
            </ul>
          </div>
          
          {/* Interests Card */}
          <div className="p-6 rounded-xl animated-card card-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Interests</h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>Building intelligent applications</li>
              <li>Exploring AI-driven solutions</li>
              <li>Full-stack development</li>
              <li>Machine learning research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
