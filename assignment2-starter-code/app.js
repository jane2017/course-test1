(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBNoughtController', AlreadyBNoughtController);
  
  AlreadyBNoughtController.$interpolate=['$scope'];
  ToBuyController.$interpolate=['$scope'];
  
  function AlreadyBNoughtController ($scope) {
    
  }
  
  function ToBuyController($scope) {
    
  }
    
})();
