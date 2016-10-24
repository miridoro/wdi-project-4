angular
  .module("graphite")
  .controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "$stateParams", "$state"];
function usersShowCtrl(User, $stateParams, $state){
  const vm   = this;


  User.get($stateParams, data => {
    vm.user = data.user;
  });



  vm.userDelete = () => {
    User
      .delete($stateParams)
      .$promise
      .then(data => {
        $state.go("usersShowCtrl");
      });
  };

  // Post.query_for_user($stateParams)
  //   .$promise
  //   .then(data => {
  //     vm.posts = data.posts;
  //   })
  //   .catch(console.log);
}
