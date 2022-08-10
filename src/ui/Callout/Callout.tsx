import type { PropsWithChildren } from "react";

const Callout = (props: PropsWithChildren & { emoji: string }) => {
  return (
    <div className='flex rounded-lg bg-gray-200 p-4 dark:bg-gray-700'>
      <div className='mr-4 flex w-4 items-center'>{props.emoji}</div>
      <div className='w-full'>
        <p className='text-[#333333] dark:text-[#eaeaea]'>{props.children}</p>
      </div>
    </div>
  );
};

export default Callout;