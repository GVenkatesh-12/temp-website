
import React from 'react';

const NationalAdvisory = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">National Advisory Board</h1>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-8 text-justify">
            The National Advisory Board consists of distinguished academicians and researchers from across India.
            They provide guidance on national research priorities, help establish links with Indian institutions, and ensure the
            conference addresses challenges relevant to the national context.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

            {[
              { name: 'Dr. Nikhil R Pal', institution: 'ISI Calcutta' },
              { name: 'Dr. Sivaji Chakravorti', institution: 'Jadavpur University' },
              { name: 'Dr. Subir Kumar Sarkar', institution: 'Jadavpur University' },
              { name: 'Dr. Rajendra Kumar Pandey', institution: 'IIT BHU' },
              { name: 'Dr. Narayana Prasad Padhy', institution: 'Director, MNIT Jaipur' },
              { name: 'Dr. Sarat Kumar Patra', institution: 'Director, NIT Agartala' },
              { name: 'Dr. Amitava Chatterjee', institution: 'Jadavpur University' },
              { name: 'Dr. Subrata Banerjee', institution: 'NIT Durgapur' },
              { name: 'Dr. Nikhil Ranjan Das', institution: 'University of Calcutta' },
              { name: 'Dr. P K Sadhu', institution: 'IIT (ISM) Dhanbad' },
              { name: 'Dr. B K Roy', institution: 'NIT Silchar' },
              { name: 'Dr. Ghanshyam Singh', institution: 'MNIT Jaipur' },
              { name: 'Dr. Y R Sood', institution: 'NIT Hamirpur' },
              { name: 'Dr. O.P. Sahu', institution: 'NIT Kurukshetra' },
              { name: 'Dr. K. K. Sharma', institution: 'MNIT Jaipur' },
              { name: 'Dr. Bidyadhar Subudhi', institution: 'Director, NIT Warangal' },
              { name: 'Dr. Sandip Ghosh', institution: 'IIT BHU' },
              { name: 'Dr. B B Pati', institution: 'VSSUT Odisha' },
              { name: 'Dr. Ranjan Kumar Behera', institution: 'IIT Patna' },
              { name: 'Dr. Biplab Bhattacharyya', institution: 'IIT (ISM) Dhanbad' },
              { name: 'Dr. Akhilesh Swarup', institution: 'NIT Kurukshetra' },
              { name: 'Dr. Rajive Tiwari', institution: 'MNIT Jaipur' },
              { name: 'Dr. Vijay Janyani', institution: 'MNIT Jaipur' },
              { name: 'Dr. Asheesh K. Singh', institution: 'MNNIT Allahabad' },
              { name: 'Dr. Richa Negi', institution: 'MNNIT Allahabad' },
              { name: 'Dr. Ashwani Kumar', institution: 'NIT Kurukshetra' },
              { name: 'Dr. B D Sahoo', institution: 'NIT Rourkela' },
              { name: 'Dr. Nibaran Das', institution: 'Jadavpur University' },
              { name: 'Dr. Dipti Saxena', institution: 'MNIT Jaipur' },
              { name: 'Dr. Saroj Kumar Meher', institution: 'IIIT Bangalore' },
              { name: 'Dr. Nitin Singh', institution: 'MNNIT Allahabad' },
              { name: 'Dr. Sanjay Kumar Parida', institution: 'IIT Patna' },
              { name: 'Dr. Sanjeev Kumar Singh', institution: 'MANIT Bhopal' },
              { name: 'Dr. R P Panda', institution: 'Ex Prof VSSUT Odisha' },
              { name: 'Dr. S. Ravi Chandra', institution: 'NIT Warangal' },
              { name: 'Dr. Anil Kumar Singh', institution: 'MNNIT Allahabad' },
              { name: 'Dr. Debi Prasad Das', institution: 'Scientist, IMMT Bhubaneswar' },
              { name: 'Dr. Tridibesh Nag', institution: 'IEEE Kolkata Section' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg text-gray-950">{member.name}</h3>
                <p className="text-gray-950">{member.institution}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalAdvisory;
