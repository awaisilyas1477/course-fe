"use client";
import React, { useState } from "react";
import FaqsItem from "./FaqsItem";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of engineering courses tailored to enhance your expertise, guided by industry-leading professionals.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "Simply search for courses using our platform, choose your desired program, and follow the enrollment steps to begin.",
  },
  {
    question: "What benefits will I get from these courses?",
    answer:
      "You’ll gain adaptable skills, personalized guidance from experts, and access to a strong professional network.",
  },
  {
    question: "Who are your instructors?",
    answer:
      "Our instructors are industry-leading professionals with years of experience in their respective fields.",
  },
  {
    question: "Can organizations trust your platform?",
    answer:
      "Yes! We are trusted by organizations of all scales and have top-rated courses highly recommended by professionals.",
  },
];


export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-24">
        <div>
          <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-center font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-base font-normal pt-6 opacity-75">
          Answering some common questions about learning with us

          </p>
        </div>
        <dl className="mt-10 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <FaqsItem
              openIndex={openIndex}
              index={index}
              toggle={toggle}
              faq={faq}
              key={index}
            />
          ))}
        </dl>
      </div>
    </div>
  );
}
