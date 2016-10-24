//do this because we want to affect the httpProvider
angular
  .module("graphite")
  //config has to be used because it is loaded right at the start
  .config(setUpInterceptor);

setUpInterceptor.$inject = ["$httpProvider"];

function setUpInterceptor($httpProvider){
  return $httpProvider.interceptors.push("AuthInterceptor");
}
