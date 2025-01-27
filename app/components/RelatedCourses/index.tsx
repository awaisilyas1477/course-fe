"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";



const postData = [
  {
    id: 1,
    heading: "React Basics",
    heading2: "Hooks and Components",
    name: "John Doe",
    imgSrc: "/assets/courses/courseone.png",
    students: 200,
    classes: 10,
    price: 25,
    rating: 4.9,
  },
  {
    id: 2,

    heading: "UI Design",
    heading2: "Figma Essentials",
    name: "Jane Smith",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 180,
    classes: 8,
    price: 22,
    rating: 4.8,
  },
  {
    id: 3,

    heading: "Node.js Basics",
    heading2: "API Development",
    name: "Michael Johnson",
    imgSrc: "/assets/courses/coursethree.png",
    students: 160,
    classes: 9,
    price: 30,
    rating: 4.7,
  },
  {
    id: 4,

    heading: "Vue.js Quick Start",
    heading2: "Frontend Development",
    name: "Sarah Lee",
    imgSrc: "/assets/courses/courseone.png",
    students: 140,
    classes: 7,
    price: 18,
    rating: 4.6,
  },
  {
    id: 5,

    heading: "Python Basics",
    heading2: "Intro to Data Science",
    name: "Chris Brown",
    imgSrc: "/assets/courses/coursetwo.png",
    students: 200,
    classes: 10,
    price: 28,
    rating: 4.9,
  },
  {
    id: 6,

    heading: "Digital Marketing",
    heading2: "Boost Your Business",
    name: "Laura Davis",
    imgSrc: "/assets/courses/coursethree.png",
    students: 220,
    classes: 12,
    price: 24,
    rating: 4.8,
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3, // Show 3 slides at a time
      slidesToScroll: 1, // Scroll one slide at a time
      arrows: false,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Time delay for autoplay (3 seconds)
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div id="courses">
        <div className="mx-auto max-w-7xl  pt-24">
          <div className="sm:flex justify-between items-center">
            <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold sm:mb-0">
              Related courses.
            </h3>
            {/* <Link
              href={"/"}
              className="text-Blueviolet text-lg font-medium space-links"
            >
              Discover programs.&nbsp;&gt;&nbsp;
            </Link> */}
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <Link href={`/course/${items.id}`}>
                  <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 border-2 border-[#1A21BCFF] rounded-2xl shadow-lg">
                    <div className="relative rounded-3xl">
                      <Image
                        src={items.imgSrc}
                        alt="gaby"
                        width={389}
                        height={262}
                        className="m-auto clipPath"
                      />
                      <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                        <h3 className="text-white uppercase text-center text-sm font-medium">
                          best <br /> seller
                        </h3>
                      </div>
                    </div>

                    <div className="px-3">
                      <h4 className="text-2xl font-bold pt-6 text-black">
                        {items.heading}
                      </h4>
                      <h4 className="text-2xl font-bold pt-1 text-black">
                        {items.heading2}
                      </h4>

                      <div>
                        <h3 className="text-base font-normal pt-6 opacity-75">
                          {items.name}
                        </h3>
                      </div>

                      <div className="flex justify-between items-center py-6">
                        <div className="flex gap-4">
                          <h3 className="text-red text-22xl font-medium">
                            {items.rating}
                          </h3>
                          <div className="flex">
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                            <StarIcon className="h-5 w-5 text-gold" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-3xl font-medium">
                            ${items.price}
                          </h3>
                        </div>
                      </div>

                      <hr style={{ color: "#C4C4C4" }} />

                      <div className="flex justify-between pt-6">
                        <div className="flex gap-4">
                          <Image
                            src={"/assets/courses/book-open.svg"}
                            alt="users"
                            width={24}
                            height={24}
                            className="inline-block m-auto"
                          />
                          <h3 className="text-base font-medium text-black opacity-75">
                            {items.classes} classes
                          </h3>
                        </div>
                        <div className="flex gap-4">
                          <Image
                            src={"/assets/courses/users.svg"}
                            alt="users"
                            width={24}
                            height={24}
                            className="inline-block m-auto"
                          />
                          <h3 className="text-base font-medium text-black opacity-75">
                            {items.students} students
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
