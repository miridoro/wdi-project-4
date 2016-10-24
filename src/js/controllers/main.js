angular
.module("graphite")
.controller("mainCtrl", mainCtrl);

mainCtrl.$inject = ["$rootScope", "CurrentUserService", "$state", "$stateParams"];
function mainCtrl($rootScope, CurrentUserService, $state, $stateParams) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  vm.logout = () => {
    event.preventDefault();
    CurrentUserService.clearUser();
  };

  $rootScope.$on("loggedIn", () => {
    vm.user = CurrentUserService.getUser();
    $state.go("home");
  });

  vm.selected = () => {
    $on.addClass('active');
  };

  $rootScope.$on("loggedOut", () => {
   vm.user = null;
   $state.go("home");
 });
}
