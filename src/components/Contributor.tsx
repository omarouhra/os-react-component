import React, { useState } from "react";
import Image from "next/image";

type ContributorType = {
  name: string;
  role: string;
  src: string;
};
function Contributor({ name, role, src }: ContributorType) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className=' flex w-[full] items-center space-x-4 rounded-md py-4 md:px-4 '>
      <div className='transitions relative h-24 w-24 rounded-full shadow-lg overflow-hidden'>
        <Image
          src={ src }
          layout='fill'
          alt={ name }
          objectFit='cover'
          className={ ` duration-500 ease-in-out rounded-full
            ${isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
            }
            `}
          onLoadingComplete={ () => setLoading(false) }
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <p className='text-lg font-semibold text-gray-800 dark:text-white md:text-xl'>
          { name }
        </p>
        <span className='text-sm font-light text-gray-400'>{ role }</span>
      </div>
    </div>
  );
}

export default Contributor;
