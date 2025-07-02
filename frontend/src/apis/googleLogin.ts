import api from '@/lib/axios';

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export const loginWithGoogle = async (idToken: string): Promise<User> => {
  try {
    const response = await api.post('/auth/google', {
      idToken,
    });
    
    const { token, user } = response.data;
    
    // Store token in localStorage
    localStorage.setItem('token', token);
    
    return user;
  } catch (error) {
    console.error('Google login error:', error);
    throw new Error('Failed to login with Google');
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await api.get('/user/me');
    return response.data.user;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
}; 