
import React from 'react';
import { FileText, Upload, Check, Info } from 'lucide-react';

const PaperSubmission = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        {/* <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Guideline to Authors</h1> */}

        <div className="prose max-w-none text-gray-700">
          {/* <p className="mb-6">
            Authors are invited to submit original research papers that have not been previously published and are not currently under review for publication elsewhere.
          </p> */}

          {/* <div className="bg-conference-light-blue p-6 rounded-lg mb-8 flex items-start gap-4">
            <Info className="h-6 w-6 text-conference-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-conference-blue mb-2">Submission System</h3>
              <p>
                All papers must be submitted through the conference submission system. The submission link will be activated soon.
              </p>
            </div>
          </div> */}

          {/* <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Submission Guidelines</h2> */}

          {/* <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Format:</strong> All submissions must follow the IEEE conference format. Papers should be prepared using the IEEE conference proceedings templates.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Length:</strong> Papers should not exceed 6 pages, including figures, tables, and references.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Language:</strong> All papers must be written in English.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Anonymity:</strong> Papers should be anonymized for double-blind review. Author names and affiliations should not appear in the paper.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>File Format:</strong> Papers should be submitted as PDF files.</span>
            </li>
          </ul> */}

          <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Guideline to Authors</h1>

          {/* New Section: AUTHOR GUIDELINE */}
          <div className="prose max-w-none text-gray-750 mb-10">
            <p>
              The following instructions are given for the authors to submit their papers for the 2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity (iSSSC).
            </p>

            <h3 className="text-2xl font-semibold text-conference-blue mt-4 mb-2">Originality of Submitted Papers:</h3>
            <p>
              Papers submitted to 2025 IEEE 3rd iSSSC shall contain original work by the author(s) that have not been published or submitted for publication elsewhere. The author(s) need to restrict the plagiarism of their paper within 20%.
            </p>

            <h3 className="text-2xl font-semibold text-conference-blue mt-4 mb-2">Paper Submission:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All papers are required to be prepared and submitted in the IEEE Standard two-column conference format of A4 size in English.</li>
              <li>Papers must not be more than six pages in length, including texts, figures, photographs, and references.</li>
              <li>Any submitted paper that exceeds six pages will be rejected.</li>
              <li>The first page must include the title of the paper, author(s), affiliations, address, and text. Please do not include page numbers on submitted documents.</li>
              <li>The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word and LaTeX templates can be downloaded from our website.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-conference-blue mt-4 mb-2">Paper Upload:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All papers must be submitted in PDF format via Microsoft-CMT Platform.</li>
              <li>The submitting authors need to create a Microsoft CMT account before uploading the paper (if the submitting author does not have a CMT account).</li>
              <li>While uploading the paper, the authors should provide the title of the paper, and an abstract of no more than 250 words in the respective text boxes in the paper submission page.</li>
              <li>Please note that all accepted papers that are registered and presented in the conference will be sent for possible inclusion in IEEE Xplore.</li>
              <li>The authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of the online submission process.</li>
              <li>All submitted papers will be peer reviewed by the Technical Program Committee Members (TPC).</li>
            </ul>
          </div>


          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Review Process</h2>
          <p className="mb-4">
            All submissions will undergo a rigorous peer review process. Each paper will be reviewed by at least three members of the Technical Program Committee based on technical quality, originality, relevance, and presentation.
          </p>

          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Publication</h2>
          <p className="mb-4">
            All accepted and presented papers will be subbmitted for inclusion in IEEE Xplore @Digital Library indexed by scopus.
          </p>

          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Templates & Resources</h2>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/documents/conference-template-a4.docx"
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
            // onClick={(e) => {
            //   e.preventDefault();
            //   alert('PDF link will be added later');
            // }}
            >
              <FileText className="h-5 w-5" />
              IEEE Conference Template (Word)
            </a>

            <a
              href="/documents/conference-latex-template_10-17-19.zip"
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
            // onClick={(e) => {
            //   e.preventDefault();
            //   alert('PDF link will be added later');
            // }}
            >
              <FileText className="h-5 w-5" />
              IEEE Conference Template (LaTeX)
            </a>
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
            // onClick={(e) => {
            //   e.preventDefault();
            //   alert('PDF link will be added later');
            // }}
            >
              <FileText className="h-5 w-5" />
              IEEE Author Center
            </a>
            

            <a
              href="https://cmt3.research.microsoft.com/isssc2025"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
            // onClick={(e) => {
            //   e.preventDefault();
            //   alert('PDF link will be added later');
            // }}
            >
              <Upload className="h-5 w-5" />
              Submit Paper
            </a>
          </div>
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Important Dates</h2>
<ul className="space-y-3 text-gray-700 mb-8">
  <li className="flex items-start gap-3">
    <Info className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
    <span><strong>Full Paper Submission Date (Deadline):</strong> 30 June 2025</span>
  </li>
  <li className="flex items-start gap-3">
    <Info className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
    <span><strong>Notification of Acceptance:</strong> 15 July 2025</span>
  </li>
  <li className="flex items-start gap-3">
    <Info className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
    <span><strong>Final Paper Submission Date:</strong> 30 July 2025</span>
  </li>
</ul>


          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Contact</h2>
          <p className="mb-4">
            For any queries regarding paper submission, please contact: <a href="mailto:issc2025@gmail.com" className="text-conference-blue hover:underline">issc2025@gmail.com</a>
          </p>
          <p className="mb-4">
            GIET University, Gunupur - 765022, Odisha, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
