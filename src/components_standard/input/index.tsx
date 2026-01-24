"use client";
import { useLayoutEffect, useRef, useState } from "react";
import type { IInputProps } from "./input.interface";
import { Eye, EyeOff } from "lucide-react";

import {
  wrapperInputStyles,
  labelStyles,
  inputStyles,
  errorMessageStyles,
  iconWrapperStyles,
  requiredAsteriskStyles,
} from "./input.styles";
import { preventAutoComplete } from "./utils";

const Input = ({
  placeholder,
  $error,
  value,
  defaultValue,
  noLabel,
  leftIcon,
  rightIcon,
  onClickLeft,
  onClickRight,
  isPassword = false,
  ...rest
}: IInputProps) => {
  const hasError = Boolean($error);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useLayoutEffect(() => {
    const el = inputRef.current;
    if (el && !value) {
      el.value = "";
    }
  }, [value]);

  const newHash = preventAutoComplete(`${Date.now()}&${placeholder}`);
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : (rest.type ?? "text");

  return (
    <form
      className={wrapperInputStyles()}
      autoComplete="off"
      noValidate
      onSubmit={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      {!!String(value ?? defaultValue ?? "").trim() && !noLabel && (
        <div className={labelStyles({ hasError })}>
          {placeholder}
          {rest.required && (
            <span className={requiredAsteriskStyles()}> *</span>
          )}
        </div>
      )}

      <input
        className={inputStyles({
          hasError,
          isLeft: !!leftIcon,
          isRight: !!rightIcon || isPassword,
        })}
        {...rest}
        type={inputType}
        value={value}
        placeholder={rest.required ? `${placeholder} *` : placeholder}
        autoComplete={rest.autoComplete ?? newHash}
        ref={inputRef}
      />

      {leftIcon && (
        <div
          className={iconWrapperStyles({
            side: "left",
            clickable: !!onClickLeft,
          })}
          onClick={onClickLeft}
        >
          {(() => {
            const Icon = leftIcon;
            return <Icon className="w-6 h-6 text-gray-500" />;
          })()}
        </div>
      )}
      {isPassword ? (
        <div
          className={iconWrapperStyles({
            side: "right",
            clickable: true,
          })}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOff className="w-6 h-6 text-gray-500" />
          ) : (
            <Eye className="w-6 h-6 text-gray-500" />
          )}
        </div>
      ) : (
        rightIcon && (
          <div
            className={iconWrapperStyles({
              side: "right",
              clickable: !!onClickRight,
            })}
            onClick={onClickRight}
          >
            {(() => {
              const Icon = rightIcon;
              return <Icon className="w-6 h-6 text-gray-500" />;
            })()}
          </div>
        )
      )}
      {hasError && <span className={errorMessageStyles()}>{$error}</span>}
    </form>
  );
};

export default Input;
