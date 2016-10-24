angular
  .module("graphite")
  .controller("PostEditCtrl", PostEditCtrl);

PostEditCtrl.$inject = ["Post", "$stateParams", "$state"];
function PostEditCtrl(Post, $stateParams, $state){
  const vm = this;

  Post.get($stateParams, data => {
    vm.post = data.post;
  });

  vm.submit = () => {
    console.log("vm.post", vm.post);
    Post
      .update($stateParams, { post: vm.post })
      .$promise
      .then(data => {
        $state.go("postShow", $stateParams);
      });
  };
}
