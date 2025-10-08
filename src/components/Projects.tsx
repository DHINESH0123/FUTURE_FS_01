// Projects section showcasing featured work
const Projects = () => {
  // Array of project data for easy maintenance
  const projects = [
    {
      title: "Multilingual Chatbot",
      description: "AI chatbot using Streamlit, LangChain, and Groq/Gemini models. Supports multiple languages for accessible communication.",
      tags: ["Python", "LangChain"],
      link: "https://multilanguage-chatbot.streamlit.app/"
    },
    {
      title: "PDF Analyzer (Notepad LLM)",
      description: "Smart PDF analyzer app powered by LLMs for extracting, summarizing, and analyzing document content efficiently.",
      tags: ["Python", "LLM", "NLP"],
      link: "https://chatbot001.streamlit.app/"
    },
    {
      title: "Login Page Interface",
      description: "A responsive and user-friendly login interface built with HTML, CSS, and JavaScript featuring modern design patterns.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/DHINESH0123/Frontend-Project2"
    },
    {
      title: "Screen Loader Animation",
      description: "A smooth, animated loading screen designed for modern web applications with engaging visual effects.",
      tags: ["CSS", "Animation", "JavaScript"],
      link: "https://github.com/DHINESH0123/Frontend-project1"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-xl bg-white card-shadow animated-card">
              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs font-medium text-white bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Project Link */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-800 font-semibold hover:underline transition duration-150"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
