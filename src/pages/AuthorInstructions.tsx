import React from 'react';
import { CheckCircle, FileText, Upload, ExternalLink, AlertCircle, Info, Download, Copy } from 'lucide-react';

const AuthorInstructions = () => {
  const steps = [
    {
      id: 1,
      title: "Similarity Check",
      description: "The similarity index of your paper must be less than 20%, including references.",
      warning: "If the plagiarism exceeds 20%, your paper will not be forwarded for publication in IEEE Xplore.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: AlertCircle
    },
    {
      id: 2,
      title: "Reviewer Comments",
      description: "The paper must be revised according to the reviewers' comments available on the Microsoft CMT Portal.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      icon: FileText
    },
    {
      id: 3,
      title: "Revised Paper Submission",
      description: "Submit a separate word file of the revised paper along with final camera-ready paper highlighting all the queries asked by the reviewers.",
      warning: "If all the queries are not addressed properly, then the paper may not be recommended for possible publication.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: Upload
    },
    {
      id: 4,
      title: "Conference Registration",
      description: "The registered and presented papers during the conference will be eligible for possible publication in the IEEE Xplore.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: CheckCircle
    },
    {
      id: 5,
      title: "Author List Integrity",
      description: "The author list and order maintained during the initial submission must not be changed during the final Camera-Ready Submission.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Info
    },
    {
      id: 6,
      title: "IEEE Template Compliance",
      description: "Paper must strictly adhere to the IEEE template.",
      link: "https://www.ieee.org/conferences/publishing/templates.html",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      icon: ExternalLink
    },
    {
      id: 7,
      title: "Final Proofreading",
      description: "Proofread your manuscript thoroughly to confirm that it will require no further revision.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: CheckCircle
    },
    {
      id: 8,
      title: "Copyright Notice",
      description: "Include the appropriate copyright notice on the left of the footer section of the first page.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      icon: Copy
    }
  ];

  const copyrightNotices = [
    {
      type: "US Government",
      notice: "U.S. Government work not protected by U.S. copyright"
    },
    {
      type: "Crown Government (UK, Canada, Australia)",
      notice: "979-8-3315-9524-1/25/$31.00 ©2025 Crown"
    },
    {
      type: "European Union",
      notice: "979-8-3315-9524-1/25/$31.00 ©2025 European Union"
    },
    {
      type: "All Other Papers (including Indian authors)",
      notice: "979-8-3315-9524-1/25/$31.00 ©2025 IEEE"
    }
  ];

  const pdfExpressSteps = [
    { id: 1, title: "Create Account", description: "Log in to IEEE PDF eXpress and create account with Conference ID: 66652X" },
    { id: 2, title: "Account Activation", description: "Check email and click on 'Click for account activation' URL" },
    { id: 3, title: "Login & Profile", description: "Log in to your new account and fill the IEEE PDF eXpress User profile" },
    { id: 4, title: "Create New Title", description: "Go to Dashboard and click on 'CREATE NEW TITLE'" },
    { id: 5, title: "File Conversion", description: "Upload your paper and ensure 'File has been converted successfully'" },
    { id: 6, title: "Download PDF", description: "Download the PDF from the 'Action' Tab in the Dashboard" },
    { id: 7, title: "Rename & Upload", description: "Rename PDF with PIDxxxx and upload via CMT Portal" }
  ];

  const copyrightSteps = [
    { id: 1, title: "Access Copyright Link", description: "Click on the IEEE copyright link available on the Microsoft CMT portal" },
    { id: 2, title: "Redirect to IEEE", description: "Click 'Click here to redirect to the IEEE copyright website'" },
    { id: 3, title: "Complete Form", description: "Follow instructions to complete the IEEE Copyright Transfer Process" },
    { id: 4, title: "Save & Download", description: "Save the completed copyright form as a PDF file" },
    { id: 5, title: "Rename File", description: "Rename the file as PIDxxxxC (where xxxx is your paper ID)" },
    { id: 6, title: "Upload to CMT", description: "Upload the PDF file of the Copyright Transfer Form in CMT" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-6xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-conference-navy mb-4">
            Instructions to Authors for Final Camera-Ready Article Preparation
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Follow these step-by-step instructions to prepare your camera-ready paper for iSSSC 2025
          </p>
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-8">
            <p className="text-blue-800 font-semibold">
              Camera-ready file upload link: 
              <a 
                href="https://cmt3.research.microsoft.com/isssc2025/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-2"
              >
                https://cmt3.research.microsoft.com/isssc2025/
              </a>
            </p>
          </div>
        </div>

        {/* Main Steps */}
        <div className="space-y-8 mb-16">
          <h2 className="text-2xl font-bold text-conference-blue mb-6 text-center">Preparation Steps</h2>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className={`${step.bgColor} ${step.borderColor} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className={`w-6 h-6 text-gray-700`} />
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    {step.warning && (
                      <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                        <p className="text-red-800 font-medium">{step.warning}</p>
                      </div>
                    )}
                    {step.link && (
                      <a 
                        href={step.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View IEEE Template
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Copyright Notices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-conference-blue mb-6 text-center">Copyright Notices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {copyrightNotices.map((notice, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">{notice.type}</h4>
                <p className="text-sm text-gray-600 font-mono bg-gray-100 p-2 rounded">{notice.notice}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Express Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-conference-blue mb-6 text-center">IEEE PDF-Express Process</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-center text-blue-800 font-semibold mb-4">
              Log in to the IEEE PDF eXpress site: 
              <a 
                href="https://ieee-pdf-express.org/account/Login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline ml-2"
              >
                https://ieee-pdf-express.org/account/Login
              </a>
            </p>
            <p className="text-center text-blue-700">
              Conference ID: <span className="font-mono font-bold">66652X</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pdfExpressSteps.map((step) => (
              <div key={step.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Form Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-conference-blue mb-6 text-center">IEEE Copyright Form (eCF) Submission</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-6">
            <p className="text-center text-green-800 font-semibold">
              For enabling the paper to appear in IEEE Xplore, it is mandatory to transfer the Copyright to IEEE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {copyrightSteps.map((step) => (
              <div key={step.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-purple-800 mb-2">Important Note</h3>
          <p className="text-purple-700">
            A separate mail will be communicated to complete the registration process
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInstructions;
