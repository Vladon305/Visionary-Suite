import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetNewTokensMutation,
} from '../features/auth/authApi';
import { useRouter } from 'next/navigation';

type Credentials = {
  email: string;
  password: string;
};

type User = {
  id: string;
  email: string;
};

interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
  handleLogin: (credentials: Credentials) => Promise<boolean>;
  handleRegister: (credentials: Credentials) => Promise<boolean>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [tokenExpiryTime, setTokenExpiryTime] = useState<number | null>(null); // Время истечения токена

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [logout] = useLogoutMutation();
  const [getNewTokens] = useGetNewTokensMutation();

  const handleLogin = async (credentials: Credentials) => {
    setIsLoading(true);
    try {
      const data = await login(credentials).unwrap();
      localStorage.setItem('accessToken', data.accessToken);
      setTokenExpiryTime(Date.now() + 60 * 60 * 1000); // Устанавливаем время истечения через 1 час
      setUser(data.user);
      router.push('/');
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (credentials: Credentials) => {
    setIsLoading(true);
    try {
      const data = await register(credentials).unwrap();
      localStorage.setItem('accessToken', data.accessToken);
      setTokenExpiryTime(Date.now() + 60 * 60 * 1000); // Устанавливаем время истечения через 1 час
      setUser(data.user);
      router.push('/');
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout().unwrap();
      localStorage.removeItem('accessToken');
      setUser(null);
      setTokenExpiryTime(null);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuth = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;

    try {
      const data = await getNewTokens().unwrap();
      localStorage.setItem('accessToken', data.accessToken);
      setTokenExpiryTime(Date.now() + 60 * 60 * 1000); // Обновление времени истечения токена
      setUser(data.user);
    } catch (error) {
      console.error('Token refresh error:', error);
      localStorage.removeItem('accessToken');
      setUser(null);
    }
  };

  // Устанавливаем таймер для обновления токена
  useEffect(() => {
    if (tokenExpiryTime) {
      const timeToRefresh = tokenExpiryTime - Date.now() - 5 * 60 * 1000; // Обновить токен за 5 минут до истечения
      if (timeToRefresh > 0) {
        const timer = setTimeout(() => {
          checkAuth(); // Обновляем токен перед истечением срока
        }, timeToRefresh);

        // Очищаем таймер при размонтировании
        return () => clearTimeout(timer);
      }
    }
  }, [tokenExpiryTime]);

  // Проверка авторизации при загрузке страницы
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, handleLogin, handleRegister, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
