"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, getCurrentUser, logout } from "@/apis/googleLogin";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if token exists
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        // Fetch user data
        const userData = await getCurrentUser();
        if (!userData) {
          // Token invalid or expired
          logout();
          router.push('/login');
          return;
        }

        setUser(userData);
      } catch (error) {
        console.error('Error checking authentication:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          {user?.image && (
            <img
              src={user.image}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
          )}
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              You are now logged in with Google OAuth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is your dashboard. You can start building your application here.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>
              Your account information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Name:</span> {user?.name}
              </div>
              <div>
                <span className="font-medium">Email:</span> {user?.email}
              </div>
              <div>
                <span className="font-medium">ID:</span> {user?.id}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              What you can do next
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Complete your profile</li>
              <li>Explore the application features</li>
              <li>Customize your dashboard</li>
              <li>Invite team members</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 