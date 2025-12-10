
import { Card, CardContent } from "@/components/ui/card";

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

const FormCard: React.FC<FormCardProps> = ({ children, className = "" }) => {
  return (
    <Card className={`bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      <CardContent className="p-8 sm:p-10">
        <div className="animate-fade-in">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default FormCard;
