import React from "react";

type cardType = {
  technology: string;
  content: string;
  gradient: string;
};

function TechnologiesCard({ technology, content, gradient }: cardType) {
  return (
    <div
      className={`transitions rounded-lg bg-gradient-to-r hover:shadow-xl md:max-w-[230px] lg:hover:scale-105 ${gradient} p-1.5`}>
      <div className='h-full rounded-md bg-white py-4 px-6 dark:bg-black'>
        <p className='font-light text-gray-600'>
          {" "}
          <span className='font-bold text-black dark:text-white'>
            {technology}
          </span>{" "}
          {content}
        </p>
      </div>
    </div>
  );
}

export default TechnologiesCard;
