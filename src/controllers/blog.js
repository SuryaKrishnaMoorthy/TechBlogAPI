const model = require("../models/blog");

const getBlogPosts = (req, res, next) => {
  const blogPost = model.getBlogPosts();
  res.status(200).json(
    blogPost
  );
};

const getBlogPost = (req, res, next) => {
  const blogPost = model.getBlogPost(req.params.blogPost_id);
  if (blogPost.id) {
    res.status(200).send({
      blogPost
    });
  } else {
    next(blogPost.errors[0]);
  }
};

const createBlogPost = (req, res, next) => {
  const blogPost = model.createBlogPost(req.body);
  if (blogPost.id) {
    res.status(201).send({
      blogPost
    });
  } else {
    next(blogPost.errors[0]);
  }
};

const updateBlogPost = (req, res, next) => {
  const response = model.updateBlogPost(req.params.blogPost_id, req.body);
  if (response.errors) {
    next(response.errors[0]);
  } else {
    res.status(200).json(
      response
    );
  }
};

const deleteBlogPost = (req, res, next) => {
  const response = model.deleteBlogPost(req.params.blogPost_id);
  if (response.id) {
    res.status(204).send();
  } else {
    next(response.errors[0]);
  }
};

module.exports = {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
}
