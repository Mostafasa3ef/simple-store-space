
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin, Clock } from 'lucide-react';
import { restaurants, foodCategories, featuredCategories } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';
import CategoryCard from '@/components/CategoryCard';
import Cart from '@/components/Cart';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { openCart } = useCart();

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || 
                           restaurant.category === selectedCategory ||
                           restaurant.cuisine.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-brand-600">FoodieExpress</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Deliver to: Downtown</span>
              </div>
              <Cart />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Craving Something Delicious?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up opacity-90">
            Order from your favorite restaurants and get it delivered fast to your doorstep.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-slide-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search for restaurants, cuisines, or dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg bg-white text-gray-900 border-0 shadow-lg"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Track Your Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {featuredCategories.map((category, index) => (
              <div
                key={category.name}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryCard
                  name={category.name}
                  icon={category.icon}
                  color={category.color}
                  onClick={() => setSelectedCategory(category.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700 mr-2">Filter by:</span>
            {foodCategories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-brand-100 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Restaurants</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurants.filter(r => r.featured).map((restaurant, index) => (
              <div
                key={restaurant.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in"
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Restaurants */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            All Restaurants 
            <span className="text-lg font-normal text-gray-600 ml-2">
              ({filteredRestaurants.length} restaurants)
            </span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fade-in"
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>

          {filteredRestaurants.length === 0 && (
            <div className="text-center py-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">No restaurants found</h4>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-brand-400">FoodieExpress</h3>
              <p className="text-gray-400">Your favorite food, delivered fast and fresh to your doorstep.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How it works</li>
                <li>Track your order</li>
                <li>Customer support</li>
                <li>FAQs</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Restaurants</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Partner with us</li>
                <li>Restaurant portal</li>
                <li>Business support</li>
                <li>Delivery solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FoodieExpress. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
