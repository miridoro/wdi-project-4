angular
  .module("graphite")
  .controller("PostNewCtrl", PostNewCtrl);

PostNewCtrl.$inject = ["Post", "$state", "CurrentUserService"];
function PostNewCtrl(Post, $state, CurrentUserService){
  const vm          = this;
  vm.user           = CurrentUserService.getUser();
  vm.post = {};

  // Must be wrapped in a function so that it is not invoked immediately
  // $save is an instance method
  vm.submit = () => {
    console.log("submitting NEW POST");
    // assigning a value to the user associated to that post
    vm.post.user = vm.user.id;
    console.log("PostNewCtrl.post", vm.post);
    Post
      .save({ post: vm.post })
      .$promise
      .then(data => {
        console.log(data);
        $state.go("postShow", {id: data.post._id});
      });
  };

}
