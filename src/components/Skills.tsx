// Skills section with technical skills, services, and soft skills
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Skills & Services</h2>

        {/* Technical Skills and Services Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills Card */}
          <div className="p-6 rounded-xl animated-card card-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h3>
            
            <div className="space-y-4 text-gray-600">
              <div className="pb-2 border-b border-gray-200">
                <p className="font-semibold text-gray-700">Programming</p>
                <p className="text-sm">
                  Python, SQL, Java <span className="text-xs text-gray-600">(in progress)</span>
                </p>
              </div>
              <div className="pb-2 border-b border-gray-200">
                <p className="font-semibold text-gray-700">Frontend</p>
                <p className="text-sm">HTML, CSS, JavaScript</p>
              </div>
              <div className="pb-2 border-b border-gray-200">
                <p className="font-semibold text-gray-700">Frameworks</p>
                <p className="text-sm">
                  Bootstrap, React <span className="text-xs text-gray-600">(in progress)</span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Data Science</p>
                <p className="text-sm">NumPy, Pandas, Machine Learning</p>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="p-6 rounded-xl animated-card card-shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Services</h3>
            
            <div className="space-y-4 text-gray-600">
              <div className="pb-2 border-b border-gray-200">
                <p className="font-semibold text-gray-700">AI-Powered Solutions</p>
                <p className="text-sm">Chatbots, LLM integrations, intelligent applications</p>
              </div>
              <div className="pb-2 border-b border-gray-200">
                <p className="font-semibold text-gray-700">Full-Stack Development</p>
                <p className="text-sm">Modern web applications with React and JavaScript</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Data Analysis</p>
                <p className="text-sm">Data visualization and insights with Python</p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Pills */}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 pt-4">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="soft-skill-pill">Project Management</span>
          <span className="soft-skill-pill">Team Leadership</span>
          <span className="soft-skill-pill">Communication</span>
          <span className="soft-skill-pill">Time Management</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
