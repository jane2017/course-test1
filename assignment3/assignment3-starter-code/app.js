(function() {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);
  
  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '=',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'menu',
      bindToController: true
    };   
    return ddo;
  }

  MenuSearchService.$inject=['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    
    service.getMatchedMenuItems = function(searchItem) {
      return $http({
        method: "GET",
        url: ApiBasePath + "/categories.json"
      });
    };
    service.foundList = function(searchItem, list) {
      var foundList = [];
      
      for (var i = 0; i < list.length; i++) {
        var name = list[i].name;    
        if (name.toLowerCase().indexOf(searchItem) !== -1) {
          foundList.push(list[i]);
        }
      }
      return foundList;
    } 
  }
  
  NarrowItDownController.$infect = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;    
    menu.searchItem = '';
    menu.foundItems = [];
 
    menu.find = function () {
      console.log('in find():', menu.searchItem);
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchItem);
    
      promise.then(function (response) {
//        console.log('in controller:', response.data);
        menu.foundItems = MenuSearchService.foundList(menu.searchItem, response.data);
        console.log('in controller:', menu.foundItems);
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };
    
    menu.removeItem = function (itemIndex) {
      menu.foundItems.splice(itemIndex);
//      list.title = origTitle + " (" + list.items.length + " items )";
    };
  }   
})();