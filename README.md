# Social Sync Engine - Frontend

A modern social media web application built with React, TypeScript, Vite, Redux Toolkit and Tailwind CSS. Social Sync Engine allows users to connect, share posts, engage through likes and comments, and manage their profiles seamlessly.

## 🚀 Features

### 🔐 Authentication

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes
- Persistent Login State

### 👤 User Profile

- Upload Profile Picture
- View Public Profiles
- Search Users by Username

### 📝 Posts

- Create Posts with Caption
- Upload Images
- Delete Own Posts
- View Feed Posts

### Responsive Post Cards

- ❤️ Social Interactions
- Like / Unlike Posts
- Comment on Posts
- View Post Engagement

### 🔍 Search

- Search Users by Username
- Navigate to Public User Profiles

### 📱 Responsive Design

- Mobile Friendly UI
- Tablet Support
- Desktop Optimized Layout

### 🔔 User Experience

- Toast Notifications
- Form Validation
- Loading States
- Error Handling
- Smooth Navigation

### 🚧 Upcoming Features

- Follow / Unfollow Users
- Real-time Notifications
- Direct Messaging
- Infinite Scrolling Feed

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- Vite

### State Management

- Redux Toolkit
- React Redux

### Server State Management

- TanStack React Query
- Routing
- React Router v7

### Forms & Validation

- React Hook Form
- Zod
- Hookform Resolvers

### API Communication

- Axios

### UI & Styling

- Tailwind CSS v4
- Lucide React Icons
- Sonner Toast

### File Upload

- React Dropzone
- Embla Carousel

---

## 📂 Project Structure

```
src/
│
├── app/
├── features/
│   ├── auth/
│   └── comments/
│   ├── post/
│   ├── profile/
│   └── user/
│   └── shared/

└── assets/
```

## ⚙️ Installation

### Clone Repository

```
git clone https://github.com/your-username/social-sync-engine.git
```

### Navigate to Frontend

```
cd social-sync-engine/frontend
```

### Install Dependencies

```
npm install

```

### Create Environment Variables

Create a .env file:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

### Run Development Server

```npm run dev

```

### Application will run on:

```
http://localhost:5173

```

---

## 🔄 Application Data Flow

```Backend API
     ↓
API Layer (Axios)
     ↓
Redux Store
     ↓
Custom Hooks
     ↓
UI Components
```

### Example Flow

```User creates a post
      ↓
Custom Hook triggers action
      ↓
API request sent via Axios
      ↓
Backend processes request
      ↓
Response stored in Redux Store
      ↓
Hook retrieves updated state
      ↓
UI re-renders automatically
```
