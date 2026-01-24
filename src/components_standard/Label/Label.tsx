interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = (props: LabelProps) => {
  return <label {...props} className="text-sm font-medium text-slate-900" />;
};
