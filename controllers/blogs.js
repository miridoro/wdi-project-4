module.exports = {
  index:        blogsIndex,
  indexForUser: blogsIndexForUser,
  create:       blogsCreate,
  show:         blogsShow,
  update:       blogsUpdate,
  delete:       blogsDelete
};

const Blog     = require('../models/blog');

function blogsIndex(req, res) {
  Blog
  .find({
    user: {
      $ne: req.user._id
    }
  })
  .populate("user")
  .exec((err, blogs) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
             return res.status(200).json({ blogs });
  });
}

function blogsIndexForUser(req, res) {
  Blog.find({
    user: req.user._id
  })
  .populate("user")
  .exec((err, blogs) => {
    if (err)  return res.status(500).json({ message: "Something went wrong." });
              return res.status(200).json({ blogs });
  });
}

function blogsCreate(req, res) {
  let blog    = new Blog(req.body.blog);
  blog.user   = req.user._id;
  blog.save((err, blog) => {
    if (err)  return res.status(500).json({ message: "Something went wrong." });
              return res.status(201).json({ blog });
  });
}

function blogsShow(req, res) {
  Blog
  .findById(req.params.id, (err, blog) => {
    if (err)   return res.status(500).json({ message: "Something went wrong." });
    if (!blog) return res.status(404).json({ message: "Blog not found." });
               return res.status(200).json({ blog });
  });
}

function blogsUpdate(req, res) {
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, { new: true }, (err, blog) => {
    if (err)   return res.status(500).json({ message: "Something went wrong." });
    if (!blog) return res.status(404).json({ message: "Blog not found." });
    return res.status(200).json({ blog });
  });
}

function blogsDelete(req, res) {
  Blog.findByIdAndRemove(req.params.id, (err, blog) => {
    if (err)   return res.status(500).json({ message: "Something went wrong." });
    if (!blog) return res.status(404).json({ message: "Blog not found." });
    return res.status(204).send();
  });
}
