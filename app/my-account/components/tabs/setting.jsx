"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import CustomInput from "../../../components/CustomInput/CustomInput";
import "react-phone-input-2/lib/style.css";
import CustomPhoneInput from "../../../components/NumberInput/CustomPhoneInput";

export default function SettingTab() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const today = moment().format("YYYY-MM-DD");
  const minDateOfBirth = moment().subtract(12, "years").format("YYYY-MM-DD");

  return (
    <>
      <div>
        <form className="w-full mt-6 md:mt-12">
          <div className="flex flex-col gap-2 mb-0">
            <div className="flex flex-row justify-between w-full items-center">
              <label
                className="w-full md:w-auto block text-[#73808B] text-sm font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <div className="sm:w-[65%] md:w-[50%] w-full">
                <CustomInput
                  id="email"
                  type="email"
                  placeHolder="Enter your email"
                  handleChange={() => {}}
                  name="email"
                  cssClass="opacity-100"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-full items-center mt-3">
              <label
                className="w-full md:w-auto block text-[#73808B] text-sm font-bold"
                htmlFor="name"
              >
                Name
              </label>
              <div className="sm:w-[65%] md:w-[50%] w-full">
                <CustomInput
                  id="name"
                  type="text"
                  placeHolder="Enter your name"
                  handleChange={setName}
                  value={name}
                  ErrorMessage={errors.name ? "This field is required!" : null}
                  name="name"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-full items-center mt-3">
              <label
                className="w-full md:w-auto block text-[#73808B] text-sm font-bold"
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="sm:w-[65%] md:w-[50%] w-full">
                <CustomPhoneInput
                  phone={phone}
                  setPhone={setPhone}
                  labelcss="some-custom-class"
                  IconCss="icon-class"
                  PlaceholderCss="placeholder-custom-class"
                  cssClass="additional-css-class"
                  isDisabled={false}
                  ErrorMessage=""
                  autoFocus={true}
                />
              </div>
            </div>

            <div className="flex flex-row justify-between w-full items-center mt-3">
              <label
                className="w-full md:w-auto block text-[#73808B] text-sm font-bold"
                htmlFor="dateOfBirth"
              >
                Date of birth
              </label>
              <div className="sm:w-[65%] md:w-[50%] w-full">
                <CustomInput
                  id="dateOfBirth"
                  type="date"
                  placeHolder="Enter your date of birth"
                  handleChange={setDateOfBirth}
                  value={dateOfBirth}
                  name="dateOfBirth"
                  min={minDateOfBirth}
                  max={today}
                />
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-start w-fit rounded-[8px]">
            <button
              type="submit"
              className="text-Blueviolet text-lg font-medium py-3 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet capitalize"
            >
              Update changes
            </button>
          </div>
        </form>

        <hr className="mt-16" />
        <div className="mt-12">
          <h3 className="mt-2 lg:text-3xl md:text-2xl text-4xl font-bold text-[#203241] tracking-tighter-self-new">
            Delete Account
          </h3>
        </div>
        <div className="w-full mt-2">
          <div className="flex flex-row justify-between w-full md:items-start items-center mb-2">
            <p className="max-w-3xl">
              Permanently delete this account. This action is irreversible. This
              will cancel all their associated payment accounts and remove your
              membership.
            </p>

            <div className="mt-4 flex justify-start w-fit rounded-[8px]">
              <button
                type="submit"
                className="text-Blueviolet text-lg font-medium py-3 px-6 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet capitalize"
              >
               Delete Account
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-16" />
      </div>
    </>
  );
}
