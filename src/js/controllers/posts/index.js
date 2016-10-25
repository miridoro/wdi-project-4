angular
.module("graphite")
.controller("PostIndexCtrl", PostIndexCtrl);

PostIndexCtrl.$inject = ["Post", "User", "$stateParams", "CurrentUserService"];
function PostIndexCtrl(Post, User, $stateParams, CurrentUserService){
  const vm            = this;
  vm.loginuser        = CurrentUserService.getUser();

  User.get({id: vm.loginuser.id}, data => {
    vm.user = data.user;
    console.log("vm.user: ", vm.user);
    console.log("vm.loginuser: ", vm.loginuser);
  });

  // vm.submitMessage    = submitMessage;


  Post
  .query($stateParams)
  .$promise
  .then(data => {
    vm.posts = data.posts;
  });

  vm.clickFollow = (post) => {
    if (vm.user.follow === undefined) {
      vm.user.follow = [];
    }
    console.log(post);
    follow_set = new Set(vm.user.follow);
    follow_set.add(post.user._id);
    vm.user.follow = Array.from(follow_set);

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

  User
      .update({id: vm.user._id }, { user: vm.user })
      .$promise
      .then(data => {
      //  $state.go("postIndex", $stateParams);
      });

    console.log("clicking");
    console.log(vm.user.follow);

  Post
    .query($stateParams)
    .$promise
    .then(data => {
      vm.posts = data.posts;
    });
  };


  // function submitMessage(){
  //   Request.save({
  //     deed: vm.deed._id,
  //     messages: [{
  //       body: vm.message.body
  //     }]
  //   })
  //   .$promise
  //   .then(data => {
  //     $('#deedModal').modal('hide');
  //   })
  //   .catch(console.log);
  // }

}
