import React from "react";
import Image from "next/image";

type ContributorType = {
  name: string;
  role: string;
  src: string;
};
function Contibutor({ name, role, src }: ContributorType) {
  return (
    <div className=' flex w-[full] items-center space-x-6 rounded-md py-4 md:px-4 '>
      <div className='transitions relative h-32 w-32 rounded-xl shadow-lg  '>
        <Image src={src} layout='fill' alt={name} className='rounded-xl' />
      </div>
      <div className='flex flex-col space-y-2'>
        <p className='text-lg font-semibold text-gray-800 dark:text-white md:text-xl'>
          {name}
        </p>
        <span className='text-sm text-gray-400'>{role}</span>
      </div>
    </div>
  );
}

export default Contibutor;
