"use client";

import { type MouseEvent } from "react";
import type { IButtonProps } from "./button.interface";
import clsx from "clsx";
import { buttonStyles } from "./button.styles";

const Button = ({
  variant = "solid",
  loading,
  isLarge = true,
  children,
  onClick,
  ...rest
}: IButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    e.currentTarget.blur();
  };

  return (
    <button
      {...rest}
      className={clsx(
        buttonStyles({ variant, size: isLarge ? "large" : "medium", loading }),
      )}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
