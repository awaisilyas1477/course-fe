"use client";
import React, { useState } from "react";
import Image from "next/image";
import SettingTab from "../../my-account/components/tabs/setting";
import ReferralQrCode from "../../my-account/components/tabs/ReferralQrCode";
import earth from "../../../public/assets/banner/earth.svg";
import arrow from "../../../public/assets/banner/rightarrow.svg";

const tabData = [
  {
    id: 4,
    label: "Referral",
    content: <ReferralQrCode />,
  },
  {
    id: 5,
    label: "Settings",
    content: <SettingTab />,
  },
];

const AccountIcon = () => (
  <Image src={earth} alt="earth" width={20} height={20} draggable="false" />
);

const Breadcrumb = ({ activeTabLabel }) => {
  return (
    <div className="flex items-center mb-10 text-[#73808B]">
      <span className="flex items-center">
        <AccountIcon />
        <Image
          src={arrow}
          alt="arrow"
          width={20}
          height={20}
          className="mx-4"
        />
      </span>
      <span className="mr-2">My Account</span>
      <Image
        src={arrow}
        alt="arrow"
        width={20}
        height={20}
        className="mx-2"
      />
      <span className="text-Blueviolet font-semibold">{activeTabLabel}</span>
    </div>
  );
};

const MyAccountDetails = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const renderTabContent = () => {
    const activeTabContent = tabData.find((tab) => tab.id === activeTab);
    return activeTabContent ? activeTabContent.content : null;
  };

  const activeTabLabel = tabData.find((tab) => tab.id === activeTab)?.label;

  return (
    <div className="mx-auto max-w-7xl sm:py-4 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Breadcrumb activeTabLabel={activeTabLabel} />
          <h3 className="mt-2 lg:text-[45px] md:text-3xl text-[45px] font-bold text-[#203241] tracking-tighter-self-new">
            My Account
          </h3>
        </div>
        <div className="mt-8">
          <div className="overflow-x-auto mb-10">
            <div className="flex border-b border-Blueviolet gap-4">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-2 whitespace-nowrap border-b-4 font-semibold text-medium ${
                    activeTab === tab.id
                      ? "border-Blueviolet text-Blueviolet"
                      : "border-transparent text-[#73808B]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountDetails;
