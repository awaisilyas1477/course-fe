"use client";
import React, { useState, useEffect, useRef } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Static CAROUSEL DATA
const postData = [
  {
    name: "Robert Fox",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/testimonial/user.svg',
  },
  {
    name: "Leslie Alexander",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/mentor/user2.png',
  },
  {
    name: "Cody Fisher",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/mentor/user3.png',
  },
  {
    name: "Robert Fox",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/testimonial/user.svg',
  },
  {
    name: "Leslie Alexander",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/mentor/user2.png',
  },
  {
    name: "Cody Fisher",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/mentor/user3.png',
  },
  {
    name: "Robert Fox",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/testimonial/user.svg',
  },
  {
    name: "Leslie Alexander",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/mentor/user2.png',
  },
  {
    name: "Cody Fisher",
    profession: 'CEO, Parkview Int.Ltd',
    comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/assets/mentor/user3.png',
  },
];

export default function TestimonialCarousel() {
  const [data, setData] = useState(postData);
  const testimonialsListRef = useRef(null);
  let scrollAmount = 0;

  useEffect(() => {
    function scrollTestimonials() {
      if (testimonialsListRef.current) {
        testimonialsListRef.current.style.transform = "translateY(-" + scrollAmount + "px)";

        if (scrollAmount >= testimonialsListRef.current.offsetHeight / 2) {
          scrollAmount = 0;
        } else {
          scrollAmount += 0.5;
        }

        requestAnimationFrame(scrollTestimonials);
      }
    }

    scrollTestimonials();
    return () => {
      cancelAnimationFrame(scrollTestimonials);
    };
  }, [data]);

  return (
    <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="overflow-hidden h-[500px]"> 
          <ul
            ref={testimonialsListRef}
            role="list"
            className="md:mx-8 mx-0 mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            {data.map((item, i) => (
              <li key={i}>
                <div
                  className={`bg-white p-5 my-10 relative testimonial-shadow`}
                >
                  <div className="absolute top-[-45px]">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="inline-block"
                    />
                  </div>
                  <h4 className="text-base font-normal text-darkgray my-4">{item.comment}</h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">{item.name}</h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">{item.profession}</h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-lightgray" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
