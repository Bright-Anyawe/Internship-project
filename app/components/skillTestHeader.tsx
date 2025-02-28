import React from 'react';
import Image from 'next/image';
import ScoreUpdater from './scoreUpdate';

const SkillTestHeader = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-300 flex items-center justify-between">
      {}
      <div className="flex items-center">
        <Image
          src="/asset/HTML5.png"
          alt="HTML5 Logo"
          width={48}
          height={48}
          className="mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">Hyper Text Markup Language</h2>
          <p className="text-gray-600">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {}
      <ScoreUpdater />
    </div>
  );
};

export default SkillTestHeader;
