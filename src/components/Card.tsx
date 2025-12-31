import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex w-auto- h-full md:w-screen bg-stone-100 border border-stone-700 rounded-lg  p-6 flex-col justify-center items-center mx-auto">
      {children}
    </div>
  );
};
export default Card;
