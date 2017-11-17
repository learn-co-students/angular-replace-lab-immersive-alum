function ErrorMessage() {
  return {
    replace: true,
    template: '<div>Hello :-) Everything is fixed</div>'
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage)