
import React from 'react';
import { Label } from "@/components/ui/label";

interface FormFieldLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const FormFieldLabel: React.FC<FormFieldLabelProps> = ({ 
  htmlFor, 
  children 
}) => {
  return (
    <Label 
      htmlFor={htmlFor} 
      className="font-bold block mb-2"
    >
      {children}
    </Label>
  );
};

export default FormFieldLabel;
