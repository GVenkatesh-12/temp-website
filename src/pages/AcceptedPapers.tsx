
import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Search, X, CheckCircle, User, FileText, File } from 'lucide-react';

const AcceptedPapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const scheduleData = [
    {
      day: "Day 1 - November 06, 2025",
      sessions: [
        {
          time: "09:00 AM – 12:30 PM",
          sessions: [
            { name: "Registration and Inaugural Ceremony", papers: [] }
          ]
        },
        {
          time: "2:30 PM – 4:30 PM",
          sessions: [
            { name: "Session-IA", papers: [189, 210, 214, 238, 242, 257, 303, 326, 331, 965] },
            { name: "Session-IB", papers: [10, 85, 246, 517, 670, 686, 692] },
            { name: "Session-IC", papers: [6, 57, 67, 237, 287, 294, 320, 373, 432, 638,675] }
          ]
        },
        {
          time: "5:30 PM – 7:30 PM",
          sessions: [
            { name: "Session-IIA", papers: [1, 14, 68, 124, 163, 178, 197, 202, 203, 250] },
            { name: "Session-IIB", papers: [44, 84, 128, 131, 134, 156, 157, 161, 175,889] },
            { name: "Session-IIC", papers: [216, 219, 220, 221, 233, 253, 291, 319, 332, 350] }
          ]
        }
      ]
    },
    {
      day: "Day 2 - November 07, 2025",
      sessions: [
        {
          time: "10:30 AM – 12:30 PM",
          sessions: [
            { name: "Session-IIIA", papers: [447, 516, 520, 565, 566, 569, 603, 609, 611, 685] },
            { name: "Session-IIIB", papers: [709, 717, 741, 787, 843, 908, 949] },
            { name: "Session-IIIC", papers: [711, 816, 861, 914, 962, 1003, 1046, 1083, 1099] },
            { name: "Session-IIID", papers: [543, 546, 574, 584, 599, 604, 606, 615, 616, 619, 624] }
          ]
        },
        {
          time: "2:30 PM – 4:30 PM",
          sessions: [
            { name: "Session-IVA", papers: [310, 366, 388, 433, 529, 627, 708, 736, 739] },
            { name: "Session-IVB", papers: [49, 60, 186, 283, 521, 655, 656, 661] },
            { name: "Session-IVC", papers: [198,358, 359, 402, 421, 445, 466, 490, 513, 1101] },
            { name: "Session-IVD", papers: [625, 633, 637, 646, 674, 712, 729, 730, 733, 754] }
          ]
        },
        {
          time: "5:30 PM – 7:30 PM",
          sessions: [
            { name: "Session-VA", papers: [723,756, 760, 779, 798, 799, 838, 872, 892] },
            { name: "Session-VB", papers: [907, 921, 923, 935, 963, 966, 975, 990, 1002] },
            { name: "Session-VC", papers: [1008, 1012, 1030, 1048, 1072, 1081, 1087, 1094] }
          ]
        }
      ]
    },
    {
      day: "Day 3 - November 08, 2025",
      sessions: [
        {
          time: "10:30 AM – 12:30 PM",
          sessions: [
            { name: "Session-VIA", papers: [173,696, 716, 738, 876, 920, 1006, 1018, 1042, 1051, 1111] },
            { name: "Session-VIB", papers: [296, 299, 304, 383, 398, 420, 491, 778, 972] },
            { name: "Session-VIC", papers: [54, 56, 140,200, 212, 217, 375, 623, 650, 657] }
          ]
        },
        {
          time: "2:30 PM – 4:30 PM",
          sessions: [
            { name: "Session-VIIA", papers: [751, 753, 922, 943, 974, 976, 978, 1024, 1098] },
            { name: "Session-VIIB", papers: [681, 860, 866, 984, 1001, 1058, 1076, 1077, 1100, 1102] },
            { name: "Session-VIIC", papers: [659, 790, 853, 926, 936, 939, 941, 954, 961, 986] }
          ]
        },
        {
          time: "5:30 PM – 7:30 PM",
          sessions: [
            { name: "Valedictory Session", papers: [] }
          ]
        }
      ]
    }
  ];

  // Search functionality
  const searchPaper = (paperId) => {
    const numericId = parseInt(paperId);
    if (isNaN(numericId)) return null;

    for (let dayIndex = 0; dayIndex < scheduleData.length; dayIndex++) {
      const day = scheduleData[dayIndex];
      for (let timeIndex = 0; timeIndex < day.sessions.length; timeIndex++) {
        const timeSlot = day.sessions[timeIndex];
        for (let sessionIndex = 0; sessionIndex < timeSlot.sessions.length; sessionIndex++) {
          const session = timeSlot.sessions[sessionIndex];
          if (session.papers.includes(numericId)) {
            return {
              dayIndex,
              timeIndex,
              sessionIndex,
              day: day.day,
              time: timeSlot.time,
              sessionName: session.name,
              paperId: numericId
            };
          }
        }
      }
    }
    return null;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const paperId = searchTerm.trim();
    setHasSearched(true);
    
    if (!paperId) {
      setSearchResults(null);
      return;
    }

    // Only search if input is numeric
    if (!/^\d+$/.test(paperId)) {
      setSearchResults(null);
      return;
    }

    const result = searchPaper(paperId);
    setSearchResults(result);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow numeric input
    if (value === '' || /^\d+$/.test(value)) {
      setSearchTerm(value);
      // Reset search state when typing
      if (hasSearched) {
        setHasSearched(false);
        setSearchResults(null);
      }
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults(null);
    setHasSearched(false);
  };

  const handleDownloadPPTTemplate = () => {
    const link = document.createElement('a');
    link.href = '/documents/ISSSC_PPT_FORMAT.pptx';
    link.download = 'ISSSC_PPT_FORMAT.pptx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadGuidelines = () => {
    const link = document.createElement('a');
    link.href = '/documents/Guidelines for Paper Presentation.docx';
    link.download = 'Guidelines for Paper Presentation.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-3 py-6 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="glassmorphism p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-conference-navy mb-3 leading-tight">
              Paper Presentation Schedule
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6">IEEE iSSSC 2025 - November 06-08, 2025</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleDownloadPPTTemplate}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Download PPT Template</span>
              </button>
              <button
                onClick={handleDownloadGuidelines}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <File className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Guidelines for Paper Presentation</span>
              </button>
            </div>
          </div>
        
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-8 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-bold text-conference-navy mb-4 flex items-center justify-center sm:justify-start gap-2">
            <Search className="h-5 w-5 text-conference-blue" />
            Find Your Paper Schedule
          </h2>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Enter Paper ID (e.g., 189, 210, 214...)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-conference-blue focus:border-transparent outline-none text-center sm:text-left text-lg font-medium"
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 sm:flex-none bg-conference-blue hover:bg-conference-navy text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-md"
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="flex-1 sm:flex-none bg-gray-500 hover:bg-gray-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-md"
                  >
                    <X className="h-4 w-4" />
                    <span className="hidden sm:inline">Clear</span>
                  </button>
                )}
              </div>
            </div>
          </form>
          
          {/* Search Results */}
          {searchResults && (
            <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-bold text-green-800 mb-2 text-lg">✓ Paper Found!</h3>
                  <p className="text-green-700 mb-3">
                    <span className="font-semibold text-lg">Paper ID {searchResults.paperId}</span> is scheduled for:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800">Day</p>
                      <p className="text-green-700">{searchResults.day}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800">Time</p>
                      <p className="text-green-700">{searchResults.time}</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800">Session</p>
                      <p className="text-green-700">{searchResults.sessionName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {hasSearched && searchTerm && !searchResults && (
            <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-bold text-red-800 mb-2 text-lg">✗ Paper Not Found</h3>
                  <p className="text-red-700 mb-2">
                    Paper ID <strong>{searchTerm}</strong> was not found in the schedule.
                  </p>
                  <p className="text-sm text-red-600">
                    Please check the ID.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Conference Information */}
        <div className="bg-gradient-to-r from-conference-light-blue to-blue-100 p-4 sm:p-6 rounded-2xl mb-8 border border-blue-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-conference-blue p-2 rounded-lg">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-conference-navy text-sm sm:text-base">General Chair</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">Dr. Pratap Kumar Panigrahi, GIETU, Gunupur</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-conference-blue p-2 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-conference-navy text-sm sm:text-base">Contact</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-all">+91-7008189716</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-all">isssc2025@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Display */}
        <div className="space-y-6 sm:space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <div 
              key={dayIndex} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                hasSearched && searchResults && searchResults.dayIndex === dayIndex 
                  ? 'ring-2 ring-green-400 shadow-green-200' 
                  : ''
              }`}
            >
              <div className="bg-gradient-to-r from-conference-blue to-blue-600 text-white p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-center">{day.day}</h2>
              </div>
              <div className="p-3 sm:p-4 lg:p-6">
                {day.sessions.map((timeSlot, timeIndex) => (
                  <div 
                    key={timeIndex} 
                    className={`mb-4 sm:mb-6 last:mb-0 transition-all duration-300 ${
                      hasSearched && searchResults && 
                      searchResults.dayIndex === dayIndex && 
                      searchResults.timeIndex === timeIndex
                        ? 'bg-green-50 p-3 sm:p-4 rounded-xl border border-green-200' 
                        : ''
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-conference-blue flex-shrink-0" />
                        <h3 className="text-base sm:text-lg font-semibold text-conference-navy">{timeSlot.time}</h3>
                      </div>
                      {hasSearched && searchResults && 
                       searchResults.dayIndex === dayIndex && 
                       searchResults.timeIndex === timeIndex && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full self-start sm:self-auto">
                          Your Paper Time
                        </span>
                      )}
                    </div>
                    {timeSlot.sessions.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                        {timeSlot.sessions.map((session, sessionIndex) => (
                          <div 
                            key={sessionIndex} 
                            className={`rounded-xl p-3 sm:p-4 border transition-all duration-300 ${
                              hasSearched && searchResults && 
                              searchResults.dayIndex === dayIndex && 
                              searchResults.timeIndex === timeIndex && 
                              searchResults.sessionIndex === sessionIndex
                                ? 'bg-green-100 border-green-300 shadow-md' 
                                : session.papers.length === 0 
                                  ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-sm' 
                                  : 'bg-gray-50 border-gray-200 hover:shadow-sm'
                            }`}
                          >
                            <h4 className={`font-bold mb-3 text-center text-base sm:text-lg ${
                              hasSearched && searchResults && 
                              searchResults.dayIndex === dayIndex && 
                              searchResults.timeIndex === timeIndex && 
                              searchResults.sessionIndex === sessionIndex
                                ? 'text-green-800' 
                                : session.papers.length === 0
                                  ? 'text-blue-800'
                                  : 'text-conference-blue'
                            }`}>
                              {session.name}
                              {hasSearched && searchResults && 
                               searchResults.dayIndex === dayIndex && 
                               searchResults.timeIndex === timeIndex && 
                               searchResults.sessionIndex === sessionIndex && (
                                <span className="block text-xs text-green-600 mt-1">Your Session</span>
                              )}
                            </h4>
                            {session.papers.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                                {session.papers.map((paperId, paperIndex) => (
                                  <span
                                    key={paperIndex}
                                    className={`px-2 py-1 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                                      hasSearched && searchResults && searchResults.paperId === paperId
                                        ? 'bg-green-500 text-white shadow-lg transform scale-110 ring-2 ring-green-300'
                                        : 'bg-conference-light-blue text-conference-navy hover:bg-conference-blue hover:text-white'
                                    }`}
                                  >
                                    {paperId}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <div className="text-center py-2">
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-6 sm:py-8">
                        <p className="text-sm sm:text-base">No sessions scheduled</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guidelines for Paper Presentation */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-conference-navy mb-6 text-center flex items-center justify-center gap-2">
            <File className="h-6 w-6 text-conference-blue" />
            Guidelines for Paper Presentation
          </h3>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base leading-relaxed">
                Authors and speakers are encouraged to use this provided format for their presentation.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base leading-relaxed">
                The presentation duration per paper is <span className="font-semibold text-conference-blue">10 minutes</span>, followed by <span className="font-semibold text-conference-blue">5 minutes of Q&A</span> maximum.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base leading-relaxed">
                Please prepare your presentation to convey more of your work, the importance of the work, the approach to address the problem, the outcomes, and the observations.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base leading-relaxed">
                Use a <span className="font-semibold text-conference-blue">large font (size 18+)</span> and adequate color contrast.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base leading-relaxed">
                Limit slide text — use bullet points with no more than <span className="font-semibold text-conference-blue">six main points per slide</span>; keep sentences concise.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <p className="text-base leading-relaxed">
                Speakers should report to the venue the day of their presentation <span className="font-semibold text-conference-blue">at least 30 minutes before</span> their scheduled presentation time.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-sm">
              <p className="text-base leading-relaxed text-red-800 font-semibold">
                ⚠️ No sale pitches, promotions, advertisements, etc. are allowed!
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPapers;

