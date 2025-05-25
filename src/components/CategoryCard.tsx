
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryCardProps {
  name: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, color, onClick }) => {
  return (
    <Card 
      className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <CardContent className="p-4 text-center">
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-sm font-medium text-gray-900 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
