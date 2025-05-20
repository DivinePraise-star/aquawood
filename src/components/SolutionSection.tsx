
import { useState, useEffect } from "react";

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState("monitoring");

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

  const tabs = [
    { id: "monitoring", label: "Monitoring" },
    { id: "analysis", label: "Analysis" },
    { id: "reporting", label: "Reporting" },
    { id: "engagement", label: "Engagement" },
  ];

  const tabContent = {
    monitoring: {
      title: "Advanced Deforestation & Water Pollution Monitoring",
      description: "Our solution utilizes high-resolution satellite imagery to monitor forest cover loss and water contamination in real-time, providing accurate and up-to-date information on environmental changes.",
      image: "/lovable-uploads/75d47d82-4359-41be-8a39-3f1ba13c2e95.png",
    },
    analysis: {
      title: "Machine Learning Analysis",
      description: "We employ sophisticated machine learning algorithms to analyze environmental data, identify trends, and predict future risks, enabling proactive intervention and conservation planning.",
      image: "/lovable-uploads/d2936ae0-9c52-46ed-a30b-26b305f941ad.png",
    },
    reporting: {
      title: "Comprehensive Reporting System",
      description: "Our platform generates detailed reports on deforestation rates, water quality, and environmental health indicators, supporting evidence-based decision making for stakeholders.",
      image: "/lovable-uploads/75d47d82-4359-41be-8a39-3f1ba13c2e95.png",
    },
    engagement: {
      title: "Community Engagement",
      description: "We facilitate active involvement of local communities, government agencies, and conservation groups in environmental monitoring and protection efforts through our user-friendly application.",
      image: "/lovable-uploads/3efdddf1-857a-4938-833f-0fb76e95320a.png",
    },
  };

  return (
    <section id="solution" className="bg-gray-50 py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-on-scroll">
            Our Innovative Solution
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            AQUAWOOD UGANDA uses cutting-edge technology to monitor deforestation and water pollution, 
            enhancing drought and flood resilience across Uganda.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-aqua-500 to-forest-500 mx-auto mt-4"></div>
        </div>

        <div className="animate-on-scroll">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-aqua-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-aqua-800">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
                <ul className="space-y-3">
                  {["Real-time monitoring", "Data visualization", "Alert systems", "Trend analysis"].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-forest-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-64 md:h-auto bg-aqua-100">
                <img
                  src={tabContent[activeTab as keyof typeof tabContent].image}
                  alt={tabContent[activeTab as keyof typeof tabContent].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Satellite Imagery",
              description: "High-resolution satellite data to detect environmental changes",
              icon: (
                <svg className="h-10 w-10 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Machine Learning",
              description: "Advanced algorithms to analyze environmental data",
              icon: (
                <svg className="h-10 w-10 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Mobile Application",
              description: "User-friendly interface for reporting and monitoring",
              icon: (
                <svg className="h-10 w-10 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Data Integration",
              description: "Combining multiple data sources for comprehensive analysis",
              icon: (
                <svg className="h-10 w-10 text-aqua-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all animate-on-scroll">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
