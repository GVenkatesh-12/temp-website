
import React from 'react';
import { Calendar, CreditCard, Info, AlertTriangle, CheckCircle } from 'lucide-react';

const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Registration</h1>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 flex items-start gap-4">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-1">Registration Open</h3>
            <p className="text-gray-700">
              Registration for iSSSC 2025 is now open.
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Registration Fees</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-conference-light-blue rounded-lg overflow-hidden">
              <thead className="bg-conference-light-blue">
                <tr>
                  <th className="py-3 px-4 text-left text-conference-blue">Category</th>
                  <th className="py-3 px-4 text-center text-conference-blue">IEEE Member</th>
                  <th className="py-3 px-4 text-center text-conference-blue">Non-IEEE Member</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-conference-light-blue">
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Research Scholars
                  UG and PG Students</td>
                  <td className="py-3 px-4 text-center">3,500 INR</td>
                  <td className="py-3 px-4 text-center">4,000 INR</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Academicians</td>
                  <td className="py-3 px-4 text-center">4,000 INR</td>
                  <td className="py-3 px-4 text-center">4,500 INR</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Industry</td>
                  <td className="py-3 px-4 text-center">6,000 INR</td>
                  <td className="py-3 px-4 text-center">6,500 INR</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Foreign Student Participants</td>
                  <td className="py-3 px-4 text-center">USD 200</td>
                  <td className="py-3 px-4 text-center">USD 250</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Foreign Academicians</td>
                  <td className="py-3 px-4 text-center">USD 300</td>
                  <td className="py-3 px-4 text-center">USD 350</td>
                </tr>
                {/* <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Additional Paper</td>
                  <td className="py-3 px-4 text-center">$100</td>
                  <td className="py-3 px-4 text-center">$100</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          
          {/* Registration Card */}
          <div className="mt-8">
            <div className="bg-white border border-conference-light-blue rounded-lg p-6 shadow-sm">
              <div className="text-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeAjTJUWVNi173k2wHfub75HwdImnKwf-Vk0_ZC194TO1jzSg/viewform?pli=1" 
                  target="_blank"
                  className="text-conference-blue hover:text-conference-navy font-semibold text-lg mb-4 inline-block hover:underline"
                >
                  Click here to Register or scan the QR code below
                </a>
                
                <div className="my-6">
                  <img 
                    src="/documents/reg-qr.png" 
                    alt="Registration QR Code" 
                    className="mx-auto max-w-64 h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
                
                <p className="text-gray-700 text-sm font-bold">
                  For registration, please fill up the form after doing the necessary payment.
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Additional Information</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span>Student registration is valid only for enrolled students in any program at least till the duration of the conference (Studentship certificate duly signed by a competent authority, along with a valid Institute ID card, must be produced/submitted)</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span>IEEE membership number must be produced during registration.</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span className="font-bold text-red-600">All registration fees are inclusive of 18% GST</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span>Extra Pages beyond 6 are not allowed.</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span className="font-bold text-red-600">Registration fee, once paid, is non-refundable.</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span>Author registration fee includes- Registration kit, conference Lunch.</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span>Rs. 2500 (including GST) will be charged for other accompanying persons.</span>
              </li>
              <li className="flex items-start">
                <span className="text-conference-blue font-semibold mr-2">•</span>
                <span><strong className="font-bold text-red-600">Final Registration Deadline: 10.10.2025</strong></span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Contact</h2>
          <p className="mb-4">
            For any queries regarding registration, please contact: <a href="mailto:isssc2025@gmail.com" className="text-conference-blue hover:underline">isssc2025@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
