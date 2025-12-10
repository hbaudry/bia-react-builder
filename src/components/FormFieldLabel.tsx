
import React from 'react';
import { Label } from "@/components/ui/label";

interface FormFieldLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  htmlFor,
  children,
  required = false
}) => {
  return (
    <Label
      htmlFor={htmlFor}
      className="font-semibold text-gray-700 block mb-2 text-sm"
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
  );
};

export default FormFieldLabel;
