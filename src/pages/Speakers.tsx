
import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Amitava Chatterjee, FNAE, SMIEEE",
      title: "Professor-Electrical Engineering",
      affiliation: "Jadavpur University, West Bengal",
      image: "/documents/speaker_1.jpg",
      description: "Distinguished professor with expertise in electrical engineering and signal processing. Fellow of the National Academy of Engineering (FNAE) and Senior Member of IEEE (SMIEEE)."
    },
    {
      id: 2,
      name: "Dr. Debabrata Nayak",
      title: "Director PWC India Ltd.",
      affiliation: "PWC India Ltd.",
      image: "/documents/speaker_2.jpg",
      description: "Experienced director at PWC India Ltd. with extensive knowledge in business strategy and technology implementation across various industries."
    },
    {
      id: 3,
      name: "Dr. Saroj Kumar Meher",
      title: "Professor-Systems Science and Informatics Unit",
      affiliation: "Indian Statistical Institute, Bangalore Centre",
      image: "/documents/speaker_3.jpg",
      description: "Renowned professor specializing in systems science and informatics. Leading researcher at the prestigious Indian Statistical Institute, Bangalore Centre."
    },
    {
      id: 4,
      name: "Dr. Tahir Ekin",
      title: "Director, TXST Center for Analytics and Data Science",
      subtitle: "Professor, Department of Information Systems and Analytics",
      affiliation: "Texas State University",
      image: "/documents/speaker_4.jpg",
      description: "Director of the TXST Center for Analytics and Data Science and Professor in the Department of Information Systems and Analytics at Texas State University."
    },
    {
      id: 5,
      name: "Prof. Peter Han Joo Chong",
      title: "Associate Head of School (Research)",
      subtitle: "School of Engineering, Computer and Mathematical Sciences",
      affiliation: "Auckland University of Technology, New Zealand",
      image: "/documents/speaker_5.jpg",
      description: "Associate Head of School (Research) at Auckland University of Technology, specializing in computer and mathematical sciences."
    },
    {
      id: 6,
      name: "Dr. G. G. Md. Nawaz Ali",
      title: "Assistant Professor and Curriculum Committee Chair",
      subtitle: "Dept. of Computer Science and Information Systems",
      affiliation: "Bradley University, USA",
      image: "/documents/speaker_6.jpg",
      description: "Assistant Professor and Curriculum Committee Chair in the Department of Computer Science and Information Systems at Bradley University, USA."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-6xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-navy mb-6">
            Distinguished Speakers
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are honored to host distinguished keynote speakers from around the world who are leading experts in their fields.
            Their presentations will provide valuable insights into the latest trends, challenges, and opportunities in sustainable
            energy, signal processing, and cyber security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image Container */}
              <div className="relative h-80 bg-gradient-to-br from-conference-light-blue to-conference-sky overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-conference-blue mb-2 leading-tight">
                  {speaker.name}
                </h2>
                <p className="text-gray-600 font-semibold mb-1 text-sm">
                  {speaker.title}
                </p>
                {speaker.subtitle && (
                  <p className="text-gray-600 font-medium mb-2 text-sm">
                    {speaker.subtitle}
                  </p>
                )}
                <p className="text-conference-navy font-medium mb-3 text-sm">
                  {speaker.affiliation}
                </p>
                {/* <p className="text-gray-700 text-sm leading-relaxed">
                  {speaker.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="bg-gradient-to-r from-conference-light-blue to-conference-sky p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-conference-blue mb-4">
            More Distinguished Speakers Coming Soon
          </h2>
          <p className="text-gray-700 text-lg">
            We are in the process of confirming additional keynote speakers from leading institutions worldwide. 
            Please check back for updates as we continue to expand our lineup of distinguished presenters.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Speakers;
