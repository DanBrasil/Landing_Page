"use client";
import { useLayoutEffect, useRef, useState, useId } from "react";
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
  className,
  ...rest
}: IInputProps) => {
  const hasError = Boolean($error);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const uniqueId = useId();

  useLayoutEffect(() => {
    const el = inputRef.current;
    if (el && !value) {
      el.value = "";
    }
  }, [value]);

  const autoCompleteValue = rest.autoComplete ?? `field-${uniqueId}`;
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : (rest.type ?? "text");

  const currentValue = String(value ?? defaultValue ?? "");
  const hasValue = currentValue.length > 0;

  return (
    <div className={wrapperInputStyles()}>
      {hasValue && !noLabel && (
        <div className={labelStyles({ hasError })}>
          {placeholder}
          {rest.required && (
            <span className={requiredAsteriskStyles()}> *</span>
          )}
        </div>
      )}

      <input
        {...rest}
        className={
          className ||
          inputStyles({
            hasError,
            isLeft: !!leftIcon,
            isRight: !!rightIcon || isPassword,
          })
        }
        type={inputType}
        value={value}
        placeholder={
          hasValue ? "" : rest.required ? `${placeholder} *` : placeholder
        }
        autoComplete={rest.autoComplete ?? autoCompleteValue}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter" && rest.onKeyDown) {
            rest.onKeyDown(e);
          }
        }}
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
    </div>
  );
};

export default Input;
