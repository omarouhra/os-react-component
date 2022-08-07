import Link from "next/link";
import React from "react";

function texts() {
    return (
        <section className="space-y-12">
            <div className="py-12 bg-white dark:bg-black/10 px-5 rounded-md shadow">
                <h2 className='mb-3 text-xl text-blue-700 dark:text-cyan-500 md:text-2xl'>
                    Welcome To Os React Components 🔥
                </h2>
                <p className='mb-4 text-base font-normal leading-6 text-gray-400 dark:text-gray-300'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quia ratione quod ipsa consectetur totam, similique eius doloremque, ut harum ullam cupiditate non labore est autem laboriosam deleniti cumque illum incidunt consequuntur, omnis commodi deserunt. Laborum quae magnam quis possimus!
                </p>
                <Link href='/' >
                    < a className='flex items-center space-x-1 hover:underline'>
                        Visite the website &rarr;
                    </ a>
                </Link >
            </div>
            <div className="py-12 bg-white dark:bg-black/10 px-5 rounded-md shadow text-center">
                <h2 className='mb-3 text-xl text-blue-700 dark:text-cyan-500 md:text-2xl'>
                    Welcome To Os React Components 🔥
                </h2>
                <p className='mb-4 text-base font-normal leading-6 text-gray-400 dark:text-gray-300'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quia ratione quod ipsa consectetur totam, similique eius doloremque, ut harum ullam cupiditate non labore est autem laboriosam deleniti cumque illum incidunt consequuntur, omnis commodi deserunt. Laborum quae magnam quis possimus!
                </p>
                <Link href='/' >
                    < a className='space-x-1 hover:underline'>
                        Visite the website &rarr;
                    </ a>
                </Link >
            </div>
            <div className="py-12 bg-white dark:bg-black/10 px-5 rounded-md shadow flex flex-col space-y-8 md:flex-row-reverse md:items-center md:justify-center md:space-y-0  ">
                <div className=" w-full md:w-1/2 h-[300px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md shadow-lg">
                    {/* Here goes the image */ }
                </div>
                <div className="w-full md:w-1/2">

                    <h2 className='mb-3 text-xl text-blue-700 dark:text-cyan-500 md:text-2xl'>
                        Welcome To Os React Components 🔥
                    </h2>
                    <p className='mb-4 text-base font-normal leading-6 text-gray-400 dark:text-gray-300'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quia ratione quod ipsa consectetur totam, similique eius doloremque, ut harum
                    </p>
                    <Link href='/' >
                        < a className='space-x-1 hover:underline'>
                            Visite the website &rarr;
                        </ a>
                    </Link >
                </div>
            </div>
        </section >
    );
}

export default texts;
