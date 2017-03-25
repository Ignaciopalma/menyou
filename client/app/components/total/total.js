angular.module('totalmodule', ['services'])
  .controller('totalController', function($scope, menuitemsService){
    $scope.totalscope = menuitemsService.getTotalPrice();
  })
  .directive('totaldirective', function(){
    return {
      restrict: 'E',
      templateUrl: 'client/app/components/total/total.html',
      scope:{
        totaldirectivescope: '@'
      }
    }
  });
