export interface User {
  createdAt: string;
  email: string;
  profileImage: string;
  role: string;
  updatedAt: string;
  username: string;
  bio: string;
  __v: number;
  _id: string;
}

export interface AuthResponse {
  user: User;
  message: string;
}
