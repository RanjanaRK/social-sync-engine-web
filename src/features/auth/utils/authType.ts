export interface User {
  id: string;
  username: string;
  email: string;
  bio: string;
  image: string[];
}

export interface AuthResponse {
  user: User;
  message: string;
}
