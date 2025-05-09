
import React from 'react';

const TechnicalProgram = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">
          Technical Program Committee
        </h1>

        <div className="prose max-w-none text-gray-700">
          <p className="mb-8 text-justify">
            The International Advisory Board consists of renowned researchers
            and academicians from around the world who provide strategic
            guidance and advice for the conference. Their expertise helps shape
            the conference's direction and ensure its international relevance
            and impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Dr. Suresh Mikkili", affiliation: "NIT Goa" },
              { name: "Dr. S K Tripathy", affiliation: "NIT Silchar" },
              { name: "Dr. S L Shivadarshan", affiliation: "NIT Warangal" },
              { name: "Dr. Shelly Vadhera", affiliation: "NIT Kurukshetra" },
              { name: "Dr. Durbadal Mandal", affiliation: "NIT Durgapur" },
              { name: "Dr. Kriti Bhushan", affiliation: "NIT Kurukshetra" },
              { name: "Dr. S N Deepa", affiliation: "NIT Calicut" },
              { name: "Dr. Mitul Kumar Ahirwal", affiliation: "MANIT Bhopal" },
              { name: "Dr. Ashok Kumar", affiliation: "NIT Hamirpur" },
              { name: "Dr. C. Vyjayanthi", affiliation: "NIT Goa" },
              { name: "Dr. B. Surendiran", affiliation: "NIT Puducherry" },
              { name: "Dr. Satyabrata Das", affiliation: "VSSUT, Sambalpur" },
              { name: "Dr. Ravi Sankar Barpanda", affiliation: "VIT, AP" },
              { name: "Dr. V P Harigovindan", affiliation: "NIT Puducherry" },
              { name: "Dr. K Satya Babu", affiliation: "IIIT, Kurnool" },
              { name: "Dr. Asish Kumar Dalai", affiliation: "VIT, AP" },
              { name: "Dr. Soubhagya Barpanda", affiliation: "VIT, AP" },
              { name: "Dr. Neeraj Rao", affiliation: "VNIT, Nagpur" },
              { name: "Dr. Rajdip Dey", affiliation: "NIT Durgapur" },
              { name: "Dr. Tushar Kanti Bera", affiliation: "NIT Durgapur" },
              { name: "Dr. Pradeep Kumar Das", affiliation: "NIT Warangal" },
              { name: "Dr. A R Vasudevan", affiliation: "NIT Calicut" },
              { name: "Dr. Srinivasarao C", affiliation: "NIT Calicut" },
              { name: "Dr. G Siva Kumar", affiliation: "NIT Warangal" },
              { name: "Dr. Subha D Puthankattil", affiliation: "NIT Calicut" },
              { name: "Dr. Saikat Ch. Bakshi", affiliation: "NIT Calicut" },
              { name: "Dr. Mahendra Pratap Singh", affiliation: "NIT Surathkal" },
              { name: "Dr. K V Shihabudheen", affiliation: "NIT Calicut" },
              { name: "Dr. Pathipati Srihar", affiliation: "NIT Surathkal" },
              { name: "Dr. Santosh Kumar Behera", affiliation: "NIT Calicut" },
              { name: "Dr. Debasmita Panda", affiliation: "NIT Warangal" },
              { name: "Dr. Mala De", affiliation: "NIT Patna" },
              { name: "Dr. Santosh Kumar Tripathy", affiliation: "NIT Patna" },
              { name: "Dr. Ambarisha Mishra", affiliation: "NIT Patna" },
              { name: "Dr. Anushree Tripathi", affiliation: "NIT Patna" },
              { name: "Dr. Bharat Gupta", affiliation: "NIT Patna" },
              { name: "Dr. Dushyant Kumar Singh", affiliation: "MNNIT, Allahbad" },
              { name: "Dr. Jyoti Prakash Singh", affiliation: "NIT Patna" },
              { name: "Dr. Bhaskar Mondal", affiliation: "NIT Patna" },
              { name: "Dr. Lakshi Prosad Roy", affiliation: "NIT Rourkela" },
              { name: "Dr. Rakesh Ranjan", affiliation: "NIT Patna" },
              { name: "Dr. Seemanti Saha", affiliation: "NIT Patna" },
              { name: "Dr. Amitesh Kumar", affiliation: "NIT Patna" },
              { name: "Dr. Swapnajit Pattnaik", affiliation: "NIT Raipur" },
              { name: "Dr. Bibudhendu Pati", affiliation: "R D Women's University Odisha" },
              { name: "Dr. Mrutyunjaya Panda", affiliation: "Utkal University Odisha" },
              { name: "Dr. Aakanksha Sharaff", affiliation: "NIT Raipur" },
              { name: "Dr. Aurpan Majumder", affiliation: "NIT Durgapur" },
              { name: "Dr. Pinki Roy", affiliation: "NIT Silchar" },
              { name: "Dr. Rajesh Saha", affiliation: "NIT Silchar" },
              { name: "Dr. P. Karuppanan", affiliation: "MNNIT Allahbad" },
              { name: "Dr. Ruchi Agarwal", affiliation: "NIT Patna" },
              { name: "Dr. Surender Hans", affiliation: "MNIT Jaipur" },
              { name: "Dr. Sweeti Sah", affiliation: "NIT Kurukshetra" },
              { name: "Dr. Ila Sharma", affiliation: "MNIT Jaipur" },
              { name: "Dr. Pradeep Kumar", affiliation: "NIT Kurukshetra" },
              { name: "Dr. Nitesh Kashyap", affiliation: "NIT Jalandhar" },
              { name: "Dr. Shashi Bhushan Singh", affiliation: "NIT Kurukshetra" },
              { name: "Dr. Debbrota Paul Chowdhury", affiliation: "NIT Silchar" },
              { name: "Dr. Madhurima Buragohain", affiliation: "NIT Jalandhar" },
              { name: "Dr. Ravi Kumar Maddila", affiliation: "MNIT Jaipur" },
              { name: "Dr. Ghanapriya Singh", affiliation: "NIT Kurukshetra" },
              { name: "Dr. Neeraj Gupta", affiliation: "NIT Srinagar" },
              { name: "Dr. Kushal Jagtap", affiliation: "NIT Srinagar" },
              { name: "Dr. K. Veningston", affiliation: "NIT Srinagar" },
              { name: "Dr. Sanjay Tolani", affiliation: "SVNIT Surat" },
              { name: "Dr. Basant Kumar Sethi", affiliation: "SVNIT Surat" },
              { name: "Dr. Satyendra Singh Yadav", affiliation: "NIT Meghalaya" },
              { name: "Dr. Monalisa Biswal", affiliation: "NIT Raipur" },
              { name: "Dr. Manu Vardhan", affiliation: "NIT Raipur" },
              { name: "Dr. Ksh Milan Singh", affiliation: "NIT Meghalaya" },
              { name: "Dr. Sumit Kumar", affiliation: "NIT Jalandhar" },
              { name: "Dr. Raghavendra Pal", affiliation: "SVNIT Surat" },
              { name: "Dr. Bunil Kumar Balabantaray", affiliation: "NIT Meghalaya" },
              { name: "Dr. B. Acharya", affiliation: "NIT Raipur" },
              { name: "Dr. Surajit Sannigrahi", affiliation: "NIT Raipur" },
              { name: "Dr. Greeshma Mohan U", affiliation: "NIT Calicut" },
              { name: "Dr. Sathiya S", affiliation: "NIT Calicut" },
              { name: "Dr. Deepak Ranjan Nayak", affiliation: "MNIT Jaipur" },
              { name: "Dr. Ranjita Das", affiliation: "NIT Agartala" },
              { name: "Dr. Yadunath Pathak", affiliation: "MANIT Bhopal" },
              { name: "Dr. Shikha Maurya", affiliation: "NIT Agartala" },
              { name: "Dr. Bikram Das", affiliation: "NIT Agartala" },
              { name: "Dr. T. S. Bheemraj", affiliation: "MANIT Bhopal" },
              { name: "Dr. Jiwanjot Singh", affiliation: "NIT Hamirpur" },
              { name: "Dr. Punjan Dohare", affiliation: "MANIT Bhopal" },
              { name: "Dr. Ram Prakash Sharma", affiliation: "NIT Hamirpur" },
              { name: "Dr. Kiran Teeparthi", affiliation: "NIT Andhra Pradesh" },
              { name: "Dr. Choudhary Shyam Prakash", affiliation: "NIT Andhra Pradesh" },
              { name: "Dr. Alekha Kumar Mishra", affiliation: "NIT Jamshedpur" },
              { name: "Dr. Bharti Bakshi Kaul", affiliation: "NIT Hamirpur" },
              { name: "Dr. Chandrashekhar Azad", affiliation: "NIT Jamshedpur" },
              { name: "Dr. Tejavathu Ramesh", affiliation: "NIT Andhra Pradesh" },
              { name: "Dr. Priyanka", affiliation: "NIT Hamirpur" },
              { name: "Dr. Chandra Shekhar Prasad", affiliation: "NIT Hamirpur" },
              { name: "Dr. Vishal Ramesh Satpute", affiliation: "VNIT Nagpur" },
              { name: "Dr. Sibarama Panigrahi", affiliation: "NIT Rourkela" },
              { name: "Dr. Gumpu Srinivasulu", affiliation: "MANIT Bhopal" },
              { name: "Dr. Bijukumar B", affiliation: "NIT Puducherry" },
              { name: "Dr. Manoj Kumawat", affiliation: "NIT Delhi" },
              { name: "Dr. Rajvir Kaur", affiliation: "NIT Puducherry" },
              { name: "Dr. Jaiverdhan", affiliation: "NIT Uttarakhand" },
              { name: "Dr. Amandeep Kaur", affiliation: "NIT Delhi" },
              { name: "Dr. Sourav Bose", affiliation: "NIT Uttarakhand" },
              { name: "Dr. Ravinder Kumar", affiliation: "NIT Uttarakhand" },
              { name: "Dr. Malaya Kumar Nath", affiliation: "NIT Puducherry" },
              { name: "Dr. Yedukondala Rao", affiliation: "NIT Puducherry" },
              { name: "Dr. Manoja Kumar Behera", affiliation: "MANIT Bhopal" },
              { name: "Dr. H. K. Kathania", affiliation: "NIT Sikkim" },
              { name: "Dr. Abhishek Rajan", affiliation: "NIT Sikkim" },
              { name: "Dr. Madhusudan Singh", affiliation: "NIT Nagaland" },
              { name: "Dr. Tirupathiraju Kanumuri", affiliation: "NIT Delhi" },
              { name: "Dr. Suman Samui", affiliation: "NIT Durgapur" },
              { name: "Dr. Tanmay Kumar Behera", affiliation: "NIT Mizoram" },
              { name: "Dr. Bharati Mishra", affiliation: "IIIT Bhubaneswar" },
              { name: "Dr. Manoj Kumar Patra", affiliation: "LNMIIT Jaipur" },
              { name: "Dr. Jagannath Malik", affiliation: "IIT Patna" },
              { name: "Dr. Sujit K. Mandal", affiliation: "NIT Durgapur" },
              { name: "Dr. Anisha Kumari", affiliation: "KIIT Bhubaneswar" },
              { name: "Dr. Sasmita Acharya", affiliation: "VSSUT Sambalpur" },
              { name: "Dr. Raseswari Pradhan", affiliation: "VSSUT Sambalpur" },
              { name: "Dr. Nimai Charan Patel", affiliation: "NIT Sikkim" },
              { name: "Dr. Shreeya Swagatika Sahoo", affiliation: "BIT Mesra" },
              { name: "Dr. Niranjay Nayak", affiliation: "SOA University Bhubaneswar" },
              { name: "Dr. Deepak Kumar Lal", affiliation: "VSSUT Sambalpur" },
              { name: "Dr. Anasua Sarkar", affiliation: "Jadavpur University, WB" },
              { name: "Dr. Prangya Mohanty", affiliation: "VSSUT Sambalpur" },
              { name: "Dr. Ashim Kumar Biswas", affiliation: "UEM Kolkata" },
              { name: "Dr. Sharmistha Roy", affiliation: "Usha Martin University, Ranchi" },
              { name: "Dr. Suvasini Panigrahi", affiliation: "VSSUT Sambalpur" },
              { name: "Dr. Sudhakar Sahu", affiliation: "KIIT Bhubaneswar" },
              { name: "Dr. Subhransu Sekhar Dash", affiliation: "Govt. College of Engineering, Keonjhar" },
              { name: "Dr. Tapas Kumar Panigrahi", affiliation: "PMEC Berhampur" },
              { name: "Dr. Rabindra Behera", affiliation: "IGIT Sarang" },
              { name: "Dr. Pradeep Kumar Mallick", affiliation: "KIIT Bhubaneswar" },
              { name: "Dr. Srinivas Sethi", affiliation: "IGIT Sarang" },
              { name: "Dr. Ramaprabha Ramabadran", affiliation: "SSN College of Engineering, Chennai " },
              { name: "Dr. Prakash Kumar Ray", affiliation: "OUTR Bhubaneswar" }
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

export default TechnicalProgram;
