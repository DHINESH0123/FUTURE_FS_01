// Education and Experience section
const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Education & Experience</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
            
            {/* B-Tech Card */}
            <div className="p-6 mb-6 rounded-xl animated-card card-shadow">
              <h4 className="text-lg font-semibold text-gray-900">
                B-Tech in Artificial Intelligence & Data Science
              </h4>
              <p className="text-sm text-gray-500 italic mb-2">
                Jeppiaar Engineering College, Chennai
              </p>
              <p className="text-sm text-gray-500 mb-3">
                2022 – 2026 | CGPA: 8.02
              </p>
            </div>

            {/* Higher Secondary Card */}
            <div className="p-6 rounded-xl animated-card card-shadow">
              <h4 className="text-lg font-semibold text-gray-900">
                Higher Secondary
              </h4>
              <p className="text-sm text-gray-500 italic mb-2">
                Little Flower Matric HR Sec School, Chennai
              </p>
              <p className="text-sm text-gray-500 mb-3">
                2020 – 2022
              </p>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience</h3>
            
            {/* Internship Card */}
            <div className="p-6 rounded-xl animated-card card-shadow">
              <h4 className="text-lg font-semibold text-gray-900">
                Machine Learning Engineer Intern
              </h4>
              <p className="text-sm text-gray-500 italic mb-2">
                Trios Technologies Pvt Ltd
              </p>
              <p className="text-sm text-gray-500 mb-3">
                June 2024 – July 2024
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside pl-4">
                <li>Developed ML models using Linear Regression and Classification.</li>
                <li>Gained hands-on experience with Python, NumPy, and Pandas.</li>
                <li>Completed a comprehensive project and received certification.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
