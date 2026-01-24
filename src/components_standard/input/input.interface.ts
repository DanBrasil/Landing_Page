import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $error?: string;
  placeholder: string;
  noLabel?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  isPassword?: boolean; 
}

export interface IInputStyleProps {
  $hasError?: boolean;
  $isLeft?: boolean;
  $isRight?: boolean;
}
