import { motion } from "framer-motion";
import React, { useState } from "react";



function SimpleModal() {
    const [showModal, setShowModal] = useState<boolean>(false)


    return (
        <section className="p-8">

            <span className="font-light text-sm">Click me!</span>
            <motion.div
                animate={ { height: !showModal ? 48 : '150px', width: !showModal ? 48 : '80%', borderRadius: showModal ? 5 : 5, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.2 } } }
                onClick={ () => setShowModal(!showModal) }
                className=' relative bg-gray-300 dark:bg-gray-600 overflow-hidden  flex  flex-col items-start justify-center mt-3 cursor-pointer'>

                <div className="absolute top-2 left-2 h-[32px] overflow-hidden ">
                    { !showModal && <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-500  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg> }


                    { showModal && <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blue-500 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg> }


                </div>
                { showModal && <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1, transition: { duration: 0.8 } } }
                    className="px-5">
                    <p className=" text-sm font-light text-gray-600 dark:text-gray-200 mt-4">Lorem ipsum dolor sit amet, conss, reiciendis. ipsum doLoremlor sit amet, conse</p>
                </motion.div> }
            </motion.div>
        </section>

    );
}

export default SimpleModal;

