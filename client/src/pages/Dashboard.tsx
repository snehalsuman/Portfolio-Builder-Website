import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // TODO: Fetch portfolios from API
  const portfolios = [
    {
      id: '1',
      title: 'My Developer Portfolio',
      description: 'A showcase of my web development projects',
      isPublished: true,
    },
    {
      id: '2',
      title: 'Data Science Projects',
      description: 'Collection of my data analysis and machine learning projects',
      isPublished: false,
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>My Portfolios</h1>
        <button 
          className="create-button"
          onClick={() => navigate('/builder')}
        >
          <span className="button-icon">➕</span>
          Create New Portfolio
        </button>
      </div>

      <div className="portfolios-grid">
        {portfolios.map((portfolio) => (
          <div className="portfolio-card" key={portfolio.id}>
            <div className="portfolio-content">
              <h2>{portfolio.title}</h2>
              <p className="portfolio-description">{portfolio.description}</p>
              <span className={`portfolio-status ${portfolio.isPublished ? 'published' : 'draft'}`}>
                {portfolio.isPublished ? 'Published' : 'Draft'}
              </span>
            </div>
            <div className="portfolio-actions">
              <button
                className="action-button"
                onClick={() => navigate(`/builder/${portfolio.id}`)}
              >
                <span className="button-icon">✏️</span>
                Edit
              </button>
              <button
                className="action-button"
                onClick={() => navigate(`/portfolio/${portfolio.id}`)}
              >
                <span className="button-icon">👁️</span>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 