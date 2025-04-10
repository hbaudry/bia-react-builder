
import { Card, CardContent } from "@/components/ui/card";

interface FormCardProps {
  children: React.ReactNode;
}

const FormCard: React.FC<FormCardProps> = ({ children }) => {
  return (
    <Card className="bg-white shadow-lg border-none rounded-xl overflow-hidden">
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
};

export default FormCard;
