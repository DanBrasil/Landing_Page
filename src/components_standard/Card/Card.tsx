import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-stone-300 border border-stone-700 rounded-lg p-6">
      {children}
    </div>
  );
};

export default Card;
