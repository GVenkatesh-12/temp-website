import React from 'react';

const IndustrialCollaboration = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">
          Industrial Collobaration Committee
        </h1>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
          The Industrial Collaboration Committee comprise distinguished professionals from leading industries who foster strong partnerships between industry and academia. Their guidance ensures the conference remains practically relevant, forward-looking, and aligned with real-world innovations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Dr. Pramod Kumar Misra", affiliation: "PRA India, Pvt Ltd" },
              { name: "Mr. Madhu Vadlamani", affiliation: "WinWire Technology, Pvt Ltd" },
              { name: "Dr. Srikanta Mohapatra", affiliation: "TCS, Bhubaneswar" },
              { name: "Dr. Bijaya Kumura", affiliation: "Utkal Alumina International Ltd, Sambalpur" },
              { name: "Mr. Biswaranjan Jena", affiliation: "TCS, Bhubaneswar" },
              { name: "Mr. Ramesh Naidu", affiliation: "MindX360, Hyderabad" },
              { name: "Mr. Arya Vedabrata", affiliation: "ByteIQ Analytics, Hyderabad" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue"
              >
                <h3 className="font-bold text-lg text-gray-950">{member.name}</h3>
                <p className="text-gray-950">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCollaboration;
