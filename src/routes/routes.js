const express = require("express");
const router = express.Router();
const ctrl = require('../controllers/blog')

// CRUD for blogPosts
router.get('/all', ctrl.getBlogPosts);
router.get('/:blogPost_id', ctrl.getBlogPost);
router.post('/', ctrl.createBlogPost);
router.put('/:blogPost_id', ctrl.updateBlogPost);
router.delete('/:blogPost_id', ctrl.deleteBlogPost);

module.exports = router;
