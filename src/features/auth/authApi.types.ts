export interface AuthRequestBody {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  // Добавьте другие поля, которые возвращает ваш сервер
}

export interface AuthResponseBody {
  accessToken: string;
  user: User;
}
