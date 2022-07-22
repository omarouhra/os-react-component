import HeroTitle from "@/components/HeroTitle";
import LoadingComponent from "@/components/LoadingComponent";
import React, { useState } from "react";

function Components() {
  const [isActive, setIsActive] = useState("Buttons");

  const FILTERS = [
    { label: "Buttons" },
    { label: "Texts" },
    { label: "Navbars" },
    { label: "Carousels" },
  ];

  return (
    <div>
      <section className='py-12 '>
        <HeroTitle />
        <p className='text-sm font-light text-gray-500 dark:text-gray-300 md:max-w-md md:text-base'>
          We worked on cool and well optimized components that will definetly
          make the process easier & faster
        </p>
      </section>

      <section className='py-12'>
        <div className='grid grid-cols-2 gap-12 md:grid-cols-4'>
          {FILTERS.map((filter, index) => (
            <button
              key={index}
              onClick={() => {
                setIsActive(filter.label);
              }}
              className='w-full'
            >
              <div
                className={
                  isActive === filter.label
                    ? "transitions border-b border-blue-600 pb-3  text-start   text-blue-500 dark:text-blue-400  md:text-lg"
                    : "transitions border-b pb-3 text-start text-gray-400 hover:border-gray-500 hover:text-gray-500 dark:text-gray-400 dark:hover:border-gray-100 dark:hover:text-gray-100 md:text-lg"
                }
              >
                {filter.label}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className='grid w-full grid-cols-1 gap-10 rounded-xl py-6  md:grid-cols-3'>
        <LoadingComponent content={isActive} />
        <LoadingComponent content={isActive} />
        <LoadingComponent content={isActive} />
        <LoadingComponent content={isActive} />
        <LoadingComponent content={isActive} />
        <LoadingComponent content={isActive} />
      </section>
    </div>
  );
}

export default Components;
