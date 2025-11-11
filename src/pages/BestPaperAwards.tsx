import React from 'react';

interface AwardPaper {
  paperId: string;
  title: string;
  authors: string;
  award: string;
}

interface TrackAwards {
  trackName: string;
  papers: AwardPaper[];
}

const BestPaperAwards: React.FC = () => {
  const awardsData: TrackAwards[] = [
    {
      trackName: "Track 2: Sustainable Energy Technologies",
      papers: [
        {
          paperId: "867",
          title: "Modelling and Analysis of Renewable Energy Integration and Electric Vehicle Impact on Microgrid Performance: A PSO-Based MPPT and ANFIS-Controlled Battery Approach",
          authors: "Vijay Kumar; D. Ravi Kishore; B. Kavya Santhoshi; V. Suresh",
          award: "Best Technical Paper Award – iSSSC 2025"
        },
        {
          paperId: "242",
          title: "Solar Global Tilted Irradiance Prediction for PV-Optimized Microgrids: A Machine Learning Perspective",
          authors: "Kanaka Raju Kalla; D. Ravi Kishore; D. Vijaya Kumar",
          award: "Outstanding Paper Award (Second Place) – iSSSC 2025"
        }
      ]
    },
    {
      trackName: "Track 3: Signal Processing Applications",
      papers: [
        {
          paperId: "398",
          title: "Image Encryption framework using Cosine-Logistic Map",
          authors: "Puviarasu T S; Amutha R; Neevashine",
          award: "Best Technical Paper Award – iSSSC 2025"
        },
        {
          paperId: "962",
          title: "ReSEU-Net++: A New Benchmark on Cx22 for Cytoplasm and Nucleus Segmentation using Residual Squeeze-Excitation U-Net++ Architecture",
          authors: "Ankit Bhattacharya; Snehasish Sau; Shyamali Mitra; Nibaran Das",
          award: "Outstanding Paper Award (Second Place) – iSSSC 2025"
        }
      ]
    },
    {
      trackName: "Track 4: Cybersecurity and Privacy",
      papers: [
        {
          paperId: "217",
          title: "PURL-Bot: Chatbot Integrated Machine Learning Driven Phishing URL Detection",
          authors: "V Neelimadhavi; V V A S Lakshmi; M Venkat Rao; K V Narasimah Reddy; S Sivanageswararao; R Sowjanya",
          award: "Best Technical Paper Award – iSSSC 2025"
        },
        {
          paperId: "961",
          title: "A Unified Benchmark of Boosting and Tree-Based Models for Flow-Based Network Intrusion Detection",
          authors: "Rashmiranjan Nayak; Siddharth Sahu; Umesh Chandra Pati; Bibhudatta Sahoo",
          award: "Outstanding Paper Award (Second Place) – iSSSC 2025"
        }
      ]
    },
    {
      trackName: "Track 5: Smart Communication and Antenna",
      papers: [
        {
          paperId: "85",
          title: "Edible Oil Purity Check with a Sensor Based on Microwave Metasurface",
          authors: "Niten Panda; Rajarshi Paul",
          award: "Best Technical Paper Award – iSSSC 2025"
        },
        {
          paperId: "908",
          title: "Adaptive Spectrum Sensing in Cognitive Radar System using SVM",
          authors: "Deekshitha Kandregula; Veerraju Sampenga; Pilla Bhargavi; Raveendhra Muppirisetti; Raja Ratna Prasad Bandaru; Ramana babu Challapalli",
          award: "Outstanding Paper Award (Second Place) – iSSSC 2025"
        }
      ]
    },
    {
      trackName: "Track 6: Interdisciplinary Case Studies",
      papers: [
        {
          paperId: "606",
          title: "Domain-Adversarial Neural Networks for Cross-Dataset Pneumonia Detection in Chest X-Rays",
          authors: "Soumya Behera; Deepankar Satpathy; Nihar Ranjan Mohapatra; Umesh Chandra Pati",
          award: "Best Technical Paper Award – iSSSC 2025"
        },
        {
            paperId: "1072",
            title: "An Adaptive Fault-Tolerance Framework for Cloud-Fog Environments Using Reinforcement Learning and Predictive Analytics",
            authors: "Parthiban Mohandas; Balajee Maram",
            award: "Outstanding Paper Award (Second Place) – iSSSC 2025"
          },
          {
            paperId: "68",
            title: "An Advanced Deep Learning-Driven Random Spiral Skew Optimization Framework for Robust Cybersecurity in IoT Networks",
            authors: "T Saravanan",
            award: "Outstanding Paper Award (Second Place) – iSSSC 2025"
          }
      ]
    }
  ];

  const getAwardBadgeColor = (award: string) => {
    if (award.includes("Best Technical Paper")) {
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
    } else if (award.includes("Outstanding Paper")) {
      return "bg-gradient-to-r from-blue-500 to-blue-700 text-white";
    }
    return "bg-gradient-to-r from-amber-400 to-amber-600 text-white";
  };

  const formatAuthors = (authors: string) => {
    return authors.split(';').map((author, index, array) => (
      <span key={index}>
        <span className="font-semibold text-conference-blue">{author.trim()}</span>
        {index < array.length - 1 && <span className="text-gray-400 mx-2">•</span>}
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-conference-navy mb-3">
          Best Paper Awards
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-conference-blue mb-6">
          IEEE-iSSSC 2025
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Recognizing outstanding research contributions and celebrating excellence in innovation and scholarly achievement.
        </p>
      </div>

      {/* Awards by Track */}
      <div className="space-y-10">
        {awardsData.map((track, trackIndex) => (
          <div key={trackIndex} className="space-y-6">
            {/* Track Header */}
            <div className="border-b-2 border-conference-blue pb-2">
              <h3 className="text-xl md:text-2xl font-bold text-conference-navy">
                {track.trackName}
              </h3>
            </div>

            {/* Papers in Track */}
            <div className="space-y-8">
              {track.papers.map((paper, paperIndex) => (
                <div
                  key={paperIndex}
                  className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:border-conference-light-blue transition-colors duration-200"
                >
                  {/* Award Type */}
                  <div className="mb-4">
                    <span className={`inline-block ${getAwardBadgeColor(paper.award)} px-4 py-1.5 rounded-full text-sm font-semibold`}>
                      {paper.award}
                    </span>
                  </div>

                  {/* Paper Title */}
                  <h4 className="text-lg md:text-xl font-bold text-conference-navy mb-5 leading-snug">
                    {paper.title}
                  </h4>

                  {/* Authors - More Prominent */}
                  <div className="mb-4">
                    <div className="text-base md:text-lg text-gray-800 leading-relaxed">
                      {formatAuthors(paper.authors)}
                    </div>
                  </div>

                  {/* Paper ID */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">
                      Paper ID: <span className="text-conference-blue font-semibold">{paper.paperId}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-center pt-8 border-t border-gray-200">
        <p className="text-gray-700 text-base md:text-lg">
          Congratulations to all award winners for their exceptional contributions!
        </p>
      </div>
    </div>
  );
};

export default BestPaperAwards;

