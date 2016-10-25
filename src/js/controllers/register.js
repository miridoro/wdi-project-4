angular
  .module("graphite")
  .controller("registerCtrl", registerCtrl);

registerCtrl.$inject = ["User", "CurrentUserService"];
function registerCtrl(User, CurrentUserService){
  //vm is controller
  const vm = this;
  vm.register = () => {
    vm.user.follow = [];

    // need user key because in backend its req.body.user, so need to specify a key
    //post with key of user and value being model on the form
    User
      .register({ user: vm.user })
      .$promise
      .then(data => {
        const user = data.user ? data.user : null;
        if(user) {
          user.id = user._id;
          CurrentUserService.saveUser(user);

        //  currentUser = CurrentUserService.getUser();
        }
      });
  };
}
