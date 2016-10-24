module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/graphite',
  secret: process.env.SECRET || "totally secret... yeah..."
};
