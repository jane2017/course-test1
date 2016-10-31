(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBNoughtController', AlreadyBNoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  
  AlreadyBNoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBNoughtController (ShoppingListCheckOffService) {
    var service = ShoppingListCheckOffService;
    var boughtItem = function(index) {
      return service.boughtIrem(index);
    };
  }
  
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var service = ShoppingListCheckOffService;

    var getToBuyList = function() {
      return service.getToBuyList();
    }
  }
    

  
  ShoppingListCheckOffService.$inject=[];
  function ShoppingListCheckOffService() {
    var toBuy=['Buy 10 cookies','Buy 20 cookies'];
    var bought=[];
    
    var boughtItem = function (index) {
      bought.push(toBuy[index]);
      toBuy.remove(index);
    };
    
    var getToBuyList = function() {
      return toBuy;
    };
    
    var getBoughtList = function() {
      return bought;
    };
  }
    
})();
