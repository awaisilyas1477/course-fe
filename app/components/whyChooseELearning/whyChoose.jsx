"use client";
import React from "react";
import card4 from "public/assets/whychoose/Image4.svg";
import card5 from "public/assets/whychoose/Image5.svg";
import card6 from "public/assets/whychoose/Image6.svg";
import Image from "next/image";
import { motion } from "framer-motion";  // Import motion

export default function WhyChoose({
  titleCSS,
  bgColor,
}) {
  const gridData = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry-leading instructors with years of expertise in their respective fields, ensuring top-quality education.",
      image: card4,
    },
    {
      title: "Comprehensive Courses",
      description:
        "Our platform offers a wide range of courses, from beginner to advanced levels, designed to cater to diverse learning needs.",
      image: card5,
    },
    {
      title: "Interactive Learning",
      description:
        "Engage with interactive lessons, quizzes, and real-world projects to enhance your learning experience.",
      image: card6,
    },
  ];

  return (
    <>
      <div className={`rounded-[0px] py-5 ${bgColor}`}>
        <div className="pb-0 relative bg-left-top mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row my-10">
            <div className="w-full flex flex-col justify-center items-center text-center">
              {/* Animated Title */}
              <div
                className={`text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0 ${titleCSS}`}
                
              >
                Why Choose Our E-Learning Platform
              </div>

              <p className="text-[#203241] my-4 mb-10 max-w-2xl px-8">
                Empower your growth with our carefully curated courses, expert guidance, and engaging learning tools.
              </p>

              {/* Animated Grid Items */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-8">
                {gridData.map((item, index) => (
                  <motion.div
                    className={`col-span-1 mb-8 flex items-center flex-col`}
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}  // Delay for staggered animation
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="border border-gray-200 rounded-2xl w-full object-contain transform transition hover:skew-y-1 duration-500 hover:scale-90 cursor-pointer"
                      loading="lazy"
                      draggable="false"
                    />

                    <h4 className="font-bold mt-5 text-[22px]">{item.title}</h4>
                    <p className="mt-2 text-center text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
