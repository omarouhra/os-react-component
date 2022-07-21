import React from "react";

type cardType = {
  technology: string;
  content: string;
  gradient: string;
};

function TechnologyCard({ technology, content, gradient }: cardType) {
  return (
    <div
      className={`transitions rounded-lg bg-gradient-to-r hover:shadow-xl sm:h-[120px] md:h-auto md:max-w-[230px] lg:hover:scale-105 ${gradient} p-1.5`}
    >
      <div className='transitions flex h-full items-center justify-center rounded-md bg-white py-4 px-6 dark:bg-gray-900 md:items-start'>
        <p className='font-light text-gray-600 dark:text-gray-300'>
          {" "}
          <span className='font-bold text-black dark:text-white '>
            {technology}
          </span>{" "}
          {content}
        </p>
      </div>
    </div>
  );
}

export default TechnologyCard;
