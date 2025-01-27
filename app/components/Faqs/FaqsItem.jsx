"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import {
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const FaqsItem = ({ openIndex, index, toggle, faq }) => {
  const isOpen = openIndex === index;

  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const animationStyle = useSpring({
    height,
    opacity: isOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  return (
    <div key={faq.question} className="py-2">
      <dt>
        <button
          onClick={() => toggle(index)}
          className="group flex w-full items-start justify-between text-left text-[#203241] py-4 focus:outline-none"
        >
          <span className="text-[22pxs] font-bold">{faq.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <PlusSmallIcon
              aria-hidden="true"
              className={`h-6 w-6  ${isOpen ? "hidden" : "block"}`}
            />
            <XMarkIcon
              aria-hidden="true"
              className={`h-6 w-6 text-Blueviolet ${
                isOpen ? "block" : "hidden"
              }`}
            />
          </span>
        </button>
      </dt>
      <animated.dd style={{ ...animationStyle, overflow: "hidden" }}>
        <p ref={contentRef} className="text-[16px] leading-7 text-[#203241] py-2">
          {faq.answer}
        </p>
      </animated.dd>
    </div>
  );
};

export default FaqsItem;
