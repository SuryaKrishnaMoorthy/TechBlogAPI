const model = require("../models/blog");

const getBlogPosts = (req, res, next) => {
  const blogPost = model.getBlogPosts();
  res.status(200).send({
    data: blogPost
  });
};

const getBlogPost = (req, res, next) => {
  const blogPost = model.getBlogPost(req.params.blogPost_id);
  if (blogPost.errors) next({
    status: 400,
    message: blogPost.errors
  });
  res.status(200).send({
    data: blogPost
  });
};

const createBlogPost = (req, res, next) => {
  const blogPost = model.createBlogPost(req.body);
  if (blogPost.errors) next({
    status: 400,
    message: blogPost.errors
  });
  res.status(201).send({
    data: blogPost
  });
};

const updateBlogPost = (req, res, next) => {
  const blogPost = model.updateBlogPost(req.params.blogPost_id, req.body);
  if (blogPost.errors) next({
    status: 400,
    message: blogPost.errors
  })
  res.status(200).send({
    data: blogPost
  });
};

const deleteBlogPost = (req, res, next) => {
  const blogPost = model.deleteBlogPost(req.params.blogPost_id);
  if (blogPost.errors) next(blogPost.errors[0]);
  res.status(204).send();
};

module.exports = {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
}
