import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classNames from "classnames";

const CustomPhoneInput = ({
  phone,
  setPhone,
  label,
  labelcss,
  IconCss,
  ErrorMessage,
  cssClass,
  isDisabled,
  icon,
  handleClickIcon,
  autoFocus,
}) => {
  const handlePhoneChange = (value) => {
    setPhone(value || "");
  };

  return (
    <div className="flex flex-row justify-between w-full items-center custom-phone-input">
      {label && (
        <label
          className={`w-full md:w-auto block font-medium leading-6 text-[#DCDCDC] text-sm ${labelcss}`}
          htmlFor="phone"
        >
          {`${label} `}
        </label>
      )}
      <div className="w-full relative">
        <PhoneInput
          country={"ke"}
          onlyCountries={["ke"]}
          value={phone}
          onChange={handlePhoneChange}
          inputProps={{
            name: "phone",
            autoFocus: autoFocus,
            disabled: isDisabled,
          }}
          inputClass={classNames("form-control", cssClass, {
            "border-red-600": ErrorMessage,
          })}
        />
        {icon && (
          <span
            {...(handleClickIcon && {
              onClick: handleClickIcon,
            })}
            className={`${
              handleClickIcon ? "cursor-pointer" : ""
            } absolute text-white top-[14px] right-[10px] ${IconCss}`}
          >
            {icon}
          </span>
        )}
        {ErrorMessage && ErrorMessage.length > 0 && (
          <span className="errorMessage">{ErrorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default CustomPhoneInput;
