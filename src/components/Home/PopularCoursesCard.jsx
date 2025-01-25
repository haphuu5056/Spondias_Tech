import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Clock, GraduationCap, Star } from "lucide-react";

export function CourseCard({
  title,
  description,
  image,
  category,
  rating,
  price,
  duration,
  level,
}) {
  return (
    <Card className="overflow-hidden transition-all duration-500 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-blue-500 text-primary-foreground ">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-10 mb-3 text-sm text-muted-foreground">
          <span className="flex items-center ">
            <Clock className="w-4 h-4 mr-2" />
            {duration}
          </span>
          <span className="flex items-center">
            <GraduationCap className="w-4 h-4 mr-2" />
            {level}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-lg font-bold ">
            ${price.toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
