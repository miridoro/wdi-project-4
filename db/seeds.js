const mongoose = require("mongoose");
const config   = require('../config/config');

mongoose.connect(config.db);

const Post  = require("../models/post");
const User  = require("../models/user");

Project.collection.drop();
User.collection.drop();

const users = [
  {
      username:     "salad",
      firstName:    "salad",
      lastName:     "salad",
      image:        "",
      about:        "Loves to travel.",
      email:        "salad@salad.com",
      location:     "London",
      password:     "password",
      passwordConfirmation: "password"
  }, {
    username:     "tomato",
    firstName:    "tomato",
    lastName:     "tomato",
    image:        "",
    about:        "Loves science.",
    email:        "tomato@tomato.com",
    location:     "Pensylvania",
    password:     "password",
    passwordConfirmation: "password"
  }, {
    username:     "poo",
    firstName:    "poo",
    lastName:     "poo",
    image:        "",
    about:        "Loves anything tech related.",
    email:        "poo@poo.com",
    location:     "London",
    password:     "password",
    passwordConfirmation: "password"
  }, {
    username:     "moo",
    firstName:    "moo",
    lastName:     "moo",
    image:        "",
    about:        "Loves to travel.",
    email:        "moo@moo.com",
    location:     "London",
    password:     "password",
    passwordConfirmation: "password"
  }, {
    username:     "turnip",
    firstName:    "turnip",
    lastName:     "turnip",
    image:        "",
    about:        "Loves to travel.",
    email:        "turnip@turnip.com",
    location:     "London",
    password:     "password",
    passwordConfirmation: "password"
  }, {
    username:     "simba",
    firstName:    "simba",
    lastName:     "simba",
    image:        "",
    about:        "Loves to travel.",
    email:        "simba@simba.com",
    location:     "London",
    password:     "password",
    passwordConfirmation: "password"
  }
];

users.forEach(user => User.create(user, (err, user) => console.log(`${ user.name } was saved.`)));
