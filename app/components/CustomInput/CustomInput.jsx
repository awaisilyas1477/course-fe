"use client";
import moment from "moment";
import React from "react";
import { classNames } from "../utils/utils";
import { DUMMY_REGEX_EXP, PHONE_NUMBER_REGEX } from "../constants/constants";
const CustomInput = (props) => {
  const {
    IconCss,
    label,
    type,
    placeHolder,
    handleChange,
    ErrorMessage,
    value,
    blurHandler = null,
    name,
    readOnly,
    pattern = null,
    min,
    max,
    borderColorWhite = true,
    PlaceholderCss,
    maxLength,
    minLength,
    isDisabled = false,
    register = null,
    // setValue = null,
    isRequired = false,
    isOnKeyUp = false,
    icon,
    handleClickIcon,
    validate,
    onKeyDown,
    labelcss,
    cssClass,
    autoFocus,
    redStar = false,
  } = props;

  const addRegisterComponent = () => {
    if (register && register !== null) {
      const registerData = {
        required: isRequired ? "This field is required!" : false,
        disabled: isDisabled,
        readOnly: readOnly,
        maxLength: maxLength,
        minLength: minLength,
        // max: max,
        // min: min,
        validate: validate ? (value) => validate(value) : undefined,
      };

      
      if (type === "text" && maxLength && minLength) {
        Object.assign(registerData, {
          onChange: (e) => {
            const inputValue = e.target.value;
            if (
              pattern &&
              pattern instanceof RegExp &&
              pattern.test(inputValue)
            ) {
              e.target.value = inputValue.slice(0, maxLength);
            } else {
              if (value && value.length > 0 && pattern.test(value)) {
                e.target.value = value;
              } else {
                e.target.value = value.replace(/[^0-9]/g, "");
              }
            }
          },
        });
      } else {
        Object.assign(registerData, {
          value: value,
          pattern:
            pattern !== null &&
            pattern !== false &&
            pattern instanceof RegExp &&
            value
              ? pattern.test(value)
                ? false
                : DUMMY_REGEX_EXP
              : false,
        });
      }
      return {
        ...register(name, { ...registerData }),
      };
    } else {
      const obj = {
        onChange: (e) => handleOnChange(e),
        pattern: pattern,
        disabled: isDisabled,
        maxLength: maxLength,
        max: max,
        required: isRequired,
      };
      return { ...obj };
    }
  };

  const handleOnChange = (e) => {
    const inputValue = e.target.value;

    if (type === "tel") {
      const sanitizedValue = inputValue.replace(/[^0-9+\s()-]/g, "");

      if (PHONE_NUMBER_REGEX.test(sanitizedValue) || sanitizedValue === "") {
        if (pattern && handleChange) {
          handleChange(e.target.validity.valid ? sanitizedValue : value);
        } else if (handleChange) {
          handleChange(sanitizedValue);
        }
      } else {
        console.error("Invalid phone number");
      }
    } else {
      if (pattern && handleChange) {
        handleChange(e.target.validity.valid ? inputValue : value);
      } else if (handleChange) {
        handleChange(inputValue);
      }
    }
  };

  return (
    <>
      {label && (
        <label
          htmlFor={label}
          // className='block text-xs leading-6 text-gray_color-700'
          className={`block font-medium leading-6 text-[#DCDCDC] text-sm ${labelcss}`}
        >
          {`${label} `}
          {redStar && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="flex relative items-center">
        <input
          onKeyDown={onKeyDown}
          {...addRegisterComponent()}
          maxLength={maxLength}
          readOnly={readOnly ? readOnly : ""}
          name={name}
          type={type}
          value={
            value === null
              ? ""
              : type === "date" && value
              ? moment(value).format("YYYY-MM-DD")
              : value
          }
          // style={{
          //     backgroundColor:
          //         isDisabled || readOnly
          //             ? '#4b6bb710'
          //             : 'rgba(255, 255, 255, 0.07)'
          // }}
          placeholder={placeHolder ? placeHolder : ""}
          className={classNames(
            `text-black ${
              borderColorWhite ? "did-form-input" : "did-form-input-gray-border"
            } relative w-full min-w-0 appearance-none rounded-full bg-white px-3 py-2.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset`,
            ErrorMessage && "errorBorder",
            (isDisabled || readOnly) && "disabled:opacity-25",
            cssClass && `${cssClass}`,
            `${
              PlaceholderCss && PlaceholderCss != ""
                ? PlaceholderCss
                : "placeholder:text-white"
            }`
          )}
          onBlur={(e) => {
            if (blurHandler) blurHandler(e);
          }}
          onKeyUp={(e) => {
            if (isOnKeyUp) blurHandler(e);
          }}
          autoFocus={autoFocus}
        />
        {icon && (
          <span
            {...(handleClickIcon && {
              onClick: () => handleClickIcon(),
            })}
            className={`${
              handleClickIcon ? "cursor-pointer" : ""
            } absolute text-white top-[14px] right-[10px] ${IconCss}`}
          >
            {icon}
          </span>
        )}
      </div>
      {ErrorMessage && ErrorMessage.length > 0 && (
        <span className="errorMessage">{ErrorMessage}</span>
      )}
    </>
  );
};

export default CustomInput;
