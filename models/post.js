const mongoose   = require ("mongoose");

const postSchema = new mongoose.Schema({
  text:       { type: String, trim: true },
  image:      { type: String, trim: true },
  time:       { type: Date }, // required: true
  content:    { type: String, trim: true},
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  // comment:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {
  timestamps: true
});

module.exports   = mongoose.model("Post", postSchema);
