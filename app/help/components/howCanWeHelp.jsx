"use client";

import Image from "next/image";
import React, { useState } from "react";

import card2 from "../../../public/assets/help/help1.webp";
import card3 from "../../../public/assets/help/help4.jpg";
import card1 from "../../../public/assets/help/help3.jpg";

const HowCanWeHelp = () => {
  const [giveaways, setGiveaways] = useState([
    {
      id: 1,
      image: card1,
      title: "Members Support",
      description: (
        <div>
          <ul className="list-disc ml-4 mt-2">
            <li>{"Discount Membership Queries"}</li>
            <li>
              {
                "Learn how to sign up, redeem discounts, or update your membership details."
              }
            </li>
            <li>{"Troubleshooting Discounts"}</li>
            <li>{"Having issues redeeming discounts? Let us assist you."}</li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      image: card2,
      title: "Business Partner Support",
      description: (
        <div>
          <ul className="list-disc ml-4 mt-2">
            <li>{"Partner Onboarding Assistance"}</li>
            <li>
              {"Guidance for businesses looking to join the YAAY365 platform."}
            </li>
            <li>{"Promotion Management"}</li>
            <li>{"Help with listing or updating your business offerings."}</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      image: card3,
      title: "General Inquiries",
      description: (
        <div>
          {"For all other questions, feedback, or suggestions, reach out to our friendly support team."}
        </div>
      ),
    },
  ]);

  return (
    <div className="bg-white rounded-[10px] mx-2 mb-2">
      <div className="pb-0 relative bg-left-top mx-auto max-w-7xl px-8">
        <div className="flex flex-col md:flex-row py-20 sm:py-16">
          <div className="w-full flex flex-col justify-center items-center text-center">
            <h3 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center  lh-120 pt-5 lg:pt-0 pb-6">
              How Can We Assist You?
            </h3>
            <p className="text-charcoal text-lg font-normal text-center opacity-75 pt-5 lg:pt-0 pb-10 max-w-3xl">
  We are here to provide support and assist you with any questions, concerns, or requests you may have. Please let us know how we can help you today.
</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
              {giveaways.map((giveaway) => (
                <div className="flex cursor-pointer group" key={giveaway.id}>
                  <div className="w-full h-full overflow-hidden rounded-[12px] ring-1 ring-[#828282] transition ease-in">
                    <div className="relative flex flex-col h-full">
                      <div className="transition ease-in flex flex-col justify-between h-full">
                        <Image
                          src={giveaway.image}
                          alt={giveaway.title}
                          className="bg-white w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                          draggable="false"
                        />
                        <div className="bg-white relative border-[#828282] flex-grow">
                          <div className="p-5 bg-white flex flex-col h-full justify-between">
                            <div className="col-span-1 flex items-center flex-col">
                              <div className="text-2xl font-bold flex self-start my-2">
                                {giveaway.title}
                              </div>
                              <div className="flex self-start text-start text-[#475467]">
                                {giveaway.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowCanWeHelp;
