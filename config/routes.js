const express         = require("express");
const router          = express.Router();

const authentications = require("../controllers/authentications");
const users           = require("../controllers/users");
const posts           = require("../controllers/posts");

router.route("/register")
  .post(authentications.register);
router.route("/login")
  .post(authentications.login);

router.route("/users")
  .get(users.index);
router.route("/users/:id")
  .get(users.show)
  .put(users.update)
  .patch(users.update)
  .delete(users.delete);

router.route("/my-posts")
  .post(posts.indexForUser);

router.route("/posts")
  .get(posts.index)
  .post(posts.create);
router.route("/posts/:id")
  .get(posts.show)
  .put(posts.update)
  .delete(posts.delete);
router.route("/follow")
  .post(posts.follow);

module.exports = router;
