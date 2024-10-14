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
  const [tokenTimestamp, setTokenTimestamp] = useState<number | null>(null);

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [logout] = useLogoutMutation();
  const [getNewTokens] = useGetNewTokensMutation();

  const handleLogin = async (credentials: Credentials) => {
    setIsLoading(true);
    try {
      const data = await login(credentials).unwrap();
      localStorage.setItem('accessToken', data.accessToken);
      setTokenTimestamp(Date.now()); // Сохраните время получения токена
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
      setTokenTimestamp(Date.now()); // Сохраните время получения токена
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
      localStorage.setItem('accessToken', data.accessToken); // Обновление токена доступа
      setTokenTimestamp(Date.now()); // Обновите время получения токена
      setUser(data.user);
    } catch (error) {
      console.error('Token refresh error:', error);
      localStorage.removeItem('accessToken');
      setUser(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (tokenTimestamp) {
        const tokenExpiry = tokenTimestamp + 60 * 60 * 1000; // Токен истекает через 1 час
        const timeToExpiry = tokenExpiry - Date.now();

        // Если до истечения токена осталось менее 5 минут, вызываем checkAuth
        if (timeToExpiry < 5 * 60 * 1000) {
          checkAuth();
        }
      }
    }, 60 * 1000); // Проверка каждую минуту

    // Проверка авторизации при загрузке страницы
    checkAuth();

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [tokenTimestamp]);

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
