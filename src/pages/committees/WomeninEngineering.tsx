import React from 'react';

const WomeninEngineering = () => {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
            <div className="glassmorphism p-8 rounded-xl">
                <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">
                    Women in Engineering Committee
                </h1>

                <div className="prose max-w-none text-gray-700 text-justify">
                    <p className="mb-8">
                        The Women in Engineering Committee comprises distinguished women researchers and academicians from across the country. Their expertise, leadership, and dedication play a pivotal role in shaping the conference agenda, promoting gender diversity, and inspiring the next generation of women in STEM fields.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {[
                            { name: "Dr. S N Deepa", affiliation: "NIT Calicut" },
                            { name: "Dr. Seemanti Saha", affiliation: "NIT Patna" },
                            { name: "Dr. Monalisa Pattnaik", affiliation: "NIT Rourkela" },
                            { name: "Dr. Mala De", affiliation: "NIT  Patna" },
                            { name: "Dr. Sucheta Panda", affiliation: "VSSUT  Burla" },
                            { name: "Dr. C.Vyjayanthi", affiliation: "NIT  Goa" },
                            { name: "Dr. Aakansha Sharaff", affiliation: "NIT Raipur" },
                            { name: "Dr. Debasmita Panda", affiliation: "NIT Warangal" },
                            { name: "Dr. Shikha Maurya", affiliation: "NIT Agartala" },
                            { name: "Dr. Illa Sharma", affiliation: "MNIT Jaipur" },
                            { name: "Dr. Shelly Vadhera", affiliation: "NIT Kurukshetra" },
                            { name: "Dr. Pinki Roy", affiliation: "NIT Silchar" },
                            { name: "Dr. Priyanka", affiliation: "NIT Hamirpur" },
                            { name: "Dr. Ghanapriya Singh", affiliation: "NIT Kurukshetra" },
                            { name: "Dr. Madhurima Buragohain", affiliation: "NIT Jalandhar" },
                            { name: "Dr. Sweeti Sah", affiliation: "NIT Kurukshetra" },
                            { name: "Dr. Aakanksha Sharaff", affiliation: "NIT Patna" },
                            { name: "Dr. Suchismita Rout", affiliation: "KIIT Bhubaneswar" },
                            { name: "Dr. Anushree Tripathi", affiliation: "NIT Patna" },
                            { name: "Dr. Ruchi Agarwal", affiliation: "NIT Patna" },
                            { name: "Dr. Sathiya. S", affiliation: "NIT Calicut" },
                            { name: "Dr. Ranjita Das", affiliation: "NIT Agartala" },
                            { name: "Dr. Bharti Bakshi Kaul", affiliation: "NIT Hamirpur" },
                            { name: "Dr. Anisha Kumari", affiliation: "KIIT Bhubaneswar" },
                            { name: "Dr. Sasmita Dash", affiliation: "GIET University Gunupur" },
                            { name: "Dr. Neha Vinayak", affiliation: "BITS Pillani" }
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

export default WomeninEngineering;
