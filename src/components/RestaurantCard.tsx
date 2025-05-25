
import React from 'react';
import { Restaurant } from '@/data/restaurants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, DollarSign, MapPin } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <Card 
      className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {restaurant.featured && (
          <Badge className="absolute top-3 left-3 bg-brand-500 text-white">
            Featured
          </Badge>
        )}
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-red-500 text-white">
              Closed
            </Badge>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-900">
            {restaurant.deliveryTime}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {restaurant.rating}
            </span>
            <span className="text-sm text-gray-500">
              ({restaurant.reviews})
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {restaurant.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {restaurant.cuisine.map((cuisine, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {cuisine}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4" />
            <span>${restaurant.deliveryFee} delivery</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>Min ${restaurant.minimumOrder}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
