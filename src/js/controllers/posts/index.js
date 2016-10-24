angular
  .module("graphite")
  .controller("PostIndexCtrl", PostIndexCtrl);

PostIndexCtrl.$inject = ["Post", "$stateParams", "CurrentUserService"];
function PostIndexCtrl(Post, $stateParams, CurrentUserService){
  const vm            = this;
  vm.user             = CurrentUserService.getUser();
  // vm.submitMessage    = submitMessage;

  Post
    .query($stateParams)
    .$promise
    .then(data => {
      vm.posts = data.posts;
    });


    // function submitMessage(){
    //   Request.save({
    //     deed: vm.deed._id,
    //     messages: [{
    //       body: vm.message.body
    //     }]
    //   })
    //   .$promise
    //   .then(data => {
    //     $('#deedModal').modal('hide');
    //   })
    //   .catch(console.log);
    // }

}
