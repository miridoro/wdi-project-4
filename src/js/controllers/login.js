angular
  .module("graphite")
  .controller("loginCtrl", loginCtrl);

loginCtrl.$inject = ["User",  "CurrentUserService", "$window", "$state"];
function loginCtrl(User, CurrentUserService, $window, $state) {
  const vm = this;
  //this will send an http request to the backend and will look at req.body.email and req.body.password
  vm.login = () => {
    //pass the whole user in
    //not expecting req.body.user
    //user is built from html form
    User
    .login(vm.user)
    .$promise
    .then(data => {
      const user = data.user ? data.user : null;
      if (user) {
        user.id = user._id;
        CurrentUserService.saveUser(user);
      }
      console.log("login controller", data);
    });
  };
}
