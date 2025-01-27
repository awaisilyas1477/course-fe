"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Newsletter from "../components/Newsletter/Newsletter";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("For you");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const tabs = [
    { id: 1, label: "For you" },
    { id: 2, label: "Tools & Technologies" },
    { id: 3, label: "Generative AI" },
    { id: 4, label: "Research" },
  ];

  const blogPosts = {
    "For you": [
      {
        id: 1,
        title: "The Tale of Amazon DevOps Guru",
        author: "Awais Ilyas",
        date: "March 21 2024",
        category: "Artificial Intelligence",
        readTime: "4 min read",
        description:
          "Explore the tale of Amazon DevOps Guru, the cloud’s vigilant sentinel, and how BearPlex masterfully integrates its wisdom to ensure operational harmony and proactive foresight.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
      {
        id: 2,
        title: "The Power of Cloud Tools in Modern DevOps",
        author: "Awais Ilyas",
        date: "March 22 2024",
        category: "Cloud Computing",
        readTime: "5 min read",
        description:
          "Explore the best cloud tools used in DevOps and how they enhance efficiency and scalability.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },


      {
        id: 3,
        title: "The Power of Cloud Tools in Modern DevOps",
        author: "Awais Ilyas",
        date: "March 22 2024",
        category: "Cloud Computing",
        readTime: "5 min read",
        description:
          "Explore the best cloud tools used in DevOps and how they enhance efficiency and scalability.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
      {
        id: 4,
        title: "The Power of Cloud Tools in Modern DevOps",
        author: "Awais Ilyas",
        date: "March 22 2024",
        category: "Cloud Computing",
        readTime: "5 min read",
        description:
          "Explore the best cloud tools used in DevOps and how they enhance efficiency and scalability.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
      // Add more blog posts as needed
    ],
    "Tools & Technologies": [
      {
        id: 5,
        title: "Exploring the Latest in Cloud Computing Tools",
        author: "Awais Ilyas",
        date: "March 24 2024",
        category: "Cloud Computing",
        readTime: "5 min read",
        description:
          "A deep dive into the best tools available in cloud computing and their role in DevOps environments.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
    ],
    "Generative AI": [
      {
        id: 6,
        title: "How Generative AI is Transforming Industries",
        author: "Awais Ilyas",
        date: "March 25 2024",
        category: "Artificial Intelligence",
        readTime: "4 min read",
        description:
          "Generative AI is revolutionizing industries. This article covers its applications and future prospects.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
    ],
    Research: [
      {
        id: 7,
        title: "New Trends in DevOps Research",
        author: "Awais Ilyas",
        date: "March 26 2024",
        category: "DevOps",
        readTime: "6 min read",
        description:
          "Recent research in DevOps has shown new trends that are shaping the future of software development.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
    ],
  };

  const topPicks = [
    {
      id: 1,
      author: "Awais Ilyas",
      title: "Amazon Forecast: Unveiling the Future of Business with AI",
      authorImg: "/assets/banner/ceo.jpg",
    },
  ];

  // Copy link function
  const copyLink = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  // Share function (for mobile browsers)
  const shareLink = (url) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this blog",
          url: url,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  return (

    <div>

    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Header Section */}
        <div className="py-20">
          <div className="flex justify-start">
            <div className="max-w-3xl">
              <div className="flex justify-start md:justify-end ">
                <div className="-rotate-[11.48deg] w-fit text-lg font-medium ml-9 py-3 px-6 transition duration-150 ease-in-out rounded-full  text-white bg-Blueviolet">
                  Blogs/Latest News
                </div>
              </div>
              <div className="text-2xl md:text-6xl -mt-1 md:-mt-2 font-BearFont-medium tracking-tighter text-black">
                Where good ideas find you.
              </div>
              <p className="text-base font-BearFont-regular text-textColor mt-2">
                Where knowledge meets innovation. Our blog brings you the latest
                insights, trends, and research to help you stay ahead in the
                ever-evolving world of e-learning.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="hide-scrollbar overflow-x-auto">
          <div className="flex space-x-4 border-b border-b-gray-blue">
            {tabs.map((tab) => (
              <>
                <span
                  key={tab.id}
                  onClick={() => setActiveTab(tab.label)}
                  className={`cursor-pointer px-3 pt-6 text-slate-700 font-medium transition-colors duration-300 whitespace-nowrap border-b-2 ${
                    activeTab === tab.label
                      ? "border-black text-black"
                      : "border-transparent"
                  }`}
                >
                  {tab.label}
                </span>
              </>
            ))}
           <div className="sm:hidden lg:block w-full hidden">
  <div className="flex items-center justify-end w-full mb-2">
    <div className="relative w-1/2">
      <input
        id="Search"
        className="block w-full font-BearFont-regular rounded-full border-0 py-3 pr-10 pl-4 text-gray-900 ring-1 ring-inset ring-[#F2F4F7] placeholder:text-[#98A2B3] focus:ring-2 focus:ring-inset focus:none sm:text-sm sm:leading-6 focus:outline-none"
        placeholder="search here.."
        type="search"
        value=""
        name="Search"
      />
      <div className="absolute inset-y-0 top-0 right-0 flex items-center pr-3">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35m1.537-5.194a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Blog Section */}
        <div className="w-full flex mb-12">
          {/* Left Section */}
          <div className="flex-1 md:border-r border-r-gray-blue">
            {activeTab === "For you"
              ? blogPosts["For you"].map((post) => (
                  <div
                    key={post.id}
                    className="my-8 hover:bg-gray-blue mr-4 rounded-2xl"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="group block py-4 px-4 cursor-pointer">
                        <div className="hidden md:flex items-center">
                          <Image
                            alt="Author"
                            className="inline-block h-9 w-9 rounded-full"
                            src={post.authorImg}
                            width={36}
                            height={36}
                          />
                          <p className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {post.author}
                          </p>
                          <p className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {post.date}
                          </p>
                        </div>
                        <div className="cursor-pointer relative group flex flex-col md:flex-row-reverse md:items-center gap-4">
                          <div className="w-full md:w-[20%] md:shrink-0">
                            <div className="md:block md:h-[150px] relative h-[150px] bg-slate-200 w-full rounded-md">
                              <Image
                                alt="Blog"
                                className="h-full w-full rounded-md"
                                src={post.blogImg}
                                width={1000}
                                height={1000}
                              />
                            </div>
                          </div>
                          <div className="md:w-[80%] w-full">
                            <h3 className="mt-2 text-black text-xl md:text-2xl font-BearFont-medium tracking-tight">
                              {post.title}
                            </h3>
                            <p className="mt-4 text-base font-BearFont-regular text-[#101828]">
                              {post.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="flex justify-between items-center group pb-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-blue">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#667085] hidden md:block">
                          {post.readTime}
                        </span>
                        <span className="text-xs text-[#667085] block md:hidden lg:hidden sm:block">
                          {post.date}
                        </span>
                      </div>
                      <div className="text-xs text-[#667085] ">
                        <div className="flex gap-1 items-center ">
                          <div className="flex gap-1 items-center hidden sm:flex">
                            <div
                              className="text-xs cursor-pointer "
                              onClick={() => copyLink(window.location.href)}
                            >
                              Copy link
                            </div>
                            <div>
                              <svg
                                className="cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <g clip-path="url(#clip0_3305_10151)">
                                  <path
                                    d="M7.5 9.74045C7.82209 10.171 8.23302 10.5273 8.70491 10.7852C9.17681 11.043 9.69863 11.1963 10.235 11.2347C10.7713 11.2731 11.3097 11.1957 11.8135 11.0078C12.3173 10.8198 12.7748 10.5258 13.155 10.1455L15.405 7.89545C16.0881 7.18819 16.4661 6.24094 16.4575 5.2577C16.449 4.27446 16.0546 3.33391 15.3593 2.63863C14.664 1.94335 13.7235 1.54897 12.7403 1.54042C11.757 1.53188 10.8098 1.90986 10.1025 2.59295L8.8125 3.87545"
                                    stroke="#98A2B3"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                  <path
                                    d="M10.5006 8.2404C10.1785 7.80981 9.76762 7.45352 9.29573 7.1957C8.82383 6.93788 8.30201 6.78457 7.76565 6.74615C7.22929 6.70774 6.69095 6.78513 6.18713 6.97307C5.68331 7.16101 5.2258 7.4551 4.84564 7.8354L2.59564 10.0854C1.91255 10.7927 1.53457 11.7399 1.54311 12.7232C1.55165 13.7064 1.94604 14.6469 2.64132 15.3422C3.3366 16.0375 4.27715 16.4319 5.26038 16.4404C6.24362 16.449 7.19088 16.071 7.89814 15.3879L9.18064 14.1054"
                                    stroke="#98A2B3"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3305_10151">
                                    <rect
                                      width="18"
                                      height="18"
                                      fill="white"
                                      transform="translate(0 -0.00952148)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          &nbsp; &nbsp;
                          <div
                            className="text-xs cursor-pointer"
                            onClick={() => shareLink(window.location.href)}
                          >
                            Share
                          </div>
                          <div>
                            <svg
                              className="cursor-pointer"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_3305_10170)">
                                <path
                                  d="M12 5.32373C13.1046 5.32373 14 4.4283 14 3.32373C14 2.21916 13.1046 1.32373 12 1.32373C10.8954 1.32373 10 2.21916 10 3.32373C10 4.4283 10.8954 5.32373 12 5.32373Z"
                                  stroke="#98A2B3"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M4 9.99048C5.10457 9.99048 6 9.095                                      6 7.99048C6 6.88591 5.10457 5.99048 4 5.99048C2.89543 5.99048 2 6.88591 2 7.99048C2 9.09505 2.89543 9.99048 4 9.99048Z"
                                  stroke="#98A2B3"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M12 14.6572C13.1046 14.6572 14 13.7618 14 12.6572C14 11.5527 13.1046 10.6572 12 10.6572C10.8954 10.6572 10 11.5527 10 12.6572C10 13.7618 10.8954 14.6572 12 14.6572Z"
                                  stroke="#98A2B3"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M5.72656 8.99707L10.2799 11.6504"
                                  stroke="#98A2B3"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M10.2732 4.33057L5.72656 6.9839"
                                  stroke="#98A2B3"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_3305_10170">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 -0.00952148)"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : blogPosts[activeTab]?.map((post) => (
                  <div
                    key={post.id}
                    className="my-8 hover:bg-gray-blue mr-4 rounded-2xl"
                  >

<Link href={`/blog/${post.id}`}>
                    <div className="group block py-4 px-4">
                      <div className="hidden md:flex items-center">
                        <Image
                          alt="Author"
                          className="inline-block h-9 w-9 rounded-full"
                          src={post.authorImg}
                          width={36}
                          height={36}
                        />
                        <p className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {post.author}
                        </p>
                        <p className="ml-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {post.date}
                        </p>
                      </div>
                      <div className="cursor-pointer relative group flex flex-col md:flex-row-reverse md:items-center gap-4">
                        <div className="w-full md:w-[20%] md:shrink-0">
                          <div className="md:block md:h-[150px] relative h-[150px] bg-slate-200 w-full rounded-md">
                            <Image
                              alt="Blog"
                              className="h-full w-full rounded-md"
                              src={post.blogImg}
                              width={1000}
                              height={1000}
                            />
                          </div>
                        </div>
                        <div className="md:w-[80%] w-full">
                          <h3 className="mt-2 text-black text-xl md:text-2xl font-BearFont-medium tracking-tight">
                            {post.title}
                          </h3>
                          <p className="mt-4 text-base font-BearFont-regular text-[#101828]">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                    <div className="flex justify-between items-center group pb-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-blue">
                          {post.category}
                        </span>
                        <span className="text-xs text-[#667085] hidden md:block">
                          {post.readTime}
                        </span>
                        <span className="text-xs text-[#667085] block md:hidden lg:hidden sm:block">
                          {post.date}
                        </span>
                      </div>
                      <div className="text-xs text-[#667085] ">
                        <div className="flex gap-1 items-center ">
                          <div
                            className="text-xs cursor-pointer"
                            onClick={() => copyLink(window.location.href)}
                          >
                            Copy link
                          </div>
                          &nbsp; &nbsp;
                          <div
                            className="text-xs cursor-pointer"
                            onClick={() => shareLink(window.location.href)}
                          >
                            Share
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Right Section (Top Picks) */}
          <div className="hidden lg:w-[30%] lg:flex lg:flex-col lg:my-8">
            <h4 className="px-4 pt-4 pb-2 text-black text-xl md:text-2xl font-BearFont-medium">
              Top Picks
            </h4>
            {topPicks.map((pick) => (
              <div
                key={pick.id}
                className="mt-2 mx-2 hover:bg-gray-100 rounded-2xl cursor-pointer"
              >
                <div className="flex items-center px-4 py-2">
                  <img
                    alt="Author"
                    className="h-9 w-9 rounded-full"
                    src={pick.authorImg}
                  />
                  <p className="ml-3 text-sm font-medium text-gray-700">
                    {pick.author}
                  </p>
                </div>
                <h5 className="text-black text-xl md:text-2xl font-BearFont-medium tracking-tight mx-4">
                  {pick.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>




    </div>
    <Newsletter />

    </div>

  );
};

export default Blog;
