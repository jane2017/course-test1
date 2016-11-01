(function() {
  'use strict';
    
 angular.module('ShoppingListCheckOff', [])
 .controller('ToBuyController', ToBuyController)
 .controller('AlreadyBoughtController', AlreadyBoughtController)
 .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  
  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var buyCtrl = this;
    var service = ShoppingListCheckOffService;
      
    buyCtrl.boughtItem = function(index) {
      return service.boughtItem(index);
    };
    buyCtrl.getToBuyList = function() {
      return service.getToBuyList();
    }
  }
  
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var boughtCtrl = this;
    var service = ShoppingListCheckOffService;

    boughtCtrl.getBoughtList = function() {
      return service.getBoughtList();
    }
  }

  function ShoppingListCheckOffService() {
    var service=this;
    var toBuy=[
        {name:"cookies", quantity: 10},
        {name:"candies", quantity: 20},
        {name:"apple", quantity: 5},
        {name:"banana", quantity: 8},
        {name:"ice cream", quantity: 1}
       ];
    var bought=[];
    
    service.boughtItem = function (index) {
      bought.push(toBuy[index]);
      toBuy.splice(index,1);
    };
    
    service.getToBuyList = function() {
      return toBuy;
    };
    
    service.getBoughtList = function() {
      return bought;
    };
  }
    
})();
