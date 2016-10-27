const mongoose   = require ("mongoose");

const postSchema = new mongoose.Schema({
  title:    { type: String, trim: true },
  image:    { type: String, trim: true },
  about:    { type: String, trim: true },
  content:  { type: String, trim: true},
  user:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true
});

module.exports   = mongoose.model("Post", postSchema);
