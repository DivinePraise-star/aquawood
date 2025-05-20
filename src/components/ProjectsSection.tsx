
import { useEffect } from "react";

const ProjectsSection = () => {
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

  const achievements = [
    {
      title: "WASH Hackathon Competition",
      description: "Participated in the WASH hackathon competitions and majiprenuers summit 2025, showcasing innovative solutions for water and environmental challenges.",
      image: "/lovable-uploads/3efdddf1-857a-4938-833f-0fb76e95320a.png"
    },
    {
      title: "Investor Pitch at NWSC",
      description: "Successfully pitched Aquawood to investors at the National Water and Sewage Corporation during the Water and Environment Week 2024.",
      image: "/lovable-uploads/f05aee80-953b-43b8-82a3-2ba3872fe848.png"
    },
    {
      title: "Inter-University Hackathon Awards",
      description: "Award winners during the inter-University hackathon competitions at Ministry of Water and Environment during Water and Environment Week 2025.",
      image: "/lovable-uploads/8910733f-174f-4194-af4d-3df6f9e167dd.png"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-on-scroll">
            Our Projects & Achievements
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Discover our initiatives and accomplishments in environmental monitoring and conservation.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-aqua-500 to-forest-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-aqua-50 p-8 rounded-xl shadow-sm animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-center text-aqua-800">Expected Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Improved monitoring and reporting of deforestation and water pollution, enabling proactive measures to mitigate drought and flood risks.",
              "Enhanced conservation efforts and sustainable land use practices, reducing soil erosion and increasing water retention.",
              "Increased community engagement and awareness on environmental issues, promoting drought and flood resilient practices.",
              "Contribution to Uganda's climate change resilience and sustainable development goals."
            ].map((outcome, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="bg-aqua-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Next Steps</h3>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8">
            {[
              {
                title: "Research & Development",
                description: "Conduct further research and development on the application.",
                icon: (
                  <svg className="h-12 w-12 text-aqua-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                )
              },
              {
                title: "Stakeholder Engagement",
                description: "Engage stakeholders and secure partnerships.",
                icon: (
                  <svg className="h-12 w-12 text-aqua-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Pilot Testing",
                description: "Pilot test the application in select regions.",
                icon: (
                  <svg className="h-12 w-12 text-aqua-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Scale Up",
                description: "Scale up the application nationwide, integrating it with existing systems.",
                icon: (
                  <svg className="h-12 w-12 text-aqua-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex-1">
                {step.icon}
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
