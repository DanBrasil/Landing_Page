import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
}

export const Card = ({ children, icon }: CardProps) => {
  return (
    <div className="bg-stone-100 border border-stone-700 rounded-lg p-6">
      {icon && <div className="text-stone-700 flex "> {icon}</div>}
      <div className="flex-1"> {children}</div>
    </div>
  );
};

export const CardHeader = ({ children }: CardProps) => {
  return (
    <div className="mb-4">
      <div className="text-lg font-semibold text-slate-900">{children}</div>
    </div>
  );
};

export const CardTitle = ({ children }: CardProps) => {
  return (
    <div className="text-lg font-semibold text-slate-900 mb-2">{children}</div>
  );
};

export const CardDescription = ({ children }: CardProps) => {
  return <div className="text-slate-500">{children}</div>;
};

export const CardContent = ({ children }: CardProps) => {
  return <div className="pt-4">{children}</div>;
};
