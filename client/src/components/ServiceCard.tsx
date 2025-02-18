import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const ServiceCard = ({ title, description, price, features }: ServiceCardProps) => {
  return (
    <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
      <CardHeader>
        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-2xl font-bold text-primary">{price}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <span className="mr-2 text-primary">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
