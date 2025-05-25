
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Package, Truck, CheckCircle, Search } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface Order {
  id: string;
  items: any[];
  total: number;
  status: string;
  date: string;
  estimatedDelivery: string;
  customerInfo: any;
}

const OrderTracking: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [orderIdInput, setOrderIdInput] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const orderId = searchParams.get('orderId');
    if (orderId) {
      setOrderIdInput(orderId);
      searchOrder(orderId);
    }
  }, [searchParams]);

  const searchOrder = (orderId: string) => {
    // In a real app, this would fetch from an API
    const storedOrder = localStorage.getItem('currentOrder');
    if (storedOrder) {
      const orderData = JSON.parse(storedOrder);
      if (orderData.id === orderId) {
        setOrder(orderData);
        setNotFound(false);
        return;
      }
    }
    
    // Mock order data for demo purposes
    if (orderId.startsWith('ORD-')) {
      const mockOrder: Order = {
        id: orderId,
        items: [
          {
            id: '1',
            name: 'Wireless Headphones',
            price: 299.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
          }
        ],
        total: 299.99,
        status: 'shipped',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        customerInfo: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com'
        }
      };
      setOrder(mockOrder);
      setNotFound(false);
    } else {
      setOrder(null);
      setNotFound(true);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderIdInput.trim()) {
      searchOrder(orderIdInput.trim());
    }
  };

  const getStatusSteps = (status: string) => {
    const steps = [
      { id: 'processing', label: 'Processing', icon: Package },
      { id: 'shipped', label: 'Shipped', icon: Truck },
      { id: 'delivered', label: 'Delivered', icon: CheckCircle }
    ];

    const currentIndex = steps.findIndex(step => step.id === status);
    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      current: index === currentIndex
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex gap-4">
                <Input
                  placeholder="Enter your order ID (e.g., ORD-ABC123)"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Track Order
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {notFound && (
          <Card>
            <CardContent className="pt-6 text-center">
              <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Order Not Found</h3>
              <p className="text-gray-600">Please check your order ID and try again.</p>
            </CardContent>
          </Card>
        )}

        {order && (
          <div className="space-y-6">
            {/* Order Status */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Order {order.id}</CardTitle>
                    <p className="text-gray-600">Placed on {formatDate(order.date)}</p>
                  </div>
                  <Badge variant={order.status === 'delivered' ? 'default' : 'secondary'}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between">
                    {getStatusSteps(order.status).map((step, index) => (
                      <div key={step.id} className="flex flex-col items-center flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? 'bg-brand-500 text-white' 
                            : 'bg-gray-200 text-gray-400'
                        }`}>
                          <step.icon className="h-5 w-5" />
                        </div>
                        <span className={`text-sm mt-2 ${
                          step.completed ? 'text-brand-600 font-medium' : 'text-gray-500'
                        }`}>
                          {step.label}
                        </span>
                        {index < getStatusSteps(order.status).length - 1 && (
                          <div className={`w-full h-1 mt-4 ${
                            step.completed ? 'bg-brand-500' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600">
                      Estimated delivery: <span className="font-medium">{formatDate(order.estimatedDelivery)}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">
                  <p>{order.customerInfo.firstName} {order.customerInfo.lastName}</p>
                  <p>{order.customerInfo.address}</p>
                  <p>{order.customerInfo.city}, {order.customerInfo.zipCode}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
