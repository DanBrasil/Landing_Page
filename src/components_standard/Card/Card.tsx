import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

export const Card = ({ children, icon, title, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-stone-100 border border-stone-700 rounded-lg p-3 sm:p-5 md:p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {(icon || title) && (
        <div className="text-stone-700 flex flex-col sm:flex-row items-center mb-2 sm:mb-3 md:mb-4 justify-center text-center sm:text-left">
          {icon && <div className="mb-1.5 sm:mb-0 sm:mr-2">{icon}</div>}
          {title && (
            <div className="text-sm sm:text-base md:text-lg font-semibold leading-tight">
              {title}
            </div>
          )}
        </div>
      )}
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
  return <div className="pt-2 sm:pt-3 md:pt-4">{children}</div>;
};
