import Image from "next/image";

const AboutBanner = () => {
  return (
    <div id="home-section" className="bg-lightkblue m-3 rounded-xl">
      <div className="mx-auto max-w-7xl py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
     
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
            Innovating the Future of E-Learning
            </h1>
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
            A forward-thinking approach to revolutionizing education through cutting-edge web-based solutions, SaaS, mobile apps, CRMs, and Generative AI. Focused on creating innovative e-learning platforms, we aim to empower learners and educators by leveraging the latest technological advancements, ensuring they stay ahead in a rapidly evolving digital landscape.
            </h3>

            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Adaptable
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Guidance
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Network
                </p>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex justify-center col-span-6">
            <Image
              src="/assets/banner/mahila.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
