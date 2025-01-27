import React, { useState, useMemo, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import CustomInput from "../../../components/CustomInput/CustomInput";

const ReferralQrCode = () => {
  const [referralClickCount, setReferralClickCount] = useState(null);

  const referralCode = `11111` || `11111111111`;

  // Fixing window is not defined error during SSR
  const referralUrl = useMemo(() => {
    if (typeof window === "undefined" || !referralCode) return "";
    return `${window.location.origin}/?refid=${referralCode}`;
  }, [referralCode]);

  useEffect(() => {
    const fetchReferralCounter = async () => {
      try {
        const response = await api.getReferrelCounter(referralCode);
        setReferralClickCount(response.referralClickCount);
      } catch (error) {
        console.error("Error fetching referral counter:", error);
      }
    };

    if (referralCode) {
      fetchReferralCounter();
    }
  }, [referralCode]);

  const qrCodeValue = useMemo(() => {
    if (!referralUrl) return null;

    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="open-book">
      <path d="M21.17,2.06A13.1,13.1,0,0,0,19,1.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2,13.1,13.1,0,0,0-2.17.19,1,1,0,0,0-.83,1v12a1,1,0,0,0,1.17,1,10.9,10.9,0,0,1,8.25,1.91l.12.07.11,0a.91.91,0,0,0,.7,0l.11,0,.12-.07A10.9,10.9,0,0,1,20.83,16a1,1,0,0,0,1.17-1v-12A1,1,0,0,0,21.17,2.06ZM11,15.35a12.87,12.87,0,0,0-6-1.48c-.33,0-.66,0-1,0v-10a8.69,8.69,0,0,1,1,0,10.86,10.86,0,0,1,6,1.8Zm9-1.44c-.34,0-.67,0-1,0a12.87,12.87,0,0,0-6,1.48V5.67a10.86,10.86,0,0,1,6-1.8,8.69,8.69,0,0,1,1,0Zm1.17,4.15A13.1,13.1,0,0,0,19,17.87a12.94,12.94,0,0,0-7,2.05,12.94,12.94,0,0,0-7-2.05,13.1,13.1,0,0,0-2.17.19A1,1,0,0,0,2,19.21,1,1,0,0,0,3.17,20a10.9,10.9,0,0,1,8.25,1.91,1,1,0,0,0,1.16,0A10.9,10.9,0,0,1,20.83,20,1,1,0,0,0,22,19.21,1,1,0,0,0,21.17,18.06Z"></path>
    </svg>`;

    const encodedSvg = encodeURIComponent(svgString?.trim())
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");
    const svgDataUrl = `data:image/svg+xml;charset=UTF-8,${encodedSvg}`;

    return (
      <QRCodeSVG
        value={referralUrl}
        size={200}
        bgColor="#ffffff"
        fgColor="#000000"
        level="Q"
        imageSettings={{
          src: svgDataUrl,
          height: 30,
          width: 30,
          excavate: true,
        }}
      />
    );
  }, [referralUrl]);

  const [copyButtonText, setCopyButtonText] = useState("Copy Link");

  const copyToClipboard = () => {
    if (referralUrl) {
      navigator.clipboard
        .writeText(referralUrl)
        .then(() => {
          setCopyButtonText("Copied!");
          setTimeout(() => {
            setCopyButtonText("Copy Link");
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Join with my referral code!",
          text: "Sign up using my referral link!",
          url: referralUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert(
        "Sharing is not supported in your browser. Please copy the link manually."
      );
    }
  };

  return (
    <div className="w-full mt-6 md:mt-12 px-4 md:px-0">
      <form className="flex flex-col gap-4 mb-0">
        {/* Connections Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <label className="w-full md:w-[40%] text-[#73808B] text-sm font-bold">
            Connections
          </label>
          <div className="w-full md:w-[60%] flex justify-start gap-4 items-center bg-Blueviolet py-3 text-white rounded-full">
            <p className="px-4 flex items-center gap-2">
              <span className="flex w-fit items-center justify-center rounded-full bg-white hover:bg-slate-100 text-sm font-semibold text-[#203241] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D23D3C] py-2 px-[11px]">
                10
              </span>
              Invited friends
            </p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <label className="w-full md:w-[40%] text-[#73808B] text-sm font-bold">
            Referral QR Code
          </label>
          <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-start gap-4 items-start md:items-center">
            {qrCodeValue ? (
              qrCodeValue
            ) : (
              <p>No referral code available for QR generation.</p>
            )}
            <p className="text-sm text-start">
              Help expand our community! Share this QR code, and enjoy a
              discount when your friends become members.
            </p>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <label className="w-full md:w-[40%] text-[#73808B] text-sm font-bold">
            Referral Link
          </label>
          <div className="w-full md:w-[60%] flex flex-col justify-start">
            <CustomInput
              id="referral-link"
              type="text"
              placeHolder="Referral Link"
              handleChange={() => {}}
              value={referralUrl}
              readOnly={true}
              isDisabled={false}
              cssClass="opacity-100"
              name="referralLink"
            />
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex flex-row justify-end items-center mt-2 gap-4">
          <button
            type="button"
            onClick={copyToClipboard}
            className="text-sm font-bold text-Blueviolet hover:underline"
          >
            {copyButtonText}
          </button>
          <button
            type="button"
            onClick={shareLink}
            className="text-sm font-bold text-Blueviolet hover:underline"
          >
            Share Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralQrCode;
