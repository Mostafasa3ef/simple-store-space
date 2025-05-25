
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Lock, Wallet } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    walletBalance: 25.50
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleAddMoney = () => {
    // This would integrate with payment system
    alert('Payment integration needed - connect to Supabase for backend functionality');
  };

  if (isLoggedIn) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold">{userProfile.name}</h3>
              <p className="text-gray-600">{userProfile.email}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Wallet Balance</span>
                </div>
                <span className="text-lg font-bold text-green-600">
                  ${userProfile.walletBalance.toFixed(2)}
                </span>
              </div>
              <Button onClick={handleAddMoney} className="w-full">
                Add Money to Wallet
              </Button>
            </div>

            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Order History
              </Button>
              <Button variant="outline" className="w-full">
                Settings
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to AlZaGeL</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input id="email" type="email" placeholder="Enter your email" className="pl-10" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input id="password" type="password" placeholder="Enter your password" className="pl-10" required />
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input id="name" placeholder="Enter your full name" className="pl-10" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input id="signup-email" type="email" placeholder="Enter your email" className="pl-10" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input id="signup-password" type="password" placeholder="Create a password" className="pl-10" required />
                </div>
              </div>
              
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="text-center text-sm text-gray-600 mt-4">
          Note: Backend functionality requires Supabase integration
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
