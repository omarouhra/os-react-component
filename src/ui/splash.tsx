import React from 'react'
import { motion } from 'framer-motion'



//Container height animation
const containerHeight = {
    hidden: {
        height: "100%",
    },
    visible: {
        height: "0%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 }
    }
}
//Container width animation
const containerWidth = {
    hidden: {
        width: "100%",
    },
    visible: {
        width: "0%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 }
    }
}


// Container children delay
const delayChildren = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4
        }
    }

}
//Fade In animation
const fadeIn = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2 }
    }
}



function SimpleSplash() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="relative py-8 bg-gray-50 dark:bg-gray-800 h-full flex items-center justify-center shadow-2xl" >
            <motion.div
                variants={ containerHeight }
                className="z-50 absolute top-0 w-full h-full bg-blue-900"></motion.div>
            <motion.h1
                variants={ fadeIn }
                className='mb-6 max-w-3xl text-xl font-cal  text-center dark:text-white lg:text-2xl lg:leading-tight'>
                Simple Splash Screen 🚀
            </motion.h1>
        </motion.section >

    )
}




function Nestedsplash() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="relative py-8 bg-gray-50 dark:bg-gray-800 h-full flex items-center justify-center shadow-2xl">
            <motion.div
                variants={ delayChildren }
                className="z-50 absolute top-0 w-full h-full flex">
                <motion.div
                    variants={ containerHeight }
                    className="w-1/3 h-full bg-blue-900"></motion.div>
                <motion.div
                    variants={ containerHeight }
                    className="w-1/3 h-full bg-blue-500"></motion.div>
                <motion.div
                    variants={ containerHeight }
                    className="w-1/3 h-full bg-blue-300"></motion.div>
            </motion.div>
            <motion.h1
                variants={ fadeIn }
                className='mb-6 max-w-3xl text-xl font-cal text-center dark:text-white lg:text-2xl lg:leading-tight'>
                Nested Container Splash Screen 🚀
            </motion.h1>
        </motion.section>
    )
}




function Revealsplash() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            className="relative py-8 bg-gray-50 dark:bg-gray-800 h-full flex items-center justify-center shadow-2xl">
            <motion.div
                variants={ delayChildren }
                className="z-50 absolute top-0 w-full h-full flex">
                <motion.div
                    variants={ containerWidth }
                    className="h-full bg-gradient-to-r from-blue-900 to-cyan-300"></motion.div>
            </motion.div>
            <motion.h1
                variants={ fadeIn }
                className='mb-6 max-w-3xl text-xl font-cal text-center dark:text-white lg:text-2xl lg:leading-tight'>
                Reaveal Splash Screen 🚀
            </motion.h1>
        </motion.section>
    )
}




export { SimpleSplash, Nestedsplash, Revealsplash }
