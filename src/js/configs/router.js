angular
.module("graphite")
.config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home",          {
    url: "/",
    templateUrl: "/js/views/home.html",
    controller: "homeCtrl as home"
  })
  .state("register",      {
    url: "/register",
    templateUrl: "/js/views/register.html",
    controller: "registerCtrl as register",
  })
  .state("login",         {
    url: "/login",
    templateUrl: "/js/views/login.html",
    controller: "loginCtrl as login",
  })
  .state("usersShowCtrl",     {
    url: "/users/:id",
    templateUrl:  "/js/views/users/show.html",
    controller:   "usersShowCtrl as usersShowCtrl",
  })
  .state('usersEdit',     {
    url: "/users/:id/edit",
    templateUrl: "/js/views/users/edit.html",
    controller: "usersEditCtrl as usersEditCtrl"
  })
  .state("myPosts",       {
    url: "/my-posts",
    templateUrl:  "/js/views/posts/my-posts.html",
    controller:   "MyPostsCtrl as MyPostsCtrl",
  })
  .state("postIndex",     {
    url: "/posts",
    templateUrl:  "/js/views/posts/index.html",
    controller:   "PostIndexCtrl as PostIndexCtrl",
  })
  .state("postNew",       {
    url: "/posts/new/",
    templateUrl:  "/js/views/posts/new.html",
    controller:   "PostNewCtrl as PostNewCtrl",
  })
  .state("postShow",      {
    url: "/posts/:id",
    templateUrl:  "/js/views/posts/show.html",
    controller:   "PostShowCtrl as PostShowCtrl",
  })
  .state("postEdit",      {
    url: "/posts/:id/edit",
    templateUrl:  "/js/views/posts/edit.html",
    controller:   "PostEditCtrl as PostEditCtrl",
  });

  $urlRouterProvider.otherwise("/");
}
