module.exports = {
  index:        postsIndex,
  follow:       postsFollow,
  indexForUser: postsIndexForUser,
  create:       postsCreate,
  show:         postsShow,
  update:       postsUpdate,
  delete:       postsDelete
};

const Post     = require('../models/post');

function postsIndex(req, res) {
  Post
  .find(
  //   {
  //   user: {
  //     $ne: req.user._id
  //   }
  // }
)
  .populate("user")
  .exec((err, posts) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ posts });
  });
}

function postsFollow(req, res) {
  Post
  .find(
  //   {
  //   user: {
  //     $ne: req.user._id
  //   }
  // }
)
  .populate("user")
  .exec((err, posts) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ posts });
  });
}

function postsIndexForUser(req, res) {
  Post.find({
    user: req.user
  })
  .populate("user")
  .exec((err, posts) => {
    if (err)  {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
    return res.status(200).json({ posts });
  });
}

function postsCreate(req, res) {
  let post    = new Post(req.body.post);
  // post.user   = req.user;
  post.save((err, post) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong." });
    }
    return res.status(201).json({ post });
  });
}

function postsShow(req, res) {
  Post
  .findById(req.params.id, (err, post) => {
    if (err)   return res.status(500).json({ message: "Something went wrong." });
    if (!post) return res.status(404).json({ message: "Post not found." });
    return res.status(200).json({ post });
  });
}

function postsUpdate(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body.post, { new: true }, (err, post) => {
    if (err)   return res.status(500).json({ message: "Something went wrong." });
    if (!post) return res.status(404).json({ message: "Post not found." });
    return res.status(200).json({ post });
  });
}

function postsDelete(req, res) {
  Post.findByIdAndRemove(req.params.id, (err, post) => {
    if (err)   return res.status(500).json({ message: "Something went wrong." });
    if (!post) return res.status(404).json({ message: "Post not found." });
    return res.status(204).send();
  });
}
