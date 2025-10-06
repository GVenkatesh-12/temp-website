
import React from 'react';
import { Calendar, X } from 'lucide-react';

const ImportantDates: React.FC = () => {
  const dates = [
    {
      event: "Paper Submission Deadline",
      date: "August 22, 2025",
      isClosed: true
    },
    {
      event: "Notification of Acceptance",
      date: "September 18, 2025"
    },
    // {
    //   event: "Final Paper Submission", 
    //   date: "August 30, 2025"
    // },
    {
      event: "Camera Ready Submission",
      date: "October 10, 2025"
    },
    {
      event: "Conference Dates",
      date: "November 06-08, 2025"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-conference-navy mb-12">Important Dates</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dates.map((item, index) => (
          <div 
            key={index} 
            className={`glassmorphism p-5 rounded-lg text-center animate-fade-in relative ${
              item.isClosed ? 'opacity-60 grayscale' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.isClosed && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <X className="h-3 w-3" />
                CLOSED
              </div>
            )}
            <div className="flex justify-center mb-4">
              <Calendar className={`h-8 w-8 ${item.isClosed ? 'text-gray-400' : 'text-conference-blue'}`} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${item.isClosed ? 'text-gray-500' : 'text-conference-blue'}`}>
              {item.event}
            </h3>
            <p className={`${item.isClosed ? 'text-gray-400' : (index === 1 || index === 2 ? "text-red-500 font-bold" : "text-gray-700")}`}>
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantDates;
