
import React from 'react';
import Hero from '@/components/home/Hero';
import Countdown from '@/components/home/Countdown';
import Announcements from '@/components/home/Announcements';
import ImportantDates from '@/components/home/ImportantDates';
import Tracks from '@/components/home/Tracks';
import AuthorInstructions from '@/components/home/AuthorInstructions';

const Index = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <Countdown />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-4 sm:px-6">
          <div className="col-span-2">
            {/* <Announcements /> */}
            {/* <ImportantDates /> */}
          </div>
          {/* <div className="col-span-1 -m-[11px]">
            <AuthorInstructions />
          </div> */}
        </div>
        <ImportantDates />
        <Tracks />
      </div>
    </div>
  );
};

export default Index;
