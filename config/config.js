module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || "mongodb://localhost/graphite",
  secret: process.env.SECRET || "totally secret... yeah..."
};
