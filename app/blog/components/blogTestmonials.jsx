"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Use updated import path
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

const BlogTestimonials = () => {
  const [loading, setLoading] = useState(false);
  const [copiedSlug, setCopiedSlug] = useState(null);
  const router = useRouter();
  const baseUrl = "http://localhost:3000/blog";
  const swiperRef = useRef(null);

  const blogPosts = {
    "For you": [
      {
        id: 1,
        title: "The Tale of Amazon DevOps Guru",
        author: "Awais Ilyas",
        date: "January 21 2024",
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
        date: "Feb 01 2024",
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
        date: "april 22 2024",
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
        date: "May 10 2024",
        category: "Cloud Computing",
        readTime: "5 min read",
        description:
          "Explore the best cloud tools used in DevOps and how they enhance efficiency and scalability.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
      {
        id: 5,
        title: "The Power of Cloud Tools in Modern DevOps",
        author: "Awais Ilyas",
        date: "Jun 15 2024",
        category: "Cloud Computing",
        readTime: "5 min read",
        description:
          "Explore the best cloud tools used in DevOps and how they enhance efficiency and scalability.",
        authorImg: "/assets/banner/ceo.jpg",
        blogImg:
          "https://cdn-bearplex.s3.us-west-2.amazonaws.com/Amazon_Dev_Ops_2_7abca61ca0.jpg",
      },
    ],
  };

  const handleNavigation = (id) => {
    router.push(`/blog/${id}`);
  };

  const handleCopyLink = async (id) => {
    const link = `${baseUrl}/${id}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopiedSlug(id);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const handleShareLink = async (id) => {
    const link = `${baseUrl}/${id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this blog post!",
          url: link,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${link}`,
        "_blank"
      );
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <hr className="bg-gray-blue mt-10" />
      <div>
        <h2 className="mt-10 font-BearFont-semibold w-full tracking-tighter text-2xl md:text-6xl text-black">
          Recommended
        </h2>
      </div>
      <div className="my-8">
        {loading ? (
          <div className="animate-pulse space-y-8">
            <div className="flex space-x-4 p-4 mr-8">
              <div className="h-32 w-32 bg-gray-300 rounded" />
              <div className="flex-1 space-y-8 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded" />
                <div className="h-4 bg-gray-300 rounded w-5/6" />
              </div>
            </div>
          </div>
        ) : (
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            initialSlide={0}
            pagination={{
              clickable: true,
              type: "bullets",
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Navigation, Pagination]} // Register modules here
            className="swiper"
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
            }}
          >
            {Object.values(blogPosts).map((categoryPosts) =>
              categoryPosts.map((latest) => (
                <SwiperSlide
                  key={latest.id}
                  className="hover:bg-gray-blue mr-4 rounded-2xl"
                  onClick={() => handleNavigation(latest.id)}
                >
                  <div className="group block py-4 px-4">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={latest.authorImg}
                          className="inline-block h-9 w-9 rounded-full"
                          alt="Author Image"
                          width={36}
                          height={36}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {latest.author && (
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                            {latest.author}
                          </p>
                        </div>
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {latest.date}
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer relative group md:flex md:flex-row-reverse md:items-center gap-4">
                      <div className="md:w-[20%] w-full">
                        <div className="hidden md:block md:h-[130px] relative h-[130px] bg-slate-200 w-full rounded-md">
                          <Image
                            alt="Blog Image"
                            className="h-full w-full rounded-md"
                            src={latest.blogImg}
                            width={130}
                            height={130}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="md:w-[80%] w-full">
                        <div className="mt-8 md:mt-0">
                          <div>
                            <div className="flex justify-between w-full">
                              <div>
                                <h3 className="text-black line-clamp-2 text-xl md:text-2xl font-BearFont-medium tracking-tight mt-4">
                                  {latest.title}
                                </h3>
                                <p className="mt-4 text-base line-clamp-3 pr-0 md:pr-10 font-BearFont-regular text-[#101828]">
                                  {latest.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center group py-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-gray-500/10">
                          {latest.category}
                        </span>
                        <span className="text-xs text-[#667085]">
                          {latest.readTime} min read
                        </span>
                      </div>
                      <div className="text-xs text-[#667085]">
                        <div className="flex gap-1 items-center">
                          <div
                            className="hidden sm:flex gap-1 items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyLink(latest.id);
                            }}
                          >
                            <div className="text-xs cursor-pointer">
                              {copiedSlug === latest.id
                                ? "Copied"
                                : "Copy link"}
                            </div>
                          </div>
                          &nbsp; &nbsp;
                          <div
                            className="flex gap-1 items-center"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShareLink(latest.id);
                            }}
                          >
                            <div className="text-xs cursor-pointer">Share</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            )}
            <div className="pt-8">
              <hr className="bg-gray-100" />
            </div>
          </Swiper>
        )}
      </div>

      {/* Custom navigation buttons */}
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center pb-10">
          <div className="flex w-full justify-end">
            <div className="flex gap-4">
              <div className="swiper-button-prev-custom cursor-pointer">
                <button className="rounded-[50%] border-2 border-[#6E6E73] p-3 text-[#101828] hover:border-[#1D1D1F] hover:text-[#1D1D1F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </button>
              </div>
              <div className="swiper-button-next-custom cursor-pointer">
                <button className="rounded-[50%] border-2 border-[#6E6E73] p-3 text-[#101828] hover:border-[#1D1D1F] hover:text-[#1D1D1F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTestimonials;
