import type { ReactNode, ButtonHTMLAttributes } from "react";

type TVariant = "solid" | "outline" | "link" | "ghost";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TVariant;
  loading?: boolean;
  isLarge?: boolean;
}
