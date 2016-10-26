angular
.module("graphite")
.controller("PostIndexCtrl", PostIndexCtrl);

PostIndexCtrl.$inject = ["Post", "User", "$stateParams", "CurrentUserService"];
function PostIndexCtrl(Post, User, $stateParams, CurrentUserService){
  const vm            = this;
  vm.loginuser        = CurrentUserService.getUser();
  vm.feedsmode        = "allposts";

  User.get({id: vm.loginuser.id}, data => {
    vm.user = data.user;
  });

  // this gets all posts excluding the users own posts

    Post.query($stateParams)
    .$promise
    .then(data => {
      vm.allPosts = data.posts;
      vm.posts    = [];
    });


  vm.isFollowed = (post) => {
    return (vm.user.follow.indexOf(post.user._id) !== -1);
  };

  vm.all = () => {
    vm.feedsmode = "allposts";
    vm.posts = vm.allPosts;
  };

  vm.favourites = () => {
    vm.feedsmode = "favourites";
    vm.update_favourites();
  };

  vm.update_favourites = () => {
    if (vm.feedsmode !== "favourites") return;

    Post
    .follow({}, {user: vm.user})
    .$promise
    .then(data => {
      console.log("got favourites");
      vm.posts    = data.posts;
    });

    // vm.posts = vm.posts.filter(post => {
    //   return vm.isFollowed(post);
    // });
  };




  vm.clickFollow = (post) => {
    vm.feedsmode = 2;
    if (vm.user.follow === undefined) {
      vm.user.follow = [];
    }
    console.log(post);
    follow_set = new Set(vm.user.follow);
    follow_set.add(post.user._id);
    vm.user.follow = Array.from(follow_set);

    //user follow array gets updated
    User
    .update({id: vm.user._id }, { user: vm.user })
    .$promise
    .then(data => {
      //  $state.go("postIndex", $stateParams);
    });

    console.log("clicking");
    console.log(vm.user.follow);
  };




  vm.clickUnfollow = (post) => {

    console.log(post);
    follow_set = new Set(vm.user.follow);
    follow_set.delete(post.user._id);
    vm.user.follow = Array.from(follow_set);

    User.update({id: vm.user._id }, { user: vm.user })
    .$promise
    .then(data => {
      //  $state.go("postIndex", $stateParams);

        vm.update_favourites();
    });

    console.log("unfollow", vm.user.follow);


  };

}
