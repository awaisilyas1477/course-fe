"use client";
import Image from "next/image";
import React from "react";

const AboutCEO = () => {
  return (
    <div className="mx-auto max-w-7xl py-20 px-6">
      <div className="pt-24">
        <div className="flex gap-10 items-center flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/banner/ceo.jpg"
              alt="nothing"
              width={1000}
              height={805}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div>
              <h2 className="md:text-2xl mt-2 text-xl font-BearFont-medium tracking-tighter text-black">
                {"Awais Ilyas"}
              </h2>

              <p className="text-base font-BearFont-medium text-black mt-1 pr-10">
                {"Founder/CEO e-learning"}
              </p>
              <p className="text-[16px] leading-[22px] font-BearFont-regular text-#101828 mt-4">
                {
                  "Awais Ilyas is the visionary behind the e-learning platform, established with the goal of transforming the way education is delivered in the digital age. His dedication to technology and innovation has fueled the growth of e-learning, making education more accessible and interactive for learners worldwide. Through a combination of cutting-edge design, user-centric features, and robust technology, e-learning is bridging the gap between traditional education and modern digital learning."
                }
              </p>

              <p className="text-[16px] leading-[22px] font-BearFont-regular text-#101828 mt-4">
                {
                  "The platform focuses on providing high-quality, engaging, and accessible educational experiences. Whether you're looking to expand your skills or gain new certifications, e-learning offers a range of courses tailored to meet diverse learning needs. With a commitment to delivering up-to-date, relevant content, the platform empowers individuals to achieve their academic and career goals."
                }
              </p>

              <p className="text-[16px] leading-[22px] font-BearFont-regular text-#101828 mt-4">
                {
                  "Awais envisions e-learning not just as a business, but as a global movement to democratize education. His passion for technology, combined with a deep understanding of the needs of modern learners, has positioned e-learning as a leader in the education space. With a focus on continuous innovation, Awais remains dedicated to creating educational solutions that empower individuals and help them unlock their potential."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCEO;
