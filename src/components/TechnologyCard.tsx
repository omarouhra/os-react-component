import React from "react";

type cardType = {
  technology: string;
  content: string;
  gradient: string;
};

function TechnologiesCard({ technology, content, gradient }: cardType) {
  return (
    <div
      className={`md:max-w-[230px] rounded-lg bg-gradient-to-r ${gradient} p-1.5`}>
      <div className='rounded-md bg-white py-4 px-6 h-full'>
        <p className='font-light text-gray-600'>
          {" "}
          <span className='font-bold text-black'>{technology}</span> {content}
        </p>
      </div>
    </div>
  );
}

export default TechnologiesCard;
