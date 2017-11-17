function SuccessMessage() {
  return {
    replace: true,
    template: '<div>Hello from working side !</div>'
  }
}

angular
  .module('app')
  .directive('successMessage',SuccessMessage)