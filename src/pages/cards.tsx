import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const CARD_CONTENT = [
  "No repetetive Code",
  "Javascript & Typescript support",
  "Weekly new components",
  "Minimal components with animaitions",
];

function Cards() {
  const [showModal, setShowModal] = useState<boolean>(false)


  return (
    <section className='space-y-20 py-20'>
      <motion.div
        animate={ { height: !showModal ? 48 : 200, width: !showModal ? 48 : "40%", borderRadius: showModal ? 5 : 5, } }
        layout
        onClick={ () => setShowModal(!showModal) } className=' relative bg-gray-200 overflow-hidden  flex  flex-col items-start justify-center'>
        <div className="absolute top-2 left-2 h-[32px]  overflow-hidden">
          <div className={ `space-y-4 transition duration-500 ${showModal ? '-translate-y-12 ' : 'translate-y-0 '}` }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-500  ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-500 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        { showModal && <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1, transition: { duration: 0.7 } } }
          className="px-5">
          <h2 className="font-cal text-2xl mb-3 dark:text-black">Title</h2>
          <p className=" text-sm font-light text-gray-600">Lorem ipsum dolor sit amet, conss, reiciendis. ipsum doLoremlor sit amet, conse</p>
        </motion.div> }
      </motion.div>
    </section >
  );
}

export default Cards;


