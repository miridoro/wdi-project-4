angular
  .module("graphite")
  .controller("PostShowCtrl", PostShowCtrl);

PostShowCtrl.$inject = ["Post", "$stateParams", "$state"];
function PostShowCtrl(Post, $stateParams, $state){
  const vm           = this;

  Post.get($stateParams, data => {
    vm.post          = data.post;
  });

  vm.postDelete      = () => {
    Post
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("postIndex");
      });
  };
}
