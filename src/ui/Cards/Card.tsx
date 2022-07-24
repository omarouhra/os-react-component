import React from "react";

const Card = () => {
  return (
    <article className='group my-8 max-w-sm sm:my-0 sm:max-w-none'>
      <div className='mb-2 flex'>
        {/* <Image
          src={image}
          width="1200"
          height="627"
          alt={title}
          className="rounded-lg"
        /> */}
      </div>

      <div>
        {/* Date • Views */}
        <p className='dark:text-grey-400 text-sm text-gray-600'>
          October 16, 2021 {` • `}
          1206 views
        </p>

        {/* Title */}
        <h3 className='title-hover mt-1 mb-2 text-xl font-medium'>
          Ready to use React Components with high end code quality 🚀
        </h3>

        {/* Description */}
        <p className='dark:text-grey-300 text-gray-700'>
          JS/TS, Responsive, Semantique HTML, Accessibilty(A11y) No packages,
          Dark/Light mode
        </p>
      </div>
    </article>
  );
};

export default Card;
