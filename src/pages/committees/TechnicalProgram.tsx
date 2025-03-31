
import React from 'react';

const TechnicalProgram = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">
          International Advisory Board
        </h1>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
            The International Advisory Board consists of renowned researchers
            and academicians from around the world who provide strategic
            guidance and advice for the conference. Their expertise helps shape
            the conference's direction and ensure its international relevance
            and impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { "name": "Dr. Neeraj Rao", "affiliation": "VNIT, Nagpur" },
              { "name": "Dr. Rajdip Dey", "affiliation": "NIT Durgapur" },
              { "name": "Dr. Tushar Kanti Bera", "affiliation": "NIT Durgapur" },
              { "name": "Dr. Pradeep Kumar Das", "affiliation": "NIT Warangal" },
              { "name": "Dr. Vasudevan A. R", "affiliation": "NIT Calicut" },
              { "name": "Dr. Srinivasarao C", "affiliation": "NIT Calicut" },
              { "name": "Dr. G Siva Kumar", "affiliation": "NIT Warangal" },
              { "name": "Dr. Subha D Puthankattil", "affiliation": "NIT Calicut" },
              { "name": "Dr. Saikat Ch. Bakshi", "affiliation": "NIT Calicut" },
              { "name": "Dr. Mahendra Pratap Singh", "affiliation": "NIT Surathkal" },
              { "name": "Dr. SHIHABUDHEEN KV", "affiliation": "NIT Calicut" },
              { "name": "Dr. Pathipati Srihar", "affiliation": "NIT Surathkal" },
              { "name": "Dr. Santosh Kumar Behera", "affiliation": "NIT Calicut" },
              { "name": "Dr. Debasmita Panda", "affiliation": "NIT Warangal" },
              { "name": "Dr. Mala De", "affiliation": "NIT Patna" },
              { "name": "Dr. Santosh Kumar Tripathy", "affiliation": "NIT Patna" },
              { "name": "Dr. Ambarisha Mishra", "affiliation": "NIT Patna" },
              { "name": "Dr. Anushree Tripathi", "affiliation": "NIT Patna" },
              { "name": "Dr. Bharat Gupta", "affiliation": "NIT Patna" },
              { "name": "Dr. Dushyant Kumar Singh", "affiliation": "MNNIT, Allahabad" },
              { "name": "Dr. Jyoti Prakash Singh", "affiliation": "NIT Patna" },
              { "name": "Dr. Bhaskar Mondal", "affiliation": "NIT Patna" },
              { "name": "Dr. Lakshi Prosad Roy", "affiliation": "NIT Rourkela" },
              { "name": "Dr. Rakesh Ranjan", "affiliation": "NIT Patna" },
              { "name": "Dr. Seemanti Saha", "affiliation": "NIT Patna" },
              { "name": "Dr. Amitesh Kumar", "affiliation": "NIT Patna" },
              { "name": "Dr. Swapnajit Pattnaik", "affiliation": "NIT Raipur" },
              { "name": "Dr. Bibudhendu Pati", "affiliation": "R D Women's University" },
              { "name": "Dr. Mrutyunjaya Panda", "affiliation": "Utkal University" },
              { "name": "Dr. Aakanksha Sharaff", "affiliation": "NIT Raipur" },
              { "name": "Dr. Aurpan Majumder", "affiliation": "NIT Durgapur" },
              { "name": "Dr. Pinki Roy", "affiliation": "NIT Silchar" },
              { "name": "Dr. Rajesh Saha", "affiliation": "NIT Silchar" },
              { "name": "Dr. S. K. Tripathy", "affiliation": "NIT Silchar" },
              { "name": "Dr. P. Karuppanan", "affiliation": "MNNIT Allahabad" },
              { "name": "Dr. Ruchi Agarwal", "affiliation": "NIT Patna" },
              { "name": "Dr. Shivadarshan S L", "affiliation": "NIT Warangal" },
              { "name": "Dr. Surender Hans", "affiliation": "MNIT Jaipur" },
              { "name": "Dr. Sweeti Sah", "affiliation": "NIT Kurukshetra" },
              { "name": "Dr. Ila Sharma", "affiliation": "MNIT Jaipur" },
              { "name": "Dr. Shelly Vadhera", "affiliation": "NIT Kurukshetra" },
              { "name": "Dr. Pradeep Kumar", "affiliation": "NIT Kurukshetra" },
              { "name": "Dr. Durbadal Mandal", "affiliation": "NIT Durgapur" },
              { "name": "Dr. Nitesh Kashyap", "affiliation": "NIT Jalandhar" },
              { "name": "Dr. Shashi Bhushan Singh", "affiliation": "NIT Kurukshetra" },
              { "name": "Dr. Debbrota Paul Chowdhury", "affiliation": "NIT Silchar" },
              { "name": "Dr. Madhurima Buragohain", "affiliation": "NIT Jalandhar" },
              { "name": "Dr. Ravi Kumar Maddila", "affiliation": "MNIT Jaipur" },
              { "name": "Dr. Kriti Bhushan", "affiliation": "NIT Kurukshetra" },
              { "name": "Dr. Ghanapriya Singh", "affiliation": "NIT Kurukshetra" },
              { "name": "Dr. Neeraj Gupta", "affiliation": "NIT Srinagar" },
              { "name": "Dr. Kushal Jagtap", "affiliation": "NIT Srinagar" },
              { "name": "Dr. K. Veningston", "affiliation": "NIT Srinagar" },
              { "name": "Dr. Sanjay Tolani", "affiliation": "SVNIT Surat" },
              { "name": "Dr. Basant Kumar Sethi", "affiliation": "SVNIT Surat" },
              { "name": "Dr. Satyendra Singh Yadav", "affiliation": "NIT Meghalaya" },
              { "name": "Dr. Monalisa Biswal", "affiliation": "NIT Raipur" },
              { "name": "Dr. Manu Vardhan", "affiliation": "NIT Raipur" },
              { "name": "Dr. S N Deepa", "affiliation": "NIT Calicut" },
              { "name": "Dr. Ksh Milan Singh", "affiliation": "NIT Meghalaya" },
              { "name": "Dr. Sumit Kumar", "affiliation": "NIT Jalandhar" },
              { "name": "Dr. Raghavendra Pal", "affiliation": "SVNIT Surat" },
              { "name": "Dr. Bunil Kumar Balabantaray", "affiliation": "NIT Meghalaya" },
              { "name": "Dr. B. Acharya", "affiliation": "NIT Raipur" },
              { "name": "Dr. Surajit Sannigrahi", "affiliation": "NIT Raipur" },
              { "name": "Dr. Greeshma Mohan U", "affiliation": "NIT Calicut" },
              { "name": "Dr. Sathiya. S", "affiliation": "NIT Calicut" },
              { "name": "Dr. Mitul Kumar Ahirwal", "affiliation": "MANIT Bhopal" },
              { "name": "Dr. Deepak Ranjan Nayak", "affiliation": "MNIT Jaipur" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue"
              >
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProgram;
