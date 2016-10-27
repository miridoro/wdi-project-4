angular
  .module("graphite")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "$state", "Post"];
function usersShowCtrl(User, $stateParams, $state, Post){
  const vm   = this;

  User.get($stateParams, data => {
    vm.user = data.user;

    Post.query_for_user({user: vm.user})
      .$promise
      .then(data => {
        vm.posts = data.posts;
      });
  });

  vm.userDelete = () => {
    User
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("usersShowCtrl");
      });
  };
}
