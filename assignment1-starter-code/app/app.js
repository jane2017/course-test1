angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {
    $scope.menu='';
    $scope.getDefaultVal=function($scope){
        return 'list comma separated dishes you usually have for lunch';
    };
    
}