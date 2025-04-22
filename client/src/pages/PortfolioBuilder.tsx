import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Title is required'),
  template: yup
    .string()
    .required('Template is required'),
});

const initialValues: Portfolio = {
  title: '',
  template: 'standard',
  about: {
    bio: '',
    skills: [],
    education: [],
    experience: [],
  },
  projects: [],
  customizations: {
    colors: {
      primary: '#1976d2',
      secondary: '#dc004e',
      background: '#ffffff',
      text: '#000000',
    },
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
    layout: 'standard',
  },
  isPublished: false,
};

const PortfolioBuilder: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration - replace with API call
  const mockPortfolios: Record<string, Portfolio> = {
    '1': {
      title: 'My Developer Portfolio',
      template: 'standard',
      about: {
        bio: 'Full-stack developer with a passion for creating beautiful and functional web applications.',
        skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
        education: [
          {
            institution: 'University of Technology',
            degree: 'Bachelor of Computer Science',
            year: '2020',
          },
        ],
        experience: [
          {
            company: 'Tech Corp',
            position: 'Senior Developer',
            duration: '2020 - Present',
            description: 'Leading development of web applications using modern technologies.',
          },
        ],
      },
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'A full-featured e-commerce platform built with React and Node.js',
          link: 'https://github.com/username/ecommerce',
        },
      ],
      customizations: {
        colors: {
          primary: '#1976d2',
          secondary: '#dc004e',
          background: '#ffffff',
          text: '#000000',
        },
        fonts: {
          heading: 'Roboto',
          body: 'Roboto',
        },
        layout: 'standard',
      },
      isPublished: true,
    },
  };

  const formik = useFormik<Portfolio>({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        // TODO: Implement portfolio save/update API call
        console.log('Portfolio form submitted:', values);
        navigate('/dashboard');
      } catch (error) {
        console.error('Portfolio save error:', error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    if (id) {
      // Load existing portfolio data
      const portfolio = mockPortfolios[id];
      if (portfolio) {
        formik.setValues(portfolio);
      }
    }
  }, [id]);

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="portfolio-builder">
      <div className="builder-header">
        <h1>{id ? 'Edit Portfolio' : 'Create Portfolio'}</h1>
        <button
          className="save-button"
          onClick={() => formik.handleSubmit()}
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Portfolio'}
        </button>
      </div>

      <div className="builder-content">
        <div className="builder-main">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 0 ? 'active' : ''}`}
              onClick={() => handleTabChange(0)}
            >
              Basic Info
            </button>
            <button
              className={`tab ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => handleTabChange(1)}
            >
              About
            </button>
            <button
              className={`tab ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => handleTabChange(2)}
            >
              Projects
            </button>
            <button
              className={`tab ${activeTab === 3 ? 'active' : ''}`}
              onClick={() => handleTabChange(3)}
            >
              Customization
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 0 && (
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="title">Portfolio Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    className={formik.touched.title && formik.errors.title ? 'error' : ''}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className="error-message">{formik.errors.title}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="template">Template</label>
                  <select
                    id="template"
                    name="template"
                    value={formik.values.template}
                    onChange={formik.handleChange}
                  >
                    <option value="standard">Standard</option>
                    <option value="minimal">Minimal</option>
                    <option value="creative">Creative</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="form-section">
                <div className="form-group">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    name="about.bio"
                    value={formik.values.about.bio}
                    onChange={formik.handleChange}
                    rows={4}
                  />
                </div>
                {/* TODO: Add skills, education, and experience inputs */}
              </div>
            )}

            {activeTab === 2 && (
              <div className="form-section">
                {/* TODO: Add project management interface */}
                <p>Project management interface will be here</p>
              </div>
            )}

            {activeTab === 3 && (
              <div className="form-section">
                {/* TODO: Add customization options */}
                <p>Customization options will be here</p>
              </div>
            )}
          </div>
        </div>

        <div className="builder-preview">
          <h2>Preview</h2>
          <div className="publish-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={formik.values.isPublished}
                onChange={(e) => formik.setFieldValue('isPublished', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
            <span>Publish Portfolio</span>
          </div>
          {/* TODO: Add live preview component */}
          <p className="preview-placeholder">Live preview will be shown here</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder; 