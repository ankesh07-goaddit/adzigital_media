"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import banner from "../../public/banner.svg";
import cover from "../../public/cover.jpeg";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import { motion, AnimatePresence } from "framer-motion";

const listItems = [
  "Arts",
  "Science",
  "Commerce",
  "Ankesh",
  "Kumar",
  "Todo",
  "Next",
  "React",
];
const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [visibleItems, setVisibleItems] = useState(listItems.slice(0, 4));
  const text = "By Adzigital Media || Powered by NextJS & Framer Motion".split(" ")

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems((prevItems) => {
        const nextItems = [...prevItems];
        nextItems.shift(); // Remove the first item
        nextItems.push(
          listItems[
            (listItems.indexOf(prevItems[prevItems.length - 1]) + 1) %
              listItems.length
          ]
        ); // Add the next item
        return nextItems;
      });
    }, 2000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <TopRightIcon />
      <div className="container relative">
        <section className="h-screen mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 mb-16">
          <h1 className="text-center leading-normal text-3xl md:text-6xl lg:leading-[1.1] md:block">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 5,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
        </section>
        
      </div>
      <section className="bg-white dark:bg-gray-900 mb-32">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="h-screen items-center justify-center text-center lg:mb-12">
            <div className="flex">
              <div className="w-1/2">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Connecting..
                </h2>
              </div>
              <div className="w-1/2">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  <AnimatePresence mode="wait">
                    {" "}
                    {/* Key change for sync */}
                    <motion.div
                      className="mt-4 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        type: "tween",
                        duration: 0.8,
                        ease: "easeOut",
                        staggerChildren: 0.2,
                      }}
                    >
                      {visibleItems.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{
                            type: "tween",
                            duration: 0.8,
                            ease: "easeInOut",
                            staggerChildren: 0.2,
                          }}
                          style={{ marginBottom: 10 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="lg:py-8 lg:px-6">
          <div className="h-screen items-center justify-center text-center lg:mb-8">
            <div className="flex">
              <div className="w-1/2">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Introduction
                </h2>
              </div>
              <div className="w-1/2">
                <Image src={cover} height={395} width={750} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Services/>
      <Team />
     
    </>
  );
}

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

const TopRightIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const drawerVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const backgroundVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <div className="fixed top-14 right-4 z-50 cursor-pointer sm:top-4">
        <motion.div whileHover={{ scale: 1.1 }} onClick={handleClick}>
          <span
            role="img"
            aria-label="icon"
            className="text-lg p-2 inline-block border-2  rounded-l-lg bg-slate-500 text-white -mr-5  sm:text-2xl sm:p-4"
          >
            Just Click
          </span>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 h-1/2 w-full bg-black bg-opacity-50 z-40"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={backgroundVariants.open}
            exit={backgroundVariants.closed}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
        <motion.div
          className="fixed top-4 right-0 w-64 bg-slate-500 z-50"
          variants={drawerVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
        >
          <motion.ul className="p-4 space-y-4">
            <motion.li
              className="text-white text-lg"
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            >
              Menu 1
            </motion.li>
            <motion.li
              className="text-white text-lg"
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            >
              Menu 2
            </motion.li>
            <motion.li
              className="text-white text-lg"
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            >
              Menu 3
            </motion.li>
          </motion.ul>
          <motion.div
            className="absolute top-4 right-4 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            X
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};