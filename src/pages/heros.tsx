import React from "react";
import Image from "next/image";
import Link from "next/link";

function heros() {
  return (
    <>
      <section className='flex flex-col space-y-12 py-12 md:flex-row-reverse md:items-center md:justify-between md:space-y-0 '>
        <div className='relative h-52 w-52 rounded-full transition duration-300 hover:shadow-xl md:h-60 md:w-60'>
          <Image
            src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
            layout='fill'
            alt='person'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        <div className='md:w-2/3 '>
          <span className='mb-2 text-xl font-light md:text-3xl '>
            Hello 👋!
          </span>
          <h1 className='mb-2 text-4xl font-semibold md:mb-5 md:text-6xl md:font-bold'>
            My name is{" "}
            <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
              Fatima
            </span>
          </h1>
          <p className='mb-6 text-base font-normal text-gray-400 dark:text-gray-100'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            ducimus eveniet, deleniti adipisci corrupti deserunt voluptatibus.
          </p>

          <Link href='/'>
            <a className='flex items-center space-x-1 hover:underline'>
              Visite the website &rarr;
            </a>
          </Link>
        </div>
      </section>

      <section className='flex w-full flex-col items-center justify-center space-y-12 py-12  '>
        <div className='relative h-52 w-52 rounded-full transition duration-300 hover:shadow-xl md:h-60 md:w-60'>
          <Image
            src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
            layout='fill'
            alt='person'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <span className='mb-2 text-xl font-light md:text-3xl '>
            Hello 👋!
          </span>
          <h1 className='mb-2 text-4xl font-semibold md:mb-5 md:text-6xl md:font-bold'>
            My name is{" "}
            <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
              Fatima
            </span>
          </h1>
          <p className='mb-6 text-base font-normal text-gray-400 dark:text-gray-100'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            ducimus eveniet, deleniti adipisci corrupti deserunt voluptatibus.
          </p>

          <Link href='/'>
            <a className='flex items-center space-x-1 hover:underline'>
              Visite the website &rarr;
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default heros;