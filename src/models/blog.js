const data = require("../data/data");
const uuid = require("uuid/v4");

const getBlogPosts = () => {
  return data;
};

const getBlogPost = (blogPostId) => {
  let errors = [];
  let response;
  const blogPost = data.blogPosts.find(blogPost => blogPost.id === blogPostId);

  if (!blogPost) {
    errors.push({
      error: `Could not find post with id ${blogPostId}`
    });
    response = {
      errors
    };
  } else {
    response = blogPost;
  }
  return response;
};

const createBlogPost = (body) => {
  let errors = [];
  let response;
  if (!body.title ) {
    errors.push({status: 400, message: `Please provide title`});
    response = {errors};
    return response;
  }
  const title = body.title;
  const content = body.content || "";
  response = {id: uuid(), title, content};
  data.blogPosts.push(response);
  return response;
};

const updateBlogPost = (blogPostId, body) => {
  let errors=[];
  let response;
  const blogPost = data.blogPosts.find(blogPost => blogPost.id === blogPostId);

  if(!blogPost){
    errors.push({
      error: `Could not find post with id ${blogPostId}`
    });
    response = {
      errors
    };
    return response;
  }
  if (!body.title ) {
    errors.push({status: 400, message: `Please provide title`});
    response = {errors};
  }else{
    blogPost.title = body.title;
    blogPost.content = body.content || blogPost.content;
    response = {blogPost};
  }
  return response;
};

const deleteBlogPost = (blogPostId) => {
  let errors=[];
  let response;
  const blogPostIndex = data.blogPosts.findIndex(blogPost => blogPost.id === blogPostId);
  // console.log(blogPostIndex);

  if(blogPostIndex === -1){
    errors.push({
      status: 400, message: `Could not find post with id ${blogPostId}`
    });
    response = {
      errors
    };
    // console.log(response);
    return response;
  }else{
    return data.blogPosts.splice(blogPostIndex, 1);
  }

};

module.exports = {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
}
