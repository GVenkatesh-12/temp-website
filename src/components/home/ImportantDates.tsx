
import React from 'react';
import { Calendar } from 'lucide-react';

const ImportantDates: React.FC = () => {
  const dates = [
    {
      event: "Paper Submission Deadline",
      date: "July 31, 2025"
    },
    {
      event: "Notification of Acceptance",
      date: "August 15, 2025"
    },
    // {
    //   event: "Final Paper Submission", 
    //   date: "August 30, 2025"
    // },
    {
      event: "Camera Ready Submission",
      date: "August 30, 2025"
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
            className="glassmorphism p-5 rounded-lg text-center animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-center mb-4">
              <Calendar className="h-8 w-8 text-conference-blue" />
            </div>
            <h3 className="text-xl font-semibold text-conference-blue mb-2">{item.event}</h3>
            <p className={index === 0 ? "text-red-500 font-bold" : "text-gray-700"}>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantDates;
