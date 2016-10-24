const mongoose   = require ("mongoose");

const blogSchema = new mongoose.Schema({
  name:       { type: String, trim: true, required: true },
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  posts:      [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
}, {
  timestamps: true
});

module.exports   = mongoose.model("Blog", blogSchema);
