import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ContributorType = {
  name: string;
  role: string;
  src: string;
  href: string;
};
function Contributor({ name, role, src, href }: ContributorType) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link href={href}>
      <a
        target='_blank'
        className=' flex w-[full] items-center space-x-4 rounded-md py-4 transition duration-300 md:px-4 md:hover:scale-95 '
      >
        <div className='transitions relative h-24 w-24 overflow-hidden rounded-full shadow-lg'>
          <Image
            src={src}
            layout='fill'
            alt={name}
            objectFit='cover'
            className={` rounded-full duration-500 ease-in-out
            ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            }
            `}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className='flex flex-col space-y-2'>
          <p className='text-lg font-semibold text-gray-800 dark:text-white md:text-xl'>
            {name}
          </p>
          <span className='text-sm font-light text-gray-400'>{role}</span>
        </div>
      </a>
    </Link>
  );
}

export default Contributor;
