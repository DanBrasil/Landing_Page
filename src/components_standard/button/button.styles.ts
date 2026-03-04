import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "all-[unset]",
    "inline-flex items-center justify-center gap-2",
    "rounded-[25px]",
    "font-bold text-[14px] leading-[21px] whitespace-nowrap",
    "transition-all duration-300 ease-in-out",
    "cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      variant: {
        solid: [
          "bg-stone-600 text-white",
          "hover:bg-stone-800",
          "active:bg-stone-800",
          "focus-visible:ring-8 focus-visible:ring-stone-300",
          "disabled:bg-black disabled:border disabled:border-white",
        ],
        outline: [
          "bg-transparent border border-black text-black",
          "hover:bg-gray-300",
          "focus-visible:ring-8 focus-visible:ring-gray-400",
          "disabled:border-gray-400 disabled:text-gray-400",
        ],
        link: [
          "bg-transparent text-black p-0 h-[21px]",
          "hover:underline",
          "focus-visible:ring-8 focus-visible:ring-gray-400",
          "disabled:text-gray-400 no-underline",
        ],
        ghost: [
          "bg-transparent text-blue-600",
          "hover:bg-gray-300",
          "focus-visible:ring-8 focus-visible:ring-gray-400",
          "disabled:border disabled:border-gray-400 disabled:text-gray-400",
        ],
      },
      size: {
        large: "h-[48px] px-12",
        medium: "h-[40px] px-6",
      },

      loading: {
        true: "pointer-events-none select-none cursor-default",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline", "ghost"],
        className:
          "hover:-translate-y-[2.5px] hover:h-[53px] focus-visible:-translate-y-[5px]",
      },
    ],

    defaultVariants: {
      variant: "solid",
      size: "large",
      loading: false,
    },
  },
);
