"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <motion.div
      id="home-section"
      className="bg-lightkblue m-3 rounded-xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl pt-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          {/* Left Section */}
          <motion.div
            className="col-span-6 flex flex-col justify-evenly"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex gap-2 mx-auto lg:mx-0">
              <Image
                src="/assets/banner/check.svg"
                alt="check-image"
                width={20}
                height={20}
              />
              <h3 className="text-kellygreen text-sm font-semibold text-center lg:text-start">
                Enjoy a 30% discount on your first enrollment!
              </h3>
            </div>
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Enhance your engineering expertise with us.
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Develop your skills with our courses and guidance from
              industry-leading professionals.
            </h3>

            <motion.div
              className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <input
                type="Email address"
                name="q"
                className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black"
                placeholder="search courses..."
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                <button
                  type="submit"
                  className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                >
                  <Image
                    src={"/assets/banner/search.svg"}
                    alt="inputicon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </motion.div>

            <div className="flex items-center justify-between pt-10 lg:pt-4">
              {["Adaptable", "Guidance", "Network"].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                >
                  <Image
                    src="/assets/banner/check-circle.svg"
                    alt="check-image"
                    width={30}
                    height={30}
                    className="smallImage"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="hidden sm:flex justify-center col-span-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/assets/banner/e-learning.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
