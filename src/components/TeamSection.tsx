
import { useState, useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin: string;
    twitter?: string;
    email: string;
  };
}

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

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

  const teamMembers: TeamMember[] = [
    {
      name: "Senjiyunva Mesarch",
      role: "Director / Project Manager",
      image: "/lovable-uploads/08666fe6-818e-45fd-a400-915a0ec0459a.png",
      bio: "Mesarch is a seasoned project manager and youth leader with a passion for environmental conservation and social impact. Bachelor's degree in Information Systems and Technology from Makerere University. With experience in managing community-based projects, Mesarch brings strategic leadership and community engagement expertise to our team.",
      social: {
        linkedin: "https://ug.linkedin.com/in/ntale-mesarch-748304234",
        twitter: "https://x.com/ntale_mesarch",
        email: "ntalemesarch812@gmail.com"
      }
    },
    {
      name: "Muhoozi Owen",
      role: "CTO (IT Support Officer)",
      image: "/lovable-uploads/ebe21ae5-a51d-48b3-99d6-30e2f0692cdd.png",
      bio: "Detail-oriented IT professional with teaching, data management, research, and cybersecurity expertise. Proficient in database development, Microsoft Office applications, and data quality assurance. Skilled in guiding people through innovation, research methodologies, and project development. Strong problem-solving abilities, with a passion for leveraging technology to enhance learning and community development.",
      social: {
        linkedin: "https://ug.linkedin.com/in/muhoozi-owen-1041b5271",
        email: "muhooziowen85@gmail.com"
      }
    },
    {
      name: "Muhumuza Marvin",
      role: "CMO & Database Manager",
      image: "/lovable-uploads/3f450615-5245-4d89-b436-dfcf28727eb2.png",
      bio: "Muhumuza is a creative marketing professional with a Bachelor's degree in Library and Information Science from Makerere University. With over 3 years of experience in developing marketing campaigns and strategies, Muhumuza brings innovative marketing ideas and expertise to our team.",
      social: {
        linkedin: "https://www.linkedin.com/in/marvin-m-308b422a2",
        twitter: "https://x.com/marvinwritten?s=21",
        email: "info@aquawooduganda.com"
      }
    }
  ];

  return (
    <section id="team" className="bg-white py-16 sm:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-on-scroll">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Passionate professionals dedicated to environmental conservation through innovative technology solutions.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-aqua-500 to-forest-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-on-scroll"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-aqua-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 line-clamp-3 mb-4 h-18">{member.bio}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-aqua-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-aqua-600 transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-aqua-600 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </div>
                  <button
                    onClick={() => setActiveTeamMember(activeTeamMember === index ? null : index)}
                    className="text-sm text-aqua-600 hover:text-aqua-800 font-medium"
                  >
                    {activeTeamMember === index ? "Show less" : "Read more"}
                  </button>
                </div>
                {activeTeamMember === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
