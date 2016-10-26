angular
  .module("graphite")
  .controller("MyPostsCtrl", MyPostsCtrl);

MyPostsCtrl.$inject = ["Post", "CurrentUserService"];
function MyPostsCtrl(Post, CurrentUserService){
  const vm          = this;
  vm.user           = CurrentUserService.getUser();

  Post.query_for_user({user: vm.user})
    .$promise
    .then(data => {
      vm.posts      = data.posts;
    });

}
