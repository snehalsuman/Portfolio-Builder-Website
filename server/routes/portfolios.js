const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const auth = require('../middleware/auth');

// Get all portfolios for a user
router.get('/my-portfolios', auth, async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ user: req.user.userId });
    res.json(portfolios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single portfolio by slug
router.get('/:slug', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ slug: req.params.slug });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new portfolio
router.post('/', auth, async (req, res) => {
  try {
    const { title, template, about, projects, customizations } = req.body;

    // Generate slug from title
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const portfolio = new Portfolio({
      user: req.user.userId,
      title,
      slug,
      template,
      about,
      projects,
      customizations
    });

    await portfolio.save();
    res.status(201).json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a portfolio
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, about, projects, customizations, isPublished } = req.body;
    
    const portfolio = await Portfolio.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      { title, about, projects, customizations, isPublished },
      { new: true }
    );

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json(portfolio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a portfolio
router.delete('/:id', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId
    });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 