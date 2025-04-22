# Digital Portfolio Builder

A modern, responsive web application for creating and managing professional portfolios. Built with React, TypeScript, and a clean, Material-UI-free design.

## Features

- **User Authentication**
  - Secure login and registration
  - Protected routes for authenticated users

- **Portfolio Management**
  - Create and edit multiple portfolios
  - Choose from different templates
  - Customize colors, fonts, and layout
  - Preview changes in real-time
  - Publish/unpublish portfolios

- **Portfolio Content**
  - Professional bio
  - Skills showcase
  - Education history
  - Work experience
  - Project showcase
  - Custom styling options

## Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - React Router v6
  - Formik & Yup for form handling
  - Custom CSS for styling

- **Backend**
  - Node.js
  - Express
  - MongoDB
  - JWT Authentication

## Project Structure

```
digital-portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main application component
│   │   └── App.css        # Global styles
│   └── package.json       # Frontend dependencies
├── server/                 # Backend Express application
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   └── app.ts         # Express application
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/digital-portfolio.git
   cd digital-portfolio
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

4. Create a `.env` file in the server directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Registration & Login**
   - Create a new account or log in with existing credentials
   - Access your dashboard after authentication

2. **Creating a Portfolio**
   - Click "Create Portfolio" in the dashboard
   - Fill in basic information and select a template
   - Add your professional details, education, and experience
   - Showcase your projects
   - Customize the appearance
   - Preview and publish your portfolio

3. **Managing Portfolios**
   - View all your portfolios in the dashboard
   - Edit existing portfolios
   - Toggle portfolio visibility
   - Delete portfolios

## Portfolio Structure

```typescript
interface Portfolio {
  title: string;
  template: string;
  about: {
    bio: string;
    skills: string[];
    education: {
      institution: string;
      degree: string;
      year: string;
    }[];
    experience: {
      company: string;
      position: string;
      duration: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    description: string;
    link: string;
  }[];
  customizations: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    layout: string;
  };
  isPublished: boolean;
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Team for the amazing framework
- TypeScript Team for type safety
- All contributors and maintainers 