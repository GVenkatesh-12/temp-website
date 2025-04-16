import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">About iSSSC 2025</h1>

        <div className="prose max-w-none text-gray-700 mb-8 text-justify">
          <p className="mb-4">
            Welcome to the 3rd edition of IEEE International Symposium on Sustainable Energy, Signal Processing, and Cybersecurity (iSSSC 2025), hosted by the Department of Electrical Engineering and Electrical & Electronics Engineering, GIET University, Gunupur, Odisha, India, from November 06-08, 2025.
          </p>
          <p className="mb-4">
            Building on the remarkable success of its previous editions, iSSSC 2025 brings together a diverse community of academicians, researchers, industry professionals, and practitioners on a unified platform to explore advancements and challenges in sustainable energy systems, adaptive signal processing, and cybersecurity frameworks. This year's symposium expands its focus to include the pivotal role of Artificial Intelligence (AI) and Machine Learning (ML) in modernizing the power and energy industries, enabling automation, and strengthening cybersecurity mechanisms.
          </p>
          <p className="mb-4">
            <b>The symposium is structured around six dynamic tracks, covering key topics:</b>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Track 1: Prototyping and Funding Models</li>
              <li>Track 2: Sustainable Energy Technologies</li>
              <li>Track 3: Signal Processing Applications</li>
              <li>Track 4: Cybersecurity and Privacy</li>
              <li>Track 5: Smart Communication and Antenna</li>
              <li>Track 6: Interdisciplinary Case Studies</li>
            </ul>
          </p>
          <p className="mb-4">
            Each track is carefully designed to foster innovation, showcase impactful research, and address real-world challenges across multiple domains.
          </p>
          <p className="mb-4">
            In addition to technical paper presentations, iSSSC 2025 will feature plenary talks by renowned experts, interactive panel discussions, and networking opportunities for collaboration. Accepted papers will be published in the IEEE Xplore Digital Library, ensuring global visibility for cutting-edge research contributions.
          </p>
          <p className="mb-4">
            As we navigate the era of modernization, the 3rd edition of iSSSC emphasizes the interdisciplinary applications of hardware and software research, aligning with global priorities, including the Sustainable Development Goals (SDGs). The conference aims to deliver insights into emerging trends, foster discussions on transformative technologies, and inspire innovative solutions for a sustainable and secure future.
          </p>
          <p className="mb-4">
            We invite researchers, practitioners, and enthusiasts to join us at iSSSC 2025, where knowledge meets innovation to create impactful solutions for the challenges of tomorrow.
          </p>
        </div>

        {/* Conference Objectives */}
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Conference Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="rounded-lg overflow-hidden shadow-md self-start order-last md:order-first">
            <AspectRatio ratio={16 / 11} className="max-h-[300px]">
              <img
                src="/documents/conference.png"
                alt="Research and innovation"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-justify">
              <li>To provide a platform for researchers and practitioners to share their latest findings and innovations</li>
              <li>To foster interdisciplinary collaboration between academia and industry</li>
              <li>To explore emerging technologies and their applications in sustainable energy, signal processing, and cyber security</li>
              <li>To address challenges and opportunities in these rapidly evolving fields</li>
              <li>To showcase cutting-edge research and prototype models</li>
            </ul>
          </div>
        </div>

        {/* GIET University */}
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About GIET University</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="prose max-w-none text-gray-700 text-justify">
            <p className="mb-4">
              GIET University, Gunupur, Odisha, India (formerly known as Gandhi Institute of Engineering and Technology) was established by “Vidya Bharati Educational Trust,” in the year 1997. Since inception, the Trust promotes Technical Education in India with a motto of providing Quality Education in a highly disciplined and conducive environment with International Standards. GIET University attained autonomous status in the year 2017 and again added another gleaming feather to its cap with the conferment of the University Status through an act of Odisha Legislative Assembly and forthwith approved by UGC, New Delhi in 2018.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md self-start">
            <AspectRatio ratio={16 / 9} className="max-h-[300px]">
              <img
                src="/documents/gietu.jpg"
                alt="University campus"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>

        {/* About the Department with Image ABOVE and Full-width Text BELOW */}
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Electrical and Electronics Department</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="rounded-lg overflow-hidden shadow-md self-start order-last md:order-first">
            <AspectRatio ratio={16 / 11} className="max-h-[300px]">
              <img
                src="/documents/dept-3.jpg"
                alt="Research and innovation"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className='prose max-w-none text-gray-700 text-justify'>
          <p className="mb-4">
              The Department of Electrical and Electronics Engineering (EEE) at GIET University, Gunupur, was established in the academic year 2007–2008 with the goal of providing high-quality technical education to aspiring power engineers. The department is dedicated to nurturing an environment where students can reach their full potential and grow into principled, committed professionals. The department is actively involved in cutting-edge research in areas such as Power Systems, Renewable Energy Systems, the Internet of Things (IoT), Big Data, Artificial Intelligence, Energy Management, and Distribution Systems.
            </p>
            
          </div>
        </div>

        {/* GIET University */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="prose max-w-none text-gray-700 text-justify">
          <p className="mb-4">
              It has executed several R&D projects funded by prestigious organizations like DST, MSME, UGC, and AICTE. Furthermore, the department offers consultancy services in areas such as motor testing, solar and wind energy projects, IoT-based smart solutions, energy audits, and energy management systems. With a strong emphasis on industry-academia collaboration, the department facilitates industrial training programs to expose students to the latest industry practices and technologies.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md self-start">
            <AspectRatio ratio={16 / 9} className="max-h-[300px]">
              <img
                src="/documents/dept-1.jpg"
                alt="University campus"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="rounded-lg overflow-hidden shadow-md self-start order-last md:order-first">
            <AspectRatio ratio={16 / 11} className="max-h-[350px]">
              <img
                src="/documents/dept-2.jpg"
                alt="Research and innovation"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className='prose max-w-none text-gray-700 text-justify'>
          <p className="mb-4">
            It also organizes on-campus technical training sessions on various software tools, including MATLAB, PowerSim, P-Spice, HOMER, and others. The department is equipped with state-of-the-art laboratories, a well-stocked departmental library, and a seminar hall, all of which aim to support advanced academic and research activities in emerging areas such as Electric Vehicles, Smart Grids, and IoT-based Data Analytics.Under the department's initiative, several innovative installations are operational, including a 500 kWp rooftop solar plant, a dual-axis solar tracking system, a solar-powered walkway, and a Zero Energy Building (ZEB) test bed.
            </p>
            
          </div>
        </div>

        {/* GIET University */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="prose max-w-none text-gray-700 text-justify">
            <p className="mb-4">
              The department has successfully secured four patents for innovations developed through its startup ventures, with an additional fifteen patents in the pipeline. Some of these patented technologies are ready for commercial production and market launch.  In conclusion, the Department of Electrical and Electronics Engineering at GIET University remains committed to providing top-notch education, promoting innovation-driven research, and equipping students for impactful careers in the dynamic field of Electrical and Electronics Engineering.
            </p>

          </div>
          <div className="rounded-lg overflow-hidden shadow-md self-start">
            <AspectRatio ratio={16 / 9} className="max-h-[300px]">
              <img
                src="/documents/dept-4.jpg"
                alt="University campus"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>








        {/* IEEE */}
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About IEEE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="rounded-lg overflow-hidden shadow-md self-start order-last md:order-first">
  <AspectRatio ratio={16 / 6} className="max-h-[300px]">
    <img
      src="/documents/IEEE_logo.png"
      alt="IEEE technology innovation"
      className="object-contain w-full h-full"
    />
  </AspectRatio>
</div>

          <div className="prose max-w-none text-gray-700 text-justify">
            <p>
              IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Through its publications, conferences, technology standards, and professional and educational activities, IEEE serves as a catalyst for technological innovation and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


{/* <div className="rounded-lg overflow-hidden shadow-md mb-6 max-w-[640px] mx-auto">
<AspectRatio ratio={16 / 9} className="max-h-[520px]">
  <img
    src="/documents/EE&EEE-dept.jpg"
    alt="Electrical engineering department"
    className="object-cover w-full h-full"
  />
</AspectRatio>
</div> */}