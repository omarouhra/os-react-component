import { useEffect, useState } from "react";

function AnimatedHeroTitle({ componentTitle }: { componentTitle: string }) {
  const [title, setTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitle(true);
    }, 700);
  }, [title]);

  return (
    <h1 className='mb-6 max-w-3xl font-cal text-4xl dark:text-white lg:text-5xl lg:leading-tight  '>
      Ready to use React{" "}
      <div className='h-12  w-min overflow-hidden '>
        <div
          className={`overflow-hidde tansitions flex h-8 w-max ease-out md:h-12 ${
            title
              ? "-translate-y-6 md:-translate-y-12"
              : "translate-y-8 md:translate-y-12"
          } transitions  flex-col justify-center space-y-4 md:space-y-12`}
        >
          <span className='bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent lg:text-5xl'>
            Components
          </span>{" "}
          <span className=' bg-gradient-to-r from-blue-700 to-cyan-300 bg-clip-text text-4xl font-extrabold capitalize text-transparent lg:text-5xl'>
            {componentTitle}
          </span>{" "}
        </div>
      </div>
      {/* with high end code quality 🚀 */}
    </h1>
  );
}

export default AnimatedHeroTitle;
