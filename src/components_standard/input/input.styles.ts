import { cva } from "class-variance-authority";

export const wrapperInputStyles = cva([
  "w-full relative flex flex-col justify-center gap-4",
]);

export const labelStyles = cva(
  "absolute pointer-events-none whitespace-nowrap text-xs px-2 -translate-y-1/2 transition-all",
  {
    variants: {
      hasError: {
        true: "text-red-500",
        false: "text-gray-400",
      },
    },
    defaultVariants: {
      hasError: false,
    },
  },
);
export const inputStyles = cva(
  "w-full box-border bg-transparent outline-none text-base text-gray-900 transition-shadow caret-gray-900",
  {
    variants: {
      hasError: {
        true: "shadow-[inset_0_-1px_0_0_rgb(239,68,68)] focus:shadow-[inset_0_-3px_0_0_rgb(239,68,68)]",
        false:
          "shadow-[inset_0_-1px_0_0_rgb(156,163,175)] focus:shadow-[inset_0_-3px_0_0_rgb(14,165,233)]",
      },
      isLeft: {
        true: "pl-14",
        false: "pl-2.5",
      },
      isRight: {
        true: "pr-14",
        false: "pr-0",
      },
    },
    defaultVariants: {
      hasError: false,
      isLeft: false,
      isRight: false,
    },
  },
);

export const errorMessageStyles = cva(
  "absolute bottom-[-15px] pl-2.5 text-xs text-red-500",
);

export const iconWrapperStyles = cva(
  "absolute flex items-center justify-center",
  {
    variants: {
      side: {
        left: "left-4",
        right: "right-4",
      },
      clickable: {
        true: "cursor-pointer",
        false: "",
      },
    },
  },
);

export const requiredAsteriskStyles = cva("ml-0.5 font-semibold text-red-500");
