
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-on-scroll">
            About Aquawood Uganda
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-aqua-500 to-forest-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-tr from-aqua-500 to-forest-500 p-1 rounded-lg shadow-xl">
              <img
                src="/lovable-uploads/e1a4d493-100c-407b-998d-71f7c41f18f6.png"
                alt="Aquawood Concept"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-on-scroll">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-aqua-500 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission Statement</h3>
              <p className="text-gray-600">
                Aquawood Group Uganda Ltd is dedicated to harnessing innovative technologies and collaborative approaches 
                to monitor, protect, and conserve Uganda's natural resources. We empower local communities, inform policy 
                decisions, and drive sustainable development through cutting-edge solutions and inclusive engagement.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-forest-500 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
              <p className="text-gray-600">
                Aquawood Group Uganda Ltd envisions a Global where technology, community engagement, and collaborative 
                conservation efforts converge to preserve the country's rich biodiversity, ensure sustainable land use, 
                and promote a healthy environment for future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-aqua-50 to-forest-50 p-8 rounded-xl shadow-sm animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Our Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Monitor and report deforestation and water pollution in Uganda's key ecosystems using satellite imagery and machine learning algorithms.",
              "Engage local community members in environmental conservation efforts through training and awareness programs.",
              "Collaborate with government agencies, local communities and conservation groups to promote sustainable land use practices.",
              "Develop and deliver ICT solutions and services that harness emerging technologies and innovations.",
              "Conduct comprehensive assessments and evaluation of environmental conservation impact, driving research and innovations for sustainable development."
            ].map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-3">
                  <div className="bg-aqua-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
