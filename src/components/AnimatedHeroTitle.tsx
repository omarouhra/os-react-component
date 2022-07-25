import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function AnimatedHeroTitle() {
  const [title, setTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitle(true);
    }, 1000);
  }, [title]);

  return (
    <h1 className='mb-6 max-w-3xl text-3xl font-bold dark:text-white lg:text-5xl lg:leading-tight  '>
      Ready to use React{" "}
      <div className='h-12  w-min overflow-hidden '>
        <div
          className={`overflow-hidde tansitions flex h-8 w-min md:h-12 ${
            title
              ? "-translate-y-6 md:-translate-y-12"
              : "translate-y-8 md:translate-y-12"
          } transitions  flex-col justify-center space-y-4 md:space-y-12`}
        >
          <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent lg:text-5xl'>
            Components
          </span>{" "}
          <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent lg:text-5xl'>
            Forms
          </span>{" "}
        </div>
      </div>
      {/* with high end code quality 🚀 */}
    </h1>
  );
}

export default AnimatedHeroTitle;
