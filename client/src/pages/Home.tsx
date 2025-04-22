import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '💻',
      title: 'Code Integration',
      description: 'Embed your GitHub repositories and live code demos directly into your portfolio.',
    },
    {
      icon: '🎨',
      title: 'Customizable Templates',
      description: 'Choose from a variety of beautiful templates and customize them to match your style.',
    },
    {
      icon: '🔗',
      title: 'Easy Sharing',
      description: 'Share your portfolio with potential employers and peers through a unique URL.',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Developer Portfolio</h1>
          <p>Showcase your projects, skills, and achievements in a beautiful, customizable portfolio</p>
          <button 
            className="cta-button"
            onClick={() => navigate('/register')}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 