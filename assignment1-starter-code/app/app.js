(function () {
    'use strickt';
    
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController ($scope, $filter) {
        $scope.menu='';
        $scope.checkResult='';
        $scope.getDefaultVal=function($scope){
            return 'list comma separated dishes you usually have for lunch';
        };
        console.log($scope.menu);
        
        $scope.checkIfTooMuch = function () {
            var menuItems = $scope.menu.split(',');
            if (menuItems.length <= 3) {
                $scope.checkResult = 'enjoy!';
            }
            else {
                $scope.checkResult = 'too much!';
            }
        };
            
    };
})();