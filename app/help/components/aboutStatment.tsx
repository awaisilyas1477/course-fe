"use client";

import Image from "next/image";
import React from "react";

export const AboutStatment = () => {
  return (
    <div className="bg-[#F9FAFB] m-3 rounded-xl">
      <div className="mx-auto max-w-7xl py-20 px-6">
        <div className="">
          <div className="max-w-3xl mx-auto">
         

            <h2 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center  lh-120 pt-5 lg:pt-0 pb-6">
              {"Here’s what keeps us going.."}
            </h2>
            <p className="text-charcoal text-lg font-normal text-center opacity-75 pt-5 lg:pt-0 pb-6 max-auto">
  We are here to provide support and assist you with any questions, concerns, or requests you may have. Please let us know how we can help you today.
</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <div className="lg:w-3/5 w-full flex justify-center items-center bg-white rounded-[30px] border border-1 border-[#D0D5DD] py-10 px-4">
              <Image
                src="/assets/banner/lms.png"
                alt=""
                className="h-full w-full object-contain"
                height={1000}
                width={1000}
                draggable="false"
              />
            </div>

            <div className="lg:w-2/5 w-full ">
              <div className="bg-white rounded-[30px] border border-1 border-[#D0D5DD] p-7">
                <h2 className="md:text-2xl text-xl mt-2 md:mt-4  font-BearFont-medium tracking-tighter text-black ">
                  Our Mission
                </h2>

                <p className="mt-4 text-base  font-BearFont-regular text-black ">
                  Our mission is to transform visionary ideas into impactful
                  e-learning solutions. By combining cutting-edge technology
                  with creative insights, we aim to empower educators, learners,
                  and organizations while shaping the future of education. We
                  strive to create platforms so engaging and effective that you
                  actually enjoy exploring our mission statement!
                </p>
              </div>

              <div className="bg-white mt-4 rounded-[30px] border border-1 border-[#D0D5DD] p-7">
                <h2 className="md:text-2xl text-xl mt-2 md:mt-4  font-BearFont-medium tracking-tighter text-black ">
                  Our Vision
                </h2>

                <p className="mt-4 text-base  font-BearFont-regular text-black ">
                  We envision a world where technology bridges the gap between
                  potential and reality, making groundbreaking ideas in
                  e-learning tangible and accessible. Our goal is to lead this
                  transformation by setting new standards in educational
                  technology, innovative learning platforms, and artificial
                  intelligence-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
