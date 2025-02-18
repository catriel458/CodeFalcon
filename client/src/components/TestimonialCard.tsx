import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  profession: string;
  comment: string;
  image: string;
  rating: number;
}

const TestimonialCard = ({ name, profession, comment, image, rating }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-5 h-5 fill-primary text-primary" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-primary text-primary" />);
    }

    return stars;
  };

  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{profession}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {renderStars(rating)}
        </div>
        <p className="text-muted-foreground italic">{comment}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
