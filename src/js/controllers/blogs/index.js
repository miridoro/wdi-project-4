angular
  .module("graphite")
  .controller("BlogsIndexCtrl", BlogsIndexCtrl);

BlogsIndexCtrl.$inject = ["Blog", "$stateParams", "$state"];
function BlogsIndexCtrl(Blog, $stateParams, $state){
  const vm   = this;

  Blog.query(data => {
    vm.blogs = data.blogs;
    vm.blogs = data.blogs;
  });
}
