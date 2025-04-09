
import { Card, CardContent } from "@/components/ui/card";

interface FormCardProps {
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return (
    <Card className="bg-white shadow-md border-none">
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default FormCard;
