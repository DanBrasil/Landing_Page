interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  required?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
  return <textarea {...props} className="text-sm font-medium text-slate-900" />;
};
