const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  images: [String],
  videos: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PortfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  template: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  about: {
    bio: String,
    skills: [String],
    education: [{
      institution: String,
      degree: String,
      year: String
    }],
    experience: [{
      company: String,
      position: String,
      duration: String,
      description: String
    }]
  },
  projects: [ProjectSchema],
  customizations: {
    colors: {
      primary: String,
      secondary: String,
      background: String,
      text: String
    },
    fonts: {
      heading: String,
      body: String
    },
    layout: {
      type: String,
      enum: ['standard', 'minimal', 'creative'],
      default: 'standard'
    }
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
PortfolioSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Portfolio', PortfolioSchema); 